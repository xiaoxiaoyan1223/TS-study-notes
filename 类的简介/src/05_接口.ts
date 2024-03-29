(function(){
    //描述一个对象的类型
    type myType={
        name:string
        age:number
    }
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