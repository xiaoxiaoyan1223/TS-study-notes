"use strict";
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
let str = 'LXYZPL1223'.split('');
let Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
console.log(Arr);
const rain = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 0, canvas.width, canvas.height);
    // 代码填充颜色为绿色
    ctx.fillStyle = '#0f0';
    Arr.forEach((item, index) => [
        // item+10 往下走
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10),
        Arr[index] = item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10
    ]);
};
// 每40ms绘制一次
setInterval(rain, 40);
