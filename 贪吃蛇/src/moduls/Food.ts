
//定义食物类Food
class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;
    constructor(){
        //获取页面中的food元素并将其赋值给element
        this.element=document.getElementById('food')!;
        //定义一个获取食物x轴坐标的方法 
    }
    get X(){
        return this.element.offsetLeft
    }
    //定义一个获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop
    }
    //修改食物位置
    change(){
        //生成随机位置
        //食物的位置最小是0 最大是290
        //蛇移动一次就是一格 一格的大小是10 所以要求食物的移动移动都是10的倍数
        let top=Math.round(Math.random()*29)*10
        let left=Math.round(Math.random()*29)*10
        this.element.style.left=left+'px'
        this.element.style.top=top+'1px'
    }
}
export default Food