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
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 玩法主页_开启
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
	}, { // 2 选试炼式神_确定
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
	}, { // 3 阵容页_开启
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
	}, { // 4 局内地图（仅存在性判断）
		desc: [1280, 720,
			[
				[left, 60, 30, 0x1b2233],
				[left, 74, 136, 0x0e1223],
				[right, 1119, 617, 0x191f34],
				[right, 1166, 114, 0x0f1123],
			]
		]
	}, { // 5 神秘之屿_左上箭头
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
	}, { // 6 商店_离开
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
	}, { // 7 购买确认_确定
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
	}, { // 8 鏖战选内容_右侧
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
	}, { // 9 准备页_挑战
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
	}, { // 10 buff四选一_第四个
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
	}, { // 11 buff三选一_第一个
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
	}, { // 12 获得奖励_点空白
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
	}, { // 13 boss页_挑战
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
	}, { // 14 结算页_点空白继续
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
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const conf: any = thisScript.scheme.config['317'] || {};
		const g: any = thisScript.global;

		// 1 结算页
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
				const cur = g.d6jCurrentBegin ? Math.floor((now - g.d6jCurrentBegin) / 1000) : 0;
				const toLog = '六道觉已完成:' + times + '次, 本次:' + cur + '秒, 平均:' + costAvg + '秒, 总耗时:' + cost + '分';
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

		// 2 获得奖励
		if (thisScript.oper({
			id: 317,
			name: '六道觉_获得奖励',
			operator: [thisOperator[12]]
		})) {
			thisScript.regionClick([thisOperator[12].oper[0]]);
			return true;
		}

		// 3 buff四选一：未买轰雷则先找轰雷，否则选最后一个
		if (thisScript.oper({
			id: 317,
			name: '六道觉_buff四选一',
			operator: [thisOperator[10]]
		})) {
			if (!g.d6jBought && !g.d6jBuffTry) {
				let honglei: any = null;
				try {
					honglei = thisScript.findMultiColor('六道觉_六道轰雷');
				} catch (e1) {
					console.log('[317]轰雷色组未定义');
				}
				if (honglei) {
					console.log('[317]四选一发现轰雷');
					thisScript.regionClick([[honglei.x - 60, honglei.y - 40, honglei.x + 60, honglei.y + 60, 500]]);
					g.d6jBuffTry = 1;
					return true;
				}
			}
			thisScript.regionClick([thisOperator[10].oper[0]]);
			g.d6jBuffTry = 0;
			return true;
		}

		// 4 buff三选一
		if (thisScript.oper({
			id: 317,
			name: '六道觉_buff三选一',
			operator: [thisOperator[11]]
		})) {
			thisScript.regionClick([thisOperator[11].oper[0]]);
			return true;
		}

		// 5 购买确认
		if (thisScript.oper({
			id: 317,
			name: '六道觉_购买确认',
			operator: [thisOperator[7]]
		})) {
			thisScript.regionClick([thisOperator[7].oper[0]]);
			g.d6jBought = true;
			g.d6jBuffTry = 0;
			g.d6jShopTry = 0;
			thisScript.myToast('已购买六道轰雷');
			console.log('[317]已购买六道轰雷');
			return true;
		}

		// 6 商店
		if (thisScript.oper({
			id: 317,
			name: '六道觉_商店',
			operator: [thisOperator[6]]
		})) {
			if (!g.d6jBought && !g.d6jShopTry) {
				let honglei: any = null;
				try {
					honglei = thisScript.findMultiColor('六道觉_六道轰雷');
				} catch (e2) {
					console.log('[317]轰雷色组未定义');
				}
				if (honglei) {
					console.log('[317]商店发现轰雷');
					thisScript.regionClick([[honglei.x - 60, honglei.y - 40, honglei.x + 60, honglei.y + 60, 500]]);
					g.d6jShopTry = 1;
					return true;
				}
			}
			thisScript.regionClick([thisOperator[6].oper[0]]);
			g.d6jShopTry = 0;
			return true;
		}

		// 7 神秘之屿
		if (thisScript.oper({
			id: 317,
			name: '六道觉_神秘',
			operator: [thisOperator[5]]
		})) {
			thisScript.regionClick([thisOperator[5].oper[0]]);
			return true;
		}

		// 8 绽放之屿
		if (thisScript.oper({
			id: 317,
			name: '六道觉_绽放',
			operator: [thisOperator[16]]
		})) {
			thisScript.regionClick([thisOperator[16].oper[0]]);
			return true;
		}

		// 9 幸运宝匣
		if (thisScript.oper({
			id: 317,
			name: '六道觉_幸运宝匣',
			operator: [thisOperator[15]]
		})) {
			thisScript.regionClick([thisOperator[15].oper[0]]);
			return true;
		}

		// 10 boss页
		if (thisScript.oper({
			id: 317,
			name: '六道觉_boss',
			operator: [thisOperator[13]]
		})) {
			thisScript.regionClick([thisOperator[13].oper[0]]);
			console.log('[317]进入boss');
			return true;
		}

		// 11 准备页挑战
		if (thisScript.oper({
			id: 317,
			name: '六道觉_准备页',
			operator: [thisOperator[9]]
		})) {
			thisScript.regionClick([thisOperator[9].oper[0]]);
			return true;
		}

		// 12 鏖战选内容
		if (thisScript.oper({
			id: 317,
			name: '六道觉_鏖战选内容',
			operator: [thisOperator[8]]
		})) {
			thisScript.regionClick([thisOperator[8].oper[0]]);
			return true;
		}

		// 13 选试炼式神
		if (thisScript.oper({
			id: 317,
			name: '六道觉_选试炼式神',
			operator: [thisOperator[1]]
		})) {
			thisScript.regionClick([thisOperator[1].oper[0]]);
			sleep(300);
			thisScript.regionClick([thisOperator[2].oper[0]]);
			console.log('[317]已选第2张试炼式神');
			return true;
		}

		// 14 阵容页
		if (thisScript.oper({
			id: 317,
			name: '六道觉_阵容页',
			operator: [thisOperator[3]]
		})) {
			thisScript.regionClick([thisOperator[3].oper[0]]);
			return true;
		}

		// 15 玩法主页
		if (thisScript.oper({
			id: 317,
			name: '六道觉_玩法主页',
			operator: [thisOperator[0]]
		})) {
			const now2 = new Date().getTime();
			if (!g.d6jStartAt || now2 - g.d6jStartAt > 2000) {
				g.d6jStartAt = now2;
				g.d6jTimes = (g.d6jTimes || 0) + 1;
				g.d6jCurrentBegin = now2;
				if (!g.d6jBegin) {
					g.d6jBegin = now2;
				}
				g.d6jBought = false;
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



