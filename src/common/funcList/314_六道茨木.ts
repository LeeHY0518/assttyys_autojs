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
				[left, 117, 55, 0xeff8f7],
				[left, 122, 47, 0xeff8f7],
				[left, 141, 48, 0xeff8f7],
				[left, 153, 34, 0xeff8f7],
				[left, 253, 45, 0x593716],
				[left, 116, 567, 0x6f7254],
				[left, 178, 620, 0x7c7e5c],
				[center, 440, 261, 0x373733],
				[right, 744, 288, 0x373733],
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
		if (thisScript.oper({
			name: '六道茨木_执行个别事件',
			operator: [
				thisOperator[1], thisOperator[2], thisOperator[3], thisOperator[4],
				thisOperator[5], thisOperator[6], thisOperator[7], thisOperator[8]
			]
		})) {
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
