class Dog{
    name='旺财'
    age=3
    
    //constructor 被称为构造函数
    //构造函数会在对象创建时调用
    constructor(name:string,age:number){
        //在实例方法中,this表示当前实例
        //在构造函数中当前对象就是当前新建的那个对象
        //可以通过this向新建的对象中添加属性
        console.log(this);
        this.name=name
        this.age=age
    }
    bark(){
        alert('汪汪汪')
    }
}
const dog=new Dog('xiao',18)