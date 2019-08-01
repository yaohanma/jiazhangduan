<style lang="scss" scoped>
	.container-view {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

.img-bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.main-view {
  display: flex;
  position: absolute;
  top: 241px;
  width: 100%;
  height: 703px;
  text-align: center;
  justify-content: center;
}

.code-bg {
  position: absolute;
  width: 630px;
  height: 703px;
}

.code-container {
  // position: relative;
  width: 630px;
  height: 703px;
}

.invite-text {
  position: absolute;
  top: 235px;
  width: 630px;
  font-size: 36px;
  font-weight: bold;
  color: black;
}

.code-view {
  position: absolute;
  top: 300px;
  width: 630px;
  font-size: 72px;
  color: rgb(4,147,240);
  font-weight: bold;
	text-align: center;
	border: 0;
	background: 0;
}

.copy-text {
  position: absolute;
  top: 450px;
  line-height: 66px;
  margin-left: 225px;
  width: 180px;
  font-size: 28px;
  color: rgb(4,147,240);
  border: 2px solid rgb(4,147,240);
  border-radius: 34px;
}

.start-invite {
  position: relative;
  border-radius: 0;
  border-bottom: 2px solid rgb(4,147,240);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 0;
  bottom: -564px;
  line-height: 96px;
  width: 630px;
  font-size: 36px;
  background: rgb(4,147,240);
  color: white;
}
// 发送微信好友
.mint-popup-4 {
  width: 100%;
  .wx {
    width: 100%;
    padding: 30px 0;
    background: #fff;
    .wx-img {
      width: 88px;
      height: 88px;
      padding-bottom: 10px;
      margin: 0 auto;
    }
    .wx-txt {
      font-size: 26px;
      color: rgb(49, 51, 64);
      text-align: center;
    }
  }
}
</style>

<template>
	<div>
		<!-- 顶部导航栏 -->
		<mt-header title="邀请家委" fixed>
			<router-link to="/my/familyMember/familyMember" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button slot="right"></mt-button>
		</mt-header>

		<div class='container-view'>
			<img class='img-bg' mode='scaleToFill' src='../../../assets/invite_family_bg.png'>
		</div>
		<div class='main-view'>
			<img class='code-bg' mode='scaleToFill' src='../../../assets/invite_family_code_bg.png'>
			<div class='code-container'>
				<textarea class='code-view' id="copy_text">{{code}}</textarea>
				<div class='copy-text tagRead' data-clipboard-action="copy" data-clipboard-target="#copy_text" @click="copy">复 制</div>
				<button class='start-invite' @click="popup4" lang="zh_CN">开始邀请</button>
			</div>
		</div>
		<!-- 微信弹框 -->
		<mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
			<div class="wx" @click="wxShare()">
				<img class="wx-img" src="../../../assets/wx.png" alt="微信图片">
				<p class="wx-txt">微信好友</p>
			</div>
		</mt-popup>
	</div>
</template>

<script>
	import Clipboard from "clipboard";
	export default {
		data() {
			return {
				popupVisible4: false, // 发送家长弹出微信，默认隐藏
				code: ""
			}
		},
    created() {
      window.addEventListener('setItem', ()=> {
        this.popupVisible4 = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
    },
    watch: {
    	popupVisible4: function (val) {
    		if(val) {
    			sessionStorage.setItem('watchStorage',true)
    		} else {
    			sessionStorage.setItem('watchStorage',false)
    		}
    	}
    },
		mounted() {
      localStorage.setItem("backPath", "/my/familyMember/familyMember");
			this.init();
		},
		methods: {
			// 微信弹框
			popup4() {
				this.popupVisible4 = true;
			},
			// added by stt 微信分享 20190505
			wxShare() {
				this.popupVisible4 = false;
				let that = this;
				let wx = api.require('wx');
				// 活动详情画面所需参数
				let globalData = JSON.parse(localStorage.getItem("globalData"));
				// wx.isInstalled(function(ret, err) {
				// 	if (ret.installed) {
						// alert("当前设备已安装微信客户端");
						wx.shareWebpage({
							apiKey: 'wx6d38404a28adb5e3',
							scene: 'session',
							title: '您被邀请加入家委会~',
							description: '家校互联互通，用爱呵护孩子成长',
							thumb: 'widget://res/iconfont-touxiang.png',
							contentUrl: 'https://tsdevfamily.ys100.com/my/downloadApp/downloadApp?code=' + that.code
						}, function(ret, err) {
							if (ret.status) {
								// alert(JSON.stringify(ret))
							} else {
								// alert(JSON.stringify(err))
								alert('发送失败！');
							}
						});
				// 	} else {
				// 		alert('当前设备未安装微信客户端');
				// 	}
				// });
			},
			// 复制功能 added by stt 20190506
			copy() {
				var clipboard = new Clipboard(".tagRead");
				clipboard.on("success", e => {
					// console.log("复制成功");
					// 释放内存
					e.clearSelection();
					clipboard.destroy();
					Toast('复制成功');
				});
				clipboard.on("error", e => {
					// 不支持复制
					// console.log("该浏览器不支持自动复制");
					// 释放内存
					e.clearSelection();
					clipboard.destroy();
					Toast('复制失败');
				});
			},
			// 点击进入详细页
			goDownloadPage() {
				this.$router.push({
					path: '/my/downloadApp/downloadApp?code=' + this.code
				})
			},
			init() {
				var code = this.$route.query.code;
				var user = JSON.parse(localStorage.getItem("user"))
				this.$post('/committee/family/invitation_code', {
					"pta_id": user.pta_id,
					"invitation_flag": code
				}).then((data) => {
					if (!data.success) {
						Toast(data.errorMsg)
					} else {
						this.code = data.result

					}
				});

			}
		}
	}
</script>
