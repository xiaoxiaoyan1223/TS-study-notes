"use strict";
/**
 * 在 JavaScript 中，我们可以使用 DOM 2 级事件的 addEventListener 方法来订阅和监听事件
 * 在 Electron 中，使用 IpcMain 和 ipcRender 来实现主进程和渲染进程之间的事件通信
 * 在 Webpack 中，使用 Hooks 机制来订阅和处理构建过程中的各个阶段
 * 在 Vue 2 中，可以使用事件总线（Event Bus）机制来实现组件之间的通信  $on监听 $emit派发
 */
// 监听器
document.addEventListener('click', () => {
    console.log('点击了');
}, {
    // 如果只想让触发一次可以加一个配置项
    once: true
});
// 订阅中心
const e = new Event('click');
// 派发事件
document.dispatchEvent(e);
class Emitter {
    constructor() {
        this.events = {};
    }
    // 订阅事件
    on(name, callback) {
        const callbackList = this.events[name] || [];
        callbackList.push(callback);
        this.events[name] = callbackList;
    }
    // 发布事件
    emit(name, ...args) {
        let eventName = this.events[name];
        if (eventName) {
            eventName.forEach(fn => {
                fn.apply(this, args);
            });
        }
        else {
            console.error('该事件未监听');
        }
    }
    // 解除绑定
    off(name, fn) {
        let eventName = this.events[name];
        if (eventName && fn) {
            let index = eventName.findIndex(fns => fns === fn);
            eventName.splice(index, 1);
        }
        else {
            console.error('该事件未监听');
        }
    }
    // 一次性订阅
    once(name, fn) {
        // 定义自定义函数 然后使用on绑定 在自定义函数里面立马回收掉
        let decorator = (...args) => {
            fn.apply(this, args);
            this.off(name, decorator);
        };
        this.on(name, decorator);
    }
}
const bus = new Emitter();
const fn = (b, n) => {
    console.log(1, b, n);
};
bus.on('message', fn);
bus.off('message', fn);
