//声明一个变量a,同时指定它的类型为number
let a:number;
//a的类型设置为number 以后的使用过程中a的值只能是number

let b:string //小写
b:'hello'

let d:string='lxy'//声明完变量直接赋值

let c:boolean
c=false
function sum2(a:number,b:number){
    return a+b
}

//返回类型必须是number
function sum1(a:number,b:number):number{
    //这如果是字符串等其他类型会报错
    return a+b
}
sum(123,456) //ts相对比较严格 传参个数多了或者少了都会报错 类型不对也会报错

//也可以使用字面量进行类型声明 一声名就不能改了
let e:10; 
// e=20会报错  有点类似于常量

//可以使用|来连接多个内容
let f:'male'|'femal'
f='male'
f='femal'
//f='hello' 会报错 因为只能是那两个
let g:string|boolean
g='hello'
g=false


//用any之后 与原生的js差不多 不指定变量是什么类型 相当于对变量关闭了ts类型监测
//使用ts时不建议使用any  h的类型是any可以赋值给任意变量
let h:any
h=10
h=false
h='hello'

//unknown 表示未知类型变量 与any差不多 实际上是一个类型安全的any  不能直接赋值给其他变量
let j:unknown
j=10
j='hello'
j=true


//类型断言  可以用来告诉解析器变量的实际类型
/**
 * 语法：
 *   变量 as 类型
 *   <类型>变量
 */
b=j as string
b=<string> j

//void 用来表示空 以函数为例就表示没有返回值的函数 可以return null或者return undefined 

//never表示永远不会有返回结果

//对对象做限制 {}可以用来指定对象中包含哪些属性 语法：{对象名：属性名，……}
//属性名后面加上？表示属性是可选的
let k:{name:string}
k={name:'ggy'}

//[propName:string]:any 表示任意类型的属性
let l:{name:string,[propName:string]:string}

/**
 * 设置函数结构的类型声明
 *    语法：(形参：类型，形参：类型)=> 返回值
 */
let z:(a:number,b:number)=>number

/**
 * 数组的类型声明
 *   类型[]
 *   Array<类型>
 * 
 */
//string[] 表示字符串数组
let x:string[]
x=['a','b','c']
//number[] 表示数值类型
let n:number[]
n=[1,2,3]

/**
 * 元组就是固定长度的数组
 * 语法：[类型，类型，……]
 */
let m:[string,number]
m=['a',3]

/**
 * enum 枚举
 * 
 */
enum Gender{
    Male=0,
    Female=1
}
let q:{name:string,gender:0|1}
q={
    name:'孙悟空',
    gender:0
}
