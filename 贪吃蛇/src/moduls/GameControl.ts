//游戏的控制器
import Snake from "./Snake"
import Food from './Food'
import ScorePanel from "./ScorePanel"

class GameControl{
    //定义三个属性
    snake:Snake
    food:Food
    scorepanel:ScorePanel
    //创建一个属性来存储蛇的移动方向
    direction:string=''
    //创建一个属性来记录游戏是否结束
    isLive=true
    constructor(){
        this.snake=new Snake()
        this.food=new Food()
        this.scorepanel=new ScorePanel()
    }
    //游戏的初始化方法，调用后游戏即开始
    init(){
        //绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        //调用run方法使蛇移动
    }
    //创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        //需要检查一下event.key是否合法
        this.direction=event.key
    }
    //创建一个控制蛇移动的方法
    run(){
        let X=this.snake.X
        let Y=this.snake.Y
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y-=10
                break;
            case "ArrowDown":
            case "Down":
                Y+=10
                break;
            case "ArrowLeft":
            case "Left":
                X-=10
                break;
            case "ArrowRight":
            case "Right":
                X+=10
                break;
        }
        //检查蛇是否吃到了食物
        this.checkEat(X,Y)
        try {
            this.snake.X=X
            this.snake.Y=Y
        } catch (error) {
            //游戏结束
            alert('游戏结束')
            //将isLive设为false
            this.isLive=false
        }
        
        //开启一个定时器调用
        this.isLive&&setTimeout(this.run.bind(this),300-(this.scorepanel.level-1)*30)
    }
    //定义一个方法，检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        if(X===this.food.X&&Y===this.food.Y)
        {
            this.food.change()
            this.scorepanel.addScore()
            this.snake.addBody()
        }

    }
}
export default GameControl