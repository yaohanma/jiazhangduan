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
// 记住密码/忘记密码
// .password-bar {
//   display: flex;
//   justify-content: space-between;
//   margin: 30px;
// }
// .psd-link {
//   font-size: 16px;
//   color: #b7bdc6;
//   text-decoration: none;
// }
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
  /*其他登录方式*/
  .others-login-box {
    margin-bottom: 54px;
  }

  .others-login-box .line {
    display: inline-block;
    width: 198px;
    height: 10px;
    border-top: 1px solid #b7bdc6;
    margin: 0 42px;
  }

  .others-login-title {
    display: inline-block;
    font-size: 28px;
    color: #333;
  }

  .others-login-btn {
    text-align: center;
  }
  .others-login-link {
    text-decoration: none;
    font-size: 28px;
    color: #1b76ff;
    margin: 0 92px;
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
			<router-link to="" slot="left">
				<mt-button icon="back" @click="backFamliy"></mt-button>
			</router-link>
			<!-- <mt-button  slot="right"></mt-button> -->
		</mt-header>
		<div class="section-logo">
			<img src="../../../assets/logo.png">
		</div>
		<!--登录表单-->
		<form>
			<!--form的bindsubmit属性是提交调用的事件-->
			<!--账号 输入框-->
			<div class="login-bar">
				<input class='login-number' name="code" type='number' placeholder="请输入账号" placeholder-style="color: #b7bdc6; font-weight: normal"
				 oninput="if(value.length>11)value=value.slice(0,11)" value='' />
			</div>
			<div class="login-bar">
				<!--密码 输入框-->
				<input class='login-number' name="invitation_code" type='number' placeholder="请输入密码" placeholder-style="color: #b7bdc6; font-weight: normal"
				 value='' />
			</div>
			<!-- 记住密码/忘记密码 -->
			<!-- <div class='password-bar'>
        <div class="remember-psd-link psd-link" to="">
          <input type='checkbox'  name='' class='input-checkbox'>
          <span>记住密码</span>
        </div>
        <router-link class="forget-psd-link psd-link" to=""><span>忘记密码</span></router-link>
      </div> -->
			<!--登录按钮-->
			<div class="login-box">
				<button class='login-btn' @click="loginBtn">登录</button>
			</div>
		</form>
		<!--其他登录方式-->
		<div class='others-login-box'>
			<div class='line'></div>
			<div class='others-login-title'>其他登录方式</div>
			<div class='line'></div>
		</div>
		<div class='others-login-btn'>
			<router-link class="others-login-link" to="/login/verificationLogin/verificationLogin"><span>手机号登录</span></router-link>
			<router-link class="others-login-link" to="/login/inviteLogin/inviteLogin"><span>邀请码登录</span></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
		methods: {
			// 点击进入首页
			loginBtn() {
				var params = "loginFamliy";
				this.$bridge.callhandler('loginFamliy', params, (data) => {					
					// 处理返回数据
				}),
				this.$router.push({
					path: '/index/homePageFamily'
				})
			},
			 backFamliy: function() {
				var params = "backFamliy";
				this.$bridge.callhandler('backFamliy', params, (data) => {
					// 处理返回数据
				})
			}
		}
	}
</script>
