<style lang='scss' scoped>
	.view-container {
		margin: 320px 30px 30px 30px;
	}

	.btn-changeCommittee,
	.btn-loginOut {
		font-size: 36px;
		color: #fff;
		background: #1b76ff;
		text-align: center;
		border-radius: 48px;
		line-height: 96px;
		margin-bottom: 60px;
		box-shadow: 0 10px 20px #ddeafd;
	}

	.btn-loginOut {
		background: #b5becb;
	}

	.mint-msgbox-title {
		font-size: 30px;
	}
</style>


<template>
	<div>
		<!-- 顶部导航栏 -->
		<mt-header title="设置">
			<router-link to="/my/myIndex/myIndex" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button slot="right"></mt-button>
		</mt-header>
		<!-- 切换内容 -->
		<div class='view-container'>
			<div class='btn-changeCommittee' @click="switchToCommittee">切换家委会</div>
			<div class='btn-changeCommittee' @click="switchrole">切换身份</div>
			<div class='btn-loginOut' @click="loginOutBtn">退出登录</div>
			<!-- <div class='btn-loginOut' @click="quiteFamliy">退出家委会</div> -->
		</div>

	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
    mounted() {
      localStorage.setItem("backPath", "/my/myIndex/myIndex");
    },
		methods: {
			// 退出登录
			loginOutBtn() {
				MessageBox.confirm('', {
					message: '退出后不删除历史数据，下次登录可正常使用',
					title: '确认退出登录吗？',
					showConfirmButton: true,
					showCancelButton: true,
					closeOnClickModal: false, // 点击背景是否关闭弹框
					cancelButtonClass: 'cancelButton',
					confirmButtonClass: 'confirmButton',
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(action => {
					//用户选择确定
					if (action == 'confirm') {
						// Toast('确定')
						this.logOutAction();

					}
				}).catch(err => {
					//用户取消
					if (err == 'cancel') {
						// Toast('取消')
					}
				});
			},
			// 退出登录
			logOutAction() {
				this.$post('/committee/login/logout', {}).then((data) => {
					if (!data.success) {
						// 失败
						Toast(data.errorMsg)
					} else {
						api.sendEvent({
							name: 'logoutFamily'
						});
						// 成功
						// 防止清除家长端的数据,所以以下逐个清除 localStorage.clear();
						// 清空本地所有数据
						localStorage.removeItem('user');
						localStorage.removeItem('aloneApp');
						localStorage.removeItem('store');
						localStorage.removeItem('globalData');
						this.$router.push({
							path: '/login/passwordLogin/passwordLogin',
							query: {
								backflag: '1'
							}
						})
					}
				});
			},
			switchrole: function() {
				let user = JSON.parse(localStorage.getItem('user'));
				// 清空本地所有数据
				// localStorage.removeItem('user');
				// localStorage.removeItem('aloneApp');
				// localStorage.removeItem('store');
				// localStorage.removeItem('globalData');
				api.sendEvent({
					name: 'switchrole'
					// extra: {
					// 	"phone":user.pta_user_id
					// }
				});
			},
			quiteFamliy: function() {
				// 防止清除家长端的数据,所以以下逐个清除 localStorage.clear();
				// 清空本地所有数据
				this.$post('/committee/login/logout', {}).then((data) => {
					if (!data.success) {
						// 失败
						Toast(data.errorMsg)
					} else {
						api.sendEvent({
							name: 'quiteFamliy'
						});
						// 成功
						// 防止清除家长端的数据,所以以下逐个清除 localStorage.clear();
						// 清空本地所有数据
						localStorage.removeItem('user');
						localStorage.removeItem('aloneApp');
						localStorage.removeItem('store');
						localStorage.removeItem('globalData');
						this.$router.push({
							path: '/login/passwordLogin/passwordLogin'
						})
					}
				});
			},
			switchToCommittee() {
				this.$router.push({
					path: '/my/switchToCommittee/switchToCommittee'
				})
			}
		}
	}
</script>
