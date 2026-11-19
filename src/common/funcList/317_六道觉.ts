import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func317 implements IFuncOrigin {
	id = 317;
	name = '六道觉';
	desc = '应排在[2退出结算]前';
	config = [{
		desc: '配置',
		config: [{
			name: 'pushResult',
			desc: '结束时使用ospPush推送结果',
			type: 'switch',
			default: false,
		}, {
			name: 'overTimes',
			desc: '挂机局数，完成后自动切换方案，0表示一直刷',
			type: 'integer',
			default: '0'
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '返回庭院',
		}, {
			name: 'debugColor',
			desc: '诊断：打印关键点实测颜色',
			type: 'switch',
			default: false,
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 玩法主页_开启按钮（每局起点与终点）
		desc: [1280, 720,
			[
				[right, 1145, 591, 0xf4e2ae],
				[right, 1162, 590, 0xf9e5af],
				[right, 1142, 624, 0xf9e6af],
				[right, 1195, 633, 0xfae4ae],
				[right, 1185, 651, 0xf9e2ad],
			]
		],
		oper: [
			[center, 1280, 720, 1128, 606, 1217, 664, 500],
		]
	}, { // 1 选试炼式神_第2张卡
		desc: [1280, 720,
			[
				[center, 640, 470, 0xd8c9a8],
				[center, 600, 480, 0xc7b48c],
				[center, 680, 480, 0xc7b48c],
				[center, 640, 500, 0xb59b6e],
			]
		],
		oper: [
			[center, 1280, 720, 560, 420, 720, 540, 500],
		]
	}, { // 2 选试炼式神_确定按钮
		desc: [1280, 720,
			[
				[right, 1148, 589, 0xfff5bb],
				[right, 1187, 604, 0xfff0b5],
				[right, 1196, 633, 0xfff3bd],
				[right, 1162, 664, 0xabc1d3],
				[right, 1180, 645, 0x3d4c62],
			]
		],
		oper: [
			[center, 1280, 720, 1145, 597, 1228, 662, 500],
		]
	}, { // 3 阵容页_开启按钮（左下「预设/更换/全部」为页面独有特征）
		desc: [1280, 720,
			[
				[left, 120, 596, 0x3a3f4d],
				[left, 200, 596, 0x3a3f4d],
				[left, 300, 596, 0x3a3f4d],
				[right, 1162, 590, 0xf9e5af],
				[right, 1142, 624, 0xf9e6af],
			]
		],
		oper: [
			[center, 1280, 720, 1128, 606, 1217, 664, 500],
		]
	}, { // 4 局内地图（仅用于存在性判断，无点击）
		desc: [1280, 720,
			[
				[left, 60, 30, 0x1b2233],
				[left, 74, 136, 0x0e1223],
				[right, 1119, 617, 0x191f34],
				[right, 1166, 114, 0x0f1123],
			]
		]
	},
];
	{ // 5 神秘之屿_左上箭头（坐标与椒图篇一致）
		desc: [1280, 720,
			[
				[center, 913, 678, 0x39607c],
				[center, 871, 230, 0x2ee1e5],
				[center, 947, 65, 0x1d212c],
				[left, 26, 39, 0xf3f4fb],
				[left, 265, 40, 0x593716],
			]
		],
		oper: [
			[center, 1280, 720, 17, 20, 52, 58, 500],
		]
	}, { // 6 商店（宁息之屿）_离开按钮
		desc: [1280, 720,
			[
				[center, 558, 628, 0xbdab86],
				[right, 1219, 198, 0xe5dfd5],
				[right, 1231, 618, 0xdbcaa8],
				[right, 1190, 624, 0xcebb96],
				[left, 120, 40, 0x593716],
			]
		],
		oper: [
			[center, 1280, 720, 1174, 588, 1241, 649, 500],
		]
	}, { // 7 购买确认弹窗_确定
		desc: [1280, 720,
			[
				[center, 640, 380, 0x2b3242],
				[center, 560, 430, 0x2b3242],
				[center, 720, 430, 0x2b3242],
				[center, 678, 430, 0xd8c9a8],
				[center, 830, 430, 0xc7b48c],
			]
		],
		oper: [
			[center, 1280, 720, 678, 409, 837, 453, 500],
		]
	}, { // 8 鏖战_选择挑战内容（右侧选项）
		desc: [1280, 720,
			[
				[center, 700, 300, 0x242a36],
				[center, 745, 293, 0x242934],
				[left, 73, 532, 0x676a83],
				[left, 121, 577, 0x636882],
			]
		],
		oper: [
			[center, 1280, 720, 760, 320, 1000, 520, 500],
		]
	}, { // 9 准备页_挑战按钮（鏖战/混沌共用）
		desc: [1280, 720,
			[
				[right, 1145, 591, 0xf4e2ae],
				[right, 1162, 590, 0xf9e5af],
				[right, 1142, 624, 0xf9e6af],
				[right, 1153, 645, 0x384960],
			]
		],
		oper: [
			[center, 1280, 720, 1120, 597, 1231, 682, 500],
		]
	},
];
	{ // 10 buff四选一_第四个「舞技强化」（兼轰雷购买位）
		desc: [1280, 720,
			[
				[center, 530, 599, 0x494949],
				[center, 807, 596, 0x494949],
				[left, 256, 597, 0x3f3f3f],
				[right, 1131, 601, 0x353535],
				[right, 1085, 227, 0xdbd5c7],
			]
		],
		oper: [
			[center, 1280, 720, 1034, 578, 1137, 621, 500],
		]
	}, { // 11 buff三选一_第一个「力量强化」
		desc: [1280, 720,
			[
				[center, 320, 596, 0x494949],
				[center, 640, 596, 0x494949],
				[center, 960, 596, 0x494949],
				[left, 256, 597, 0x3f3f3f],
			]
		],
		oper: [
			[center, 1280, 720, 268, 574, 374, 617, 500],
		]
	}, { // 12 获得奖励_点空白关闭
		desc: [1280, 720,
			[
				[center, 554, 142, 0xfede96],
				[center, 622, 143, 0xf7e691],
				[center, 583, 184, 0xf6e6b4],
				[center, 635, 192, 0xeacd7e],
			]
		],
		oper: [
			[center, 1280, 720, 700, 300, 1000, 450, 500],
		]
	}, { // 13 boss页（迦摩天）_挑战（左下奖励预览为页面独有特征）
		desc: [1280, 720,
			[
				[left, 120, 600, 0x2a3040],
				[left, 180, 600, 0x2a3040],
				[left, 240, 600, 0x2a3040],
				[right, 1162, 590, 0xf9e5af],
				[right, 1142, 624, 0xf9e6af],
			]
		],
		oper: [
			[center, 1280, 720, 1120, 597, 1231, 682, 500],
		]
	}, { // 14 结算页_点空白继续（左右两栏统计数据为独有特征）
		desc: [1280, 720,
			[
				[left, 300, 180, 0x1a2030],
				[left, 300, 220, 0x1a2030],
				[right, 980, 180, 0x1a2030],
				[right, 980, 220, 0x1a2030],
				[center, 640, 660, 0x2a3040],
			]
		],
		oper: [
			[center, 1280, 720, 700, 320, 1000, 460, 500],
		]
	}, { // 15 混沌_幸运宝匣_离开
		desc: [1280, 720,
			[
				[center, 640, 300, 0x2b3242],
				[center, 700, 300, 0x2b3242],
				[left, 120, 40, 0x593716],
				[right, 1162, 590, 0xd8c9a8],
			]
		],
		oper: [
			[center, 1280, 720, 1120, 597, 1231, 682, 500],
		]
	}, { // 16 绽放之屿_展示页_离开
		desc: [1280, 720,
			[
				[center, 640, 260, 0x2b3242],
				[center, 900, 260, 0x2b3242],
				[left, 300, 300, 0x2b3242],
				[right, 1162, 590, 0xd8c9a8],
			]
		],
		oper: [
			[center, 1280, 720, 1120, 597, 1231, 682, 500],
		]
	},
];
	// 在商店/buff列表里定位「六道·轰雷」：先试色组，色组没有时用限定区域的文字识别兜底
	findHonglei(thisScript: Script) {
		const p = this.tryFind(thisScript, '六道觉_六道轰雷');
		if (p) {
			console.log('[317]色组命中六道轰雷');
			return p;
		}
		try {
			const dw = thisScript.device.width;
			const dh = thisScript.device.height;
			// 只盯列表区域，不使用全屏搜字
			const region = [
				Math.round(dw * 0.15), Math.round(dh * 0.18),
				Math.round(dw * 0.85), Math.round(dh * 0.72)
			];
			const res = thisScript.findText('轰雷', 600, region, '包含');
			if (res && res.length) {
				console.log('[317]文字识别命中六道轰雷，坐标:' + res[0].x + ',' + res[0].y);
				return { x: res[0].x, y: res[0].y };
			}
		} catch (e) {
			console.log('[317]文字找轰雷失败:' + e);
		}
		return null;
	}

	// 诊断：扫商店列表 3×3 格中心颜色，供定色组用
	probeShopColors(thisScript: Script) {
		try {
			const bmp = thisScript.helperBridge.helper.GetBitmap();
			if (!bmp) return;
			const dw = bmp.getWidth();
			const dh = bmp.getHeight();
			const rx0 = dw * 0.18;
			const rx1 = dw * 0.80;
			const ry0 = dh * 0.22;
			const ry1 = dh * 0.68;
			const cw = (rx1 - rx0) / 3;
			const ch = (ry1 - ry0) / 3;
			let line = '[317探针]';
			for (let r = 0; r < 3; r++) {
				for (let c = 0; c < 3; c++) {
					const cx = Math.round(rx0 + cw * (c + 0.5));
					const cy = Math.round(ry0 + ch * (r + 0.5));
					const px = bmp.getPixel(cx, cy) & 0xffffff;
					line += ` (${r + 1},${c + 1}):#${px.toString(16).padStart(6, '0')}`;
				}
			}
			console.log(line);
			bmp.recycle();
		} catch (e) {
			console.log('[317探针]失败:' + e);
		}
	}

	// 安全找色：色组缺失或异常时返回 null，不影响主流程
	tryFind(thisScript: Script, key: string) {
		try {
			return thisScript.findMultiColor(key);
		} catch (e) {
			console.log('[317]找色失败:' + key + ' ' + e);
			return null;
		}
	}

	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const conf = thisScript.scheme.config['317'] || {};
		const g = thisScript.global;

		// 诊断模式：定期打印商店列表区域颜色，用于定色组
		if (conf.debugColor) {
			const nowProbe = new Date().getTime();
			if (!g.d6jProbeAt || nowProbe - g.d6jProbeAt > 1500) {
				g.d6jProbeAt = nowProbe;
				this.probeShopColors(thisScript);
			}
		}

		// ── 1 结算页：统计 + 局数管理，最后点空白继续
		if (thisScript.oper({
			id: 317,
			name: '六道觉_结算',
			operator: [thisOperator[14]]
		})) {
			const now = new Date().getTime();
			if (!g.d6jLastStat || now - g.d6jLastStat > 3000) {
				g.d6jLastStat = now;
				const times = g.d6jTimes || 0;
				const cost = g.d6jBegin ? ((now - g.d6jBegin) / 1000 / 60).toFixed(2) : '0';
				const costAvg = g.d6jBegin && times ? Math.floor((now - g.d6jBegin) / 1000 / times) : 0;
				const toLog = `六道觉已完成: ${times}次, 本次耗时: ${g.d6jCurrentBegin ? Math.floor((now - g.d6jCurrentBegin) / 1000) : 0}秒, 平均: ${costAvg}秒, 总耗时: ${cost}分`;
				thisScript.myToast(toLog);
				console.log('[317]' + toLog);
				if (conf.pushResult) {
					thisScript.doPush(thisScript, {
						text: toLog,
						before() {
							thisScript.myToast('正在上传数据');
						}
					});
					sleep(2000);
				}
				const overTimes = Math.floor(Number(conf.overTimes) || 0);
				if (overTimes && times >= overTimes) {
					thisScript.myToast('已够次数，切换方案');
					thisScript.rerun(conf.next_scheme);
					sleep(3000);
					return true;
				}
			}
			thisScript.regionClick([thisOperator[14].oper[0]]);
			return true;
		}

		// ── 2 获得奖励：点空白关闭
		if (thisScript.oper({
			id: 317,
			name: '六道觉_获得奖励',
			operator: [thisOperator[12]]
		})) {
			thisScript.regionClick([thisOperator[12].oper[0]]);
			return true;
		}

		// ── 3 buff四选一：优先买六道轰雷，否则选最后一个
		if (thisScript.oper({
			id: 317,
			name: '六道觉_buff四选一',
			operator: [thisOperator[10]]
		})) {
			if (!g.d6jHbBought && !g.d6jBuffTry) {
				const p = this.findHonglei(thisScript);
				if (p) {
					console.log('[317]四选一页发现六道轰雷，点它');
					thisScript.regionClick([[p.x - 60, p.y - 40, p.x + 60, p.y + 60, 500]]);
					g.d6jBuffTry = 1;
					return true;
				}
				console.log('[317]四选一页无六道轰雷，选最后一个');
			}
			thisScript.regionClick([thisOperator[10].oper[0]]);
			g.d6jBuffTry = 0;
			return true;
		}

		// ── 4 buff三选一：选第一个
		if (thisScript.oper({
			id: 317,
			name: '六道觉_buff三选一',
			operator: [thisOperator[11]]
		})) {
			thisScript.regionClick([thisOperator[11].oper[0]]);
			return true;
		}

		// ── 5 购买确认弹窗：确定
		if (thisScript.oper({
			id: 317,
			name: '六道觉_购买确认',
			operator: [thisOperator[7]]
		})) {
			thisScript.regionClick([thisOperator[7].oper[0]]);
			g.d6jHbBought = true;
			g.d6jBuffTry = 0;
			g.d6jShopTry = 0;
			thisScript.myToast('已购买六道轰雷');
			console.log('[317]已购买六道轰雷');
			return true;
		}

		// ── 6 商店：未买则找轰雷，其余情况直接离开
		if (thisScript.oper({
			id: 317,
			name: '六道觉_商店',
			operator: [thisOperator[6]]
		})) {
			if (!g.d6jHbBought && !g.d6jShopTry) {
				const p = this.findHonglei(thisScript);
				if (p) {
					console.log('[317]商店发现六道轰雷，点它');
					thisScript.regionClick([[p.x - 60, p.y - 40, p.x + 60, p.y + 60, 500]]);
					g.d6jShopTry = 1;
					return true;
				}
				console.log('[317]商店无六道轰雷');
			}
			thisScript.regionClick([thisOperator[6].oper[0]]);
			g.d6jShopTry = 0;
			return true;
		}

		// ── 7 神秘之屿：左上箭头退出
		if (thisScript.oper({
			id: 317,
			name: '六道觉_神秘之屿',
			operator: [thisOperator[5]]
		})) {
			thisScript.regionClick([thisOperator[5].oper[0]]);
			return true;
		}

		// ── 8 绽放之屿展示页：右下离开
		if (thisScript.oper({
			id: 317,
			name: '六道觉_绽放之屿',
			operator: [thisOperator[16]]
		})) {
			thisScript.regionClick([thisOperator[16].oper[0]]);
			return true;
		}

		// ── 9 混沌幸运宝匣：右下离开
		if (thisScript.oper({
			id: 317,
			name: '六道觉_幸运宝匣',
			operator: [thisOperator[15]]
		})) {
			thisScript.regionClick([thisOperator[15].oper[0]]);
			return true;
		}

		// ── 10 boss页（迦摩天）：挑战
		if (thisScript.oper({
			id: 317,
			name: '六道觉_boss挑战',
			operator: [thisOperator[13]]
		})) {
			thisScript.regionClick([thisOperator[13].oper[0]]);
			console.log('[317]进入boss战');
			return true;
		}

		// ── 11 准备页：挑战（鏖战/混沌共用）
		if (thisScript.oper({
			id: 317,
			name: '六道觉_准备页挑战',
			operator: [thisOperator[9]]
		})) {
			thisScript.regionClick([thisOperator[9].oper[0]]);
			return true;
		}

		// ── 12 鏖战选择挑战内容：固定点右侧
		if (thisScript.oper({
			id: 317,
			name: '六道觉_鏖战选内容',
			operator: [thisOperator[8]]
		})) {
			thisScript.regionClick([thisOperator[8].oper[0]]);
			return true;
		}

		// ── 13 选试炼式神：点第2张卡 → 确定（每局都出现）
		if (thisScript.oper({
			id: 317,
			name: '六道觉_选试炼式神',
			operator: [thisOperator[1]]
		})) {
			thisScript.regionClick([thisOperator[1].oper[0]]);
			sleep(300);
			thisScript.regionClick([thisOperator[2].oper[0]]);
			console.log('[317]已选第2张试炼式神并确定');
			return true;
		}

		// ── 14 阵容页：直接开启
		if (thisScript.oper({
			id: 317,
			name: '六道觉_阵容页',
			operator: [thisOperator[3]]
		})) {
			thisScript.regionClick([thisOperator[3].oper[0]]);
			return true;
		}

		// ── 15 玩法主页：开启，并作为新一轮的起点重置状态
		if (thisScript.oper({
			id: 317,
			name: '六道觉_玩法主页',
			operator: [thisOperator[0]]
		})) {
			const now = new Date().getTime();
			// 2秒内不重复计次，防止重复点击时多算
			if (!g.d6jStartAt || now - g.d6jStartAt > 2000) {
				g.d6jStartAt = now;
				g.d6jTimes = (g.d6jTimes || 0) + 1;
				g.d6jCurrentBegin = now;
				if (!g.d6jBegin) {
					g.d6jBegin = now;
				}
				g.d6jHbBought = false;
				g.d6jBuffTry = 0;
				g.d6jShopTry = 0;
				console.log('[317]开始第' + g.d6jTimes + '局');
			}
			thisScript.regionClick([thisOperator[0].oper[0]]);
			return true;
		}

		return false;
	}
}
