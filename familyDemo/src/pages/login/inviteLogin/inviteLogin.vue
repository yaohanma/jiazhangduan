<style lang='scss' scoped>
input {
  background: 0;
  border: 0;
  outline: none;
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
  height: 88px;
  font-size: 30px;
  color: #000;
  border-radius: 10px;
  margin: 30px 30px 0 30px;
  padding-left: 30px;
  align-items: center;
  font-weight: bolder;
}
.login-number {
  width: 100%;
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
  background: #f4f5f6;
  margin: 0 20px 0 30px;
  height: 88px;
  font-size: 30px;
  color: #000;
  border-radius: 10px;
  width: 450px;
  font-weight: bold;
}
.inputCss {
  height: 88px;
  width: 320px;
  padding-left: 30px;
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
</style>

<template>
	<div id="pass-world">
    <!-- 顶部导航栏 -->
		<mt-header class="top-header" title="">
			<router-link to=""  slot="left">
				<mt-button icon="back" @click="$router.go(-1)"></mt-button>
			</router-link>
			<!-- <mt-button  slot="right"></mt-button> -->
		</mt-header>

    <div class="section-logo">
      <img src="../../../assets/logo.png">
    </div>

    <!--登录表单-->
    <form>
      <!--form的bindsubmit属性是提交调用的事件-->
      <div class="login-bar">
        <!--邀请码 输入框-->
        <input class='login-number' name="invitation_code" type='number' placeholder="请输邀请码" placeholder-style="color: #b7bdc6; font-weight: normal" oninput="if(value.length>6)value=value.slice(0,6)"  value='' />
      </div>
      <!--手机号 输入框-->
      <div class="login-bar">
        <input class='login-number' name="code" type='number' placeholder="请输入手机号码" placeholder-style="color: #b7bdc6; font-weight: normal" oninput="if(value.length>11)value=value.slice(0,11)"  value='' />
      </div>
      <!--type='number'  在微信的手机上会调用出手机数字键盘-->
      <!-- maxlength='11'  这里限制了输入的文本长度-->
      <div class='input-view'>
        <div class='codeBox'>
          <!--红色删除 验证码数字按钮-->
          <img  bindtap='emptyBtn' class='empty-btn' v-if="flag==1" src='../../../assets/icon_empty.png'>
          <div class='inputText login-code'>
            <!--验证码 输入框-->
            <input class='inputCss' type='number' placeholder='请输入短信验证码' placeholder-style="color: #b7bdc6; font-weight: normal" oninput="if(value.length>6)value=value.slice(0,6)"  value='' />
          </div>
        </div>
        <!--验证码按钮-->
        <div class='get-validate'>获取验证码</div>
      </div>
      <!--登录按钮-->
      <div class="login-box">
        <button class='login-btn'>登录</button>
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
        flag:0
      }
    },
    methods: {
      
    }
   }

</script>