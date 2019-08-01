<style lang='scss' scoped>
.canvas {
  position: relative;
  display: flex;
  justify-content: center;
}
.people-number {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 90px;
  font-size: 26px;
  color: rgb(49, 51, 64);
  text-align: center;
}
</style>
<template>
  <div id="app">
    <template>
      <div class="canvas">
        <canvas id="cav" width="160" height="160"></canvas>
        <p class="people-number">已报名人数</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num:0,
      canvas: '',
      context: '',
      cirX: '',
      cirY: '',
      rad: '',
      n: 0,
      speed: 150,
      r: 36
    }
  },
  props:[
    'percent',
    'id'
  ],
  mounted () {
    this.canvas = document.getElementById("cav")
    this.context = this.canvas.getContext("2d")
    this.context.scale(2,2);
    this.cirX = 40,//this.canvas.width/ 2
    this.cirY = 40,//this.canvas.height/ 2
    this.rad = Math.PI * 2 / 100
		this.n = this.id
    this.DreamLoading()
  },
	watch: {
      id(val) {
        this.n = this.id;
				 requestAnimationFrame(this.DreamLoading);
      }
    },
  created () {
  },
  methods:{
    //绘制最外层细圈
    writeCircle(){
        this.context.strokeStyle = "#e7e7ee";       //设置边线的颜色
        this.context.save();         //save和restore可以保证样式属性只运用于该段canvas元素
        this.context.lineWidth = 5;
        this.context.beginPath();    //开始路径
        this.context.arc(this.cirX, this.cirY, this.r, 0, Math.PI * 2, false);      //画一个圆的路径
        this.context.stroke();       //绘制边线
        this.context.closePath();
        this.context.restore();
    },
    //绘制文本
    writeText(n){
        this.context.save();
        this.context.font = "20px Arial";
        this.context.fillStyle="#f7c84c"; //字体颜色
        this.context.textAlign = "center"; // 圆内数字居中
        this.context.fillText(n.toFixed(0),this.cirX - 0 ,this.cirY + 6); //绘制实心
        //context.strokeStyle = "#49f";
        // context.strokeText(n.toFixed(0)+"%",cirX - 30 ,cirY +10); //绘制空心
        this.context.stroke();
        this.context.restore();
    },
    //绘制黄色外圈
    writeBlue(n){
        this.context.save(); // 保存当前的绘图状态
        this.context.beginPath(); //路径开始
        this.context.strokeStyle = "#f7c84c"; //设置描边样式
        this.context.lineWidth = 8; //设置线宽
        this.context.lineCap = 'round'; //属性设置或返回线条末端线帽的样式
        console.log(n)
        if(n > 0) {
          this.context.arc(this.cirX, this.cirY, this.r, -Math.PI/2,-Math.PI/2 + this.rad*n, false); 
        }
        
        //this.context.arc(this.cirX, this.cirY, this.r, -Math.PI/2,-Math.PI/2 + n*this.rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        this.context.stroke(); //绘制
        this.context.closePath(); //路径结束
        this.context.restore(); // 恢复之前保存的绘图状态
    },
    DreamLoading(){
        // console.log(this.id)
        //清除所有，重新绘制
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.writeCircle();
        this.writeText(this.id);
        this.writeBlue(this.percent)
//      if(this.n < 100 && this.n <= 60){
        if(this.n <= this.percent){
            this.n = this.n+1;
        }else {
          return this.n = 0;
        }
        // //setTimeout(DreamLoading,speed);
        requestAnimationFrame(this.DreamLoading);
    }
  }
}
</script>

