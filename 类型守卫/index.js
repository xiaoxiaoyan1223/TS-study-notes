"use strict";
// 1、类型收缩|类型收窄
// typeof是有缺陷的 比如说数组 对象 null 他们都返回object
// 从any类型中筛选出string类型
const isString = (str) => typeof str == 'string';
// 2、类型谓词|自定义守卫
// 自定义守卫只能接受布尔值
// 语法规则： 参数 is 类型
// 如果这个函数返回true 那么这个参数就是你想要的类型
// 实现一个函数，该函数可以传入任意类型
// 但如果是object就检查里面的属性，如果里面的属性是number就取两位
// 如果是string就去除左右空格
// 如果是函数就执行
// Object.prototype可以简写为({})
const isObj = (arg) => ({}).toString.call(arg) == '[object Object]';
const isNum = (num) => typeof num == 'number';
const isStr = (str) => typeof str == 'string';
const isFn = (fn) => typeof fn == 'function';
const fn = (data) => {
    if (isObj(data)) {
        // Object.keys不会遍历原型上的属性
        Object.keys(data).forEach(key => {
            let val = data[key];
            if (isNum(val)) {
                data[key] = val.toFixed(2);
            }
            if (isStr(val)) {
                data[key] = val.trim();
            }
            if (isFn(val)) {
                val();
            }
        });
    }
};
let obj = {
    a: 100.9999,
    b: ' lllla  ',
    c: function () {
        console.log('你好吗');
    }
};
fn(obj);
