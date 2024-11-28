// 协变 也可以叫鸭子类型
// A B 两个类型完全不同但是可以赋值并无报错B类型充当A类型的子类型，
// 当子类型里面的属性满足A类型就可以进行赋值，也就是说不能少可以多，这就是协变
interface A {
    name:string
    age:number
}
 
interface B {
    name:string
    age:number
    sex:string
}
 
let aa:A = {
    name:"老墨我想吃鱼了",
    age:33,
}
 
let bb:B = {
    name:"老墨我不想吃鱼",
    age:33,
    sex:"女"
}
 
aa = bb

// 逆变
// 逆变一般发生于函数的参数上面

let fna = (params:A) => {
 
}
let fnb = (params:B) => {
    
}
// ts2.0之前是可以的 2.0之后为了安全起见
// tsconfig中strictFunctionTypes 设置为false 支持双向协变 fna fnb 随便可以来回赋值
// fna = fnb //错误
 

// 调用fnb()实际执行的fna()
fnb = fna //正确