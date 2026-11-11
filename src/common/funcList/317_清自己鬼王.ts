import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func317 implements IFuncOrigin {
	id = 317;
	name = '清自己鬼王';
	private zeroStar = 0;
	desc: '只清理1-4星鬼王，56星自行开启通知或不时查看（脚本会停下）';
	config = [{
		desc: '',
		config: [
			{
				name: 'fight_level_four',
				desc: '是否清理4星',
				type: 'switch',
				default: true,
				value: null,
			},
			{
				name: 'fight_level_five_six',
				desc: '5星/6星也直接挑战（关闭则遇到即停止）',
				type: 'switch',
				default: false,
				value: null,
			}
		]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 鬼王界面
		desc: [1280, 720,
			[
				[right, 1177, 587, 0xe4d8c2],
				[right, 1067, 660, 0xf3f3ff],
				[right, 979, 650, 0xf4efff],
				[center, 458, 654, 0xd9e2ff],
				[left, 106, 673, 0x654b7b],
				[left, 58, 37, 0x9a683a],
			]
		]
	}, { // 1  易级别 2
		desc: [
			1280, 720,
			[
				[right, 1105, 535, 0x7c7778],
				[right, 1097, 535, 0x7c7778],
				[right, 1090, 535, 0x7c7778],
				[right, 1083, 535, 0x7c7778],
				[right, 1074, 535, 0xf1631c],
				[right, 1066, 535, 0xf1631c],
			]
		]
	}, { // 2  中级别 3
		desc: [
			1280, 720,
			[
				[right, 1105, 535, 0x7c7778],
				[right, 1097, 535, 0x7c7778],
				[right, 1090, 535, 0x7c7778],
				[right, 1083, 535, 0xf36922],
				[right, 1074, 535, 0xf1631c],
				[right, 1066, 535, 0xf1631c],
			]
		]
	}, { // 3  高级别 4星
		desc: [1280, 720,
			[
				[right, 1105, 535, 0x7c7778],
				[right, 1097, 535, 0x7c7778],
				[right, 1090, 535, 0xf5722c],
				[right, 1083, 535, 0xf36922],
				[right, 1074, 535, 0xf1631c],
				[right, 1066, 535, 0xf1631c],
			]
		]
	}, { // 4  难级别 没有适配
		desc: [
			1280, 720,
			[
				[left, 33, 311, 0xf48b11],
				[left, 40, 304, 0xf26b0d],
				[left, 50, 310, 0xf4910b],
				[left, 45, 315, 0xe6ebf3],
				[left, 41, 309, 0xdee5e9],
			]
		]
	}, { // 5  极级别 没有适配
		desc: [
			1280, 720,
			[
				[left, 32, 311, 0xfb8a75],
				[left, 50, 311, 0xff967b],
				[left, 41, 302, 0xfb383c],
				[left, 41, 320, 0xffa296],
				[left, 38, 311, 0xe2ecf1],
				[left, 43, 311, 0xa16762],
			]
		]
	}, { // 6  搜索鬼王
		desc: [1280, 720,
			[
				[right, 1182, 583, 0xe3d8c1],
				[right, 1218, 622, 0xe4d9c2],
				[right, 1197, 653, 0x222027],
				[right, 1066, 642, 0xdee6ff],
				[left, 258, 34, 0x573515],
				[right, 1227, 137, 0xe2eafe],
			]
		],
		oper: [
			[center, 1280, 720, 1114, 590, 1209, 671, 1000],	// 搜索鬼王
		]
	}, { // 7  强力状态切换普通
		desc: [
			1280, 720,
			[
				[right, 1132, 521, 0xfffefb],
				[right, 1125, 522, 0x249eb3],
				[right, 1130, 529, 0x1a93af],
				[right, 1158, 513, 0x7c577a],
				[right, 1184, 586, 0xdbcfb9],
			]
		],
		oper: [
			[center, 1280, 720, 1113, 511, 1139, 538, 1000],
		]
	}, { // 8  挑战鬼王
		desc: [1280, 720,
			[
				[right, 1177, 587, 0xe4d8c2],
				[right, 1126, 526, 0x824c15],
				[right, 1067, 660, 0xf3f3ff],
				[right, 979, 650, 0xf4efff],
				[center, 458, 654, 0xd9e2ff],
				[left, 106, 673, 0x654b7b],
				[left, 58, 37, 0x9a683a],
			]
		],
		oper: [
			[center, 1280, 720, 1140, 583, 1217, 676, 1000],
		]
	}, { // 9  自己鬼王 结算中
		desc: [
			1280, 720,
			[
				[center, 562, 524, 0x231917],
				[right, 970, 529, 0x231917],
				[center, 532, 540, 0x9e5a99],
				[right, 793, 459, 0xfff8b1],
				[right, 739, 451, 0xfff8b1],
				[right, 1218, 649, 0x625b63],
				[center, 540, 328, 0x9d79b0],
			]
		]
	}, { // 10  好友鬼王 结算中
		desc: [
			1280, 720,
			[
				[center, 562, 524, 0x231917],
				[right, 970, 529, 0x231917],
				[center, 532, 540, 0x9e5a99],
				[right, 793, 459, 0xfff8b1],
				[right, 739, 451, 0xfff8b1],
				[right, 1218, 649, 0x625b63],
				[center, 540, 328, 0x9d79b0],
			]
		]
	}, { // 11	分享鬼王
		desc: [
			1280, 720,
			[
				[left, 225, 328, 0xffde79],
				[left, 235, 318, 0x392611],
				[left, 246, 317, 0x33260f],
				[left, 257, 331, 0xf6d16c],
				[left, 245, 337, 0xf7cf5b],
			]
		],
		oper: [
			[center, 1280, 720, 226, 320, 254, 352, 1000],
		]
	}, { // 12 疲劳上限
		desc: [
			1280, 720,
			[
				[right, 690, 491, 0xf3b25e],
				[center, 338, 198, 0xccc1b7],
				[right, 936, 258, 0xd0c8c0],
				[right, 940, 516, 0xcfc3bb],
				[center, 343, 513, 0x968f95],
				[right, 732, 215, 0xa29691],
			]
		],
		oper: [
			[center, 1280, 720, 909, 168, 969, 224, 1000],	// 关闭
		]
	}, {	//	13 1星
		desc: [
			1280, 720,
			[
				[right, 1105, 535, 0x7c7778],
				[right, 1097, 535, 0x7c7778],
				[right, 1090, 535, 0x7c7778],
				[right, 1083, 535, 0x7c7778],
				[right, 1074, 535, 0x7c7778],
				[right, 1066, 535, 0xf1631c],
			]
		]
	}, { // 14 祸主降临主界面（新版）
		desc: [1280, 720,
			[
				[left, 443, 94, 0x2e2226],
				[left, 272, 92, 0x5e283f],
				[left, 224, 195, 0x432839],
				[left, 104, 604, 0x52425d],
				[right, 1246, 554, 0x16141f],
				[right, 1264, 211, 0x1d1524],
				[center, 783, 696, 0x353648],
			]
		]
	}, { // 15 召唤队列面板（新版）
		desc: [1280, 720,
			[
				[left, 431, 493, 0xe8e9ee],
				[right, 828, 493, 0xe8e9ee],
				[left, 539, 440, 0xe4e5ea],
			]
		],
		oper: [
			[center, 1280, 720, 541, 451, 720, 490, 1000],	// 立即召唤
		]
	}, { // 16 星级1（第2-6颗灰）
		desc: [1280, 720, [
			[right, 1074, 534, 0x7c7778],
			[right, 1083, 534, 0x7c7778],
			[right, 1090, 534, 0x7c7778],
			[right, 1097, 534, 0x7c7778],
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 17 星级2（第3-6颗灰）
		desc: [1280, 720, [
			[right, 1083, 534, 0x7c7778],
			[right, 1090, 534, 0x7c7778],
			[right, 1097, 534, 0x7c7778],
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 18 星级3（第4-6颗灰）
		desc: [1280, 720, [
			[right, 1090, 534, 0x7c7778],
			[right, 1097, 534, 0x7c7778],
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 19 星级4（第5-6颗灰）
		desc: [1280, 720, [
			[right, 1097, 534, 0x7c7778],
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 20 星级5（第6颗灰）
		desc: [1280, 720, [
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 21 星级6（六颗全亮）
		desc: [1280, 720, [
			[right, 1067, 534, 0xb36037],
			[right, 1074, 534, 0xba6235],
			[right, 1083, 534, 0xc46536],
			[right, 1090, 534, 0xce703c],
			[right, 1097, 534, 0xc3682f],
			[right, 1105, 534, 0xc3682f],
		]]
	}, { // 22 备用星级1（原项目灰值）
		desc: [1280, 720, [
			[right, 1074, 534, 0x7c7778],
			[right, 1083, 534, 0x7c7778],
			[right, 1090, 534, 0x7c7778],
			[right, 1097, 534, 0x7c7778],
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 23 备用星级2
		desc: [1280, 720, [
			[right, 1083, 534, 0x7c7778],
			[right, 1090, 534, 0x7c7778],
			[right, 1097, 534, 0x7c7778],
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 24 备用星级3
		desc: [1280, 720, [
			[right, 1090, 534, 0x7c7778],
			[right, 1097, 534, 0x7c7778],
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 25 备用星级4
		desc: [1280, 720, [
			[right, 1097, 534, 0x7c7778],
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 26 备用星级5
		desc: [1280, 720, [
			[right, 1105, 534, 0x7c7778],
		]]
	}, { // 27 备用星级6
		desc: [1280, 720, [
			[right, 1067, 534, 0xb36037],
			[right, 1074, 534, 0xba6235],
			[right, 1083, 534, 0xc46536],
			[right, 1090, 534, 0xce703c],
			[right, 1097, 534, 0xc3682f],
			[right, 1105, 534, 0xc3682f],
		]]
	}, { // 28 右下大圆按钮（召唤鬼王 / 挑战）
		oper: [
			[center, 1280, 720, 1109, 561, 1243, 681, 1000],
		]
	}];


	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['317'];

		// ===== 新版「祸主降临」：先让脚本有反应 =====
		// 召唤队列面板：直接点立即召唤
		if (thisScript.oper({
			id: 317,
			name: '召唤队列面板',
			operator: [thisOperator[15]]
		})) {
			thisScript.global.waitFight = true;
			return true;
		}
		// 主界面：先判星级，1-4 星直接挑战；5-6 星看开关
		if (thisScript.oper({
			id: 317,
			name: '祸主降临主界面',
			operator: [thisOperator[14]]
		})) {
			let star = 0;
			for (let i = 0; i < 6; i++) {
				if (thisScript.oper({ id: 317, name: `判星级${i + 1}`, operator: [thisOperator[16 + i]] })) {
					star = i + 1;
					break;
				}
			}
			if (!star) {
				for (let i = 0; i < 6; i++) {
					if (thisScript.oper({ id: 317, name: `判星级备用${i + 1}`, operator: [thisOperator[22 + i]] })) {
						star = i + 1;
						break;
					}
				}
			}
			console.log(`317当前鬼王星级：${star}`);
			if (!star) {
				this.zeroStar = (this.zeroStar || 0) + 1;
				console.log(`317星级识别失败，累计${this.zeroStar}次`);
				if (this.zeroStar >= 3) {
					thisScript.doPush(thisScript, { text: '无法识别鬼王星级，可能是勾玉行位置变了，脚本已停止。', before() { thisScript.myToast('星级识别失败，脚本即将停止'); } });
					thisScript.stop();
					sleep(3000);
				}
				return true;
			}
			this.zeroStar = 0;
			if (star <= 4) {
				const r = thisScript.oper({ id: 317, name: '挑战鬼王_新版', operator: [thisOperator[28]] });
				sleep(2500);
				return r;
			}
			if (thisConf && thisConf.fight_level_five_six) {
				const r = thisScript.oper({ id: 317, name: '挑战高星鬼王_新版', operator: [thisOperator[28]] });
				sleep(2500);
				return r;
			}
			thisScript.doPush(thisScript, { text: `当前鬼王 ${star} 星，已按设置停止。`, before() { thisScript.myToast('遇到高星鬼王，脚本即将停止'); } });
			thisScript.stop();
			sleep(3000);
			return true;
		}

		if (thisScript.oper({
			id: 317,
			name: '是否为没有鬼王页面',
			operator: [{
				desc: thisOperator[6].desc,
			}]
		})) {
			const checkStarArray = [thisOperator[1], thisOperator[2], thisOperator[13]];

			if (thisConf && thisConf.fight_level_four) {
				checkStarArray.push(thisOperator[3]);
			}
			if (thisScript.oper({
				id: 317,
				name: '判断搜索鬼王票的等级',
				operator: checkStarArray
			})) {
				thisScript.global.waitFight = true;
				if (thisScript.oper({
					id: 317,
					name: '搜索鬼王',
					operator: [thisOperator[6]]
				})) {
					thisScript.global.faXian_NumOT = 0;
					return true;
				}
			} else {
				thisScript.global.faXian_NumOT++;
				if (thisScript.global.faXian_NumOT > 5) {
					thisScript.doPush(thisScript, { text: '多次判断鬼王票等级，没有1-4星的票啦。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(3000);
					return true;
				}
			}
		}
		if (thisScript.oper({
			id: 317,
			name: '结算中',
			operator: [thisOperator[9], thisOperator[10]]
		})) {
			thisScript.global.waitFight = true;
			thisScript.global.faXian_NumOT = 0;
			return true;
		}
		// 分享鬼王被击杀后才再次攻打鬼王
		if (thisScript.global.waitFight && thisScript.oper({
			id: 317,
			name: '鬼王界面',
			operator: [thisOperator[0]]
		})) {
			thisScript.oper({
				id: 317,
				name: '强力状态切换普通',
				operator: [thisOperator[7]]
			})
			return thisScript.oper({
				id: 317,
				name: '挑战鬼王',
				operator: [thisOperator[8]]
			});
		}
		if (thisScript.oper({
			id: 317,
			name: '疲劳上限',
			operator: [thisOperator[12]]
		})) {
			thisScript.doPush(thisScript, { text: '多次点击未开始，到疲劳上限啦。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(3000);
			return true;
		}
		return false;
	}
}