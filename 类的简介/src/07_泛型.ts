//当定义函数或是类时，如果遇到像下面一样类型不明确的就可以使用泛类 
function fn(a:any):any{
    return a
}
//泛类
function fl<T>(a:T):T{
    return a
}
//可以直接调用具有泛型的函数
let result=fl(10)//不指定泛型 TS可以自动
let result2=fl<string>('hello')