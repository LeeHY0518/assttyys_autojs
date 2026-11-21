const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const REPO_DIR = __dirname;
const OWNER = 'LeeHY0518';
const REPO = 'assttyys_autojs';
const BRANCH = 'master';
const API = 'https://api.github.com';

// 所有输出同时写入 推送记录.txt，方便事后查看
const LOG_FILE = path.join(REPO_DIR, '推送记录.txt');
const _log = console.log;
const _err = console.error;
function writeLog(line) {
  try { fs.appendFileSync(LOG_FILE, line + '\r\n', 'utf8'); } catch {}
}
console.log = (...a) => { const s = a.join(' '); _log(s); writeLog(s); };
console.error = (...a) => { const s = a.join(' '); _err(s); writeLog(s); };
try { fs.writeFileSync(LOG_FILE, ''); } catch {}

function getToken() {
  const out = execFileSync('git', ['credential', 'fill'], {
    input: 'protocol=https\nhost=github.com\n\n', encoding: 'utf8',
    cwd: REPO_DIR, stdio: ['pipe', 'pipe', 'ignore'],
  });
  const m = out.match(/^password=(.+)$/m);
  if (!m) throw new Error('找不到 GitHub 凭证，请确认已登录过 GitHub');
  return m[1].trim();
}

// 按 git blob 规则计算磁盘真实内容的 sha，避免 CRLF 换行转换导致的误判
function gitBlobSha(file) {
  const buf = fs.readFileSync(file);
  const hash = crypto.createHash('sha1');
  hash.update(`blob ${buf.length}\0`);
  hash.update(buf);
  return hash.digest('hex');
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let TOKEN;

async function api(url, options = {}, retries = 8) {
  const headers = Object.assign({
    'Authorization': `Bearer ${TOKEN}`, 'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'workbuddy-push',
  }, options.headers || {});
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url, Object.assign({}, options, { headers }));
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = text; }
    if (res.ok) return data;
    if ((res.status === 403 || res.status === 429) && attempt < retries) {
      const wait = (attempt + 1) * 15000;
      console.log(`  遇到限速，等待 ${wait / 1000} 秒...`);
      await sleep(wait);
      continue;
    }
    throw new Error(`${res.status} ${typeof data === 'string' ? data.slice(0, 200) : (data.message || '')}`);
  }
}

(async () => {
  console.log('============================================');
  console.log('  开始推送：' + new Date().toLocaleString('zh-CN'));
  console.log('============================================');
  TOKEN = getToken();
  console.log(`目标仓库: ${OWNER}/${REPO} (${BRANCH})`);

  // 读取本地 git 跟踪文件（路径）；core.quotepath=false 避免中文路径转义
  const ls = execFileSync('git', ['-c', 'core.quotepath=false', 'ls-files'], {
    cwd: REPO_DIR, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024,
  });
  const tracked = ls.trim().split('\n').filter(Boolean);
  // 加上未跟踪但非忽略的新文件
  let untracked = [];
  try {
    const ut = execFileSync('git', ['-c', 'core.quotepath=false', 'ls-files', '--others', '--exclude-standard', '-z'], {
      cwd: REPO_DIR, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024,
    });
    untracked = ut.split('\0').filter(Boolean).filter(f => !f.startsWith('.git/'));
  } catch {}

  // 日志文件只留在本地，不参与推送对比
  const SKIP = new Set(['推送记录.txt']);
  const allLocal = [...new Set([...tracked, ...untracked])].filter(p => !SKIP.has(path.basename(p)));
  console.log(`本地文件: ${allLocal.length}（跟踪 ${tracked.length}，新文件 ${untracked.length}）`);

  // 远程 master 树
  const commits = await api(`${API}/repos/${OWNER}/${REPO}/commits?sha=${BRANCH}&per_page=1`);
  const headSha = commits[0].sha;
  const treeSha = commits[0].commit.tree.sha;
  const tree = await api(`${API}/repos/${OWNER}/${REPO}/git/trees/${treeSha}?recursive=1`);
  const remote = new Map();
  for (const item of tree.tree) if (item.type === 'blob') remote.set(item.path, item.sha);

  // 差异：用磁盘真实内容的 blob sha 对比
  const shaCache = new Map();
  for (const p of allLocal) shaCache.set(p, gitBlobSha(path.join(REPO_DIR, p)));
  const modified = [], added = [], deleted = [];
  for (const p of allLocal) {
    if (!remote.has(p)) added.push(p);
    else if (remote.get(p) !== shaCache.get(p)) modified.push(p);
  }
  for (const p of remote.keys()) if (!allLocal.includes(p)) deleted.push(p);

  if (modified.length === 0 && added.length === 0 && deleted.length === 0) {
    console.log('没有改动，无需推送。');
    console.log('============================================');
    return;
  }
  console.log(`改动: 覆盖 ${modified.length} / 新增 ${added.length} / 删除 ${deleted.length}`);
  if (modified.length) console.log('  覆盖: ' + modified.slice(0, 15).join(', ') + (modified.length > 15 ? ' ...' : ''));
  if (added.length) console.log('  新增: ' + added.slice(0, 15).join(', ') + (added.length > 15 ? ' ...' : ''));
  if (deleted.length) console.log('  删除: ' + deleted.slice(0, 15).join(', ') + (deleted.length > 15 ? ' ...' : ''));

  // 上传变化的 blob
  const needUpload = [...modified, ...added];
  for (let i = 0; i < needUpload.length; i++) {
    const p = needUpload[i];
    const content = fs.readFileSync(path.join(REPO_DIR, p)).toString('base64');
    const blob = await api(`${API}/repos/${OWNER}/${REPO}/git/blobs`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, encoding: 'base64' }),
    });
    shaCache.set(p, blob.sha);
    if ((i + 1) % 20 === 0) console.log(`  上传进度 ${i + 1}/${needUpload.length}`);
    await sleep(300);
  }

  // 构造完整 tree（删除项不放入 entries，即实现删除）
  const entries = [...shaCache].map(([p, sha]) => ({ path: p, mode: '100644', type: 'blob', sha }));
  const newTree = await api(`${API}/repos/${OWNER}/${REPO}/git/trees`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tree: entries }),
  });

  const msg = process.argv[2] || '从 VS Code 推送更新';
  const commit = await api(`${API}/repos/${OWNER}/${REPO}/git/commits`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: msg, tree: newTree.sha, parents: [headSha] }),
  });

  await api(`${API}/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
    method: 'PATCH', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sha: commit.sha, force: false }),
  });

  console.log(`\n推送完成！commit ${commit.sha.slice(0, 7)}`);
  console.log('GitHub 将自动编译部署，约 1-3 分钟后可在壳里重新加载。');
  console.log('============================================');
})().catch((e) => {
  console.error('推送失败:', e.message);
  console.error('============================================');
  process.exit(1);
});
