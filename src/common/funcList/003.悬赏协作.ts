import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperator, IFuncOperatorOrigin } from '@/interface/IFunc';

// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

// 1280x720 基准分辨率
const BASE_W = 1280;
const BASE_H = 720;

// 节流：两次取图至少间隔 300ms。这类协助是抢手速的，判定必须快。
let lastCheckTime = 0;

// 奖励行扫描范围（比例）。奖励图标左右位置不固定，所以整行扫；
// 纵向只取奖励所在的一条带，把范围限死，不碰弹窗其它区域。
const REWARD_X0 = 0.35;
const REWARD_X1 = 0.68;
const REWARD_Y0 = 0.62;
const REWARD_Y1 = 0.78;

// 「接受」「拒绝」按钮中心点（1280x720 基准，取自实测日志的按钮文字框）
const BTN_ACCEPT_X = 957;
const BTN_ACCEPT_Y = 497;
const BTN_REJECT_X = 959;
const BTN_REJECT_Y = 586;

/**
 * 悬赏协作（纯像素比色版）
 *
 * 判据全部走颜色，不再调用文字识别：
 *  - 日志干净，不会再被聊天横幅里出现的字眼干扰；
 *  - 省掉一次全屏识别，抢协助更快。
 *
 * 实测确认的规律：奖励行里那个「碎片」图标，
 * 勾协是「金色底」，金币 / 体力 / 宠物粮食类都是「紫底」。
 */
