<style lang="scss" scoped>
// 样式
.BgClass{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: #9ec3fa;
  .bg {
    // width: 100%;
    // height: 100%;
    // display: inline-block;
    // position: relative;
    // (蓝色)背景图
    img{
      width: 100%;
      height: 100%;       
  }
  // 数字背景图
  .codeBg {
    // top: 20px;
    // left: 94px;
    // right: 94px;
    // position: absolute;
    position: relative;
    width: 562px;
    height: 544px;
    margin: 20px auto;
    // .numberBg {
    //   position: absolute;
    //   img{
    //       background-color: rgba(0, 0, 0, 0);
    //   }
    // }
      
    // 输入框部分
    .codeInputClass {
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      // background-color:white;
      // height: 238px;
      // left: 68px;
      // right: 68px;
      // bottom: 200px;
      // overflow: hidden;
    // .number2 {
    //     left: 16.6666%;
    // }
    // .number3 {
    //     left: 33.3332%;
    // }
    // .number4 {
    //     left: 49.9999%;
    // }
    // .number5 {
    //     left: 66.6665%;
    // }
    // .number6 {
    //     left: 83.3331%;
    // }

    }
    //标题: 请输入老师给的6位邀请码
    p{
      font-size: 30px;
      text-align: center;
    } 
    .inputs {
      display: flex;
      justify-content: center;
      width: 92%;
      margin: 0 auto;
      font-size: 60px;
      padding-top: 70px;
        
    }
    .border-input {
      display: inline-block;
      -webkit-appearance: none;
      box-sizing:border-box;
      width: 100%;
      font-size: 42px;
      font-weight: bold; 
      bottom: 3px;
      border: 0;
      text-align: center;
      outline: none;
      color: rgb(4, 147, 240);
      background: rgba(255, 255, 255, 0);
      line-height: 60px;
      border-radius: 0;
      -webkit-border-radius: 0;
      margin:0 10px;
      text-align: center;
      border-bottom: 3px solid rgb(4, 147, 240);
      // border-top: 0px;
      // border-left: 0px;
      // border-right: 0px;
      outline: none;
      -webkit-appearance: none;
    }  
    // 查找家委会
    .seekBtn {
      // position: absolute;
      height: 85px;
      width: 100%;
      left: 0px;
      right: 0px;
      top: 0px;
      background-color: rgb(4, 147, 240);
      color: white;
      border: 0px;
      font-size: 32px;
      font-weight: bold; 
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0px 25px 25px rgba(4, 147, 240, 0.4) ;
    }
  }
}  
}
</style>



<template>
	<div id="inviteCodeBigBg" class="BgClass">
    <!-- 导航栏 -->
    <mt-header title="">
        <router-link to="" slot="left">
            <mt-button icon="back" @click="doback"></mt-button>
        </router-link>
    </mt-header>

    <!-- 蓝色背景图 -->
    <div class ="bg">
      <!-- 数字背景部分 -->
      <div class ="codeBg">
        <div class="numbBg">
          <!-- 数字背景图 -->
          <img src="../../assets/inviteCode@2x.png" alt="数字背景图">
          <!-- 数字输入部分 -->
          <div class="codeInputClass">
            <!-- 标题 -->
            <p>请输入老师给的6位邀请码</p>
            <div class="inputs">
              <input class="border-input"
              v-for="(item,index) in inputList" 
              :key="index"  
              autofocus="autofocus" 
               
              type="tel" name="number" 
              v-model="item.val" 
              @keyup="nextFocus($event,index)"
              @keydown="changeValue(index)">
            </div>
          </div>
        </div>
        <!-- 查找家委会btn -->
        <router-link :to="{name:'homePage',query:{aloneApp:aloneApp}}" slot="left">
        <button class="seekBtn">查找家委会</button>
        </router-link>
    </div>
  </div>
</div>
</template>

<script>
    export default {
    components: {
        },
    data() {
        return{
            inputList: [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}],
			aloneApp: ""
        }
    },
	mounted() {
		this.aloneApp = this.$route.query.aloneApp
	},
    methods: {
        /*对焦到下一个input框去*/
        nextFocus(el,index) {
            var dom = document.getElementsByClassName("border-input"),
                currInput = dom[index],
                nextInput = dom[index + 1],
                lastInput = dom[index - 1];
            /*这里的keyCode 根据不同的平台或许不同,安卓就是不是8*/
            if (el.keyCode != 8) {
                if (index < (this.inputList.length - 1)) {
                    nextInput.focus();
                } else {
                    currInput.blur();
                }
            }else{
                if (index !=0) {
                    lastInput.focus();
                }
            }

            },

            /*当键盘按下的时候清空原有的数*/
            changeValue(index) {
                this.inputList[index].val = "";
            },
		   doback: function() {
			   if(this.$route.query.aloneApp =='2') {
			   		 window.location.href = 'https://tshousedemo.ys100.com/html/my/my_home.html'
			   } else {
			   		var params = "backThapp";
			   		this.$bridge.callhandler('backThapp', params, (data) => {
			   		// 处理返回数据
			   		})
			   }				
			}

        }
    }

</script>