(function(){
    /**
     * 以abstract开头的类是抽象类
     *  抽象类和其他类区别不大，只是不能被用来创建对象
     * 抽象类就是用来专门被继承的类
     * 抽象类中可以添加抽象的方法
     */
    //定义一个表示狗的类
    abstract class Animal{
        name:string;
        age:number;
        constructor(name:string,age:number){
            this.name=name
            this.age=age
        }
        /**
         * 定义一个抽象方法
         * 抽象方法使用abstract开头 没有方法体】
         * 抽象方法只能定义在抽象类中 子类必须对抽象方法进行重写
         */
        sayhello(){
            console.log('动物在叫~');
            
        }
    }
    //定义一个表示狗的类
    /**
     * 通过继承 子类将会拥有父类所有的方法和属性
     */
    class Dog extends Animal{
       
        sayhello(){
            //在类的方法中 super就代表当前类的父亲
            //super.sayhello()
        }
        run(){
            console.log(`${this.name}在跑`);
            
        }
    }
    
})()
const dog2=new Dog("旺财",5)