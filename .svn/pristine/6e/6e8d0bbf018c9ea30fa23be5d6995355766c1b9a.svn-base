<style lang="scss" scoped>
	:focus {
  outline: none;
}
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
    //   font-size: 60px;
      padding-top: 70px;

    }
    .border-input {
      display: inline-block;
    //   -webkit-appearance: none;
      box-sizing:border-box;
      width: 85%;
      font-size: 90px;
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
    //   margin:0 10px;
      text-align: center;
      border-bottom: 3px solid rgb(4, 147, 240);
      // border-top: 0px;
      // border-left: 0px;
      // border-right: 0px;
      outline: none;
      letter-spacing: 8px;
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

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

</style>



<template>
	<div id="inviteCodeBigBg" class="BgClass">
		<!-- 导航栏 -->
		<mt-header title="家委会">
			<router-link to="/my/switchToCommittee/switchToCommittee" slot="left" v-if="this.$route.query.flag == 'formSwitch' ">
				<mt-button icon="back"></mt-button>
			</router-link>
			<router-link to="" slot="left" v-else>
				<mt-button icon="back" @click="doback"></mt-button>
			</router-link>
		</mt-header>

		<!-- 蓝色背景图 -->
		<div class="bg">
			<!-- 数字背景部分 -->
			<div class="codeBg">
				<div class="numbBg">
					<!-- 数字背景图 -->
					<img src="../../assets/inviteCode@2x.png" alt="数字背景图">
					<!-- 数字输入部分 -->
					<div class="codeInputClass">
						<!-- 标题 -->
						<p>请输入6位邀请码</p>
						<div class="inputs">
							<!-- <input class="border-input"
              v-for="(item,index) in inputList"
              :key="index"
              autofocus="autofocus"

              type="tel" name="number"
              v-model="item.val"
              @keyup="nextFocus($event,index)"
              @keydown="changeValue(index)"> -->
							<input type="tel" class="border-input" pattern="[0-9]*"  oninput="if(value.length>6)value=value.slice(0,6)" v-model="invitation_code">
						</div>
					</div>
				</div>
				<!-- 查找家委会btn -->
				<button class="seekBtn" @click="loginBtn">查找家委会</button>
				<!-- <router-link :to="{name:'homePage',query:{aloneApp:aloneApp}}" slot="left">
        </router-link> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				// inputList: [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}],
				aloneApp: "",
				pta_user_id: '',
				invitation_code: ''
			}
		},
		mounted() {
			this.aloneApp = this.$route.query.aloneApp,
			this.pta_user_id = this.$route.query.pta_user_id
      if(this.$route.query.flag == 'formSwitch') {
        localStorage.setItem("backPath", "/my/switchToCommittee/switchToCommittee");
      } else {
        localStorage.setItem("backPath", "");
      }
		},
		methods: {
			/*对焦到下一个input框去*/
			// nextFocus(el,index) {
			//     var dom = document.getElementsByClassName("border-input"),
			//         currInput = dom[index],
			//         nextInput = dom[index + 1],
			//         lastInput = dom[index - 1];
			//     /*这里的keyCode 根据不同的平台或许不同,安卓就是不是8*/
			//     if (el.keyCode != 8) {
			//         if (index < (this.inputList.length - 1)) {
			//             nextInput.focus();
			//         } else {
			//             currInput.blur();
			//         }
			//     }else{
			//         if (index !=0) {
			//             lastInput.focus();
			//         }
			//     }

			//     },

			//     /*当键盘按下的时候清空原有的数*/
			//     changeValue(index) {
			//         this.inputList[index].val = "";
			//     },
			doback: function() {
				if (JSON.parse(localStorage.getItem("aloneApp")) == '2') {
					localStorage.removeItem('user');
					localStorage.removeItem('aloneApp');
					localStorage.removeItem('store');
					localStorage.removeItem('globalData');
					window.location.href = 'https://tsdevhouse.ys100.com/html/my/my_home.html'
				} else {
					localStorage.removeItem('user');
					localStorage.removeItem('aloneApp');
					localStorage.removeItem('store');
					localStorage.removeItem('globalData');
					api.sendEvent({
						name: 'backThapp'
					});
				}
			},
			// added by stt 登录
			loginBtn() {
				var myinvitation_code = /^\d{6}$/;
				// var tmp = '';
				// for(let i=0;i<this.inputList.length;i++){
				// 	tmp = tmp + this.inputList[i].val;
				// }
				// this.invitation_code = tmp;
				// if (this.invitation_code == "") {
				// 	Toast('邀请码不能为空')
				// 	return;
				// }
				if (!myinvitation_code.test(this.invitation_code)) {
					Toast('请输入6位数字的邀请码')
					return;
				}

				this.$post('committee/app_login/userLogin', {
					"invitation_code": this.invitation_code,
					"pta_user_id": this.pta_user_id
				}).then((data) => {
					console.log(data)
					if (!data.success) {
						// Toast(data.errorMsg) // 邀请码已过期、邀请码不存在
						Toast('邀请码错误，请填写正确的邀请码'); // 交互要求提示文案
					} else {
						// window.apiready = function() {
							api.sendEvent({
								name: 'loginFamliy'
							});
						// }
						localStorage.setItem("user", JSON.stringify(data.result))
						this.$router.push({
							path: '/index/homePage'
						})
					}
				}, (response) => {
					console.error(response);
				});
			},
		}
	}
</script>
