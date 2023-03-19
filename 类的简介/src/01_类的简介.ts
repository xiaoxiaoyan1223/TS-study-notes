//使用class关键字来定义类
class Person{
    //直接定义属性是实例属性需要通过实例去调用 per.name
    name:string='孙悟空' 
    //在属性前使用static关键字可以定义类属性(静态方法) Person.age
    static age:number=18
    //定义方法
    sayhello(){
        console.log('hi');
        
    }
}
const per=new Person()