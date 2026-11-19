import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func322 implements IFuncOrigin {
	id = 322;
	name = '六道觉';
	desc: '应排在[2退出结算]前';
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
			desc: '打印取色日志（定判据用，稳定后可关）',
			type: 'switch',
			default: true,
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 玩法主页_开启
		desc: [
			1280, 720,
			[
				[right, 1180, 610, 0xc8e0ea],
				[right, 1140, 635, 0xd0e7ee],
				[right, 1180, 635, 0xc1dde6],
				[right, 1140, 660, 0xd1e4ed],
				[right, 1160, 660, 0xceedf2],
			]
		],
		oper: [
			[center, 1280, 720, 1128, 606, 1217, 664, 500],
		]
	}, { // 1 选试炼式神_第2张卡
		desc: [
			1280, 720,
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
	}, { // 2 选试炼式神_确定
		desc: [
			1280, 720,
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
	}, { // 3 阵容页_开启
		desc: [
			1280, 720,
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
	}, { // 4 局内地图
		desc: [
			1280, 720,
			[
				[left, 60, 30, 0x1b2233],
				[left, 74, 136, 0x0e1223],
				[right, 1119, 617, 0x191f34],
				[right, 1166, 114, 0x0f1123],
			]
		]
	}, { // 5 神秘之屿_左上箭头
		desc: [
			1280, 720,
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
	}, { // 6 商店_离开
		desc: [
			1280, 720,
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
	}, { // 7 购买确认_确定
		desc: [
			1280, 720,
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
	}, { // 8 鏖战选内容_右侧
		desc: [
			1280, 720,
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
	}, { // 9 准备页_挑战
		desc: [
			1280, 720,
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
	}, { // 10 buff四选一_第四个
		desc: [
			1280, 720,
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
	}, { // 11 buff三选一_第一个
		desc: [
			1280, 720,
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
	}, { // 12 获得奖励_点空白
		desc: [
			1280, 720,
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
	}, { // 13 boss页_挑战
		desc: [
			1280, 720,
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
	}, { // 14 结算页_点空白继续
		desc: [
			1280, 720,
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
		desc: [
			1280, 720,
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
		desc: [
			1280, 720,
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
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

		// 取色探针：仅在开启[打印取色日志]时执行，每5秒一次
		const cfg322 = thisScript.scheme.config['322'] || {};
		if (cfg322.debugColor) {
			const nowProbe = new Date().getTime();
			if (!thisScript.global.currentRunTimes['d6jProbe'] || nowProbe - thisScript.global.currentRunTimes['d6jProbe'] > 3000) {
				thisScript.global.currentRunTimes['d6jProbe'] = nowProbe;
				let bmp = null;
				try {
					bmp = thisScript.helperBridge.helper.GetBitmap();
					const dw = bmp.getWidth();
					const dh = bmp.getHeight();
					let line = '[322屏' + dw + 'x' + dh + ']';
					// 9列5行均匀采样，任一界面都能看出布局
					for (let ry = 0; ry < 5; ry++) {
						for (let rx = 0; rx < 9; rx++) {
							const sx = Math.min(dw - 1, Math.round(dw * (rx + 0.5) / 9));
							const sy = Math.min(dh - 1, Math.round(dh * (ry + 0.5) / 5));
							const px = bmp.getPixel(sx, sy) & 0xffffff;
							line += ' ' + (ry + 1) + '-' + (rx + 1) + ':#' + ('000000' + px.toString(16)).slice(-6);
						}
					}
					console.log(line);
				} catch (err) {
					console.log('[322屏]取图失败');
				} finally {
					try {
						if (bmp) {
							bmp.recycle();
						}
					} catch (err2) {
						// 忽略回收异常
					}
				}
			}
		}

		// 结算页：统计与局数管理
		if (thisScript.oper({
			id: 322,
			name: '六道觉_结算',
			operator: [thisOperator[14]]
		})) {
			const thisconf = cfg322;
			thisconf.overTimes = Math.floor(Number(thisconf.overTimes) || 0);
			const now = new Date().getTime();
			const currentCost = Math.floor((now - thisScript.global.d6dCurrentBegin) / 1000);
			const cost = ((now - thisScript.global.d6dBegin) / 1000 / 60).toFixed(2);
			const costAvg = Math.floor((now - thisScript.global.d6dBegin) / 1000 / (thisScript.global.times || 1));
			const toLog = '六道觉。通关次数: ' + (thisScript.global.times || 0) + '次, 本次通关时间: ' + currentCost + '秒, 平均通关时间: ' + costAvg + '秒, 总通关时间: ' + cost + '分';
			thisScript.myToast(toLog);
			console.log('[322]' + toLog);
			if (thisconf.pushResult) {
				thisScript.doPush(thisScript, {
					text: toLog,
					before() {
						thisScript.myToast('正在上传数据');
					}
				});
				sleep(2000);
			}
			if (thisconf.overTimes && thisScript.global.times >= thisconf.overTimes) {
				thisScript.rerun(thisconf.next_scheme);
				sleep(3000);
				return true;
			}
			thisScript.regionClick([thisOperator[14].oper[0]]);
			return true;
		}

		// 获得奖励：点空白关闭
		if (thisScript.oper({
			id: 322,
			name: '六道觉_获得奖励',
			operator: [thisOperator[12]]
		})) {
			thisScript.regionClick([thisOperator[12].oper[0]]);
			return true;
		}

		// buff四选一：未买轰雷时先找轰雷，否则选最后一个
		if (thisScript.oper({
			id: 322,
			name: '六道觉_buff四选一',
			operator: [thisOperator[10]]
		})) {
			if (!thisScript.global.d6RouFeng) {
				let point = null;
				try {
					point = thisScript.findMultiColor('六道觉_六道轰雷');
				} catch (err) {
					console.log('[322]轰雷色组未定义');
				}
				if (point) {
					console.log('[322]四选一发现轰雷');
					thisScript.regionClick([[point.x - 60, point.y - 40, point.x + 60, point.y + 60, 500]]);
					thisScript.global.d6Loop = 1;
					return true;
				}
			}
			thisScript.regionClick([thisOperator[10].oper[0]]);
			thisScript.global.d6Loop = 0;
			return true;
		}

		// buff三选一：选第一个
		if (thisScript.oper({
			id: 322,
			name: '六道觉_buff三选一',
			operator: [thisOperator[11]]
		})) {
			thisScript.regionClick([thisOperator[11].oper[0]]);
			return true;
		}

		// 购买确认：确定后置已买标记
		if (thisScript.oper({
			id: 322,
			name: '六道觉_购买确认',
			operator: [thisOperator[7]]
		})) {
			thisScript.regionClick([thisOperator[7].oper[0]]);
			thisScript.global.d6RouFeng = 1;
			thisScript.global.d6Loop = 0;
			thisScript.myToast('已购买六道轰雷');
			console.log('[322]已购买六道轰雷');
			return true;
		}

		// 商店：未买则找轰雷，否则直接离开
		if (thisScript.oper({
			id: 322,
			name: '六道觉_商店',
			operator: [thisOperator[6]]
		})) {
			if (!thisScript.global.d6RouFeng) {
				let point2 = null;
				try {
					point2 = thisScript.findMultiColor('六道觉_六道轰雷');
				} catch (err2) {
					console.log('[322]轰雷色组未定义');
				}
				if (point2) {
					console.log('[322]商店发现轰雷');
					thisScript.regionClick([[point2.x - 60, point2.y - 40, point2.x + 60, point2.y + 60, 500]]);
					thisScript.global.d6Loop = 1;
					return true;
				}
			}
			thisScript.regionClick([thisOperator[6].oper[0]]);
			thisScript.global.d6Loop = 0;
			return true;
		}

		// 神秘之屿：左上箭头退出
		if (thisScript.oper({
			id: 322,
			name: '六道觉_神秘',
			operator: [thisOperator[5]]
		})) {
			thisScript.regionClick([thisOperator[5].oper[0]]);
			return true;
		}

		// 绽放之屿：右下离开
		if (thisScript.oper({
			id: 322,
			name: '六道觉_绽放',
			operator: [thisOperator[16]]
		})) {
			thisScript.regionClick([thisOperator[16].oper[0]]);
			return true;
		}

		// 混沌幸运宝匣：右下离开
		if (thisScript.oper({
			id: 322,
			name: '六道觉_幸运宝匣',
			operator: [thisOperator[15]]
		})) {
			thisScript.regionClick([thisOperator[15].oper[0]]);
			return true;
		}

		// boss页：挑战
		if (thisScript.oper({
			id: 322,
			name: '六道觉_boss',
			operator: [thisOperator[13]]
		})) {
			thisScript.regionClick([thisOperator[13].oper[0]]);
			console.log('[322]进入boss战');
			return true;
		}

		// 准备页：挑战
		if (thisScript.oper({
			id: 322,
			name: '六道觉_准备页',
			operator: [thisOperator[9]]
		})) {
			thisScript.regionClick([thisOperator[9].oper[0]]);
			return true;
		}

		// 鏖战选择挑战内容：固定右侧
		if (thisScript.oper({
			id: 322,
			name: '六道觉_鏖战选内容',
			operator: [thisOperator[8]]
		})) {
			thisScript.regionClick([thisOperator[8].oper[0]]);
			return true;
		}

		// 选试炼式神：第2张卡后点确定
		if (thisScript.oper({
			id: 322,
			name: '六道觉_选试炼式神',
			operator: [thisOperator[1]]
		})) {
			thisScript.regionClick([thisOperator[1].oper[0]]);
			sleep(300);
			thisScript.regionClick([thisOperator[2].oper[0]]);
			console.log('[322]已选第2张试炼式神');
			return true;
		}

		// 阵容页：直接开启
		if (thisScript.oper({
			id: 322,
			name: '六道觉_阵容页',
			operator: [thisOperator[3]]
		})) {
			thisScript.regionClick([thisOperator[3].oper[0]]);
			return true;
		}

		// 玩法主页：开启并重置本局状态
		if (thisScript.oper({
			id: 322,
			name: '六道觉_玩法主页',
			operator: [thisOperator[0]]
		})) {
			thisScript.global.d6dCurrentBegin = new Date().getTime();
			if (!thisScript.global.d6dBegin) {
				thisScript.global.d6dBegin = new Date().getTime();
			}
			if (!thisScript.global.times) {
				thisScript.global.times = 0;
			}
			thisScript.global.times++;
			thisScript.global.d6RouFeng = 0;
			thisScript.global.d6Loop = 0;
			console.log('[322]开始第' + thisScript.global.times + '局');
			thisScript.regionClick([thisOperator[0].oper[0]]);
			return true;
		}

		return false;
	}
}
