
//定义表示积分盘的类
class ScorePanel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    maxLevel:number
    upScore:number
    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreEle=document.getElementById('score')!
        this.levelEle=document.getElementById('level')!
        this.maxLevel=maxLevel;
        this.upScore=upScore;
    }
    //设置一个加分的方法
    addScore(){
         //使分数自增
         this.scoreEle.innerHTML=++this.score+''
         //判断分数是多少
         if(this.score%this.upScore===0){
            this.levelUp()
         }
    }
    //设置一个提升等级的方法
    levelUp(){
       
        if(this.level<this.maxLevel)
        {
            this.levelEle.innerHTML=++this.level+''
        }     
    }

}
export default ScorePanel