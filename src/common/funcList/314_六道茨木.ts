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
	// 识别点/点击框：按实际页面取点后依次添加，注释写明下标与用途，如：
	// 0 事件_唤息亮 / 1 点固定事件位置 / 2 事件_唤息暗 ...
	operator: IFuncOperatorOrigin[] = [];
	// 主逻辑：识别到对应 operator 后执行点击/计数，返回 true 表示本次已处理
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		return false;
	}
}
