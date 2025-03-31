/**
 * 生姜经营计算器
 * main.js - 主要JavaScript功能
 */

// 当DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', function() {
    console.log('生姜经营计算器已加载');
    
    // 将所有主要函数从HTML移到这里
    // 目前这个文件是一个示例，实际功能仍在index.html中实现
    
    // 初始化页面设置
    initSettings();
});

/**
 * 初始化应用设置
 */
function initSettings() {
    // 从localStorage加载设置
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
        console.log('已加载用户设置');
    } else {
        console.log('使用默认设置');
    }
}

/**
 * 未来版本的计划:
 * 1. 将HTML中的内联JavaScript移动到此文件
 * 2. 实现模块化结构
 * 3. 添加更多自定义选项
 * 4. 优化移动设备体验
 */ 