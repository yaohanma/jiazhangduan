<style scoped lang="scss">
	:focus {
		outline: none;
	}

	.wrap {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		background: rgb(245, 246, 247);
	}

	// 消息
	.msg-container {
		height: 100%;
		padding-bottom: 140px;
		padding-top: 70px;

		.stance {
			height: 20px;
		}

		.title {
			font-size: 36px;
			color: rgb(49, 51, 64);
			background: #fff;
			padding: 24px;
			text-align: left;
			font-weight: bold;
		}

		.msg-list {
			margin: 30px 26px 0 26px;

			.msg-inner {
				position: relative;
				background: #fff;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				padding: 0 30px 30px 30px;

				.resource-tips,
				.activity-tips {
					position: absolute;
					top: -8px;
					right: 10px;
					width: 72px;
					height: 99px;
				}

				.release-time {
					font-size: 24px;
					color: rgb(136, 138, 151);
					padding: 30px 30px 30px 0;
					text-align: left;
				}

				.title-box {
					display: flex;
					padding: 10px 0 10px 10px;
					background: rgb(248, 248, 250);

					.msg-img {
						display: block;
						width: 100px;
						height: 100px;
						border-radius: 2px;
					}

					.title-txt {
						font-size: 30px;
						color: rgb(49, 51, 64);
						font-weight: bold;
						text-align: left;
						padding-left: 20px;
						// display: -webkit-box;
						// -webkit-line-clamp:2;
						// -webkit-box-orient: vertical;
						// overflow: hidden;
						// height: 80px;
					}
				}

				.apply-numb {
					font-size: 28px;
					color: rgb(136, 138, 151);
					text-align: left;
					padding: 20px 0;

					span {
						color: rgb(49, 51, 64);
					}
				}
			}

			.resource-bar {
				padding-bottom: 80px;
			}

			// 发送家长  按钮
			.send-btn {
				font-size: 30px;
				font-weight: bold;
				color: rgb(4, 147, 240);
				padding: 30px 0;
				background: #fff;
				border-top: 2px solid rgb(234, 238, 242);
				border-left: none;
				border-right: none;
				border-bottom: none;
				width: 100%;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
			}

			// 活动已结束按钮
			.send-btn-over {
				color: #c6cdd7;
			}
			// 活动马上开始按钮
			.will-flag {
				color: #758294;
			}
		}

		// 暂无数据
		.nothing-container {
			width: 100%;
			margin-top: 200px;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;

			.icon-nothing {
				width: 305px;
				height: 186px;
				margin-bottom: 58px;
			}

			p {
				color: #999;
				font-size: 30px;
			}
		}
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
		<!-- 头部bar -->
		<mt-header title="首页" fixed>
			<router-link to="/" slot="left">
				<!-- <mt-button icon="back"></mt-button> -->
			</router-link>
			<mt-button slot="right"></mt-button>
		</mt-header>
		<!-- 消息 -->
		<div class="msg-container">
			<div class="stance"></div>
			<div class="title">消息</div>

			<!-- 活动 -->
			<div class="msg-list" v-for="(item, index) in items" :key="item.id">
				<div class="msg-inner" v-if="item.work_mark=='0'">
					<img class="activity-tips" src="../../assets/activity-tips.png" alt="资源标识图片">
					<p class="release-time">{{item.publishTime}} 发布</p>
					<router-link :to="{name:'activityDetail', params:{workId:item.id,backpath:'/index/homePageFamily'}}" slot="left">
						<div class="title-box">
							<img class="msg-img" :src="item.url!=null?downloadImg+item.url:defaultImg" alt="图片" width="100px" height="100px">
							<p class="title-txt">{{item.keyword}}活动已发布，请点击查看</p>
						</div>
					</router-link>
					<p class="apply-numb">报名人数 <span>{{item.joinedSize}}</span>/{{parentCount}}</p>
				</div>

				<button class="send-btn will-flag" size="large" v-if="item.over_flag=='2'">马上开始</button>
				<button class="send-btn" size="large" @click="popupForFamily(item.id)" v-if="item.over_flag=='0' && sendToParent!=''">发给家长</button>
				<button class="send-btn send-btn-over" size="large" v-if="item.over_flag=='1'">已结束
				</button>

				<!-- 资源 -->
				<div class="msg-inner resource-bar" v-else-if="item.work_mark=='1'">
					<img class="resource-tips" src="../../assets/resource-tips.png" alt="资源标识图片">
					<p class="release-time">{{item.publishTime}} 发布</p>
					<router-link :to="{name:'resourceDetail',params:{workId:item.id,backpath:'/index/homePageFamily'}}" slot="left">
						<div class="title-box">
							<img class="msg-img" :src="item.url!=null?downloadImg+item.url:defaultImg" alt="图片" width="100px" height="100px">
							<p class="title-txt">{{item.keyword}}资源已筹集完毕，请点击查看</p>
						</div>
					</router-link>
				</div>

			</div>
			<!-- 点击发给家长 -->
			<mt-popup v-model="popupVisibleForFamily" position="bottom" class="mint-popup-4">
				<div class="wx" @click="wxShare()">
					<img class="wx-img" src="../../assets/wx.png" alt="微信图片">
					<p class="wx-txt">微信好友</p>
				</div>
			</mt-popup>

			<!-- 暂无数据 -->
			<div class="nothing-container" v-if="canShowEmpty">
				<img class="icon-nothing" src="../../assets/icon_nothing.png" alt="暂无数据">
				<p>暂无数据</p>
			</div>
		</div>

		<div class="wrap"></div>

		<!-- 公共底部 -->
		<publicFooter></publicFooter>
	</div>
</template>


<script>
	// 公共底部
	import publicFooter from '@/components/publicFooter'

	export default {
		components: {
			publicFooter
		},
		// beforeRouteLeave(to, from, next) {

		//     // 设置下一个路由的 meta
		// 		 to.meta.keepAlive = false;
		//   	from.meta.keepAlive = true;
		//     next();
		// 	},
		// 	beforeRouteEnter(to, from, next) {
		//   next(vm => { // 这个时候组件还没有创建，所以要通过vm来访问
		//     if (from.name == 'workIndex' || from.name == 'myIndex') { //只有是从A进到B页面才执行
		// 				// 将要执行的逻辑
		// 				to.meta.keepAlive = false;
		// 				console.log('beforeRouteEnter false')
		// 				}
		// 				else {
		// 					to.meta.keepAlive = true;
		// 					console.log('beforeRouteEnter true')
		// 				}
		// 			})
		// 	// to.meta.keepAlive = true;
		// 	// from.meta.keepAlive = false;
		// 	if (from.name == 'resourceDetail') {
		// 		to.meta.keepAlive = false;
		// 		console.log('resourceDetail false')
		// 	}
		//   next();
		//     },
    data() {
    	return {
    		defaultImg: require('@/assets/activity3.png'),
    		downloadImg: this.$ServerUrl + '/committee/activity/download_file?resource_name=',
    		popupVisibleForFamily: false, // 发给家长下拉弹微信
    		items: [],
    		canShowEmpty: false,
    		sendToParent: "1",
    		parentCount: 0,
    		globalData: {},
    		user: {},
    		// 返回上一页传参（由于ios端 go(-1)不好用）
    		// path:'',
    	}
    },
    created() {
      window.addEventListener('setItem', ()=> {
        this.popupVisibleForFamily = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
    },
		mounted() {
			this.user = JSON.parse(localStorage.getItem("user"));
			this.initData(this.user.pta_id);
			let autoFlag = this.$route.query.autoFlag
			if (autoFlag == '1') {
				this.sentAPPEvent();
			}
		},
		computed: {},
    watch: {
    	popupVisibleForFamily: function (val) {
    		if(val) {
    			sessionStorage.setItem('watchStorage',true)
    		} else {
    			sessionStorage.setItem('watchStorage',false)
    		}
    	}
    },
		methods: {
			wxShare() {
				this.popupVisibleForFamily = false;
				let that = this;
				let wx = api.require('wx');
				// 活动详情画面所需参数
				let globalData = JSON.parse(localStorage.getItem("globalData"));
				// wx.isInstalled(function(ret, err) {
				// 		if (ret.installed) {
				// alert("当前设备已安装微信客户端");
				wx.shareWebpage({
					apiKey: 'wx6d38404a28adb5e3',
					scene: 'session',
					title: '您被邀请参加活动~',
					description: '家校互联互通，用爱呵护孩子成长',
					thumb: 'widget://res/iconfont-touxiang.png',
					contentUrl: 'https://tsdevfamily.ys100.com/work/activityDetail/activityDetail/share?workId=' + that.workId +
						'&where=share&sendToParent=' + globalData.sendToParent + '&parentCount=' + globalData.parentCount
				}, function(ret, err) {
					if (ret.status) {
						// alert(JSON.stringify(ret))
					} else {
						// alert(JSON.stringify(err))
						alert('发送失败！');
					}
				});
				// 		} else {
				// 				alert('当前设备未安装微信客户端');
				// 		}
				// });
			},
			// 发给家长下拉弹微信
			// 发给家长
			popupForFamily(workId) {
				this.workId = workId;
					this.popupVisibleForFamily = true;
				},
			initData(ptaId) {
				this.$post('/committee/homepage/select', {
					"pta_id": ptaId
				}).then((res) => {

					//获取家长数
					let parentParams = {};
					if (!!this.user.city_id) {
						//城市ID
						parentParams.city_id = this.user.city_id;
						parentParams.type = '1'
					}
					if (!!this.user.district_id) {
						//区ID
						parentParams.district_id = this.user.district_id;
						parentParams.type = '5'
					}
					if (!!this.user.school_id) {
						//学校ID
						parentParams.school_id = this.user.school_id;
						parentParams.type = '2'
					}
					if (!!this.user.grade_id) {
						//年纪ID
						parentParams.grade_id = this.user.grade_id;
						parentParams.school_id = this.user.school_id;
						parentParams.type = '3'
					}
					if (!!this.user.class_id) {
						//班级ID
						parentParams.class_id = this.user.class_id;
						parentParams.school_id = this.user.school_id;
						parentParams.type = '4'
					}
					this.getParentCount(parentParams);
					if (res.result != null && res.result.length > 0) {
						this.canShowEmpty = false;
					} else {
						this.canShowEmpty = true;
					}
					/* 原来在 getAuthority 最下 484行，由于页面闪一下发送家长按钮 就挪到这里*/
					this.globalData.parentCount = this.parentCount;
					if (this.globalData.sendToParent == '1') {
						this.sendToParent = '1';
					} else {
						this.sendToParent = "";
					}
					localStorage.setItem("globalData", JSON.stringify(this.globalData))

					this.items = res.result;
				}, (response) => {
					console.error(response);
				});
			},
			sentAPPEvent() {
				api.sendEvent({
					name: 'autoLoginFamily'
				});
			},
			getParentCount(param) {
				this.$post('/committee/basic/api/parent_count',
					param,'','1'
				).then((data) => {
					if (data.success) {
						if (data.result.retCode == 'SUCCESS') {
							this.parentCount = data.result.result;
						}
					}
					//获取用户权限
					let params = {};
					params.pta_id = this.user.pta_id;
					// if (!!this.user.school_id) {
					// 	//学校ID
					// 	params.school_id = this.user.school_id;
					// } else if (!!this.user.city_id) {
					// 	//城市ID
					// 	params.city_id = this.user.city_id;
					// }

					/**
					* 身份
					* 0 无权限
					* 1 city
					* 2 diatrict
					* 3 school
					*
					*private String identity
					* **/
					if (this.user.identity == '3') {
						params.school_id = this.user.school_id;
					} else if (this.user.identity == '1') {
						params.city_id = this.user.city_id;
					} else if (this.user.identity == '2') {
						params.district_id = this.user.district_id;
					}

					this.getAuthority(params);
				}, (response) => {
					console.error(response);
				});
			},
			getAuthority(param) {
				this.$post('/committee/login/authority',
					param,'','1'
				).then((result) => {
					this.globalData.createActivity = null;
					this.globalData.createResource = null;
					this.globalData.updateResource = null;
					this.globalData.deleteActivity = null;
					this.globalData.deleteResource = null;
					this.globalData.sendToParent = null;
					let data = result.result;
					console.log(result)
					if (data != null && data != '' && data.length != 0) {
						for (var i = 0; i < data.length; i++) {
							if (data[i].authority_name == '创建活动') {
								this.globalData.createActivity = '1';
							} else if (data[i].authority_name == '创建资源') {
								this.globalData.createResource = '1';
							} else if (data[i].authority_name == '修改资源') {
								this.globalData.updateResource = '1';
							} else if (data[i].authority_name == '撤销活动') {
								this.globalData.deleteActivity = '1';
							} else if (data[i].authority_name == '删除资源') {
								this.globalData.deleteResource = '1';
							} else if (data[i].authority_name == '发给家长') {
								this.globalData.sendToParent = '1';
							}
						}
					}
					/* 原代码挪到394行*/
				}, (response) => {
					console.error(response);
				});
			}
		},
	}
</script>
