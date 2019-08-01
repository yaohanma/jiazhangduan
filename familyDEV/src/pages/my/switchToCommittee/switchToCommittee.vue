<style lang="scss" scoped>
	.item-container {
		margin: 30px 30px 190px 30px;
	}

	.item-title {
		font-size: 40px;
		color: #b7bdc6;
		text-align: center;
		margin: 130px 0 52px 0;
	}

	.item-list-view {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0px 0px 30px #e7e7e7;
		margin-bottom: 30px;
	}

	.item-left {
		display: flex;
		align-items: center;
		/*垂直居中*/
		justify-content: center;
		/*水平居中*/
	}

	.item-left p {
		font-size: 30px;
		color: #000;
		padding: 0 4px 0 30px;
		font-weight: bold;
	}

	.item-right p {
		font-size: 24px;
		color: #a0a7b3;
	}

	.icon-committee {
		width: 80px;
		height: 80px;
	}

	.icon-original {
		width: 30px;
		height: 30px;
	}

	.hide {
		display: none;
	}

	.show {
		display: block;
	}


	.liMenu {
		margin-right: 20px;
		cursor: pointer;
	}

	.liMenu.hover {
		color: red;
	}

	.add-committee {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 96px;
		width: 90%;
		margin: 0 auto;
		font-size: 36px;
		color: #fff;
		background: rgb(4, 147, 240);
		text-align: center;
		border-radius: 48px;
		line-height: 96px;
		margin-bottom: 60px;
		box-shadow: 0 10px 20px #ddeafd;
	}
</style>

<template>
	<div class="content">
		<!-- 顶部导航栏 -->
		<mt-header title="切换家委会" fixed>
			<router-link to="/my/settings/settings" slot="left" v-if="isAloneApp">
				<mt-button icon="back"></mt-button> <!-- @click="$router.go(-1)" -->
			</router-link>
			<router-link to="/my/myIndex/myIndex" slot="left" v-if="!isAloneApp">
				<mt-button icon="back"></mt-button> <!-- @click="$router.go(-1)" -->
			</router-link>
			<!-- <mt-button  slot="right"></mt-button> -->
		</mt-header>

		<div class='item-container'>
			<div class='item-title'>轻触以切换家委会</div>

			<div class='item-list-view' v-for="(item,index) in itemList" :key="index" @click="switchToCommittee(index,item.pat_Id)">
				<div class='item-left'>
					<!-- 默认图片 -->
					<img class="icon-committee" src='../../../assets/icon_committee.png' v-if="!item.showView">
					<!-- 选中图片 -->
					<img class="icon-committee" src='../../../assets/icon_committeeActive.png' v-if="item.showView">
					<p>{{item.pta_name}}</p>
					<!-- 创建者标识 -->
					<img class="icon-original" src='../../../assets/icon_original.png' v-if="item.creator_id == userId">
				</div>
				<div class="item-right" v-if="index == selectIndex">
					<p>当前使用</p>
				</div>
			</div>
			<div class='add-committee' @click="addCommittee" v-if="!isAloneApp">添加家委会</div>
		</div>
	</div>
</template>

