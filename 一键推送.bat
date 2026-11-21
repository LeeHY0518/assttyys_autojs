@echo off
chcp 65001 >nul
cd /d "%~dp0"
title 一键推送到 GitHub
echo ============================================
echo   推送本地代码到 GitHub 并自动编译部署
echo ============================================
echo.
echo 正在连接 GitHub，请稍候...
echo.
node "%~dp0push_to_github.js" 2>&1
echo.
echo ============================================
echo 运行结束。结果就显示在上面窗口中。
echo 若显示"推送完成"，等 1-3 分钟 GitHub 自动编译，
echo 然后在壳里重新加载即可。
echo.
echo 每次记录已保存到本目录的 推送记录.txt
echo ============================================
echo.
pause
