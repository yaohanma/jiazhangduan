<style lang='scss' scoped>
:focus {
  outline: none;
}
	input {
  background: 0;
  border: 0;
  outline: none;
	-webkit-appearance: none;
	-webkit-tap-highlight-color:rgba(0,0,0,0);
}
/*去掉ios input点击的时候 出现一个黑色透明覆盖*/
html,body{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
/*logo 图片*/
.section-logo img {
  width: 184px;
  height: 65px;
  padding: 129px 30px 14px 30px;
	margin: 0 auto;
}
/*手机号*/
.login-bar {
  display: flex;
  background: #f4f5f6;
  font-size: 30px;
  // color: #000;
  border-radius: 10px;
  margin: 30px 30px 0 30px;
  align-items: center;
  font-weight: bolder;
}
.login-number {
	width: 100%;
	font-size: 30px;
	padding: 30px 0 30px 30px;
  font-weight: bold;
  color: #B5BECB !important;
  opacity: 1;
}

/*短信验证码*/
.input-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  border-radius: 10px;
}
.login-code {
	display: flex;
  background: #f4f5f6;
  margin: 0 20px 0 30px;
  color: #000;
  border-radius: 10px;
  width: 450px;
  font-weight: bold;
}
.inputCss {
	padding: 30px 0 30px 30px;
	font-size: 30px;
  width: 320px;
	font-weight: bold;
}
/*验证码按钮*/
.get-validate {
  display: inline-block;
  line-height: 88px;
  width: 220px;
  margin-right: 30px;
  font-size: 30px;
  color: #fff;
  text-align: center;
  background: #ffa11f;
  border-radius: 10px;
}
.codeBox {
  position: relative;
}
.empty-btn {
  position: absolute;
  top: 27px;
  right: 60px;
  width: 36px;
  height: 36px;
  z-index: 99;
}
/*登录按钮*/
.login-box {
  margin: 60px 30px 100px 30px;
}
.login-btn {
    background: #1b76ff;
    width: 100%;
    color: #fff;
    line-height: 100px;
    font-size: 36px;
    border-radius: 50px;
    border: none;
    box-shadow: 0px 20px 30px #d2e4ff;
  }

</style>
<style>
#pass-world .mint-header {
	border-bottom: 0;
}
#pass-world input::-webkit-input-placeholder{
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #pass-world input::-moz-placeholder{   /* Mozilla Firefox 19+ */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #pass-world input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #pass-world input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
</style>

<template>
	<div id="pass-world">
    <!-- 顶部导航栏 -->
		<mt-header class="top-header" title="填写验证码">
			<router-link to="/my/changePhoneNum/changePhoneNum"  slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<!-- <mt-button  slot="right"></mt-button> -->
		</mt-header>


    <!--登录表单-->
    <form>
      <!--form的bindsubmit属性是提交调用的事件-->
      <!--手机号 输入框-->
      <div class="login-bar">
        <input readonly="true" v-model="newPhone" class='login-number' name="code" type='tel' placeholder="请输入手机号码" placeholder-style="color: #b7bdc6; font-weight: normal" oninput="if(value.length>11)value=value.slice(0,11)" />
      </div>
      <!--type='number'  在微信的手机上会调用出手机数字键盘-->
      <!-- maxlength='11'  这里限制了输入的文本长度-->
      <div class='input-view'>
        <div class='codeBox'>
          <!--红色删除 验证码数字按钮-->
          <img class='empty-btn' @click="emptyBtn" v-show="flag" src='../../../assets/icon_empty.png'>
          <div class='inputText login-code'>
            <!--验证码 输入框-->
            <input v-model="validate_code" class='inputCss' type='tel' pattern="[0-9]*"  placeholder='请输入短信验证码' placeholder-style="color: #b7bdc6; font-weight: normal" oninput="if(value.length>6)value=value.slice(0,6)"   />
          </div>
        </div>
        <!--验证码按钮-->
        <div class='get-validate' :style="{'background':(!this.canClick ? '#B5BECB':'#ffa11f')}" @click="reSendCode">{{content}}</div>
      </div>
      <!--登录按钮-->
      <div class="login-box">
        <button class='login-btn' type='button' @click="submitAction">提交</button>
      </div>

    </form>
	</div>
</template>

<script>
  export default {
    components: {
      },
    data() {
      return{
        // 删除验证码按钮
        flag:false,
        // 上级页面传入的手机号
        newPhone:'',
        validate_code: '', //验证码
        content: '获取验证码',
        // 倒计时总时长
        totalTime: 60,
        canClick: true
      }
    },
    // 监视验证码是否为空，如果不为空，清空验证码按钮出现，点击清空验证码
    watch: {
      validate_code() {
        if (this.validate_code == "") {
          this.flag = false;
          return;
        }else {
          this.flag = true;
          return;
        }
      },

    },
    mounted:function () {
      // 获取上级页面传入的手机号
      this.newPhone = this.$route.query.newPhone;
      localStorage.setItem("backPath", "/my/changePhoneNum/changePhoneNum");
      // 倒计时
      this.countDown();
    },
    methods: {

      // 倒计时
      countDown () {
        if (!this.canClick) return  //改动的是这两行代码
        this.canClick = false
        this.content = '剩余' + this.totalTime + 'S'
        let clock = window.setInterval(() => {
          this.totalTime--
          this.content = '剩余' + this.totalTime + 'S'
          if (this.totalTime <= 0) {
            window.clearInterval(clock)
            this.content = '重新发送'
            // 总时长
            this.totalTime = 60
            //这里重新开启
            this.canClick = true
          }
        },1000)
      },

      // 重新发送验证码
      reSendCode() {

        if (this.newPhone === "") {
          Toast('手机号为空')
          return;
        }
        if (!this.canClick) {
          return;
        }
        // 调接口更新手机号码, 成功后 跳入验证码输入页面
        this.$post('/committee/my_message/getVerificationCode', {
        "change_phone": this.newPhone
        }).then((data) => {
          if (!data.success) {
            // 失败
            Toast(data.errorMsg)
          } else {
            // 成功 倒计时等待验证码
            this.countDown();
          }
        });
      },
      // 清空验证码
      emptyBtn() {
        this.validate_code = "";
        this.flag = false;
      },


      // 点击提交按钮
      submitAction () {
        // 判断验证码是否为空
        if (this.validate_code == "") {
          Toast('验证码不能为空');
          return;
        }
        // 调接口 更新手机号码并跳转到登录页面
        this.$post('/committee/my_message/update_phone', {
        "change_phone": this.newPhone,
        "validate_code": this.validate_code,
        }).then((data) => {
          if (!data.success) {
            // 失败
            Toast(data.errorMsg)
          } else {
            // 成功 跳转登录页面
            // 防止清除家长端的数据,所以以下逐个清除 localStorage.clear();
						// 清空本地所有数据
						localStorage.removeItem('user');
						localStorage.removeItem('aloneApp');
						localStorage.removeItem('store');
						localStorage.removeItem('globalData');
            this.$router.push({
              path: '/login/passwordLogin/passwordLogin',
            })
          }
        });
      }
    }
   }

</script>
