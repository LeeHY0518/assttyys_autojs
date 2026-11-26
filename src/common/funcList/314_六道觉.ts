import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func314 implements IFuncOrigin {
	id = 314;
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
			name: 'onlyDouble',
			desc: '只打双倍（双倍次数用完自动停止）',
			type: 'switch',
			default: true,
		}, {
			name: 'hongLeiLimit',
			desc: '本局最多获得几个六道·轰雷(1-5)',
			type: 'list',
			data: ['1', '2', '3', '4', '5'],
			default: '2',
		}, {
			name: 'jiDaoLimit',
			desc: '本局最多获得几个极道轰炸(1-5)',
			type: 'list',
			data: ['1', '2', '3', '4', '5'],
			default: '2',
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
	operator: IFuncOperatorOrigin[] = [{ // 0 事件 唤息亮
		desc: [
			1280, 720,
			[
				[left, 22, 41, 0xf1f3f8],
				[left, 125, 52, 0xf8f3e0],
				[left, 249, 39, 0x573514],
				[left, 66, 657, 0x185c8e],
				[right, 1156, 608, 0xf6eec8],
				[right, 1174, 641, 0xf8f3c9],
			]
		],
	}, { // 1 事件 唤息暗
		desc: [
			1280, 720,
			[
				[left, 22, 41, 0xf1f3f8],
				[left, 125, 52, 0xf8f3e0],
				[left, 249, 39, 0x573514],
				[left, 66, 657, 0x185c8e],
				[right, 1147, 647, 0xebebeb],
				[right, 1140, 606, 0xe8e8e8],
			]
		]
	}, { // 2 已适配66 鏖战
		// 2026-11-24 重取9点：避开选怪卡片文字区(旧6/7点取在怪名上,换怪即失效)。
		// 原始PNG偏差全0；两张不同怪的同页截图(MuMu-20261122-115515-161 / 20261124-122913-921)均9/9命中。
		desc: [
			1280, 720,
			[
				[left, 20, 41, 0xf3f5f9],
				[left, 121, 41, 0xf8f3e0],
				[left, 139, 42, 0xf8f3e0],
				[left, 151, 35, 0xf8f3e0],
				[left, 160, 53, 0xf8f3e0],
				[left, 136, 51, 0xf8f3e0],
				[left, 253, 39, 0x573514],
				[left, 203, 586, 0x4f7492],
				[left, 240, 627, 0x4c7590],
			]
		],
		oper: [
			[center, 1280, 720, 800, 230, 930, 380, 500], // 右怪 武士之灵
		]
	}, { // 3 buff抉择_四选一(固定选第4个舞技强化)
		desc: [
			1280, 720,
			[
				[left, 265, 571, 0x363636],
				[center, 531, 570, 0x414141],
				[right, 805, 571, 0x444444],
				[right, 1125, 575, 0x414141],
				[right, 1100, 199, 0xfffcd6], // 舞技强化金色图标,仅用于区分本页,不判断有无
			]
		],
		oper: [
			[center, 1280, 720, 1018, 553, 1148, 591, 500], // 第4个 选择(舞技强化)
		]
	}, { // 4 已适配66 混沌_宝箱
		desc: [
			1280, 720,
			[
				[right, 1162, 637, 0x53606d],
				[right, 1177, 642, 0xc7b38e],
				[right, 1194, 633, 0xc4b08b],
				[right, 1217, 615, 0x36404a],
				[right, 1202, 634, 0xd7c7a2],
				[right, 1197, 606, 0x2d3643],
			]
		],
		oper: [
			[center, 1280, 720, 1160, 609, 1227, 659, 500],
		]
	}, { // 5 混沌_怪物（精英怪页）
		// 2026-11-25 用户重取7点：前5点=左上"混沌之屿"标题笔画,后2点=场景。点击框保持原样。
		// 怪物页7/7；宝箱页(op33)只5/7(后2点场景偏差48/76)→两页可区分,不会互相误判(需全中)。
		desc: [
			1280, 720,
			[
				[left, 21, 41, 0xf4f5f9],
				[left, 114, 28, 0xf8f3e0],
				[left, 121, 43, 0xf8f3e0],
				[left, 148, 30, 0xf8f3e0],
				[left, 146, 43, 0xf8f3e0],
				[center, 504, 453, 0x8dabc7],
				[right, 866, 517, 0x87abcf],
			]
		],
		oper: [
			[center, 1280, 720, 680, 292, 801, 379, 0],
			// [center, 1280, 720, 1120, 597, 1231, 682, 500], // 挑战
		]
	}, { // 6 商店(宁息之屿)：右侧商店tab亮笔画+底部备战,两图100%一致/地图页0命中
		desc: [
			1280, 720,
			[
				[right, 1222, 111, 0xbcdfe3], // 商店tab亮笔画
				[right, 1232, 150, 0xd1e7d1], // 商店tab亮笔画2
				[left, 30, 640, 0x528ec3], // 备战按钮蓝
				[left, 45, 660, 0xf3f7cf], // 备战按钮亮
				[left, 90, 670, 0x64bfd6], // 当前装配文字
			]
		],
		oper: [
			[center, 1280, 720, 678, 409, 837, 453, 500], // 确认购买
			[center, 1280, 720, 1174, 588, 1241, 649, 500], // 退出商店
		]
	}, { // 7 已适配66 星之屿
		desc: [
			1280, 720,
			[
				[left, 73, 532, 0x676a83],
				[left, 121, 577, 0x636882],
				[left, 121, 31, 0xf8f3e0],
				[left, 116, 41, 0xf8f3e0],
				[left, 117, 52, 0xf8f3e0],
				[left, 122, 52, 0xf8f3e0],
				[center, 748, 253, 0x7b3a3a],
				[center, 422, 257, 0x222731],
			]
		],
		oper: [
			[center, 1280, 720, 456, 274, 566, 347, 0],
			// [center, 1280, 720, 1120, 597, 1231, 682, 500], // 挑战
		]
	}, { // 8 开始_开启
		desc: [
			1280, 720,
			[
				[right, 1137, 595, 0x212121],
				[right, 1155, 591, 0x262626],
				[right, 1134, 621, 0x242424],
				[right, 1157, 618, 0x272727],
				[right, 1157, 638, 0x2b2b2b],
				[right, 1212, 671, 0x242424],
				[right, 1208, 645, 0x292929],
			]
		],
		oper: [
			[center, 1280, 720, 1128, 606, 1217, 664, 500],
		]
	}, { // 9 开始_确定
		desc: [
			1280, 720,
			[
				[right, 1128, 577, 0x2c2c2c],
				[right, 1136, 609, 0x292929],
				[right, 1177, 595, 0x2f2f2f],
				[right, 1206, 645, 0x282828],
				[left, 191, 550, 0xfb8aa8],
			]
		],
		oper: [
			[center, 1280, 720, 1145, 597, 1228, 662, 500],
		]
	}, { // 10 已适配66 开始_开启_60体
		desc: [
			1280, 720,
			[
				[right, 1147, 577, 0x242424],
				[right, 1168, 574, 0x252525],
				[right, 1147, 602, 0x272727],
				[right, 1183, 599, 0x313131],
				[right, 1169, 629, 0x2c2c2c],
				[right, 1212, 619, 0x222222],
				[right, 1205, 654, 0x2f2f2f],
			]
		],
		oper: [
			[center, 1280, 720, 1142, 595, 1230, 659, 500],
		]
	}, { // 11 开始_选择柔风
		desc: [
			1280, 720,
			[
				[left, 289, 205, 0x89e192],
				[left, 300, 201, 0xffffff],
				[center, 328, 211, 0x00add7],
				[center, 345, 225, 0x34d8dc],
				[center, 321, 248, 0xa25287],
				[left, 284, 592, 0x5a5a5a],
				[center, 355, 596, 0x484848],
			]
		],
		oper: [
			[center, 1280, 720, 268, 574, 374, 617, 500],
		]
	}, { // 12 确认奖励
		desc: [1280, 720,
			[
				[center, 554, 142, 0xfede96],
				[center, 622, 143, 0xf7e691],
				[center, 745, 181, 0xffeeaa],
				[center, 583, 184, 0xf6e6b4],
				[center, 635, 192, 0xeacd7e],
			]
		],
		oper: [
			[right, 1280, 720, 913, 129, 1245, 648, 500],
		]
	}, { // 13 已适配66 神秘_转换
		desc: [
			1280, 720,
			[
				[left, 20, 40, 0xf0f2f7],
				[right, 908, 62, 0x3b4d7e],
				[right, 927, 80, 0x465783],
				[right, 867, 210, 0xe0b5be],
				[right, 905, 676, 0x39607b],
				[right, 1132, 659, 0x271b10],
			]
		],
		oper: [
			[center, 1280, 720, 17, 20, 52, 58, 500],
		]
	}, { // 14 神秘之屿(背包仿造页)：识别到直接点左上角返回退出
		desc: [
			1280, 720,
			[
				[left, 22, 42, 0xf0f2f7],
				[left, 109, 36, 0xf8f3e0],
				[left, 107, 51, 0xe7e4d4],
				[left, 122, 37, 0xf8f3e0],
				[left, 140, 34, 0xf8f3e0],
				[left, 159, 48, 0xf8f3e0],
				[right, 1157, 627, 0x968e62],
				[right, 1184, 623, 0x96895b],
				[right, 1219, 657, 0x968656],
			]
		],
		oper: [
			[center, 1280, 720, 17, 20, 52, 58, 500], // 左上角返回
		]
	}, { // 15 结束(结算页)：用户新取9点(右下"分享"按钮米色笔画)，原始PNG偏差全0，跨图唯一(仅结算页9/9)
		// 旧7点全失效(偏差112~148，那里已变成"分享"深色按钮)→结算页识别不到。
		// oper点击框[517,657,1007,710]指向底部"点击空白处继续"，保持不变。
		desc: [
			1280, 720,
			[
				[right, 1168, 629, 0xcdb995],
				[right, 1158, 643, 0xd7cbb3],
				[right, 1181, 622, 0xc5b088],
				[right, 1195, 639, 0xd3c5aa],
				[right, 1186, 645, 0xdbccb5],
				[right, 1179, 660, 0xe7ded4],
				[right, 1208, 655, 0xe3ddd1],
				[right, 1208, 679, 0xf5f0db],
				[right, 1206, 690, 0xf1f1e2],
			]
		],
		oper: [
			[center, 1280, 720, 517, 657, 1007, 710, 500],
		]
	}, { // 16 boss_挑战(恋色障道等boss页)：用户新取12点,原始PNG偏差全0,34图唯一(仅本图12/12)
		// 前5点=左上boss名"恋色障道"米色笔画;中3点=场景色;后4点=右下"挑战"按钮暗色边框。
		// 旧6点全失效(偏差63~216)→boss页识别不到→不点挑战。oper点击框[1120,586,1229,678]覆盖挑战按钮中心(1160,625),不变。
		desc: [
			1280, 720,
			[
				[left, 114, 28, 0xf8f3e0],
				[left, 117, 52, 0xf8f3e0],
				[left, 145, 34, 0xf8f3e0],
				[left, 182, 27, 0xf8f3e0],
				[left, 215, 47, 0xf8f3e0],
				[left, 174, 146, 0xceddbb],
				[left, 161, 346, 0xaadddb],
				[left, 242, 476, 0xdcf3d9],
				[right, 1115, 598, 0x272727],
				[right, 1158, 638, 0x313131],
				[right, 1184, 640, 0x303030],
				[right, 1221, 677, 0x202020],
			]
		],
		oper: [
			[center, 1280, 720, 1120, 586, 1229, 678, 500],
		]
	}, { // 17 已适配66 boss_跳过
		desc: [
			1280, 720,
			[
				[right, 1204, 28, 0xdae3ef],
				[right, 1209, 27, 0x274685],
				[right, 1214, 27, 0xccccdd],
				[right, 1204, 32, 0xd2e5f5],
				[right, 1209, 38, 0x204891],
				[right, 1220, 34, 0xbed2ec],
			]
		],
		oper: [
			[center, 1280, 720, 1130, 19, 1232, 43, 500],
		]
	}, { // 18 使用极的双倍
		// 2026-11-24 重取8点(截图 MuMu-20261124-130236-931)：偏差全0，跨45张截图仅2张同款弹窗命中。
		// 前5点=弹窗特征(op19共用)，后3点(左侧大字区域)=用来判断"使用"。
		desc: [
			1280, 720,
			[
				[center, 489, 446, 0xdf6851],
				[right, 682, 447, 0xf3b25e],
				[right, 662, 376, 0xf7e628],
				[center, 420, 298, 0x18253d],
				[right, 844, 299, 0x3f5e85],
				[left, 250, 230, 0x575435],
				[left, 146, 126, 0x5d4f2e],
				[left, 131, 239, 0x565233],
			]
		],
		oper: [
			[center, 1280, 720, 671, 419, 794, 467, 1000],
		]
	}, { // 19 双倍 点取消
		desc: [
			1280, 720,
			[
				[center, 489, 446, 0xdf6851],
				[right, 682, 447, 0xf3b25e],
				[right, 662, 376, 0xf7e628],
				[center, 420, 298, 0x18253d],
				[right, 844, 299, 0x3f5e85],
			]
		],
		oper: [
			[center, 1280, 720, 491, 419, 615, 471, 1000],
		]
	}, { // 20 万象赐福取消购买
		desc: [
			1280, 720,
			[
				[center, 430, 111, 0x94561d],
				[center, 809, 113, 0x91461f],
				[center, 659, 276, 0xe29701],
				[center, 666, 276, 0xdf8f01],
				[center, 577, 560, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 939, 148, 1179, 281, 1000],
		]
	}, { // 21 挑战
		desc: [
			1280, 720,
			[
				[left, 23, 41, 0xf2f4f8],
				[left, 70, 659, 0x195f93],
				[right, 1167, 627, 0x2e2e2e],
				[right, 1200, 593, 0xafb8cc],
				[right, 1160, 674, 0xcaca81],
			]
		],
		oper: [
			[right, 1280, 720, 1120, 597, 1231, 682, 500], // 挑战
		]
	}, {
		// 22 战斗失败选择放弃前行
		desc: [
			1280, 720,
			[
				[center, 449, 224, 0x724d3c],
				[center, 442, 425, 0xdf6851],
				[center, 691, 415, 0xf3b25e],
				[center, 871, 223, 0x634334],
				[center, 836, 406, 0x983b2e],
				[center, 431, 371, 0xcbb59c],
				[center, 846, 379, 0xcbb59c],
			]
		],
		oper: [
			[center, 1280, 720, 673, 406, 844, 458, 1000],
		]
	}, {
		// 23 战斗失败确定放弃
		desc: [
			1280, 720,
			[
				[center, 442, 222, 0x644434],
				[center, 819, 222, 0x6a4737],
				[center, 475, 352, 0xcbb59c],
				[center, 692, 417, 0xf3b25e],
				[center, 575, 408, 0xdf6851],
				[center, 800, 397, 0x993b2f],
				[center, 795, 346, 0xcbb59c],
				[center, 478, 364, 0xcbb59c],
			]
		],
		oper: [
			[center, 1280, 720, 680, 397, 802, 448, 1000],
		]
	}, { // 24 进入月之海
		desc: [1280, 720,
			[
				[left, 74, 136, 0x0e1223],
				[right, 1119, 617, 0x191f34],
				[right, 1117, 593, 0x191f35],
				[right, 1166, 114, 0x0f1123],
				[left, 26, 40, 0xf0f1fa],
			]
		],
		oper: [
			[center, 1280, 720, 354, 173, 371, 256, 1000],
		]
	}, { // 25 进入六道之门
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 936, 649, 977, 683, 1000],
		]
	}, { // 26 继续
		desc: [1280, 720,
			[
				[right, 1125, 601, 0xfff3bd],
				[right, 1142, 608, 0xffefad],
				[right, 1147, 658, 0x8ba1b4],
				[right, 1165, 632, 0x425163],
				[right, 1175, 647, 0xffefb5],
				[right, 1197, 651, 0xffe9ad],
			]
		],
		oper: [
			[center, 1280, 720, 1133, 601, 1207, 653, 1000],
		]
	}, { // 27 双倍次数为0
		desc: [1280, 720,
			[
				[right, 1192, 33, 0xd4d2c1],
				[right, 1198, 34, 0xd4d3c2],
				[right, 1190, 40, 0xdfdecd],
				[right, 1199, 40, 0xdfdecd],
				[right, 1195, 40, 0x0e0e0f],
				[right, 1191, 46, 0xd3d1c1],
				[right, 1198, 46, 0xd4d2c1],
			]
		]
	}, {
		desc: [1280, 720,
			[
				[right, 865, 122, 0x85babc],
				[right, 727, 79, 0xd1dadb],
				[left, 267, 370, 0x3c3821],
				[right, 669, 389, 0xac6462],
				[right, 1045, 378, 0x762a06],
				[right, 814, 512, 0x2d334a],
				[right, 1039, 359, 0x6f1d03],
			]
		],
		oper: [
			[center, 1280, 720, 1001, 608, 1091, 633, 500],
		]
	}, {
		desc: [1280, 720,
			[
				[center, 321, 187, 0xe0b5be],
				[right, 648, 201, 0x3175dc],
				[right, 931, 218, 0xfff8ce],
				[left, 130, 147, 0xffffff],
				[center, 329, 209, 0xce7e93],
				[center, 357, 572, 0x474747],
				[left, 253, 527, 0x3c434e],
			]
		],
		oper: [
			[center, 1280, 720, 245, 552, 410, 594, 500],
		]
	}, { // 30 强化选择_三卡页(固定选第1个 力量强化)
		desc: [1280, 720,
			[
				[left, 290, 327, 0xe4ba56],
				[center, 640, 327, 0xe1b755],
				[right, 995, 327, 0xe5ba5b],
				[left, 291, 509, 0x123763],
				[center, 647, 509, 0x143664],
			]
		],
		oper: [
			[center, 1280, 720, 220, 495, 365, 532, 500], // 力量强化 前排蓝色"选择"按钮
		]
	}, { // 31 强化选择_两卡页(力量满10级消失,固定选第1个 技巧强化)
		desc: [1280, 720,
			[
				[center, 473, 267, 0x0f2461],
				[right, 817, 276, 0x851841],
				[center, 501, 521, 0x0f3564],
				[right, 857, 520, 0x113765],
				[center, 466, 283, 0xffffff],
			]
		],
		oper: [
			[center, 1280, 720, 395, 495, 545, 532, 500], // 技巧强化 前排蓝色"选择"按钮
		]
	}, { // 32 绽放之屿_内部页(式神页,点右下角离开)
		desc: [1280, 720,
			[
				[left, 21, 41, 0xf4f5f9],
				[left, 121, 43, 0xf8f3e0],
				[left, 145, 40, 0xf8f3e0],
				[left, 43, 300, 0x783a3a],
				[center, 441, 296, 0x8f4545],
				[right, 846, 311, 0x763a3a],
				[center, 335, 606, 0x758da8],
				[right, 646, 621, 0x748aa2],
			]
		],
		oper: [
			[center, 1280, 720, 1155, 635, 1211, 687, 1000], // 右下角"离开"
		]
	}, { // 33 混沌之屿_宝箱页(幸运宝匣)：点右下角离开(不要点宝箱)
		// 2026-11-25 用户重取9点：前6点=左上"混沌之屿"标题笔画,中2点=场景,末1点=右下"离开"按钮米色。
		// 宝箱页9/9；怪物页(op5)只6/9(后3点场景/离开按钮不同)→两页可区分,不会互相误判(需全中)。
		desc: [
			1280, 720,
			[
				[left, 21, 41, 0xf4f5f9],
				[left, 114, 28, 0xf8f3e0],
				[left, 121, 36, 0xf8f3e0],
				[left, 125, 53, 0xf8f3e0],
				[left, 147, 32, 0xf8f3e0],
				[left, 146, 44, 0xf8f3e0],
				[center, 530, 462, 0x6685af],
				[right, 929, 500, 0x6a85a7],
				[right, 1201, 657, 0xecdab9],
			]
		],
		oper: [
			[center, 1280, 720, 1155, 635, 1211, 687, 1000], // 右下角"离开"
		]
	}, { // 34 意外弹出的"暂时离开/放弃试炼"确认弹窗(点太快误点左上退出导致)：点弹窗外空白处关闭
		// 用户取9点原始PNG偏差全0,跨34图唯一(仅本弹窗9/9)。模态框会遮挡其它页面,处理分支放operatorFunc最前。
		desc: [
			1280, 720,
			[
				[center, 535, 351, 0xe2faff],
				[center, 553, 341, 0xcbfbff],
				[right, 746, 357, 0xba4a4a],
				[right, 728, 336, 0xafffff],
				[right, 730, 320, 0xb0a273],
				[center, 535, 399, 0xdde2eb],
				[center, 577, 401, 0xe1e7ef],
				[right, 707, 405, 0xf0f5fb],
				[right, 751, 399, 0xdee4ec],
			]
		],
		oper: [
			[center, 1280, 720, 447, 535, 830, 665, 1000], // 点弹窗外下方空白处关闭(不点"暂时离开/放弃试炼")
		]
	}, { // 35 四选一buff页_刷新按钮_亮(可点击)：10点原始PNG偏差全0,亮图10/10/暗图0/10
		desc: [
			1280, 720,
			[
				[right, 1205, 658, 0xeffaff],
				[right, 1199, 648, 0xdcfbff],
				[right, 1203, 633, 0x9af4f7],
				[right, 1216, 634, 0xa6fcfe],
				[right, 1225, 646, 0xd2fbfe],
				[right, 1221, 659, 0xe4ffff],
				[right, 1204, 623, 0xb2a779],
				[right, 1185, 649, 0x2b4564],
				[right, 1241, 652, 0x2f4867],
				[right, 1158, 695, 0xd3bd91],
			]
		],
		oper: [
			[right, 1280, 720, 1174, 616, 1231, 673, 500], // 右下角圆形刷新图标
		]
	}, { // 36 四选一buff页_"万相铃不足"提示(没钱时刷新按钮仍亮但点了不刷新,会死循环刷新)
		// 18点取自 MuMu-20261123-165534-923.png 提示文字,原始PNG偏差全0,跨39图唯一(本图18/18,其余最高1/18)。
		// 识别到就不再点刷新,直接选第4个舞技强化。
		desc: [
			1280, 720,
			[
				[center, 574, 232, 0xe5e5e4],
				[center, 583, 232, 0xf0f0f0],
				[center, 593, 231, 0xd9d9d9],
				[center, 574, 247, 0xfaf9f9],
				[center, 589, 238, 0xffffff],
				[center, 586, 248, 0xfdfdfd],
				[center, 606, 236, 0xf7f7f7],
				[center, 606, 246, 0xe7e7e7],
				[center, 613, 237, 0xeaeaea],
				[center, 621, 247, 0xfafafa],
				[center, 633, 240, 0xfbfbfb],
				[right, 646, 243, 0xfdfdfd],
				[right, 644, 249, 0xe7e7e7],
				[right, 669, 232, 0xe3e4e4],
				[right, 667, 247, 0xffffff],
				[right, 699, 231, 0xf8f8f8],
				[right, 695, 240, 0xf9f9f9],
				[right, 702, 249, 0xffffff],
			]
		],
	}, { // 37 六道之门·孔雀国世界横幅(识别到直接点横幅进入该世界/副本)
		// 5点取自 MuMu-20261124-121006-207.png(孔雀国界面), 原始PNG偏差全0;
		// 跨43张1280x720截图唯一: 本图5/5, 其余最高2/5(容差±8)。
		// 原 [30]"进入月之海"那5点在孔雀国背景上不命中(背景不同), 故单独新增一条, 两个世界都能进。
		// 点击框即"孔雀国"竖排文字区域(342,155)-(383,281)。
		desc: [
			1280, 720,
			[
				[left, 22, 42, 0xf0f2f7],
				[center, 388, 609, 0x586473],
				[right, 1140, 106, 0x121f27],
				[right, 1151, 147, 0x121f27],
				[right, 986, 653, 0x38465c],
			]
		],
		oper: [
			[center, 1280, 720, 342, 155, 383, 281, 1000], // 孔雀国竖排横幅
		]
	}, { // 38 商店确认购买：用户2026-11-26要求直接复用椒图op23(desc+确认购买/退出商店按钮框)
		desc: [1280, 720,
			[
				[left, 115, 37, 0x66645c],
				[left, 212, 30, 0x66645c],
				[center, 463, 428, 0xdf6851],
				[center, 700, 436, 0xf3b25e],
				[right, 1200, 166, 0x56534f],
				[right, 1202, 310, 0x11141c],
			]
		],
		oper: [
			[center, 1280, 720, 678, 409, 837, 453, 500], // 确认购买
			[center, 1280, 720, 1174, 588, 1241, 649, 500], // 退出商店
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

		// 右下角"离开/退出"点击冷却(2秒)：这类按钮点下去后画面要淡出切换，
		// 但它的指纹在淡出的几帧里仍可能命中；如果这时再点一次，画面已回到地图，
		// 而右下角同一个位置就是"唤息"按钮 → 会误点唤息(用户实机反馈)。
		// 因此点过一次后在冷却期内不再点，冷却期内命中也直接跳过。
		const leaveCooling = new Date().getTime() - (thisScript.global.d6LeaveClickAt || 0) < 2000;

		// 两种目标buff的上限来自前端配置(1-5，默认2)，容错：读不到/非法值一律按2处理并夹在1-5内。
		// 计数来源：① 首次三选一固定选极道轰炸(d6JiDaoCnt=1)；② 四选一页点目标buff"选择"+1(不刷新,仅限当前页)；③ 商店购买确认后按种类+1。
		const buffConf = thisScript.scheme.config['314'] || {};
		const clampLimit = (v: any) => {
			const raw = Number(v);
			return Math.min(5, Math.max(1, isNaN(raw) || raw <= 0 ? 2 : Math.floor(raw)));
		};
		const hongLeiLimit = clampLimit(buffConf.hongLeiLimit);
		const jiDaoLimit = clampLimit(buffConf.jiDaoLimit);
		const hongLeiFull = thisScript.global.d6HongLeiCnt >= hongLeiLimit;
		const jiDaoFull = thisScript.global.d6JiDaoCnt >= jiDaoLimit;

		// 意外弹出的"暂时离开/放弃试炼"确认弹窗(点太快误点左上退出导致)：
		// 这是模态框，会遮挡其它页面，必须放在最前面优先处理，点弹窗外空白处关闭，不点两个按钮。
		if (thisScript.oper({
			id: 314,
			name: '六道觉_意外确认弹窗_关闭',
			operator: [{ desc: thisOperator[34].desc }] // 只取desc识别：传完整operator会被oper()自动点击，再手动点就成了双击
		})) {
			thisScript.regionClick([thisOperator[34].oper[0]]);
			log('意外弹窗：点弹窗外空白处关闭');
			return true;
		}

		// 混沌之屿宝箱页(幸运宝匣)：必须放在最前面。此页左上标题与式神页相似,
		// 容易被当成式神页误点宝箱；识别到直接点右下角"离开"回地图。
		if (thisScript.oper({
			id: 314,
			name: '六道觉_混沌之屿_宝箱页_离开',
			// 只取desc：传完整operator会被oper()自动点击一次，再regionClick就成了双击，
			// 第二击落到已切回地图的同一位置=误点"唤息"(用户实机反馈)。
			operator: [{ desc: thisOperator[33].desc }]
		})) {
			if (leaveCooling) return true; // 刚点过离开，画面切换中，别再点右下角(否则误点唤息)
			thisScript.regionClick([thisOperator[33].oper[0]]);
			thisScript.global.d6LeaveClickAt = new Date().getTime();
			log('混沌之屿宝箱页：点右下角离开');
			sleep(1200); // 等画面切回地图，避免下一帧还在过渡又点一次
			return true;
		}

		// 绽放之屿内部页(式神页)：识别到直接点右下角"离开"，回到地图。
		// 必须放在"点岛指纹"之前，否则内部页的伞面/白笔画可能误命中点岛指纹
		if (thisScript.oper({
			id: 314,
			name: '六道觉_绽放之屿_离开',
			// 只取desc：传完整operator会被oper()自动点击一次，再regionClick就成了双击，
			// 第二击落到已切回地图的同一位置=误点"唤息"。
			operator: [{ desc: thisOperator[32].desc }]
		})) {
			if (leaveCooling) return true; // 刚点过离开，画面切换中，别再点右下角(否则回到地图会误点唤息)
			thisScript.regionClick([thisOperator[32].oper[0]]);
			thisScript.global.d6LeaveClickAt = new Date().getTime();
			log('绽放之屿内部页：点右下角离开');
			sleep(1200); // 等画面切回地图，避免下一帧还在过渡又点一次
			return true;
		}

		// 绽放之屿：识别到后点右下角"唤息"召唤宁息商店(用户给的点击框)。
		// 但两种buff已满(d6ShopBuffDone)后不再召唤/进店，直接跳过。
		// 离开内页后的2秒内不点(冷却中)，避免"离开→地图→又点唤息"来回打转。
		if (!leaveCooling && !thisScript.global.d6ShopBuffDone) {
			const pBfzy = thisScript.findMultiColor('六道觉_绽放之屿', undefined, undefined, true);
			if (pBfzy) {
				thisScript.regionClick([[1103, 596, 1209, 693, 1000]]); // 右下角"唤息"
				thisScript.global.d6LeaveClickAt = new Date().getTime(); // 点右下角同样进冷却，防过渡帧重复点
				log('绽放之屿：点右下角唤息召唤宁息商店');
				sleep(1200); // 等商店页出现，避免过渡帧误点
				return true;
			}
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_选事件',
			operator: [{ desc: thisOperator[0].desc }, { desc: thisOperator[1].desc }]
		}, 200)) {
			// 事件点击优先级：数组顺序即优先级，改顺序即可调整（当前 神秘>宁息/商店>混沌>鏖战）
			// 宁息之屿就是商店(点进去后"商店_购买buff"分支会买buff/已满则退出)。
			const eventPriority = [
				'六道觉_事件_神秘',
				'六道觉_事件_宁息',
				'六道觉_事件_混沌',
				'六道觉_事件_鏖战',
			];
			for (const key of eventPriority) {
				const p = thisScript.findMultiColor(key, undefined, undefined, true);
				if (p) {
					thisScript.regionClick([[p.x - 40, p.y + 20, p.x + 40, p.y + 80, 200]])
					log('点击事件 ' + key + ' (' + p.x + ',' + p.y + ')');
					return true;
				}
			}
			return false;
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_事件购买buff',
			operator: [{ desc: thisOperator[3].desc }]
		})) {
			// 四选一 buff 页：前3张随机 buff，第4张固定舞技强化。
			// 2026-11-26 新流程：本页也做判断——当前页若出现"还没满上限"的目标buff(轰雷/极道轰炸)
			// 就直接点它的"选择"顺手拿；但【仅限当前页、不点刷新】，没找到就点第4个舞技强化。
			// 上限/计数与商店共享(d6HongLeiCnt/d6JiDaoCnt + hongLeiLimit/jiDaoLimit)：
			//   本页选一次即计数+1，达到前端配置上限后本页也不再选该buff。
			// 点目标后2秒冷却：画面切换有延迟，过渡帧不操作，避免连着两个buff页时误点第4个。
			const buffCooling = new Date().getTime() - (thisScript.global.d6BuffClickAt || 0) < 2000;
			if (buffCooling) return true;

			// ① 轰雷优先：当前页若有未达上限的轰雷 → 点对应"选择"，计数+1
			if (!hongLeiFull) {
				const hongLei = thisScript.findMultiColor('六道觉_六道轰雷');
				if (hongLei) {
					const cardCx = hongLei.x - 7; // 图标锚点左侧约7px = "选择"按钮中心x
					thisScript.global.d6HongLeiCnt++;
					thisScript.regionClick([[cardCx - 38, 556, cardCx + 38, 588, 1000]]);
					thisScript.global.d6BuffClickAt = new Date().getTime();
					thisScript.global.d6BuffRefreshCnt = 0;
					log('四选一buff：点轰雷对应选择 (锚点' + hongLei.x + ',' + hongLei.y + ')，已获得第' + thisScript.global.d6HongLeiCnt + '/' + hongLeiLimit + '个轰雷');
					sleep(1200); // 等选择动画/页面跳转
					return true;
				}
			}
			// ② 极道轰炸：当前页若有未达上限的极道 → 点对应"选择"，计数+1
			if (!jiDaoFull) {
				const jiDao = thisScript.findMultiColor('六道觉_极道轰炸');
				if (jiDao) {
					const cardCx = jiDao.x - 7; // 与轰雷同规则
					thisScript.global.d6JiDaoCnt++;
					thisScript.regionClick([[cardCx - 38, 556, cardCx + 38, 588, 1000]]);
					thisScript.global.d6BuffClickAt = new Date().getTime();
					thisScript.global.d6BuffRefreshCnt = 0;
					log('四选一buff：点极道轰炸对应选择 (锚点' + jiDao.x + ',' + jiDao.y + ')，已获得第' + thisScript.global.d6JiDaoCnt + '/' + jiDaoLimit + '个极道轰炸');
					sleep(1200); // 等选择动画/页面跳转
					return true;
				}
			}

			// ③ 当前页没有可拿的目标buff → 不刷新，直接选第4个舞技强化
			thisScript.global.d6BuffRefreshCnt = 0;
			thisScript.regionClick([thisOperator[3].oper[0]]);
			log('四选一buff：当前页无目标buff(轰雷' + thisScript.global.d6HongLeiCnt + '/' + hongLeiLimit + '、极道' + thisScript.global.d6JiDaoCnt + '/' + jiDaoLimit + ')，不刷新，直接选第4个舞技强化');
			return true;
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_强化选择_三卡页',
			// 只取desc：传完整operator会被oper()自动点一次，这里再regionClick会双击到新页面同位置。
			operator: [{ desc: thisOperator[30].desc }]
		})) {
			// 强化三选一页：固定选第1个(力量强化)
			thisScript.regionClick([thisOperator[30].oper[0]]);
			log('强化三选一：固定选第1个(力量强化)');
			return true;
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_强化选择_两卡页',
			operator: [{ desc: thisOperator[31].desc }]
		})) {
			// 强化二选一页(力量满10级消失)：固定选第1个(技巧强化)
			thisScript.regionClick([thisOperator[31].oper[0]]);
			log('强化二选一：固定选第1个(技巧强化)');
			return true;
		}

		// 商店确认购买弹窗：弹窗会遮挡商店页，必须放在商店页判断之前。
		// 用户2026-11-26要求直接复用椒图op23(desc+确认购买/退出商店按钮框)：
		// 点"确认购买"→"退出商店"，并按 d6ShopBuying 给对应buff计数+1。
		// desc 同时兼容觉自己的 op20(万象赐福购买确认)与椒图 op38(商店确认购买)，
		// 且仅在确实点了购买(d6ShopBuying非空)后才处理，避免无购买流程时误点确认。
		if (!!thisScript.global.d6ShopBuying && thisScript.oper({
			id: 314,
			name: '六道觉_商店确认购买',
			operator: [{ desc: thisOperator[38].desc }, { desc: thisOperator[20].desc }]
		})) {
			thisScript.regionClick([thisOperator[38].oper[0]]); // 确认购买
			thisScript.regionClick([thisOperator[38].oper[1]]); // 退出商店
			if (thisScript.global.d6ShopBuying === 'hongLei') {
				thisScript.global.d6HongLeiCnt++;
				log('商店：确认购买轰雷，已获得 ' + thisScript.global.d6HongLeiCnt + '/' + hongLeiLimit);
			} else if (thisScript.global.d6ShopBuying === 'jiDao') {
				thisScript.global.d6JiDaoCnt++;
				log('商店：确认购买极道轰炸，已获得 ' + thisScript.global.d6JiDaoCnt + '/' + jiDaoLimit);
			}
			thisScript.global.d6ShopBuying = '';
			thisScript.global.d6ShopRefreshCnt = 0;
			thisScript.global.d6LeaveClickAt = new Date().getTime();
			sleep(1200); // 等退出商店动画，避免过渡帧误点地图右下角唤息
			return true;
		}

		// 商店(宁息之屿)：照椒图流程买轰雷/极道轰炸。
		// 两种buff都满 → 退出商店并置 d6ShopBuffDone，之后不再召唤/进店；
		// 未满 → 找目标(轰雷优先)点购买→等确认弹窗；没找到→刷新(上限3次防死循环)。
		if (thisScript.oper({
			id: 314,
			name: '六道觉_商店_购买buff',
			operator: [{ desc: thisOperator[6].desc }]
		})) {
			if (leaveCooling) return true; // 刚点过右下角，画面切换中，别重复点

			const exitShop = () => {
				thisScript.regionClick([thisOperator[6].oper[1]]); // 退出商店
				thisScript.global.d6LeaveClickAt = new Date().getTime();
				thisScript.global.d6ShopBuying = '';
				thisScript.global.d6ShopRefreshCnt = 0;
				sleep(1200); // 等画面切回地图，避免过渡帧误点唤息
			};

			// 两种buff都满：置完成标记(每局重置)并退出，之后绽放之屿不召唤、宁息商店直接退出
			if (hongLeiFull && jiDaoFull) {
				thisScript.global.d6ShopBuffDone = true;
				exitShop();
				log('商店：轰雷/极道轰炸均已达上限，标记完成并退出');
				return true;
			}

			// 没钱判断(照椒图)：找不到"可购买buff"标记就退出，避免空转
			if (!thisScript.findMultiColor('六道觉_购买buff', undefined, undefined, true)) {
				exitShop();
				log('商店：无可购买buff标记(万相铃不足?)，退出');
				return true;
			}

			// 找还没满的目标，轰雷优先；指纹命中即点它下方购买按钮(照椒图 y+50~+140，夹在屏幕内)
			let point = null;
			let buying = '';
			if (!hongLeiFull) {
				point = thisScript.findMultiColor('六道觉_商店_轰雷', undefined, undefined, true);
				buying = 'hongLei';
			}
			if (!point && !jiDaoFull) {
				point = thisScript.findMultiColor('六道觉_商店_极道轰炸', undefined, undefined, true);
				buying = 'jiDao';
			}
			if (point) {
				const y2 = Math.min(point.y + 140, 718);
				thisScript.regionClick([[point.x - 10, point.y + 50, point.x + 10, y2, 500]]);
				thisScript.global.d6ShopBuying = buying;
				log('商店：点购买' + (buying === 'hongLei' ? '轰雷' : '极道轰炸') + ' (锚点' + point.x + ',' + point.y + ')，等待确认弹窗');
				sleep(600); // 等确认弹窗出现
				return true;
			}

			// 没找到目标 → 点刷新继续找；刷新3次还没找到 → 退出，杜绝死循环
			if (thisScript.global.d6ShopRefreshCnt >= 3) {
				exitShop();
				log('商店：已刷新3次仍未找到目标buff，退出');
				return true;
			}
			const refresh = thisScript.findMultiColor('六道觉_商店_刷新', undefined, undefined, true);
			if (refresh) {
				thisScript.regionClick([[refresh.x - 25, refresh.y - 25, refresh.x + 25, refresh.y + 25, 500]]);
				thisScript.global.d6ShopRefreshCnt++;
				log('商店：未找到目标buff，点刷新(第' + thisScript.global.d6ShopRefreshCnt + '次)');
				sleep(800); // 等刷新动画
				return true;
			}
			exitShop();
			log('商店：刷新按钮不可用，退出');
			return true;
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_神秘之屿_退出',
			// 只取desc(不传oper)：传完整operator会被oper()自动点一次，这里再regionClick就变双击。
			operator: [
				{ desc: thisOperator[14].desc }
			]
		})) {
			// 神秘之屿(背包仿造页)：不做仿造，直接点左上角返回退出。
			// 与右下角"离开"共用2秒冷却：点下去后画面要切换，指纹在过渡帧仍可能命中，
			// 再点一次会落到地图页左上角的其他按钮上，故冷却期内直接跳过。
			if (leaveCooling) return true;
			thisScript.regionClick([thisOperator[14].oper[0]]);
			thisScript.global.d6LeaveClickAt = new Date().getTime();
			log('神秘之屿：点左上角返回退出');
			sleep(1200); // 等画面切回地图
			return true;
		}

		// 新增：只打双倍检测
		if ((thisScript.scheme.config['314'] || {}).onlyDouble) {
			if (thisScript.oper({
				id: 314,
				name: '六道觉_开始战斗检测',
				operator: [{ desc: thisOperator[8].desc }]
			})) {
				if (thisScript.oper({
					id: 314,
					name: '六道觉_双倍次数检测',
					operator: [thisOperator[27]]
				})) {
					thisScript.myToast('双倍次数已用完，停止运行');
					console.log('双倍次数已用完，停止运行');
					thisScript.rerun('__停止脚本__');
					return true;
				}
			}
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_精进舞技_祈愿之舞',
			operator: [thisOperator[28]]
		})) {
			return true;
		}

		// 首次三选一buff：本局只点一次（选第一个极道轰炸）
		if (!thisScript.global.d6FirstBuffDone && thisScript.oper({
			id: 314,
			name: '六道觉_首次buff_选第一个',
			operator: [thisOperator[29]]
		})) {
			thisScript.global.d6FirstBuffDone = true;
			thisScript.global.d6JiDaoCnt = 1; // 首次选的是极道轰炸，开局即计入极道计数(上限来自jiDaoLimit)
			console.log('首次buff已选（极道轰炸），本局不再重复；极道计数=' + thisScript.global.d6JiDaoCnt);
			return true;
		}

		// 双倍结算弹窗：优先级最高，单独提前处理。
		// 它的识别点落在右下角统计文字区(深灰小字)，与 op8"开始_开启"的深灰点位高度重合；
		// 实测在弹窗页 op8 先命中并点了右下角(绿点+橙框正是 op8 的点位与点击框)，
		// 导致排在它后面的 op18/op19 永远没机会。故单独提前，且不受离开冷却影响。
		if (thisScript.oper({
			id: 314,
			name: '六道觉_双倍结算弹窗',
			operator: [thisOperator[18], thisOperator[19]]
		})) {
			return true;
		}

		// 离开页面后的冷却期内不做这类"个别事件"点击：这个分支命中会自动点击(挑战/开始等)，
		// 而地图右下角"唤息"与挑战/开始是同一位置的同款圆形按钮，画面刚切回地图时若误判，
		// 点了就会误触"唤息"。
		if (!leaveCooling && thisScript.oper({
			id: 314,
			name: '六道觉_执行个别事件',
			operator: [
				thisOperator[2], thisOperator[4], thisOperator[5], thisOperator[7],
				thisOperator[8], thisOperator[9], thisOperator[11], thisOperator[12],
				thisOperator[13], thisOperator[16], thisOperator[17],
				// op20(万象赐福购买确认)已移到"商店确认购买"分支处理(点确认购买而非右上取消)，此处不再自动点击
				thisOperator[21], thisOperator[22],
				thisOperator[23], thisOperator[24], thisOperator[25], thisOperator[26],
				thisOperator[37], // 六道之门·孔雀国横幅
			]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 314,
			name: '六道觉_开始_重置参数',
			operator: [
				thisOperator[10]
			]
		})) {
			thisScript.global.d6Loop = 0;
			thisScript.global.d6FirstBuffDone = false;
			thisScript.global.d6HongLeiCnt = 0; // 新一局：轰雷/极道轰炸获得数清零，重新按上限寻找
			thisScript.global.d6JiDaoCnt = 0;
			thisScript.global.d6BuffRefreshCnt = 0;
			thisScript.global.d6BuffClickAt = 0;
			thisScript.global.d6ShopBuffDone = false; // 完成标记每局重置(用户2026-11-26决定)
			thisScript.global.d6ShopBuying = '';
			thisScript.global.d6ShopRefreshCnt = 0;
			thisScript.global.d6dCurrentBegin = new Date().getTime();
			if (!thisScript.global.d6dBegin) {
				thisScript.global.d6dBegin = new Date().getTime();
			}
			if (!thisScript.global.times) {
				thisScript.global.times = 0;
			}
			thisScript.global.times++
			return true;
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_结束',
			operator: [thisOperator[15]]
		})) {
			const thisconf = thisScript.scheme.config['314'];
			thisconf.overTimes = Math.floor(Number(thisconf.overTimes) || 0);
			const now = new Date().getTime();
			const currentCost = Math.floor((now - thisScript.global.d6dCurrentBegin) / 1000); // 秒
			const cost = ((now - thisScript.global.d6dBegin) / 1000 / 60).toFixed(2); // 分
			const costAvg = Math.floor((now - thisScript.global.d6dBegin) / 1000 / (thisScript.global.times || 0)) // 秒
			// 中途进入的不计次
			let toLog = `通关次数: ${thisScript.global.times || 0}次, 本次通关时间: ${currentCost}秒, 平均通关时间: ${costAvg}秒, 总通关时间: ${cost}分`;
			if (thisconf.overTimes && thisScript.global.times >= thisconf.overTimes) {
				toLog = `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已够次数，请查看。` + toLog;
			}
			thisScript.myToast(toLog);
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
				return;
			}
			return true;
		}

		return false;
	}
}
