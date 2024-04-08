class Snake{
    //表示蛇头的元素
    head:HTMLElement;
    bodies:HTMLCollection
    //获取蛇的容器
    element:HTMLElement
    constructor(){
        this.element=document.getElementById('snake')!;
        this.head=document.querySelector('#snake>div')!;
        this.bodies=document.getElementById('snake')!.getElementsByTagName('div');
    }
    //获取蛇的坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    //设置蛇头的坐标
    set X(value:number){
        //如果新值和旧值相同，则直接返回不修改
        if(this.X=value)
        return
        // X值的合法范围0-290之间
        if(value<0||value>290)
        {
            //说明蛇撞墙了
            throw new Error('蛇撞墙了')
        }
        //调用移动身体的函数
        this.moveBody()
        this.head.style.left=value+'px'
    }
    set Y(value:number){
        // Y值的合法范围0-290之间
        if(value<0||value>290)
        {
            //说明蛇撞墙了
            throw new Error('蛇撞墙了')
        }
        //修改x时是在修改水平坐标，蛇在左右移动，不能向右或者向左掉头
        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft===value){
            //如果发生掉头，让蛇反方向继续移动
            if(value>this.X){
                //value>X说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value=this.X-10
            }else{
                value=this.X+10
            }
        }
        //修改y时是在修改垂直坐标，蛇在左右移动，不能向右或者向左掉头
        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop===value){
            //如果发生掉头，让蛇反方向继续移动
            if(value>this.Y){
                //value>X说明蛇在向上走，此时发生掉头，应该使蛇继续向下走
                value=this.Y-10
            }else{
                value=this.Y+10
            }
        }
        //移动身体
        this.moveBody()
        this.head.style.top=value+'px'
    }
    //增加蛇身体的方法
    addBody(){
        //向element中添加div
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }
    //移动蛇身体的方法
    moveBody(){
        /**
         * 将后边的身体设置为前面身体的位置 依次移动到前一个身体的位置
         */
        for(let i=this.bodies.length-1;i>0;i--)
        {
            //获取前边身体的位置
            let X=(<HTMLElement>this.bodies[i-1]).offsetLeft;
            let Y=(<HTMLElement>this.bodies[i-1]).offsetTop;
            //将值设置到当前身体上  提醒：以括号开头的语句必须加分号 否则会报错
            //as是断言 表示我们肯定元素是html元素
            (this.bodies[i] as HTMLElement).style.left=X+'px';
            (this.bodies[i] as HTMLElement).style.top=Y+'px';
        }
    }
}
export default Snake