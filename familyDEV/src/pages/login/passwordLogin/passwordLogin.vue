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
  color: #000;
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
	#pass-world {
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	height: 100vh;
}
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
		<mt-header class="top-header" title="">
			<router-link to="" slot="left" v-if="backflag">
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
			<!--账号 输入框-->
			<div class="login-bar">
				<input class='login-number' type='tel' placeholder="请输入手机号码" placeholder-style="color: #b7bdc6;" oninput="if(value.length>11)value=value.slice(0,11)"
				 pattern="[0-9]*" v-model="pta_user_id" />
			</div>
			<div class="login-bar">
				<!--密码 输入框-->
				<input class='login-number' type='password' placeholder="请输入密码" placeholder-style="color: #b7bdc6;" v-model="password"
				 oninput="if(value.length>9)value=value.slice(0,9)" autocomplete="off" />
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
				<button type="button" class='login-btn' @click="loginBtn">登录</button>
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
			return {
				pta_user_id: '', //手机号
				password: '', //密码
				backflag:true
			}
		},
		mounted() {
			let back = this.$route.query.backflag
			if(back == '1') {
				this.backflag = false
			}
      localStorage.setItem("passbackfalg",this.backflag)
		},
		methods: {
			// added by stt 登录
			loginBtn() {
				var params = "loginFamliy";
				// 参数校验
				var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
				if (this.pta_user_id == "") {
					Toast('手机号不能为空')
					return;
				}
				if (!myreg.test(this.pta_user_id)) {
					Toast('请输入正确的手机号')
					return;
				}
				if (this.password == "") {
					Toast('密码不能为空')
					return;
				}
				localStorage.removeItem('user');
				this.$post('committee/login/userLogin', {
					"invitation_code": '',
					"password": this.password,
					"pta_user_id": this.pta_user_id,
					"validate_code": "",
					"login_device": ''
				}).then((data) => {
					console.log(data)
					if (!data.success) {
						Toast(data.errorMsg)
					} else {
						localStorage.setItem("user", JSON.stringify(data.result))
						localStorage.setItem("aloneApp", "1")
						// window.apiready = function() {
							// api.sendEvent({
							// 	name: 'loginFamliy'
							// });
							console.log("****************");
							console.log(data.result.pta_user_id);
							console.log("****************");
							api.sendEvent({
								name: 'loginFamliy',
								extra: {
									"pta_user_id":data.result.pta_user_id
								}
							});
						// }
						this.$router.push({
							path: '/index/homePageFamily'
						})
					}
				}, (response) => {
					console.error(response);
				});
			}
		}
	}
</script>
