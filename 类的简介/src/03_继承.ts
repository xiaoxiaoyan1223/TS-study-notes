(function(){
    //定义一个表示狗的类
    class Animal{
        name:string;
        age:number;
        constructor(name:string,age:number){
            this.name=name
            this.age=age
        }
        sayhello(){
            console.log('动物在叫');
            
        }
    }
    //定义一个表示狗的类
    /**
     * 通过继承 子类将会拥有父类所有的方法和属性
     */
    class Dog extends Animal{
        color:string
        constructor(name:string,age:number,color:string){
        //在子类中写了构造函数，就必须对父类的构造函数进行调用
            super(name,age)
            this.color=color
        }
        //想要添加新的属性可以用super
        sayhello(){
            //在类的方法中 super就代表当前类的父亲
            //super.sayhello()
        }
        run(){
            console.log(`${this.name}在跑`);
            
        }
    }
    
})()
const dog1=new Dog("旺财",5)