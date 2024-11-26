//1、命名空间的用法  嵌套  抽离  导出  简化  合并
// namespace 所有的变量及方法必须要导出才能访问
namespace Test {
    // 变量 方法
    export let a:number=1
    export const add=(a:number,b:number)=>a+b
    // 支持命名空间的嵌套
    namespace Test2{
        export let c:string='lxy'
    }
}

console.log(Test.add(1,2))

// 同名的命名空间是会合并的

// 可以通过import引入
// import {Test} from './test'

//2、命名空间的案例
// 跨端的项目 比如h5 Android ios 小程序等
namespace ios{
    export const pushNotification=(msg:string,type:number)=>{

    }
}

namespace android{
    export const pushNotification=(msg:string)=>{

    }
    export const callPhone=(phone:number)=>{

    }
}