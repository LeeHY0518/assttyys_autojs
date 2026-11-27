/**
 * 绘制用悬浮，用于
 * 1. 绘制desc命中点与未命中点(script.js)
 * 3. 绘制多点找色命中区域(script.js)
 * 2. 绘制点击区域与实际点击点(helperBridge.js)
 */
// ==================== 调试绘制配置（可在设置界面修改，无需改代码） ====================
// 三项对应设置界面里的「调试绘制」分组：
// ① drawTime          = 框框在屏幕上停留的毫秒数（设置项 floaty_draw_time，手动填数字）
// ② showBox           = 是否显示框框（设置项 floaty_draw_show_box）
// ③ clickWhenDrawing  = 显示框时脚本是否点击（设置项 floaty_draw_click_when_drawing）
//      true  = 显示框 + 脚本正常点击（边看边跑）
//      false = 显示框 + 脚本不点击（只显示模式，界面停住方便校准取点）
// 这里的初值是「设置里没配置时」的兜底默认值；启动/保存设置后由 syncDebugDrawConfig 覆盖。
export const debugDrawConfig = {
	drawTime: 1000,
	showBox: true,
	clickWhenDrawing: false
};

// 用全局设置同步绘制配置（settings.ts 保存后、script.ts 启动时调用）。
// 参数 settings = storeCommon.get('settings')。字段缺失时保留当前默认值。
export function syncDebugDrawConfig(settings: any): void {
	if (!settings) return;
	const t = Number(settings.floaty_draw_time);
	if (!isNaN(t) && t > 0) debugDrawConfig.drawTime = Math.floor(t);
	if (typeof settings.floaty_draw_show_box === 'boolean') debugDrawConfig.showBox = settings.floaty_draw_show_box;
	if (typeof settings.floaty_draw_click_when_drawing === 'boolean') debugDrawConfig.clickWhenDrawing = settings.floaty_draw_click_when_drawing;
}
// ======================================================================================

const drawFloaty = {
	// 悬浮实例
	instacne: null,
	thread: null,
	toDraw: [],
	option: {
		statusBarHeight: 0
	},

	// 初始化
	init(option?) {
		if (this.instacne) return;

		if (option) {
			this.option.statusBarHeight = option.statusBarHeight || 0
		}

		const self = this;
		self.instacne = floaty.rawWindow(`
            <frame>
                <canvas id="board"/>
            </frame>
        `);
		ui.post(() => {
			self.instacne.board.getRootView().getLayoutParams().alpha = 0.8; // alpha设置0.8，在安卓12以上实现悬浮窗穿透
			self.instacne.setTouchable(false);
			self.instacne.setSize(-1, -1);
		});

		// 命中框画笔（绿）
		const paintGreen = new android.graphics.Paint();
		paintGreen.setAntiAlias(true); // 抗锯齿
		paintGreen.setAlpha(255); // 0~255透明度
		paintGreen.setFakeBoldText(true);
		paintGreen.setStrokeWidth(2);
		paintGreen.setStyle(android.graphics.Paint.Style.STROKE);
		paintGreen.setColor(colors.parseColor('#FF00FF00'));
		const textPaintGreen = new android.graphics.Paint();
		textPaintGreen.setTextSize(15);
		textPaintGreen.setColor(colors.parseColor('#FF00FF00'));

		// 未命中框画笔（红）
		const paintRed = new android.graphics.Paint();
		paintRed.setAntiAlias(true); // 抗锯齿
		paintRed.setAlpha(255); // 0~255透明度
		paintRed.setFakeBoldText(true);
		paintRed.setStrokeWidth(2);
		paintRed.setStyle(android.graphics.Paint.Style.STROKE);
		paintRed.setColor(colors.parseColor('#FFFF0000'));
		const textPaintRed = new android.graphics.Paint();
		textPaintRed.setTextSize(15);
		textPaintRed.setColor(colors.parseColor('#FFFF0000'));

		// 点击区域画笔（橙）
		const paintOrange = new android.graphics.Paint();
		paintOrange.setAntiAlias(true); // 抗锯齿
		paintOrange.setAlpha(255); // 0~255透明度
		paintOrange.setFakeBoldText(true);
		paintOrange.setStrokeWidth(2);
		paintOrange.setStyle(android.graphics.Paint.Style.STROKE);
		paintOrange.setColor(colors.parseColor('#FF963200'));
		const textPaintOrange = new android.graphics.Paint();
		textPaintOrange.setTextSize(15);
		textPaintOrange.setColor(colors.parseColor('#FF963200'));

		const paintLine = new android.graphics.Paint();
		paintLine.setAntiAlias(true);// 抗锯齿
		paintLine.setAlpha(255);// 0~255透明度
		paintLine.setFakeBoldText(true);
		paintLine.setStrokeWidth(1);
		paintLine.setStyle(android.graphics.Paint.Style.STROKE);
		paintLine.setColor(colors.parseColor('#FF963200'));

		self.instacne.board.on('draw', function (canvas) {
			canvas.drawColor(0, android.graphics.PorterDuff.Mode.CLEAR);
			const toDraw = self.toDraw || [];
			// if (toDraw.length) {
			//     console.log(`准备绘制：${JSON.stringify(toDraw)}`);
			// }
			let toMove = 0;
			let pts = [];
			const now = new Date().getTime();
			for (const item of toDraw) {
				if (now >= item.et) {
					toMove++
					continue;
				}
				const color = item.color;
				const region = item.region;
				let paint = null;
				let textPaint = null;
				switch (color) {
					case 'green':
						paint = paintGreen;
						textPaint = textPaintGreen;
						break;
					case 'red':
						paint = paintRed;
						textPaint = textPaintRed;
						break;
					case 'orange':
						paint = paintOrange;
						textPaint = textPaintOrange;
						break;
				}
				if (!paint) return;
				// console.log(`绘制：${JSON.stringify(item)}`);
				pts = [...pts, device.width / 2, 0, Math.floor((region[0] + region[2]) / 2), region[1]];
				canvas.drawRect(...region, paint);
				if (item.text) {
					canvas.drawText(item.text, region[0], region[3] + 15, textPaint);
				}
			}
			self.toDraw.splice(0, toMove)
			canvas.drawLines(pts, paintLine);
		});
		this.thread = threads.start(function () {
			// 设置一个空的定时来保持线程的运行状态
			setInterval(function () { }, 1000);
		});
	},

	/**
	 * 绘制数组
	 * @param {*} arr
	 * @param {*} time
	 */
	draw: function (arr, time) {
		if (!debugDrawConfig.showBox) return;
		arr.forEach(i => {
			i.region[1] = i.region[1] - this.option.statusBarHeight;
			i.region[3] = i.region[3] - this.option.statusBarHeight;
			i.et = new Date().getTime() + time;
		});
		this.toDraw = this.toDraw.concat(arr);
	},

	// 销毁
	destroy() {
		if (this.instacne) {
			this.instacne.close();
			this.instacne = null;
		}
		if (this.thread) {
			this.thread.interrupt();
			this.thread = null;
		}
	}
}

export default drawFloaty;