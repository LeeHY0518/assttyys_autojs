import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperator, IFuncOperatorOrigin } from '@/interface/IFunc';
import { mlkitOcr } from '@/system/Ocr/MlkitOcr';

// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

// 节流用：上次 OCR 的时间戳
let lastOcrTime = 0;

/**
 * 悬赏协作（OCR 版）
 * 原实现用「多点比色」识别弹窗 + 1280x720 固定坐标点按钮，
 * 游戏改版后 UI 布局变化，比色特征与坐标双双失效，无法接受/拒绝/关闭。
 * 本版改为：全屏 OCR → 用标题文字确认弹窗 → 找「接受/拒绝/关闭」文字 → 点其矩形区域。
 * 按钮文字基本不随 UI 改版而变，抗变化能力更强。
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
		// 节流：两次 OCR 至少间隔 300ms。这类协助是抢手速的，判定必须快。
		const nowTime = new Date().getTime();
		if (nowTime - lastOcrTime < 300) {
			return false;
		}
		// 优先用设置里选定的 OCR 引擎；没有配置时退回 MLKit，避免功能静默失效
		let detector = thisScript.getOcrDetector();
		if (!detector) {
			try {
				detector = mlkitOcr.prepare();
			} catch (e) {
				console.error($debug.getStackTrace(e));
			}
		}
		if (!detector) {
			return false;
		}
		lastOcrTime = nowTime;

		let bmp: any = null;
		let ocrResult: any[] = [];
		try {
			bmp = thisScript.helperBridge.helper.GetBitmap();
			ocrResult = detector.loadImage(bmp);
		} catch (e) {
			console.error($debug.getStackTrace(e));
		}
		if (bmp) {
			bmp.recycle();
		}
		if (!ocrResult || ocrResult.length < 1) {
			return false;
		}

		// 先确认弹窗确实存在，避免误点其它界面上的同名按钮。
		// 注意：OCR 常把「赏」认成繁体「賞」，还会把「封印」拆开或认错，
		// 所以标题判据放宽——只认「封」这个在多次识别里都稳定的字；
		// 「邀约协作」同理，只认「邀」。
		let dialogType = '';
		for (let i = 0; i < ocrResult.length; i++) {
			const label = ocrResult[i].label.replace(/\s/g, '');
			if (label.indexOf('封') > -1) {
				dialogType = '悬赏协作';
				break;
			}
			if (label.indexOf('邀') > -1) {
				dialogType = '邀约协作';
				break;
			}
		}
		if (!dialogType) {
			return false;
		}

		const findLabel = (names: string[]) => {
			for (let i = 0; i < ocrResult.length; i++) {
				const label = ocrResult[i].label.replace(/\s/g, '');
				for (let j = 0; j < names.length; j++) {
					if (label.indexOf(names[j]) > -1) {
						return ocrResult[i];
					}
				}
			}
			return null;
		};

		// 标题判据放宽后可能误命中其它界面，再要求弹窗上确实认出了按钮文字才算数
		if (dialogType === '悬赏协作' && !findLabel(['接受', '拒绝', '取消', '关闭', '拒'])) {
			return false;
		}

		// OCR 返回的是当前设备的真实坐标，直接交给点击器，不能再做开发分辨率换算
		const clickLabel = (item: any) => {
			const p = item.points;
			thisScript.helperBridge.regionClick(
				[[Math.round(p[0].x), Math.round(p[0].y), Math.round(p[2].x), Math.round(p[2].y), 800]],
				0,
				0
			);
		};

		// 关闭：先找文字，找不到再用兜底坐标
		const doClose = () => {
			// 这类邀约弹窗通常只有「接受 / 拒绝」两个按钮，点「拒绝」等同于关掉邀请
			const btn = findLabel(['关闭', '取消', '拒绝', '拒', '绝']);
			if (btn) {
				clickLabel(btn);
				return true;
			}
			return thisScript.oper({
				id: 3,
				name: '悬赏协作_关闭_坐标兜底',
				operator: [{ oper: [thisOperator[0].oper[0]] }]
			}, 0);
		};

		if (dialogType === '邀约协作') {
			const yytype = (thisconf.yytype || '关闭') as string;
			if (yytype === '关闭') {
				return doClose();
			}
			const btn = findLabel([yytype]);
			if (btn) {
				clickLabel(btn);
				return true;
			}
			return false;
		}

		const type = (thisconf.type || '关闭') as string;

		// 「仅接受勾协」：勾玉/碎片/体力三种图标底色都带紫，靠颜色分不出。
		// 实测发现：勾协的奖励行里带一个「金色底」的碎片图标，其它邀请则是紫底。
		// 金色图标左右位置不固定，因此整条奖励行都扫。
		const findGouyuIcon = () => {
			if (!thisScript.helperBridge || !thisScript.helperBridge.helper) {
				return false;
			}
			let bmp: any = null;
			try {
				bmp = thisScript.helperBridge.helper.GetBitmap();
				if (!bmp) {
					return false;
				}
				const dw = bmp.getWidth();
				const dh = bmp.getHeight();
				const x0 = Math.round(dw * 0.41);
				const x1 = Math.round(dw * 0.62);
				const y0 = Math.round(dh * 0.62);
				const y1 = Math.round(dh * 0.78);
				let gold = 0;
				let gold2 = 0;
				let purple = 0;
				let dark = 0;
				for (let y = y0; y <= y1; y += 4) {
					for (let x = x0; x <= x1; x += 4) {
						const c = bmp.getPixel(x, y);
						const r = (c >> 16) & 0xff;
						const g = (c >> 8) & 0xff;
						const b = c & 0xff;
						if (r > 130 && g > 70 && b < 100 && r - b > 50 && r - g < 130) {
							gold++;
						}
						if (r > 165 && g > 140 && b < 160 && r - b > 45 && g - b > 20) {
							gold2++;
						}
						if (b > 95 && b - r > 20 && r < 150 && g < 130) {
							purple++;
						}
						if (r < 75 && g < 75 && b < 75) {
							dark++;
						}
					}
				}
				// 诊断：把奖励整片区域分成上下两带、每带 20 列，逐列算平均色。
				// 目的：直接看出「碎片(深紫)」「勾玉(红)」「金币(金)」这几个图标各在哪一列、什么颜色。
				const bx0 = Math.round(dw * 0.35);
				const bx1 = Math.round(dw * 0.68);
				const colN = 20;
				const bandRanges = [[0.46, 0.68], [0.68, 0.86]];
				let bandLog = '';
				for (let bi = 0; bi < bandRanges.length; bi++) {
					const by0 = Math.round(dh * bandRanges[bi][0]);
					const by1 = Math.round(dh * bandRanges[bi][1]);
					const rArr: number[] = [];
					const gArr: number[] = [];
					const bArr: number[] = [];
					for (let j = 0; j < colN; j++) {
						const cx0 = Math.round(bx0 + (bx1 - bx0) * j / colN);
						const cx1 = Math.round(bx0 + (bx1 - bx0) * (j + 1) / colN);
						let sr = 0;
						let sg = 0;
						let sb = 0;
						let n = 0;
						for (let y = by0; y < by1; y += 3) {
							for (let x = cx0; x < cx1; x += 3) {
								const c2 = bmp.getPixel(x, y);
								sr += (c2 >> 16) & 0xff;
								sg += (c2 >> 8) & 0xff;
								sb += c2 & 0xff;
								n++;
							}
						}
						if (n < 1) {
							n = 1;
						}
						rArr.push(Math.round(sr / n));
						gArr.push(Math.round(sg / n));
						bArr.push(Math.round(sb / n));
					}
					bandLog += '带' + bi + 'R:' + rArr.join(' ') + '\n';
					bandLog += '带' + bi + 'G:' + gArr.join(' ') + '\n';
					bandLog += '带' + bi + 'B:' + bArr.join(' ') + '\n';
				}
				bmp.recycle();
				console.log('位图=' + dw + 'x' + dh);
				console.log('金色=' + gold + ' 深金=' + gold2 + ' 紫=' + purple + ' 深色=' + dark);
				console.log('区域x:' + bx0 + '-' + bx1 + '\n' + bandLog);
				return gold >= 90;
			} catch (e) {
				if (bmp) {
					bmp.recycle();
				}
				console.log('勾玉检测失败');
				return false;
			}
		};
		if (thisconf.switch && type === '接受') {
			if (findGouyuIcon()) {
				const btn = findLabel(['接受']);
				if (btn) {
					clickLabel(btn);
					thisScript.doPush(thisScript, { text: '✅ 已接受到勾协（勾玉协作）！勾玉是游戏内重要资源，请留意。', before() { thisScript.myToast('接到勾协！正在推送提醒'); } });
					return true;
				}
			}
			return doClose();
		}

		// 接受 / 拒绝
		if (type === '接受' || type === '拒绝') {
			const btn = findLabel([type]);
			if (btn) {
				clickLabel(btn);
				return true;
			}
			return false;
		}

		// 关闭
		return doClose();
	}
}

export default new Func003();
