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
			<router-link to="" slot="left">
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
			<!--手机号 输入框-->
			<div class="login-bar">
				<input class='login-number' v-model="pta_user_id" type='tel' placeholder="请输入手机号码" placeholder-style="color: #b7bdc6; font-weight: normal"
				 oninput="if(value.length>11)value=value.slice(0,11)" pattern="[0-9]*" />
			</div>
			<!--type='number'  在微信的手机上会调用出手机数字键盘-->
			<!-- maxlength='11'  这里限制了输入的文本长度-->
			<div class='input-view'>
				<div class='codeBox'>
					<!--红色删除 验证码数字按钮-->
					<img @click='emptyBtn' class='empty-btn' v-show="flag" src='../../../assets/icon_empty.png'>
					<div class='inputText login-code'>
						<!--验证码 输入框-->
						<input class='inputCss' type='tel'   placeholder='请输入短信验证码' placeholder-style="color: #b7bdc6;"
						 oninput="if(value.length>6)value=value.slice(0,6)" pattern="[0-9]*" v-model="validate_code" />
					</div>
				</div>
				<!--验证码按钮-->
				<div class='get-validate' :style="{'background':(disabled ? '#B5BECB':'#ffa11f')}"
				 @click="disabled?'':getVerificationCode()">{{codename}}</div>
				 
			</div>
			<!--登录按钮-->
			<div class="login-box">
				<button class='login-btn' @click="loginBtn" type="button">登录</button>
			</div>
			<!--其他登录方式-->
			<div class='others-login-box'>
				<div class='line'></div>
				<div class='others-login-title'>其他登录方式</div>
				<div class='line'></div>
			</div>
			<div class='others-login-btn'>
				<router-link class="others-login-link" to="/login/passwordLogin/passwordLogin"><span>账号登录</span></router-link>
				<router-link class="others-login-link" to="/login/inviteLogin/inviteLogin"><span>邀请码登录</span></router-link>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				disabled: false,
				codename: '获取验证码',
				pta_user_id: '', // 用户名
				validate_code: '', // 验证码
				// 删除验证码按钮
				flag: false,
				// watchNum:''
			}
		},
		// 监视验证码是否为空，如果不为空，清空验证码按钮出现，点击清空验证码
		watch: {
      validate_code() {
        if (this.validate_code == "") {
					this.flag = false;
        }else {
          this.flag = true;
        }
      },
     
    },
		methods: {
			// 登录方法
			loginBtn() {
				var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
				if (this.pta_user_id == "") {
					Toast("手机号不能为空");
					return;
				}
				if (!myreg.test(this.pta_user_id)) {
					Toast("请输入正确的手机号");
					return;
				}
				if (this.validate_code == "") {
					Toast("验证码不能为空");
					return;
				}
				localStorage.removeItem('user');
				this.$post('committee/login/userLogin', {
					"pta_user_id": this.pta_user_id,
					"validate_code": this.validate_code,
					"login_device": ''
				}).then((data) => {
					console.log(data)
					if (!data.success) {
						Toast(data.errorMsg)
					} else {
						// window.apiready = function() {
							// api.sendEvent({
							// 	name: 'loginFamliy'      
							//  });
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
						localStorage.setItem("user", JSON.stringify(data.result))
						localStorage.setItem("aloneApp", "1")
						this.$router.push({
							path: '/index/homePageFamily'
						})
					}
				}, (response) => {
					console.error(response);
				});
			},
			//获取验证码
			getVerificationCode() {
				var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
				if (this.pta_user_id == "") {
					Toast("手机号不能为空");
					return;
				}
				if (!myreg.test(this.pta_user_id)) {
					Toast("请输入正确的手机号");
					return;
				}
				this.disabled = true;
				this.$post('committee/login/sendVerificationCode', {
					"pta_user_id": this.pta_user_id
				}).then((data) => {
						console.log(data)
						if (!data.success) {
							Toast(data.errorMsg)
							this.disabled = false;
						} else {
							// debugger
							var num = 61;
							var timer = setInterval(()=> {
								num--;
								if (num <= 0) {
									clearInterval(timer);
									this.codename = '重新发送';
									this.disabled = false;
								} else {
									this.codename = '剩余' + num + 'S';
								}
							}, 1000);
						}
				}, (response) => {
					console.error(response);
					this.disabled = false;
				});
		},
		// 清空验证码
		emptyBtn() {
			this.validate_code = "";
			this.flag = false
		},
		// 返回
		backFamliy: function() {
			api.sendEvent({
				name: 'backFamliy'
			});
		}
	}
	}
</script>
