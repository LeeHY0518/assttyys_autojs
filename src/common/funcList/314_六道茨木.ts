/* eslint-disable @typescript-eslint/no-unused-vars */
// 上方为骨架阶段的 lint 豁免（常量/参数尚未使用），识别点与逻辑写完后可删除该行。
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func314 implements IFuncOrigin {
	id = 314;
	name = '六道茨木';
	desc = '应排在[2退出结算]前';
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
	// 识别点/点击框：按实际页面取点后依次添加，注释写明下标与用途
	operator: IFuncOperatorOrigin[] = [{ // 0 探索地图进入六道之门（沿用椒图316 op31）
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 936, 649, 977, 683, 1000],
		]
	}, { // 1 六道之门净佛刹页面（点击框沿用椒图op30进入月之海）
		desc: [1280, 720,
			[
				[left, 32, 46, 0xefece4],
				[left, 251, 45, 0x583615],
				[center, 323, 55, 0x968468],
				[center, 349, 32, 0x50493f],
				[left, 74, 231, 0x404030],
				[right, 1231, 74, 0x3b3b2d],
				[left, 110, 698, 0x302b1f],
				[center, 363, 701, 0x2f2a1e],
				[center, 429, 244, 0x746441],
			]
		],
		oper: [
			[center, 1280, 720, 354, 173, 371, 256, 1000],
		]
	}, { // 2 开始_开启（取点已更新，点击框沿用椒图op9）
		desc: [1280, 720,
			[
				[right, 1153, 595, 0xffe083],
				[right, 1167, 592, 0xffdc75],
				[right, 1149, 627, 0xeff0ca],
				[right, 1168, 627, 0xfaf3c6],
				[right, 1198, 641, 0xfff3b2],
				[right, 1188, 655, 0xf3f4d3],
				[right, 1162, 650, 0x73694e],
			]
		],
		oper: [
			[center, 1280, 720, 1128, 606, 1217, 664, 500],
		]
	}, { // 3 开始_确定（取点已更新，点击框沿用椒图op10）
		desc: [1280, 720,
			[
				[right, 1145, 595, 0xffe288],
				[right, 1180, 607, 0xfff0b0],
				[right, 1190, 631, 0xfee693],
				[right, 1178, 648, 0x787053],
				[right, 1146, 657, 0x8c7950],
			]
		],
		oper: [
			[center, 1280, 720, 1145, 597, 1228, 662, 500],
		]
	}, { // 4 开始_开启_60体（取点已更新，点击框沿用椒图op11）
		desc: [1280, 720,
			[
				[right, 1156, 591, 0xffde7e],
				[right, 1171, 588, 0xffdc74],
				[right, 1171, 610, 0xfff3b6],
				[right, 1172, 628, 0xf4f2cd],
				[right, 1165, 646, 0x6a6148],
				[right, 1199, 620, 0xffdc77],
				[right, 1199, 650, 0xf5f5ce],
			]
		],
		oper: [
			[center, 1280, 720, 1142, 595, 1230, 659, 500],
		]
	}, { // 5 开始_选择破邪弓（取点和点击框均已更新）
		desc: [1280, 720,
			[
				[left, 237, 623, 0x4b4130],
				[left, 299, 623, 0x353027],
				[center, 610, 621, 0x483e2e],
				[right, 674, 622, 0x2f2a22],
				[right, 983, 623, 0x443c2c],
				[right, 1049, 622, 0x332e25],
				[center, 630, 402, 0xb68dcd],
			]
		],
		oper: [
			[center, 1280, 720, 578, 604, 703, 640, 1000],
		]
	}, { // 6 选择大妖威势（取点和点击框均已给出）
		desc: [1280, 720,
			[
				[left, 288, 574, 0x505050],
				[center, 361, 575, 0x404040],
				[center, 597, 573, 0x9e9e9e],
				[right, 678, 576, 0x444444],
				[right, 920, 575, 0x4c4c4c],
				[right, 992, 577, 0x404040],
				[right, 938, 199, 0xffff31],
			]
		],
		oper: [
			[center, 1280, 720, 886, 549, 1029, 598, 1000],
		]
	}, { // 7 鏖战之屿选择页面_选择右边
		desc: [1280, 720,
			[
				[left, 35, 45, 0xf5f2ed],
				[left, 122, 47, 0xeff8f7],
				[left, 117, 55, 0xeff8f7],
				[left, 141, 38, 0xeff8f7],
				[left, 136, 50, 0xeff8f7],
				[left, 157, 51, 0xeff8f7],
				[left, 156, 329, 0x59563a],
				[center, 621, 666, 0x777452],
			]
		],
		oper: [
			[center, 1280, 720, 761, 307, 923, 438, 1000],
		]
	}, { // 8 选择右边后_挑战页面
		desc: [1280, 720,
			[
				[left, 31, 46, 0xefebe2],
				[left, 68, 651, 0x171314],
				[right, 1173, 659, 0xa89d7a],
				[right, 1169, 624, 0xecf2d6],
				[right, 1204, 594, 0x312e21],
			]
		],
		oper: [
			[center, 1280, 720, 1123, 576, 1230, 675, 1000],
		]
	}, { // 9 混沌_精英怪页面
		desc: [1280, 720,
			[
				[left, 32, 46, 0xefece4],
				[left, 124, 35, 0xeff8f7],
				[left, 125, 59, 0xeff8f7],
				[left, 151, 32, 0xeff8f7],
				[left, 159, 59, 0xeff8f7],
				[right, 685, 529, 0x9d9162],
				[right, 888, 513, 0xab9d62],
			]
		],
		oper: [
			[center, 1280, 720, 659, 239, 817, 369, 1000],
		]
	}, { // 10 挑战后buff选择页_固定点第四个
		desc: [1280, 720,
			[
				[left, 164, 571, 0x373737],
				[left, 259, 574, 0x454545],
				[center, 440, 575, 0x393939],
				[center, 542, 573, 0x434343],
				[right, 709, 575, 0x3c3c3c],
				[right, 809, 575, 0x343434],
				[right, 1031, 575, 0x444444],
				[right, 1132, 573, 0x2d2d2d],
			]
		],
		oper: [
			[center, 1280, 720, 1013, 551, 1159, 596, 1000],
		]
	}, { // 11 混沌之屿_宝箱页面（点击框=右下角离开固定框）
		desc: [1280, 720,
			[
				[left, 34, 47, 0xede8df],
				[left, 124, 32, 0xeff8f7],
				[left, 122, 49, 0xeff8f7],
				[left, 151, 33, 0xeff8f7],
				[left, 160, 59, 0xeff8f7],
				[center, 598, 527, 0x7f7d66],
				[right, 890, 502, 0x8b876e],
			]
		],
		oper: [
			[center, 1280, 720, 1179, 621, 1222, 693, 1000],  // 右下角离开固定框
		]
	}, { // 12 淬炼之屿页面（点击框=右下角离开固定框）
		desc: [1280, 720,
			[
				[left, 34, 45, 0xf2efe8],
				[left, 120, 34, 0xeff8f7],
				[left, 120, 50, 0xeff8f7],
				[left, 139, 50, 0xeff8f7],
				[left, 154, 34, 0xeff8f7],
				[left, 155, 46, 0xeff8f7],
				[left, 143, 608, 0x7b7754],
				[center, 354, 626, 0x7e7b58],
			]
		],
		oper: [
			[center, 1280, 720, 1179, 621, 1222, 693, 1000],  // 右下角离开固定框
		]
	}, { // 13 宁息页面（点击框=右下角离开固定框）
		desc: [1280, 720,
			[
				[left, 34, 45, 0xf2efe8],
				[left, 116, 43, 0xeff8f7],
				[left, 116, 59, 0xeff8f7],
				[left, 154, 39, 0xeff8f7],
				[left, 155, 60, 0xeff8f7],
				[right, 1245, 156, 0xd5ccbc],
				[left, 294, 636, 0x837e56],
				[center, 392, 658, 0x9b9368],
			]
		],
		oper: [
			[center, 1280, 720, 1179, 621, 1222, 693, 1000],  // 右下角离开固定框
		]
	}, { // 14 Boss挑战页面
		desc: [1280, 720,
			[
				[left, 32, 47, 0xefece4],
				[left, 122, 54, 0xeff8f7],
				[left, 121, 38, 0xeff8f7],
				[left, 155, 37, 0xeef7f6],
				[left, 158, 61, 0xeff8f7],
				[left, 211, 172, 0xf5e6b7],
				[left, 195, 415, 0xfbf1c9],
			]
		],
		oper: [
			[center, 1280, 720, 1116, 592, 1222, 689, 1000],
		]
	}, { // 15 获得奖励页（照搬椒图op13确认奖励，点右侧空白关闭）
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
	}, { // 16 boss结束页面
		desc: [1280, 720,
			[
				[right, 1163, 636, 0xd4c0a2],
				[right, 1188, 633, 0xd0bf9e],
				[right, 1186, 647, 0xdecfb7],
				[right, 1208, 655, 0xe3ddd1],
				[right, 1213, 663, 0xe9e4d8],
				[right, 1209, 679, 0xf5f0db],
				[right, 1174, 681, 0x716b5e],
			]
		],
		oper: [
			[center, 1280, 720, 461, 643, 922, 711, 1000],
		]
	}, { // 17 神秘之屿（两页共用指纹，识别到点左上角退出）
		desc: [1280, 720,
			[
				[left, 34, 45, 0xf2efe8],
				[left, 109, 42, 0xeff8f7],
				[left, 107, 48, 0xeff8f7],
				[left, 117, 39, 0xeff8f7],
				[left, 129, 49, 0xeff8f7],
				[left, 146, 31, 0xeff8f7],
				[left, 142, 54, 0xeff8f7],
				[left, 162, 37, 0xeff8f7],
				[left, 152, 50, 0xeff8f7],
			]
		],
		oper: [
			[center, 1280, 720, 17, 23, 74, 71, 1000],
		]
	}, { // 18 双倍次数为0（只判不点，用于只打双倍检测）
		desc: [1280, 720,
			[
				[right, 1188, 38, 0xd6d4c4],
				[right, 1188, 41, 0xd8d6c6],
				[right, 1197, 39, 0xceccbc],
				[right, 1197, 42, 0xd2d0c0],
				[right, 1193, 47, 0x968f83],
				[right, 1193, 32, 0x9a9487],
				[right, 1193, 40, 0x7f734d],
			]
		]
	}];
	// 主逻辑：识别到对应 operator 后执行点击/计数，返回 true 表示本次已处理
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 314,
			name: '六道茨木_探索地图进入六道之门',
			operator: [thisOperator[0]]
		})) {
			return true;
		}
		// 只打双倍：在开始_开启页确认双倍次数为0则停止（照搬椒图 onlyDouble）
		if ((thisScript.scheme.config['314'] || {}).onlyDouble) {
			if (thisScript.oper({
				id: 314,
				name: '六道茨木_开始战斗检测',
				operator: [{ desc: thisOperator[2].desc }]
			})) {
				if (thisScript.oper({
					id: 314,
					name: '六道茨木_双倍次数检测',
					operator: [thisOperator[18]]
				})) {
					thisScript.myToast('双倍次数已用完，停止运行');
					console.log('双倍次数已用完，停止运行');
					thisScript.rerun('__停止脚本__');
					return true;
				}
			}
		}
		if (thisScript.oper({
			name: '六道茨木_执行个别事件',
			operator: [
				thisOperator[1], thisOperator[2], thisOperator[3],
				thisOperator[5], thisOperator[6], thisOperator[7], thisOperator[8],
				thisOperator[9], thisOperator[10], thisOperator[11], thisOperator[12],
				thisOperator[13], thisOperator[14], thisOperator[15], thisOperator[17]
			]
		})) {
			return true;
		}
		// 开始_重置参数：命中"开始_开启_60体"时计次（照搬椒图 global.times）
		if (thisScript.oper({
			id: 314,
			name: '六道茨木_开始_重置参数',
			operator: [thisOperator[4]]
		})) {
			thisScript.global.d6dCurrentBegin = new Date().getTime();
			if (!thisScript.global.d6dBegin) {
				thisScript.global.d6dBegin = new Date().getTime();
			}
			if (!thisScript.global.times) {
				thisScript.global.times = 0;
			}
			thisScript.global.times++;
			return true;
		}

		// 结束：统计通关次数/耗时，达到挂机局数则切换方案（照搬椒图）
		if (thisScript.oper({
			id: 314,
			name: '六道茨木_结束',
			operator: [thisOperator[16]]
		})) {
			const thisconf = thisScript.scheme.config['314'];
			thisconf.overTimes = Math.floor(Number(thisconf.overTimes) || 0);
			const now = new Date().getTime();
			const currentCost = Math.floor((now - thisScript.global.d6dCurrentBegin) / 1000); // 秒
			const cost = ((now - thisScript.global.d6dBegin) / 1000 / 60).toFixed(2); // 分
			const costAvg = Math.floor((now - thisScript.global.d6dBegin) / 1000 / (thisScript.global.times || 0)); // 秒
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
		// 选事件：动态识别事件图标，按命中点偏移出点击框（照抄椒图偏移）
		const eventPoint = thisScript.findMultiColor('六道茨木_事件');
		if (eventPoint) {
			thisScript.regionClick([[eventPoint.x - 40, eventPoint.y + 20, eventPoint.x + 40, eventPoint.y + 80, 200]]);
			return true;
		}
		return false;
	}
}
