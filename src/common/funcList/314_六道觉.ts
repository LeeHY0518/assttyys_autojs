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
	}, { // 1 点固定事件位置
		oper: [
			[center, 1280, 720, 625, 474, 734, 544, 0], // 位置:2位
			[center, 1280, 720, 335, 434, 466, 496, 0], // 位置:1位
			[center, 1280, 720, 880, 468, 1038, 543, 0], // 位置:3位
		]
	}, { // 2 事件 唤息暗
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
	}, { // 3 已适配66 鏖战
		desc: [
			1280, 720,
			[
				[left, 118, 37, 0x5a6470],
				[left, 116, 46, 0xe5e2d3],
				[left, 151, 34, 0xf8f3e0],
				[left, 137, 52, 0xf8f3e0],
				[left, 252, 39, 0x573514],
				[center, 440, 273, 0x365080],
				[right, 747, 286, 0x345381],
				[left, 152, 594, 0x497997],
				[left, 257, 651, 0x4a779b],
			]
		],
		oper: [
			[center, 1280, 720, 800, 230, 930, 380, 500], // 右怪 武士之灵
		]
	}, { // 4 buff抉择_四选一(固定选第4个舞技强化)
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
	}, { // 5 已适配66 混沌_宝箱
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
	}, { // 6 混沌_怪物（精英怪页）
		desc: [
			1280, 720,
			[
				[left, 105, 28, 0xf1ecda],
				[left, 120, 43, 0xf8f3e0],
				[left, 148, 29, 0xf8f3e0],
				[left, 153, 41, 0xf8f3e0],
				[left, 154, 52, 0xf8f3e0],
				[left, 146, 579, 0x48768f],
				[left, 209, 628, 0x4d7497],
			]
		],
		oper: [
			[center, 1280, 720, 680, 292, 801, 379, 0],
			// [center, 1280, 720, 1120, 597, 1231, 682, 500], // 挑战
		]
	}, { // 7 商店(宁息之屿)：右侧商店tab亮笔画+底部备战,两图100%一致/地图页0命中
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
	}, { // 8 已适配66 星之屿
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
	}, { // 9 开始_开启
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
	}, { // 10 开始_确定
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
	}, { // 11 已适配66 开始_开启_60体
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
	}, { // 12 开始_选择柔风
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
	}, { // 13 确认奖励
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
	}, { // 14 已适配66 神秘_转换
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
	}, { // 15 神秘之屿(背包仿造页)：识别到直接点左上角返回退出
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
	}, { // 16 结束(结算页)：用户新取9点(右下"分享"按钮米色笔画)，原始PNG偏差全0，跨图唯一(仅结算页9/9)
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
	}, { // 17 十位数的5
		desc: [
			1280, 720,
			[
				[right, 1211, 657, 0xbbab7f],
				[right, 1225, 633, 0xb8a67d],
				[right, 1201, 32, 0x45413c],
				[right, 1201, 37, 0x878279],
				[right, 1207, 41, 0x282422],
				[right, 1200, 44, 0x8a857d],
			]
		],
		oper: [
			[center, 1280, 720, 1191, 621, 1243, 676, 2000],
		]
	}, { // 18 十位数的0
		desc: [
			1280, 720,
			[
				[right, 1211, 657, 0xbbab7f],
				[right, 1225, 633, 0xb8a67d],
				[right, 1197, 35, 0xa49e94],
				[right, 1205, 36, 0x948e85],
				[right, 1201, 45, 0x7e7972],
				[right, 1201, 37, 0x1f191d],
			]
		],
		oper: [
			[center, 1280, 720, 1191, 621, 1243, 676, 2000],
		]
	}, { // 19 boss_挑战(恋色障道等boss页)：用户新取12点,原始PNG偏差全0,34图唯一(仅本图12/12)
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
	}, { // 20 已适配66 boss_跳过
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
	}, { // 21 使用极的双倍
		desc: [
			1280, 720,
			[
				[center, 516, 443, 0xdf6851],
				[center, 686, 446, 0xf3b25e],
				[center, 667, 367, 0xf7e51d],
				[center, 879, 288, 0x282d38],
				[center, 434, 306, 0x272b33],
				[center, 152, 169, 0x594a25],
				[center, 120, 237, 0x575235],
				[center, 256, 223, 0x31211a],
			]
		],
		oper: [
			[center, 1280, 720, 671, 419, 794, 467, 1000],
		]
	}, { // 22 双倍 点取消
		desc: [
			1280, 720,
			[
				[center, 516, 443, 0xdf6851],
				[center, 686, 446, 0xf3b25e],
				[center, 667, 367, 0xf7e51d],
				[center, 879, 288, 0x282d38],
				[center, 434, 306, 0x272b33],
			]
		],
		oper: [
			[center, 1280, 720, 491, 419, 615, 471, 1000],
		]
	}, { // 23 [已废弃]商店确认购买：对应处理分支已删除(现在遇到商店只点右下角退出,不购买)。
		// 定义保留仅为不打乱后续 operator 下标(thisOperator[24]~[45])，运行时不会被引用。
		desc: [
			1280, 720,
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
			[center, 1280, 720, 678, 409, 837, 453, 500], // (废弃)确认购买
			[center, 1280, 720, 1174, 588, 1241, 649, 500], // (废弃)退出商店
		]
	}, { // 24 御神经验
		desc: [
			1280, 720,
			[
				[center, 581, 138, 0xfff0b7],
				[center, 610, 134, 0xffeeb3],
				[center, 674, 138, 0xfff2bc],
				[center, 708, 137, 0xfff0bc],
				[center, 694, 649, 0x69759f],
				[center, 589, 644, 0xbfcad6],
			]
		],
		oper: [
			[right, 1280, 720, 872, 146, 1197, 539, 500],
		]
	}, { // 25 低级buff
		desc: [
			1280, 720,
			[
				[center, 217, 171, 0x4786d8],
				[center, 490, 171, 0x4687d9],
				[center, 762, 172, 0x4583d0],
				[center, 262, 216, 0x5ba0f2],
				[center, 536, 216, 0x5893de],
				[center, 809, 216, 0x5aa1f5],
			]
		]
	}, { // 26 万象赐福取消购买
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
	}, { // 27 挑战
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
		// 28 战斗失败选择放弃前行
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
		// 29 战斗失败确定放弃
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
	}, { // 30 进入月之海
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
	}, { // 31 进入六道之门
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 936, 649, 977, 683, 1000],
		]
	}, { // 32 继续
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
	}, { // 33 双倍次数为0
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
	}, { // 34 柔风满层
		desc: [1280, 720,
			[
				[left, 25, 91, 0xfcf5e0],
				[left, 25, 92, 0xfaf4de],
				[left, 25, 93, 0xf9f4df],
				[left, 25, 94, 0xfbf6e1],
				[left, 27, 89, 0x3f2719],
				[left, 27, 100, 0x402b1b],
				[left, 23, 94, 0x392417],
				[left, 31, 94, 0x3a2417],
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
	}, { // 37 强化选择_三卡页(固定选第1个 力量强化)
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
	}, { // 38 强化选择_两卡页(力量满10级消失,固定选第1个 技巧强化)
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
	}, { // 39 绽放之屿(地图中央岛)
		desc: [1280, 720,
			[
				[right, 675, 388, 0xf8f8f9],
				[right, 676, 388, 0xffffff],
				[right, 676, 389, 0xffffff],
				[right, 675, 389, 0xf8f9f9],
			]
		],
		oper: [
			[center, 1280, 720, 469, 292, 796, 546, 1000], // 点绽放之屿岛
		]
	}, { // 40 绽放之屿_内部页(式神页,点右下角离开)
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
	}, { // 41 混沌之屿_宝箱页(幸运宝匣)：点右下角离开(不要点宝箱)
		// 用户重新取色9点(原始PNG偏差全0)：前6点=右下角"离开"按钮,后3点=场景/左上标题(区分绽放内部页)。
		// 旧8点中[right,744,364]偏差83/[right,718,371]偏差49已失效→宝箱页识别不到→掉到绽放分支点p±40误点宝箱。
		// 交叉验证:本图9/9;另一宝箱页8/9;绽放内部页6/9(右下离开按钮同款,但场景3点不同)→均不误判(需全中)。
		desc: [
			1280, 720,
			[
				[right, 1169, 641, 0xf9efd9],
				[right, 1194, 640, 0xf8ecd7],
				[right, 1194, 676, 0xd7bd93],
				[right, 1169, 674, 0xdbc59a],
				[right, 1179, 658, 0xead6b5],
				[right, 1201, 656, 0xecdab9],
				[left, 229, 578, 0x4c7593],
				[center, 435, 666, 0x4c7694],
				[left, 115, 33, 0xf7f2df],
			]
		],
		oper: [
			[center, 1280, 720, 1155, 635, 1211, 687, 1000], // 右下角"离开"
		]
	}, { // 42 意外弹出的"暂时离开/放弃试炼"确认弹窗(点太快误点左上退出导致)：点弹窗外空白处关闭
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
	}, { // 43 四选一buff页_刷新按钮_亮(可点击)：10点原始PNG偏差全0,亮图10/10/暗图0/10
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
	}, { // 44 四选一buff页_刷新按钮_暗(不可点击,剩0次)：10点原始PNG偏差全0,暗图10/10/亮图0/10
		desc: [
			1280, 720,
			[
				[right, 1204, 657, 0xf6f6f6],
				[right, 1199, 649, 0xf2f2f2],
				[right, 1202, 634, 0xe3e3e3],
				[right, 1216, 634, 0xe2e2e2],
				[right, 1224, 643, 0xeeeeee],
				[right, 1221, 659, 0xf7f7f7],
				[right, 1184, 651, 0x424242],
				[right, 1240, 646, 0x414241],
				[right, 1158, 695, 0xbebebe],
				[right, 1204, 623, 0xa5a5a5],
			]
		],
	}, { // 45 四选一buff页_"万相铃不足"提示(没钱时刷新按钮仍亮但点了不刷新,会死循环刷新)
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
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

		// 右下角"离开/退出"点击冷却(2秒)：这类按钮点下去后画面要淡出切换，
		// 但它的指纹在淡出的几帧里仍可能命中；如果这时再点一次，画面已回到地图，
		// 而右下角同一个位置就是"唤息"按钮 → 会误点唤息(用户实机反馈)。
		// 因此点过一次后在冷却期内不再点，冷却期内命中也直接跳过。
		const leaveCooling = new Date().getTime() - (thisScript.global.d6LeaveClickAt || 0) < 2000;

		// 轰雷"选择"点击冷却(2秒)：点了轰雷卡的"选择"后置 d6HongLeiGot=true，
		// 但画面切换有几帧延迟，若下一帧仍识别到四选一页(有时会连续出现两个buff页)，
		// 会立刻走"已获得→点第4个"，在过渡帧上误点。冷却期内四选一页不做任何操作。
		const buffCooling = new Date().getTime() - (thisScript.global.d6BuffClickAt || 0) < 2000;

		// 意外弹出的"暂时离开/放弃试炼"确认弹窗(点太快误点左上退出导致)：
		// 这是模态框，会遮挡其它页面，必须放在最前面优先处理，点弹窗外空白处关闭，不点两个按钮。
		if (thisScript.oper({
			id: 314,
			name: '六道觉_意外确认弹窗_关闭',
			operator: [thisOperator[42]]
		})) {
			thisScript.regionClick([thisOperator[42].oper[0]]);
			log('意外弹窗：点弹窗外空白处关闭');
			return true;
		}

		// 混沌之屿宝箱页(幸运宝匣)：必须放在最前面。此页左上标题与式神页相似,
		// 容易被当成式神页误点宝箱；识别到直接点右下角"离开"回地图。
		if (thisScript.oper({
			id: 314,
			name: '六道觉_混沌之屿_宝箱页_离开',
			operator: [thisOperator[41]]
		})) {
			if (leaveCooling) return true; // 刚点过离开，画面切换中，别再点右下角(否则误点唤息)
			thisScript.regionClick([thisOperator[41].oper[0]]);
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
			operator: [thisOperator[40]]
		})) {
			if (leaveCooling) return true; // 刚点过离开，画面切换中，别再点右下角(否则回到地图会误点唤息)
			thisScript.regionClick([thisOperator[40].oper[0]]);
			thisScript.global.d6LeaveClickAt = new Date().getTime();
			log('绽放之屿内部页：点右下角离开');
			sleep(1200); // 等画面切回地图，避免下一帧还在过渡又点一次
			return true;
		}

		// 绽放之屿：不再判断唤息亮暗，识别到直接点岛进内部页(后续"绽放之屿_离开"分支会点右下角离开)。
		// 不再走"唤息亮→进宁息商店"分支——后续不进商店。
		// 离开内部页后的 2 秒内不点岛(冷却中)，避免"离开→地图→又点岛"来回打转。
		if (!leaveCooling) {
			const pBfzy = thisScript.findMultiColor('六道觉_绽放之屿', undefined, undefined, true);
			if (pBfzy) {
				thisScript.regionClick([[pBfzy.x - 40, pBfzy.y + 20, pBfzy.x + 40, pBfzy.y + 80, 1000]]);
				log('绽放之屿：点岛 (' + pBfzy.x + ',' + pBfzy.y + ')');
				return true;
			}
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_选事件',
			operator: [{ desc: thisOperator[0].desc }, { desc: thisOperator[2].desc }]
		}, 200)) {
			// 事件点击优先级：数组顺序即优先级，改顺序即可调整（当前 鏖战>混沌>神秘>宁息）
			const eventPriority = [
				'六道觉_事件_鏖战',
				'六道觉_事件_混沌',
				'六道觉_事件_神秘',
				'六道觉_事件_宁息',
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
			operator: [{ desc: thisOperator[4].desc }]
		})) {
			// 四选一 buff 页：前3张随机 buff，第4张固定舞技强化。
			// 本页点"选择"必定获得该 buff(与商店不同，没有二次确认/扣费失败的可能)，
			// 所以只要识别到轰雷并点了它下方"选择"，就是真拿到了，直接置 d6HongLeiGot。
			// 本局流程：① 已获得轰雷 → 不再找、不刷新，直接选第4个舞技强化；
			//           ② 还没获得 → 前3格找轰雷，找到点它正下方"选择"，即视为获得；
			//           ③ 出现"万相铃不足"(没钱) → 刷新无效，不再刷新，直接选第4个；
			//           ④ 本页已刷3次还亮着(刷新没生效) → 停止刷新，直接选第4个(防死循环)；
			//           ⑤ 没轰雷且刷新"亮" → 点刷新继续找；
			//           ⑥ 刷新"暗"(剩0次)仍没轰雷 → 选第4个舞技强化兜底。

			// 刚点过轰雷"选择"（2秒内）：画面切换有几帧延迟，有时还会连着来第二个buff页，
			// 过渡期间不做任何点击，否则会在淡出帧上误点第4个。
			if (buffCooling) return true;

			// ① 本局已经获得过轰雷：不识别、不刷新，直接选第4个
			if (thisScript.global.d6HongLeiGot) {
				thisScript.global.d6BuffRefreshCnt = 0;
				thisScript.regionClick([thisOperator[4].oper[0]]);
				log('四选一buff：本局已获得轰雷，直接选第4个舞技强化');
				return true;
			}

			// ② 前3格找轰雷 → 点它正下方"选择"，点下即获得
			const hongLei = thisScript.findMultiColor('六道觉_六道轰雷');
			if (hongLei) {
				// 点击"选择"：轰雷指纹锚点是第1点(226,184)，卡片图标中心在锚点左侧约7px；
				// 实测三个"选择"按钮中心(219/492/765, y572)正好对齐各自图标中心，故以图标中心±38点击。
				const cardCx = hongLei.x - 7;
				thisScript.regionClick([[cardCx - 38, 556, cardCx + 38, 588, 1000]]);
				thisScript.global.d6HongLeiGot = true; // 本页点了就必得，无需二次确认
				thisScript.global.d6BuffClickAt = new Date().getTime(); // 2秒冷却，等画面切走
				thisScript.global.d6BuffRefreshCnt = 0;
				log('四选一buff：点轰雷对应选择 (锚点' + hongLei.x + ',' + hongLei.y + '→按钮中心x' + cardCx + ')，已获得轰雷，本局后续直接选第4个');
				sleep(1200); // 等选择动画/页面跳转
				return true;
			}

			// ③ 没钱时的"万相铃不足"提示：此时刷新按钮虽亮，但点了不会刷新、也不会变暗，
			//    继续点会死循环。识别到提示就放弃刷新，直接选第4个舞技强化。
			if (thisScript.oper({
				id: 314,
				name: '六道觉_四选一_万相铃不足',
				operator: [{ desc: thisOperator[45].desc }]
			})) {
				thisScript.global.d6BuffRefreshCnt = 0;
				thisScript.regionClick([thisOperator[4].oper[0]]);
				log('四选一buff：万相铃不足(刷新无效)，直接选第4个舞技强化');
				return true;
			}

			// ④ 刷新上限兜底：本页已点3次刷新(刷新次数上限就是剩3次)却还亮着，
			//    说明刷新没生效(异常/提示未识别)，不再刷，直接选第4个，杜绝死循环。
			if (thisScript.global.d6BuffRefreshCnt >= 3) {
				thisScript.global.d6BuffRefreshCnt = 0;
				thisScript.regionClick([thisOperator[4].oper[0]]);
				log('四选一buff：本页刷新3次仍未生效，停止刷新，选第4个舞技强化');
				return true;
			}

			// ⑤ 刷新"亮"=可点击：点刷新后等待动画，下一帧重新找轰雷
			const refreshBright = thisScript.oper({
				id: 314,
				name: '六道觉_四选一_刷新亮',
				operator: [{ desc: thisOperator[43].desc }]
			});
			if (refreshBright) {
				thisScript.regionClick([thisOperator[43].oper[0]]);
				thisScript.global.d6BuffRefreshCnt++; // 本页刷新计数+1(上限兜底用)
				log('四选一buff：无轰雷，点刷新继续找(本页第' + thisScript.global.d6BuffRefreshCnt + '次)');
				sleep(800); // 等刷新动画完成
				return true;
			}

			// ⑥ 刷新"暗"或不可点(剩0次)且无轰雷→固定选第4个舞技强化兜底
			thisScript.global.d6BuffRefreshCnt = 0;
			thisScript.regionClick([thisOperator[4].oper[0]]);
			log('四选一buff：刷新不可用且无轰雷，选第4个舞技强化');
			return true;
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_强化选择_三卡页',
			operator: [thisOperator[37]]
		})) {
			// 强化三选一页：固定选第1个(力量强化)
			thisScript.regionClick([thisOperator[37].oper[0]]);
			log('强化三选一：固定选第1个(力量强化)');
			return true;
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_强化选择_两卡页',
			operator: [thisOperator[38]]
		})) {
			// 强化二选一页(力量满10级消失)：固定选第1个(技巧强化)
			thisScript.regionClick([thisOperator[38].oper[0]]);
			log('强化二选一：固定选第1个(技巧强化)');
			return true;
		}

		// 商店(宁息之屿)：后续不进商店、不做任何购买/刷新/滑动，识别到直接点右下角退出。
		// (原"商店确认购买"分支已删除：现在遇到商店一律只点右下角退出，不购买任何东西。)
		if (thisScript.oper({
			id: 314,
			name: '六道觉_商店_直接离开',
			operator: [{ desc: thisOperator[7].desc }]
		})) {
			if (leaveCooling) return true; // 刚点过右下角离开/退出，画面切换中，别重复点(否则回到地图会误点唤息)
			thisScript.regionClick([thisOperator[7].oper[1]]); // 退出商店
			thisScript.global.d6LeaveClickAt = new Date().getTime();
			log('商店：直接点退出离开');
			sleep(1200);
			return true;
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_神秘之屿_退出',
			operator: [
				thisOperator[15]
			]
		})) {
			// 神秘之屿(背包仿造页)：不做仿造，直接点左上角返回退出。
			// 与右下角"离开"共用2秒冷却：点下去后画面要切换，指纹在过渡帧仍可能命中，
			// 再点一次会落到地图页左上角的其他按钮上，故冷却期内直接跳过。
			if (leaveCooling) return true;
			thisScript.regionClick([thisOperator[15].oper[0]]);
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
				operator: [{ desc: thisOperator[9].desc }]
			})) {
				if (thisScript.oper({
					id: 314,
					name: '六道觉_双倍次数检测',
					operator: [thisOperator[33]]
				})) {
					thisScript.myToast('双倍次数已用完，停止运行');
					console.log('双倍次数已用完，停止运行');
					thisScript.rerun('__停止脚本__');
					return true;
				}
			}
		}

		// 新增：柔风满层检测，便于接手打到一半的局
		if (thisScript.global.d6RouFeng < 5) {
			if (thisScript.oper({
				id: 314,
				name: '六道觉_柔风满层检测',
				operator: [{ desc: thisOperator[34].desc }]
			})) {
				thisScript.global.d6RouFeng = 5;
				thisScript.myToast('柔风已满，进入速通模式');
				console.log('检测到柔风满层，进入速通模式');
			}
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_精进舞技_祈愿之舞',
			operator: [thisOperator[35]]
		})) {
			return true;
		}

		// 首次三选一buff：本局只点一次（选第一个极道轰炸）
		if (!thisScript.global.d6FirstBuffDone && thisScript.oper({
			id: 314,
			name: '六道觉_首次buff_选第一个',
			operator: [thisOperator[36]]
		})) {
			thisScript.global.d6FirstBuffDone = true;
			console.log('首次buff已选（极道轰炸），本局不再重复');
			return true;
		}

		if (thisScript.oper({
			id: 314,
			name: '六道觉_执行个别事件',
			operator: [
				thisOperator[3], thisOperator[5], thisOperator[6], thisOperator[8],
				thisOperator[9], thisOperator[10], thisOperator[12], thisOperator[13],
				thisOperator[14], thisOperator[19], thisOperator[20], thisOperator[21],
				thisOperator[22], thisOperator[26], thisOperator[27], thisOperator[28],
				thisOperator[29], thisOperator[30], thisOperator[31], thisOperator[32],
			]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 314,
			name: '六道觉_开始_重置参数',
			operator: [
				thisOperator[11]
			]
		})) {
			thisScript.global.d6Loop = 0;
			thisScript.global.d6RouFeng = 1;
			thisScript.global.d6FirstBuffDone = false;
			thisScript.global.d6HongLeiGot = false; // 新一局：重新允许寻找轰雷
			thisScript.global.d6BuffRefreshCnt = 0;
			thisScript.global.d6BuffClickAt = 0;
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
			operator: [thisOperator[16]]
		})) {
			const thisconf = thisScript.scheme.config['314'];
			thisconf.overTimes = Math.floor(Number(thisconf.overTimes) || 0);
			const now = new Date().getTime();
			const currentCost = Math.floor((now - thisScript.global.d6dCurrentBegin) / 1000); // 秒
			const cost = ((now - thisScript.global.d6dBegin) / 1000 / 60).toFixed(2); // 分
			const costAvg = Math.floor((now - thisScript.global.d6dBegin) / 1000 / (thisScript.global.times || 0)) // 秒
			// 中途进入的不计次
			const bufLog = `本局柔风buff：${thisScript.global.d6RouFeng}`;
			let toLog = `${bufLog}。通关次数: ${thisScript.global.times || 0}次, 本次通关时间: ${currentCost}秒, 平均通关时间: ${costAvg}秒, 总通关时间: ${cost}分`;
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
