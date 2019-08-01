<style lang='scss' scoped>
	.view-container {
		margin: 30px;
	}

	.view-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 188px;
		padding: 0 30px;
		border-radius: 94px;
		box-shadow: 0 0 20px #e7e7e7;
		align-items: center;
		margin-bottom: 36px;
		margin-top: 60px;

		.header-box {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.view-header-home {
		margin-top: 0;
		box-shadow: none;
		border-bottom: 2px solid #ededed;
		border-radius: 0;

		.right-arrow {
			display: none;
		}
	}

	.icon-header {
		height: 128px;
		width: 128px;
		margin-right: 30px;
		border-radius: 64px;
	}

	.header-text {
		display: flex;
		flex-direction: column;
		width: 460px;
		height: 188px;
		justify-content: center;
	}

	.header-name {
		font-size: 48px;
		color: #000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: -10px;
		padding-bottom: 10px;
		font-weight: bold;
	}

	.header-desc {
		display: flex;
		font-size: 24px;
		color: #a0a7b3;
	}

	.header-desc span {
		padding: 0 20px;
	}

	.cell-link {
		text-decoration: none;
	}

	.control-list {
		display: flex;
		flex-direction: row;
		line-height: 100px;
		justify-content: space-between;
		align-items: center;
	}

	.control-list .control-title {
		display: flex;
		align-items: center;
		/*垂直居中*/
		justify-content: center;
		/*水平居中*/
		font-weight: bold;
	}

	.control-list p {
		font-size: 30px;
		color: #000;
		padding-left: 20px;
	}

	.right-arrow {
		height: 18px;
		width: 12px;
	}

	.icon_committeeNum {
		width: 34px;
		height: 30px;
	}

	.icon_createCommittee {
		width: 32px;
		height: 32px;
	}

	.icon_settings {
		width: 34px;
		height: 33px;
	}
</style>

<template>
	<div>
		<!-- 顶部导航栏 -->
		<mt-header title="我的" v-if="isAloneApp">
			<router-link to="/index/homePage" slot="left">
				<!-- <mt-button icon="back"></mt-button> -->
			</router-link>
			<mt-button slot="right"></mt-button>
		</mt-header>

		<!-- 顶部导航栏 -->
		<mt-header title="我的" v-if="!isAloneApp">
			<router-link to="/index/homePage" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button slot="right"></mt-button>
		</mt-header>

		<div class='view-container'>

			<router-link class="cell-link" to="/my/userInfo/userInfo" v-if="isAloneApp">
				<div class='view-header'>
					<!--头像-->
					<div class="header-box">
						<img class="icon-header" src="../../../assets/my_headChenPa@2x.png">
						<div class='header-text'>
							<p class='header-name'>家委001</p>
							<div class='header-desc'>
								<p>一年级一班</p>
								<span>|</span>
								<p>创建者</p>
							</div>
						</div>
					</div>
					<!--右箭头-->
					<img class='right-arrow' src='../../../assets/right-arrow.png'>
				</div>
			</router-link>

			<div class='view-header view-header-home' v-if="!isAloneApp">
				<!--头像-->
				<div class="header-box">
					<img class="icon-header" src="../../../assets/my_headChenPa@2x.png">
					<div class='header-text'>
						<p class='header-name'>家委001</p>
						<div class='header-desc'>
							<p>一年级一班</p>
							<span>|</span>
							<p v-if="!isParent">创建者</p>
							<p v-if="isParent">组织委员</p>
						</div>
					</div>
				</div>
				<!--右箭头-->
				<img class='right-arrow' src='../../../assets/right-arrow.png'>
			</div>

			<!--家委会成员-->
			<router-link class="cell-link" to="/my/familyMember/familyMember">
				<div class='control-list'>
					<div class='control-title'>
						<img class='icon_committeeNum' src='../../../assets/icon_committeeNum.png'>
						<p>家委会成员</p>
					</div>
					<div>
						<img class='right-arrow' src='../../../assets/right-arrow.png'>
					</div>
				</div>
			</router-link>

			<!--创建家委会-->
			<router-link class="cell-link" to="/my/createCommittee/createCommittee">
				<div class='control-list'v-if="!isParent">
					<div class='control-title' >
						<img class='icon_createCommittee' src='../../../assets/icon_createCommittee.png'>
						<p>创建家委会</p>
					</div>
					<div>
						<img class='right-arrow' src='../../../assets/right-arrow.png'>
					</div>
				</div>
			</router-link>

			<!--切换家委会-->
			<!-- <router-link class="cell-link" to="/my/switchToCommittee/switchToCommittee">
				<div class='control-list'>
					<div class='control-title'>
						<img class='icon_createCommittee' src='../../../assets/icon_switchToCommittee.png'>
						<p>切换家委会</p>
					</div>
					<div>
						<img class='right-arrow' src='../../../assets/right-arrow.png'>
					</div>
				</div>
			</router-link> -->

			<!--切换身份-->
			<!-- <router-link class="cell-link" to="" v-if="isAloneApp">
				<div class='control-list'>
					<div class='control-title' @click="switchrole">
						<img class='icon_createCommittee' src='../../../assets/icon_identity.png'>
						<p>切换身份</p>
					</div>
					<div>
						<img class='right-arrow' src='../../../assets/right-arrow.png'>
					</div>
				</div>
			</router-link> -->

			<!--设置-->
			<router-link class="cell-link" to="/my/settings/settings" v-if="isAloneApp">
				<div class='control-list'>
					<div class='control-title'>
						<img class='icon_settings' src='../../../assets/icon_settings.png'>
						<p>设置</p>
					</div>
					<div>
						<img class='right-arrow' src='../../../assets/right-arrow.png'>
					</div>
				</div>
			</router-link>

		</div>

		<!-- 公共底部 -->
		<publicFooter v-if="isAloneApp"></publicFooter>

	</div>
</template>

<script>
	// 公共底部
	import publicFooter from '@/components/publicFooter'
	export default {
		components: {
			publicFooter
		},
		data() {
			return {}
		},
		mounted() {

		},
		computed: {
			isAloneApp() {
				return this.$store.getters.isAlone
			},
			isParent() {
				return this.$store.getters.isParent
			}
		},
		methods: {
			switchrole: function() {
				var params = "switchrole";
				this.$bridge.callhandler('switchrole', params, (data) => {
					// 处理返回数据
				})

			}
		}
	}
</script>
