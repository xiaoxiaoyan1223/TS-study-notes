function num (a:number,b:number) : Array<number> {
    return [a ,b];
}
num(1,2)
function str (a:string,b:string) : Array<string> {
    return [a ,b];
}
str('独孤','求败')

// 我们可以看到上面除了类型不一样，功能是一样的，这个时候我们就可以使用泛型来优化
function Add<T>(a: T, b: T): Array<T>  {
    return [a,b]
}
 
Add<number>(1,2)
Add<string>('1','2')

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

// 也可以使用联合类型
function Sub<T,U>(a:T,b:U):Array<T|U> {
    const params:Array<T|U> = [a,b]
    return params
}
Sub<Boolean,number>(false,1)

// 实例演示
const axios={
    get<T>(url:string):Promise<T> {
        return new Promise((resolve,reject)=>{
            let xhr:XMLHttpRequest=new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.onreadystatechange=()=>{
                if(xhr.readyState==4&&xhr.status==200){
                    resolve(JSON.parse(xhr.responseText))
                }
            }
            xhr.send(null)
        })
    }
}
interface Data{
    message:string
    code:number
}

axios.get<Data>('./data.json').then(res=>{
    console.log(res)
})

/**
 * 泛型约束
 * 我们期望在某一个泛型变量上获取length属性，但是有的数据类型是没有length的，这个时候我们就需要使用泛型约束
 */
interface Len{
    length:number
}
function getLength<T extends Len>(arg:T){
    return arg.length
}