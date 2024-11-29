interface User{
    address:string;
    name:string;
    age:number
}


// Partial属性 可选的意思 接受一个泛型
type PartialUser=Partial<User>
/*
*结果
PartialUser = {
    address?: string | undefined;
    name?: string | undefined;
    age?: number | undefined;
}
*原理
type PratialUser<T,K extends keyof T> = {
    [P in K]?: T[P]
}
*/


// Required属性 必选的意思
interface User1 {
    name?: string;
    age?: number;
}
//原理
type CustomRequired<T> = {
    [P in keyof T]-?: T[P]
}
 
type test3 = Required<User>
type test4 = CustomRequired<User>
 
//结果
interface User {
    name: string;
    age: number;
}


// pick 提取部分属性
type test=Pick<User,'name'|'age'>
/*
type test = {
    name: string;
    age: number;
}
*/
//原理
type CustomPick<T,K extends keyof T> = {
    [P in K]: T[P]
}

// Exclude 排除部分属性
// 排除掉不想要的属性
//原理
type CustomExclude<T,K> = T extends K ? never : T 
type test2=Exclude<'a'|'b'|'c','a'>


// Omit 排除部分属性 并返回新的类型
//原理
type customOmit<T,K> = Pick<T,Exclude<keyof T,K>>
type test5 = Omit<User,'age'>
 
//结果
/*
type test5 = {
    address?: string | undefined;
    name?: string | undefined;
}
*/


// Record  约束对象的key和value
// 支持嵌套约束
type Key = "c" | "x" | "k";
 
type Value = '唱' | '跳'  | 'rap' | '篮球'
 
let obj:Record<Key,Value> = {
    'c':'唱',
    "x":'跳',
    "k":'rap'
}
// 源码
type CustomRecord<K extends keyof any,T> = {
    [P in K]: T
}


// ReturnType<Fn>  主要适用于函数，能够提取函数所返回的类型
const fn = () => [1,2,3,'sad'];

type num = ReturnType<typeof fn>;

// 结果
// type num = (string | number)[]

// 原理
type CustomFn<F extends Function>  = F extends (...args:any[])=> infer Res  ? Res :never;
