// infer即推导泛型参数
// infer声明只能出现在extends子语句中
interface User {
    name:string
    age:number
}
 
type Result = Promise<User>
type PromiseRes<T> = T extends Promise<infer R> ? R : never
// 可以推导出r是User
type r = PromiseRes<Result>

// 如果遇到了多层的情况可以使用递归
/*
interface User {
    name:string
    age:number
}
type Result = Promise<Promise<Promise<User>>>
type PromiseRes<T> = T extends Promise<infer R> ? PromiseRes<R> : T
type r = PromiseRes<Result>
*/

// infer的协变  获取对象属性的类型并且返回元组类型
let obj1 = {
    name:'xy',
    age:123
}
type protyKey<T> = T extends {name:infer N,age:infer A}  ? [N,A]  : T
 
type res = protyKey<typeof obj1>
// 如果同一个对象使用一个变量就会产生协变，返回值就是联合类型
/*
let obj = {
    name:'小满',
    age:123
}
type protyKey<T> = T extends {name:infer U,age:infer U}  ? U  : T
 
type res = protyKey<typeof obj>
type res=string | number
*/


// infer的递归
type Arr = [1, 2, 3, 4]
type ReverseArr<T extends any[]> = T extends [infer First, ...infer rest] ? [...ReverseArr<rest>, First] : T
type Res = ReverseArr<Arr>
// 结果
// type Res = [4, 3, 2, 1]