<script>
	export default {

		data() {

			return {
				selectIndex: 0,
				parentCount: 0,
				itemList: null,
				//当前登录账户
				userId: ''
			}
		},
		mounted() {
      if(JSON.parse(localStorage.getItem("aloneApp")) == '1') {
        localStorage.setItem("backPath", "/my/settings/settings");
      } else {
        localStorage.setItem("backPath", "/my/myIndex/myIndex");
      }
			this.init();
		},
		computed: {
			isAloneApp() {
				return JSON.parse(localStorage.getItem("aloneApp")) == '1'
			}
		},
		methods: {
			switchToCommittee(e, ptaId) {
				var user = JSON.parse(localStorage.getItem("user"));
				if (user && user.pta_id != ptaId) {
					MessageBox.confirm('', {
						message: '确认切换家委会吗？',
						title: '',
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
							console.log(ptaId);
							this.init(ptaId);
							this.selectIndex = e
							this.itemList[e].showView = true
							if (this.itemList && this.itemList.length > 0) {
								for (var i = 0; i < this.itemList.length; i++) {
									if (i != e) {
										this.itemList[i].showView = false
									}
								}
							}
						}
					}).catch(err => {
						//用户取消
						if (err == 'cancel') {
							//            Toast('取消')
						}
					});
				}
			},
			addCommittee() {
				this.$router.push({
					path: "/inviteCode",
					query: {
						flag: 'formSwitch'
					},
				})
			},
			init(pta_id) {
				var user = JSON.parse(localStorage.getItem("user"))
				var data = {};
				if (user && user.pta_id) {
					var ptaId = user.pta_id;
					this.userId = user.pta_user_id;
					this.$post('/committee/setting/switch', {
						"current_pta_id": ptaId,
						"pta_id": pta_id
					}).then((data) => {
						if (!data.success) {
							Toast(data.errorMsg)
						} else {
							console.log(data);
							if (!pta_id) {
								var jiaweiList = [];
								if (data.result && data.result.length > 0) {
									for (var i = 0; i < data.result.length; i++) {
										var jiawei = {};
										jiawei.pta_name = data.result[i].pta_name;
										jiawei.pat_Id = data.result[i].pta_id;
										jiawei.showView = false;
										jiawei.creator_id = data.result[i].creator_id;
										if ("1" == data.result[i].rank) {
											jiawei.showView = true;
											this.selectIndex = i
										}
										jiaweiList.push(jiawei);
									}
								}
								this.itemList = jiaweiList;
								console.log(this.itemList);
							} else {
								if (data.result && data.result.length > 0) {
									for (var i = 0; i < data.result.length; i++) {
										if (pta_id == data.result[i].pta_id) {
											//修改localStorage
											user.pta_id = pta_id;
											user.province_id = data.result[i].province_id;
											user.province_name = data.result[i].province_name;
											user.city_id = data.result[i].city_id;
											user.city_name = data.result[i].city_name;
											user.district_id = data.result[i].district_id;
											user.district_name = data.result[i].district_name;
											user.school_id = data.result[i].school_id;
											user.school_name = data.result[i].school_name;
											user.grade_id = data.result[i].grade_id;
											user.grade_name = data.result[i].grade_name;
											user.class_id = data.result[i].class_id;
											user.class_name = data.result[i].class_name;
											localStorage.setItem("user", JSON.stringify(user));
											//                    this.$router.go(0)
											// this.getParentCount(user);
											break;
										}
									}
								}
								this.init();
								if (JSON.parse(localStorage.getItem("aloneApp")) == '1') {
									this.$router.push({
										path: '/index/homePageFamily',
									})
								} else {

									this.$router.push({
										path: '/index/homePage',
									})
								}
							}
						}
					});
				}
			},
			//       getParentCount(user) {
			//         let parentParams = {};
			//         if (!!user.city_id) {
			//           //城市ID
			//           parentParams.city_id = user.city_id;
			//           parentParams.type = '1'
			//         }
			//         if (!!user.school_id) {
			//           //学校ID
			//           parentParams.school_id = user.school_id;
			//           parentParams.type = '2'
			//         }
			//         if (!!user.grade_id) {
			//           //年级ID
			//           parentParams.grade_id = user.grade_id;
			//           parentParams.type = '3'
			//         }
			//         if (!!user.class_id) {
			//           //班级ID
			//           parentParams.class_id = user.class_id;
			//           parentParams.type = '4'
			//         }
			//         this.$post('/committee/basic/api/parent_count',
			//           parentParams,'','1'
			//         ).then((data) => {
			//           if (data.success) {
			//             if (data.result.retCode == 'SUCCESS') {
			//               this.parentCount = data.result.result;
			//             }
			//           }
			//
			//           //获取用户权限
			//           let params = {};
			//           params.pta_id = user.pta_id;
			//           if (!!user.school_id) {
			//             //学校ID
			//             params.school_id = user.school_id;
			//           } else if (!!user.city_id) {
			//             //城市ID
			//             params.city_id = user.city_id;
			//           }
			//           this.getAuthority(params);
			//         }, (response) => {
			//           console.error(response);
			//         });
			//       },
			// getAuthority(param) {
			//   this.$post('/committee/login/authority',
			//     param,'','1'
			//   ).then((result) => {
			//     let globalData = {};
			//     globalData.createActivity = null;
			//     globalData.createResource = null;
			//     globalData.updateResource = null;
			//     globalData.deleteActivity = null;
			//     globalData.deleteResource = null;
			//     globalData.sendToParent = null;
			//     let data = result.result;
			//     if (data != null && data != '' && data.length != 0) {
			//       for (var i = 0; i < data.length; i++) {
			//         if (data[i].authority_name == '创建活动') {
			//           globalData.createActivity = '1';
			//         } else if (data[i].authority_name == '创建资源') {
			//           globalData.createResource = '1';
			//         } else if (data[i].authority_name == '修改资源') {
			//           globalData.updateResource = '1';
			//         } else if (data[i].authority_name == '撤销活动') {
			//           globalData.deleteActivity = '1';
			//         } else if (data[i].authority_name == '删除资源') {
			//           globalData.deleteResource = '1';
			//         } else if (data[i].authority_name == '发给家长') {
			//           globalData.sendToParent = '1';
			//         }
			//       }
			//     }
			//     globalData.parentCount = this.parentCount;
			//     localStorage.setItem("globalData", JSON.stringify(globalData))
			//     // this.init();
			//   }, (response) => {
			//     console.error(response);
			//   });
			// }
		}
	}
</script>
