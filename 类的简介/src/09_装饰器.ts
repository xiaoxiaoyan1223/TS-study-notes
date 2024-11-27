/**
 * 要使用装饰器，需要在tsconfig中将下面两个属性设置为true
 *  "experimentalDecorators": true,
 *  "emitDecoratorMetadata": true, 
 */
// 1、类装饰器 ClassDecorator
// target是http的构造函数
const Base:ClassDecorator=(target)=>{
    console.log(target)
    target.prototype.xiaoyan='xiaoyan'
    target.prototype.fn=()=>{
        console.log('lalala')
    }
}
// 下面就是装饰器的语法 在编译阶段会自己执行函数
@Base
class Http {
    // 假如里面有超级多的代码  但是我们需要往里面添加一个方法 这个时候我们可以使用装饰器
}

const http=new Http() as any

// 2、装饰器工厂
// 其实也就是一个高阶函数 外层的函数接受值 里层的函数最终接受类的构造函数
const watcher = (name: string): ClassDecorator => {
    const fn=(target: Function) => {
        target.prototype.getParams = <T>(params: T): T => {
            return params
        }
        target.prototype.getOptions = (): string => {
            return name
        }
    }
    return fn
}
 
@watcher('name')
class A {
    constructor() {
 
    }
}
 
const a = new A();
console.log((a as any).getParams('123'));


// 3、方法装饰器MethodDecorator
const Get=(url:string)=>{
    const fn:MethodDecorator=(target,key,descriptor:PropertyDescriptor)=>{
        // target {}
        // key getList
        // descriptor  {
        // value:[Function getList],
        // writable:true
        // enumerable:false
        // configurable:true
        // }
        axios.get(url).then(res=>{
            descriptor.value(res.data)
        })
    }
    return fn
}

class Http1 {
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    // 
    getList(data:any){
        console.log(data)
    }
}

