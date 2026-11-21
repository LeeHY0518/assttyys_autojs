@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo   推送本地代码到 GitHub 并自动编译部署
echo ============================================
echo.
node "%~dp0push_to_github.js"
echo.
echo 脚本已结束。如果上面显示"推送完成"，请等 1-3 分钟，
echo 让 GitHub 自动编译，然后在壳里重新加载即可。
echo.
pause
