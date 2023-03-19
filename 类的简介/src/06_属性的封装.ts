(function(){
    class Person{
        //TS可以在属性前添加属性的修饰符
        /**
         * public 修饰的属性可以在任意位置访问(修改)
         * private 私有属性,私有属性只能在类内部进行修改
         *         通过在类中添加方法使得私有属性可以在外部被访问
         * protected受保护的属性 只能在当前类或者当前类的子类中使用
         */
        private _name:string
        private _age:number
        constructor(name:string,age:number){
            this._name=name
            this._age=age
        }
        // //定义方法来获得类的属性
        // getName(){
        //     return this._name
        // }
        // //定义方法来设置属性
        // setName(value:string){
        //     this._name=value
        // }
        // setAge(value:number){
        //     //判断年龄是否合法
        //     if(value>=0){
        //         this._age=value
        //     }
        // }

        /**
         * getter方法来读取属性
         * setter属性来设置属性
         *      他们被称为属性存存储器
         */
        //TS中设置getter方法的方式
        get name(){
            return this._name
        }
        set name(value:string){
            this._name=value
        }
    }
    const per=new Person('ggy',18)
    /**
     * 现在属性是在对象中设置，属性可以任意的被修改
     * 属性可以被任意修改将会导致中的数据变得不安全 解决方法：在属性前面加上下划线
     */
    // per._name='lxy'
    // console.log(per.getName());
    console.log(per.name);//其实就是调用了上面的get name()
    
    class A{
        // protected num:number
        // constructor(num:number){
        //     this.num=num
        // }
        //上面的另一种简写方法
        constructor(protected num:number){
            
        }
    }
    class B extends A{
        test(){
            console.log(this.num);
            
        }
    }
})()