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
			<div class='btn-loginOut' @click="quiteFamliy">退出家委会</div>
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
			// 退出登录
			loginOutBtn() {
				this.popupVisible4 = false;
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
						this.$router.push({
							path: '/login/passwordLogin/passwordLogin'
						})
					}
				}).catch(err => {
					//用户取消
					if (err == 'cancel') {
						Toast('取消')
					}
				});
			},
			switchrole: function() {
				var params = "switchrole";
				this.$bridge.callhandler('switchrole', params, (data) => {
					// 处理返回数据
				})
			},
			quiteFamliy: function() {
				var params = "quiteFamliy";
				this.$bridge.callhandler('quiteFamliy', params, (data) => {
					// 处理返回数据
				})
			},
			switchToCommittee() {
				this.$router.push({
				path:'/my/switchToCommittee/switchToCommittee'
				})
			}
		}
	}
</script>
