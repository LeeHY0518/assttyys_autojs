import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

// ——— 诊断（只打印，不参与判断与点击）———
// 邀请横幅出现时，把两组判据的每个取色点的「预设色值 > 实测色值」打进日志，
// 下一轮照实测值把坐标/色值改准，不必再靠截图目测。
// 若日志里连「邀请判据」这一行都不出现，说明本模块没被调度，
// 问题在方案的模块列表上，不在判据上。
let invDiagTime = 0;

function invHex(c: number): string {
	return '#' + ('000000' + (c & 0xffffff).toString(16)).slice(-6);
}

function invNear(c: number, target: number, tol: number): boolean {
	const dr = Math.abs(((c >> 16) & 0xff) - ((target >> 16) & 0xff));
	const dg = Math.abs(((c >> 8) & 0xff) - ((target >> 8) & 0xff));
	const db = Math.abs((c & 0xff) - (target & 0xff));
	return dr <= tol && dg <= tol && db <= tol;
}

export class Func004 implements IFuncOrigin {
	id = 4;
	name = '接受邀请';
	desc = '左侧弹出邀请提示时，自动接受邀请';
	config = [{
		desc: '',
		config: [{
			name: 'teammate_exit',
			desc: '队长退出后切换方案',
			type: 'switch',
			default: true,
		}, {
			name: 'teammate_exit_next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '关闭BUFF',
		}, {
			name: 'auto_team',
			desc: '自动接受后不再处理接受邀请',
			type: 'switch',
			default: false,
		},]
	}]
	operator: IFuncOperatorOrigin[] = [{
		// 0 自动接受邀请
		desc: [1280, 720,
			[
				[left, 20, 254, 0x7e6750],
				[left, 45, 248, 0xdf6e5b],
				[left, 138, 260, 0x57b260],
				[left, 234, 251, 0xefc791],
				[left, 247, 269, 0x59b462],
				[left, 255, 276, 0x86705d],
				[left, 192, 276, 0xeadece]]
		],
		oper: [
			[left, 1280, 720, 219, 237, 254, 275, 600]
		]
	}, { // 1 接受一次邀请
		desc: [1280, 720,
			[
				[left, 128, 255, 0x58b361],
				[left, 45, 257, 0xdd6a59],
				[left, 79, 222, 0xe3d3c2],
				[left, 14, 299, 0xf1be36],
				[left, 176, 291, 0xefe5d6],
				[center, 507, 273, 0xe7d8c2],
				[center, 442, 233, 0xece0d1]
			]
		],
		oper: [
			[left, 1280, 720, 120, 239, 159, 273, 600]
		]
	}, { // 2	挑战_亮
		desc: [1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[right, 1177, 667, 0xd8b871],
				[right, 1187, 679, 0xcda35d],
				[right, 1188, 609, 0xf1e096],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]
			]
		],
	}, { // 3	挑战_暗
		desc: [
			1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[right, 1210, 621, 0xd9d9d9],
				[right, 1228, 658, 0xc8c8c8],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]
			]
		],
	}, { // 4 组队有探索奖励
		desc: [1280, 720,
			[
				[left, 11, 132, 0x49352f],
				[left, 61, 132, 0x49352f],
				[left, 119, 132, 0x49352f],
				[left, 19, 159, 0xe8d8bc],
			]
		],
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['4'];

		// ——— 诊断：每秒一次，打印两组邀请判据的逐点实测色值 ———
		const diagNow = new Date().getTime();
		if (diagNow - invDiagTime >= 1000) {
			invDiagTime = diagNow;
			let bmp: any = null;
			try {
				if (thisScript.helperBridge && thisScript.helperBridge.helper) {
					bmp = thisScript.helperBridge.helper.GetBitmap();
				}
				if (bmp) {
					const dw = bmp.getWidth();
					const dh = bmp.getHeight();
					const dSx = (v: number) => Math.round(v * dw / 1280);
					const dSy = (v: number) => Math.round(v * dh / 720);
					const dNames = ['自动接受', '接受一次'];
					for (let gi = 0; gi < 2; gi++) {
						const pts: any = thisOperator[gi] && thisOperator[gi].desc;
						if (!pts || !pts.length) {
							continue;
						}
						let hit = 0;
						let line = '';
						for (let i = 0; i < pts.length; i++) {
							const c = bmp.getPixel(dSx(pts[i][1]), dSy(pts[i][2])) & 0xffffff;
							const ok = invNear(c, pts[i][3], 12);
							if (ok) {
								hit++;
							}
							line += ' (' + pts[i][1] + ',' + pts[i][2] + ')' + invHex(pts[i][3]) + '>' + invHex(c) + (ok ? 'O' : 'X');
						}
						console.log('邀请判据[' + dNames[gi] + '] 命中' + hit + '/' + pts.length + line);
					}
				}
			} catch (e) {
				console.error($debug.getStackTrace(e));
			}
			if (bmp) {
				bmp.recycle();
			}
		}

		// ——— 以下为原逻辑，未做改动 ———
		if (thisScript.oper({
			name: '组队界面奖励检测',
			operator: [{ desc: thisOperator[4].desc }]
		})) {
			const point = thisScript.findMultiColor('组队探索_宝箱');
			if (point) {
				const oper = [[point.x, point.y, point.x + 5, point.y + 5, 500]];
				thisScript.regionClick(oper);
				return true;
			}
		}
		if (thisConf && thisConf.teammate_exit && thisScript.oper({
			id: 4,
			name: '队长退出',
			operator: [thisOperator[2], thisOperator[3]]
		})) {
			thisScript.rerun(thisConf.teammate_exit_next_scheme);
			sleep(3000)
			return true;
		}
		if (thisConf && thisConf.auto_team && thisScript.global.yaoqing_close) {
			return false;
		}
		if (thisScript.oper({
			id: 4,
			name: '接受邀请',
			operator: [thisOperator[0]]
		})) {
			thisScript.global.yaoqing_close = true;
			return true;
		}
		if (thisScript.oper({
			id: 4,
			name: '接受邀请',
			operator: [thisOperator[1]]
		})) {
			return true;
		}
	}
}