// proxy 代理13个方法
// Reflect 反射 13个方法
// mobx observable

let person={name:'lll','age':18}
// proxy支持对象 数组 函数 set map
let personProxy=new Proxy(person,{
    // 取值
    get(target,key,receiver){
        if(target.age<=18){
            // Reflect会直接帮我们操作对象
            return Reflect.get(target,key,receiver)
        }else{
            return 'are you ok'
        }
    },
    // 赋值
    set(target,key,value,receiver){
        return  true
    },
    // 拦截函数的调佣
    apply(){

    },
    // 拦截in操作符
    /**
    var ann=1
    'ann' in window
     */
    has(){

    },
    // 拦截for in
    ownKeys(){

    },
    // 拦截new操作符
    construct(){

    }
    // 拦截删除的操作
    deleteProperty(target,p){

    }
})

/*
与大多数全局对象不同Reflect并非一个构造函数，所以不能通过new运算符对其进行调用，
或者将Reflect对象作为一个函数来调用。Reflect的所有属性和方法都是静态的（就像Math对象）
*/
type Person = {
    name: string,
    age: number,
    text: string
}
const proxy = (object: any, key: any) => {
    return new Proxy(object, {
        get(target, prop, receiver) {
            console.log(`get key======>${key}`);
            return Reflect.get(target, prop, receiver)
        },
 
        set(target, prop, value, receiver) {
            console.log(`set key======>${key}`);
 
            return Reflect.set(target, prop, value, receiver)
        }
    })
}
 
const logAccess = (object: Person, key: 'name' | 'age' | 'text') => {
    return proxy(object, key)
}
 
let man: Person = logAccess({
    name: "小满",
    age: 20,
    text: "大家好我是小满"
}, 'age')
 
man.age  = 30
console.log(man);

// 简单实现一个mobx观察者模式
const list: Set<Function> = new Set()
 
const autorun = (cb: Function) => {
    if (cb) {
        list.add(cb)
    }
}
 
const observable = <T extends object>(params: T) => {
    return new Proxy(params, {
        set(target, key, value, receiver) {
            const result = Reflect.set(target, key, value, receiver)
            list.forEach(fn => fn())
            console.log(list)
            return result
        }
    })
}
 
const person2 = observable({ name: "xy", attr: "xynh" })
 
autorun(()=>{
    console.log('我变化了')
})
 
person2.attr = 'xybh'