export class Func003 implements IFuncOrigin {
	id = 3;
	name = '悬赏协作';
	config = [{
		desc: '',
		config: [{
			name: 'type',
			desc: '操作',
			type: 'list',
			data: ['关闭', '接受', '拒绝'],
			default: '关闭',
		}, {
			name: 'switch',
			desc: '仅接受勾协',
			type: 'switch',
			default: false,
		}]
	}, {
		desc: '邀约协作（活动）',
		config: [{
			name: 'yytype',
			desc: '操作',
			type: 'list',
			data: ['关闭', '接受', '拒绝'],
			default: '关闭'
		}]
	}];
	// 算子表：desc 只能写「数组」或「不写」。
	// 写成字符串会被框架拿去 multiDetectColors.ts 里查表，查不到会直接抛错。
	// 第 0 项只用于提供「关闭按钮」的兜底坐标，不做比色匹配，因此不写 desc。
	operator: IFuncOperatorOrigin[] = [{
		// 0 悬赏协作弹窗 关闭兜底（仅提供坐标，不做比色）
		oper: [
			[center, 1280, 720, 791, 81, 816, 109, 1000],
			[center, 1280, 720, 1209, 66, 1260, 113, 1000],
		]
	}, { // 1 阴阳寮成就页等杂弹窗，点空白处清掉
		desc: [
			1280, 720,
			[
				[right, 1055, 230, 0x997242],
				[right, 1072, 462, 0xecd7b9],
				[center, 347, 490, 0xb8a281],
				[center, 357, 240, 0xf5ebd5],
				[center, 830, 150, 0xefe4d0],
				[center, 697, 172, 0x805054],
				[center, 827, 230, 0xb58a55],
			]
		],
		oper: [
			[center, 1280, 720, 357, 535, 1045, 662, 1200]
		]
	}, { // 2 呱太弹窗
		desc: [1280, 720,
			[
				[center, 568, 225, 0xb7b052],
				[center, 733, 228, 0x4d4da2],
				[center, 756, 236, 0xc0c45e],
				[center, 879, 323, 0x690707],
				[center, 690, 422, 0xd3ae72]
			]
		],
		oper: [
			[center, 1280, 720, 517, 521, 841, 689, 1000],
			[center, 1280, 720, 509, 650, 912, 716, 1000]
		]
	}, { // 3 其他设备登录(被顶掉)
		desc: [
			1280, 720,
			[
				[center, 437, 258, 0x624333],
				[center, 841, 257, 0x664535],
				[center, 457, 289, 0xcbb59c],
				[center, 819, 428, 0xcbb59c],
				[center, 484, 329, 0x584f45],
				[center, 733, 322, 0x2b2723],
				[center, 581, 379, 0x963a2d],
				[center, 700, 428, 0x973c2e],
			]
		],
		oper: [
			[center, 1280, 720, 584, 382, 700, 429, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['3'];
		if (!thisconf) {
			return false;
		}
		// 顺手清掉挡路的杂弹窗（阴阳寮成就页、呱太弹窗）
		if (thisScript.oper({
			id: 3,
			name: '清除垃圾弹窗',
			operator: [thisOperator[1], thisOperator[2]]
		})) {
			return true;
		}
		// 被其它设备顶号：停止脚本并推送
		if (thisScript.oper({
			id: 3,
			name: '意外情况,停止脚本',
			operator: [thisOperator[3]]
		})) {
			thisScript.doPush(thisScript, { text: '意外情况已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(3000);
			return true;
		}

		// 节流：两次取图至少间隔 300ms
		const nowTime = new Date().getTime();
		if (nowTime - lastCheckTime < 300) {
			return false;
		}
		lastCheckTime = nowTime;

		if (!thisScript.helperBridge || !thisScript.helperBridge.helper) {
			return false;
		}

		// ——— 纯像素比色：不调 OCR，日志干净、也不会被聊天横幅干扰 ———
		let bmp: any = null;
		let dw = BASE_W;
		let dh = BASE_H;
		// 金色按奖励栏「左格 / 右格」分开统计
		let goldL = 0;
		let goldR = 0;
		let purple = 0;
		let dark = 0;
		// 按钮诊断用：绿对勾 / 橙红叉 的像素数、质心与包围盒
		let gN = 0;
		let gSx = 0;
		let gSy = 0;
		let gMinX = 0;
		let gMinY = 0;
		let gMaxX = 0;
		let gMaxY = 0;
		let rN = 0;
		let rSx = 0;
		let rSy = 0;
		let rMinX = 0;
		let rMinY = 0;
		let rMaxX = 0;
		let rMaxY = 0;
		try {
			bmp = thisScript.helperBridge.helper.GetBitmap();
			if (!bmp) {
				return false;
			}
			dw = bmp.getWidth();
			dh = bmp.getHeight();
			if (dw <= 0 || dh <= 0) {
				bmp.recycle();
				return false;
			}
			const x0 = Math.round(dw * REWARD_X0);
			const x1 = Math.round(dw * REWARD_X1);
			const y0 = Math.round(dh * REWARD_Y0);
			const y1 = Math.round(dh * REWARD_Y1);
			// 奖励栏中分线，用来区分左、右两格
			const mid = (x0 + x1) / 2;
			for (let y = y0; y <= y1; y += 3) {
				for (let x = x0; x <= x1; x += 3) {
					const c = bmp.getPixel(x, y);
					const r = (c >> 16) & 0xff;
					const g = (c >> 8) & 0xff;
					const b = c & 0xff;
					// 金色（含金底）：按左右两格分开记
					if (r > 130 && g > 70 && b < 100 && r - b > 50 && r - g < 130) {
						if (x < mid) {
							goldL++;
						} else {
							goldR++;
						}
					}
					// 紫色底
					else if (b > 95 && b - r > 20 && r < 150 && g < 130) {
						purple++;
					}
					// 深色（弹窗暗部）
					else if (r < 75 && g < 75 && b < 75) {
						dark++;
					}
				}
			}
			// ——— 按钮诊断 ———
			// 弹窗右下方：「接受」是深棕底 + 浅绿对勾，「拒绝」是深棕底 + 橙红叉。
			// 这里只把这两种颜色的像素位置报出来，用来把按钮坐标一次量准。
			const tx0 = Math.round(dw * 0.66);
			const tx1 = Math.round(dw * 0.86);
			const ty0 = Math.round(dh * 0.58);
			const ty1 = Math.round(dh * 0.94);
			gMinX = 99999;
			gMinY = 99999;
			gMaxX = 0;
			gMaxY = 0;
			rMinX = 99999;
			rMinY = 99999;
			rMaxX = 0;
			rMaxY = 0;
			for (let y = ty0; y <= ty1; y += 2) {
				for (let x = tx0; x <= tx1; x += 2) {
					const c = bmp.getPixel(x, y);
					const r = (c >> 16) & 0xff;
					const g = (c >> 8) & 0xff;
					const b = c & 0xff;
					// 浅绿（接受按钮的对勾）
					if (g - r > 15 && g - b > 15 && g > 110) {
						gN++;
						gSx += x;
						gSy += y;
						if (x < gMinX) { gMinX = x; }
						if (x > gMaxX) { gMaxX = x; }
						if (y < gMinY) { gMinY = y; }
						if (y > gMaxY) { gMaxY = y; }
					}
					// 橙红（拒绝按钮的叉号）
					else if (r - g > 40 && r - b > 60 && r > 130) {
						rN++;
						rSx += x;
						rSy += y;
						if (x < rMinX) { rMinX = x; }
						if (x > rMaxX) { rMaxX = x; }
						if (y < rMinY) { rMinY = y; }
						if (y > rMaxY) { rMaxY = y; }
					}
				}
			}
		} catch (e) {
			console.error($debug.getStackTrace(e));
			if (bmp) {
				bmp.recycle();
			}
			return false;
		}
		if (bmp) {
			bmp.recycle();
		}

		const gold = goldL + goldR;

		// 奖励行里没成片出现彩色图标 → 当前不是协作邀请弹窗，不动作
		if (gold + purple < 150) {
			return false;
		}

		// 实测四种协助的奖励栏摆位：
		//   勾协     左格 = 金底碎片，右格 = 紫底勾玉
		//   体力协   左格 = 紫底碎片，右格 = 紫底寿司
		//   金币协   左格 = 蓝底碎片，右格 = 金底铜钱
		//   宠物粮食 左格 = 紫底食盆，右格 = 金底铜钱
		// 金色本身不稀缺（金币类的金色甚至更多），
		// 只有勾协才有的特征是「金底出现在左格」。
		const isGou = gold >= 90 && goldL > goldR;
		const toBx = (v: number) => Math.round(v * BASE_W / dw);
		const toBy = (v: number) => Math.round(v * BASE_H / dh);
		console.log('悬赏协作: 左金=' + goldL + ' 右金=' + goldR + ' 紫=' + purple + ' 深=' + dark + ' → ' + (isGou ? '勾协' : '非勾协'));
		console.log('按钮定位: 绿 n=' + gN + (gN > 0 ? ' 中心(' + toBx(gSx / gN) + ',' + toBy(gSy / gN) + ') 框[' + toBx(gMinX) + ',' + toBy(gMinY) + '-' + toBx(gMaxX) + ',' + toBy(gMaxY) + ']' : '')
			+ ' | 橙红 n=' + rN + (rN > 0 ? ' 中心(' + toBx(rSx / rN) + ',' + toBy(rSy / rN) + ') 框[' + toBx(rMinX) + ',' + toBy(rMinY) + '-' + toBx(rMaxX) + ',' + toBy(rMaxY) + ']' : '')
			+ ' (1280x720基准)');

		const clickAt = (nx: number, ny: number) => {
			const px = Math.round(nx * dw / BASE_W);
			const py = Math.round(ny * dh / BASE_H);
			thisScript.helperBridge.regionClick([[px, py, px, py, 800]], 0, 0);
		};

		const type = (thisconf.type || '关闭') as string;

		// 仅接受勾协：不是勾协就关掉
		if (thisconf.switch && type === '接受') {
			if (isGou) {
				clickAt(BTN_ACCEPT_X, BTN_ACCEPT_Y);
				thisScript.doPush(thisScript, { text: '✅ 已接受到勾协（勾玉协作）！勾玉是游戏内重要资源，请留意。', before() { thisScript.myToast('接到勾协！正在推送提醒'); } });
				return true;
			}
			clickAt(BTN_REJECT_X, BTN_REJECT_Y);
			return true;
		}

		if (type === '接受') {
			clickAt(BTN_ACCEPT_X, BTN_ACCEPT_Y);
			return true;
		}
		// 拒绝 / 关闭
		clickAt(BTN_REJECT_X, BTN_REJECT_Y);
		return true;
	}
}

export default new Func003();
