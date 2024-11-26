(function(){
    //描述一个对象的类型
    type myType={
        name:string
        age:number
    }

    /**
     * type与interface的区别
     * type：
     *      不仅限于对象类型，还可以用于基本类型、联合类型、元组、交集等
     *      交叉类型（&）来实现类似继承的效果
     *      不支持声明合并，即如果尝试为同一个类型名称定义多个type，将会导致重复定义的警告
     * interface：
     *      主要限于描述对象类型，尽管在某些情况下，接口也可以描述函数类型，但它主要用于对象结构的定义
     *      通过extends关键字来实现继承，支持多继承
     *      支持声明合并，即如果为同一个接口名称定义了多个interface，它们会合并为一个接口
     */
    type num=1 extends Object?1:0
    //extends 在这里是包含的意思 即左边是否包含在右边里面 这里num=1
    /**
     * 接口用来定义一个类结构 用来定义一个类中应该包含哪些属性和方法
     * 同时接口也可以当成类型声明去使用
     * 接口中所有的属性都不能有实际的值
     * 在接口中所有方法都是抽象方法
     */
    interface myInterface{
        name:string,
        age:number
    }
    interface myInterface{
        gender:string
    }

    // 有不确定的属性的时候可以用[propName:string]:any避免报错
    // 还有一些只读属性可以加readonly前缀
    // 对于接口的继承用extends关键字
    interface Axx{
        readonly id:number
        name:string
        age:number
        [propName:string]:any
    }
    interface Bxx extends Axx{
        sex:string
    }

    const obj2:Bxx={
        id:1,
        name:'Anna',
        age:18,
        a:1,
        sex:'female'
    }
    
    const obj:myType={
        name:'aaa',
        age:11
    }
    const obj1:myInterface={
        name:'aaa',
        age:11,
        gender:'male'
    }
    /**
     * 定义类时可以使类去实现一个接口
     * 实现接口就是使类满足接口的要求
     * 一个类通过关键字implements声明自己使用一个或者多个接口(实现多接口)
     */
    interface myInter{
        name:string,
        sayHello():void
    }
    class MyClass implements myInter{
        name:string
        constructor(name:string){
            this.name=name
        }
        sayHello(): void {
            console.log('hi');
            
        }
    }
})()
