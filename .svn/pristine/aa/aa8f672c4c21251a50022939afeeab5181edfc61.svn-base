<template>
	<div>
		<!-- 头部 开始 -->
		<mt-header title="资源" fixed id="header">
			<router-link to="/work/workIndex/workIndex" slot="left" v-if="isAloneApp">
				<mt-button icon="back"></mt-button>
			</router-link>
			<router-link to="/index/homePage" slot="left" v-if="!isAloneApp">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<!-- 头部  end -->

		<div class="msg-container" :class="{'data-has':dataHas,'data-nothing':dataNothing}">
			<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange"
			 :auto-fill="false" ref="loadmore" style="touch-action: auto;">
				<div v-for="(item,idx) in lists" :key="idx" class="res-listbox">
					<div class="res-list">
						<div class="border-box">
							<div class="link-bar" @click="goPageDetail(idx)">
								<div class="res-list-img">
									<!-- <img :src="item.url!=null?downloadImg + item.url:'../../../assets/img_activity_default.png'"> -->
									<img :src="item.url!=null?downloadImg + item.url:require('@/assets/activity3.png')">
								</div>
								<div class="res-list-right">
									<div class="res-list-text">
										<p>{{item.theme}}</p>
										<div>
											<span>{{item.publishTime}} 发布</span>
										</div>
									</div>
								</div>
							</div>
							<div class="list-icon">
								<img class="icon-btn" v-if="deleteResource == 1 || updateResource == 1" @click="popup4(item.id,idx)" src="@/assets/activity-btn.png">
							</div>
						</div>
					</div>

				</div>
			</mt-loadmore>
			<!-- 右上角三个点点击按钮，下侧弹出框 -->
			<mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4" @touchmove.native.stop.prevent>
				<button class="btn editor-btn" size="large" v-if="updateResource == 1" @click="goEditorResource">编辑资源</button>
				<button class="btn revocation-btn" size="large" v-if="deleteResource == 1" @click="revocationBtn">删除资源</button>
				<button class="btn cancel-btn" size="large" @click="cancelBtn">取消</button>
			</mt-popup>
			<div v-if="allLoaded" class="no-more-data">没有更多数据了</div>

			<!-- 暂无数据 -->
			<div class="nothing-container" v-if="canShowEmpty">
				<img class="icon-nothing" src="../../../assets/icon_nothing.png" alt="暂无数据">
				<p>暂无数据</p>
			</div>
		</div>

	</div>
</template>

<script>
	export default {

		data() {
			return {
				// 有数据
				dataHas: false,
				// 无数据
				dataNothing: false,
				//数据页数
				num: 0,
				//删除编辑资源权限
				deleteResource: null,
				//编辑资源权限
				updateResource: null,
				// 暂无数据
				canShowEmpty: false,
				//下载图片链接
				downloadImg: '',
				// 点击右上角三个点，下弹出事件，默认隐藏
				popupVisible4: false,
				//数据集合
				lists: [],
				// 返回上一页传参（由于ios端 go(-1)不好用）
				// path:'',
				autofill: true,

				// 全局展示页数
				pageSize: 6,
				allLoaded: false, //数据是否加载完毕
				bottomStatus: '', //底部上拉加载状态
				translate: 0, //
				moveTranslate: 0,
				workId: '',
				delIndex: 0,
				// 监测mt-popup滚动穿透
				handler:function(e) {
					e.preventDefault();
				}

			}
		},


		// 页面加载完成后执行
		mounted: function() {
			if(JSON.parse(localStorage.getItem("aloneApp")) == '1') {
			  localStorage.setItem("backPath", "/work/workIndex/workIndex");
			} else {
			  localStorage.setItem("backPath", "/index/homePage");
			}
			var param = "allResource";
			this.downloadImg = this.$ServerUrl + '/committee/activity/download_file?resource_name=';
			this.globalData = JSON.parse(localStorage.getItem("globalData"));
			this.user = JSON.parse(localStorage.getItem("user"));
			this.initData();
			// setTimeout(()=>{//页面挂载完毕 模拟数据请求 这里为了方便使用一次性定时器
			//   this.list = 12;
			// },1500)
		},
    created() {
      window.addEventListener('setItem', ()=> {
        this.popupVisible4 = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
    },
		computed: {
			isAloneApp() {
				return JSON.parse(localStorage.getItem("aloneApp")) == '1'
			}
		},
		// 监测mt-popup滚动穿透
		watch: {
			popupVisible4: function (val) {
				if(val) {
					document.getElementsByTagName('body')[0].addEventListener('touchmove', this.handler, { passive: false });
          sessionStorage.setItem('watchStorage',true)
				} else {
					document.getElementsByTagName('body')[0].removeEventListener('touchmove', this.handler, { passive: false });
          sessionStorage.setItem('watchStorage',false)
				}
			}
		},

		methods: {
			// 右上角三个点
			popup4(workId, delIndex) {
				this.popupVisible4 = true;
				this.workId = workId;
				this.delIndex = delIndex
			},
			// 取消按钮点击事件
			cancelBtn() {
				this.popupVisible4 = false;
			},

			handleBottomChange(status) {
				this.moveTranslate = 1;
				this.bottomStatus = status;
			},
			initData() {


				let that = this
				that.pageNum++;
				console.log(that.num)
				that.allLoaded = false;
				var params = {};
				params.pta_id = that.user.pta_id;
				params.num = that.num;
				params.page_size = that.pageSize;

				var user = JSON.parse(localStorage.getItem("user"))
				var globalData = JSON.parse(localStorage.getItem("globalData"))
				if (globalData) {
					if (globalData.deleteResource) {
						that.deleteResource = globalData.deleteResource;
					}
					if(globalData.updateResource) {
						that.updateResource = globalData.updateResource;
					}
				}
        if (user && user.pta_id) {
					that.$post('/committee/resource/select', params)
            .then((res) => {
              if (res != '') {
                for (var i = 0; i < res.result.length; i++) {
                  that.lists.push(res.result[i]);
                }
              }
              if (that.lists == undefined || that.lists.length == 0) {
                that.canShowEmpty = true;
                that.dataNothing = true;
                that.dataHas = false;
              } else {
                that.canShowEmpty = false;
                that.dataHas = true;
                that.dataNothing = false;
			  }

				// 如果少于5条不能下拉显示暂无数据
				if (that.lists.length != 0) {
					if(that.lists.length <= 5 ) {
						that.allLoaded = true;
					} else {
						that.allLoaded = false;
					}
				} else {
					that.allLoaded = false;
				}

              if (that.lists.length == 5 || that.lists.length < 5) {
                that.dataNothing = true;
                that.dataHas = false;
              } else {
                that.dataNothing = false;
                that.dataHas = true;
              }
              that.num++
            }, (response) => {

            });
					} else {
						that.canShowEmpty = true;
					}

			},
			loadBottom() {

				let that = this
				that.handleBottomChange("loading"); //上拉时 改变状态码
				console.log('上拉')
				that.pageNum++;

				if (!that.allLoaded) {

					console.log(that.num)
					that.allLoaded = false;
					var params = {};
					params.pta_id = that.user.pta_id;
					params.num = that.num;
					params.page_size = that.pageSize;
					var user = JSON.parse(localStorage.getItem("user"))
					if (user && user.pta_id) {
						that.$post('/committee/resource/select', params)
							.then((res) => {
								if (res != '') {
									for (var i = 0; i < res.result.length; i++) {
										that.lists.push(res.result[i]);
									}
								}
								setTimeout(() => { //上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
									// console.log(res.result.length)

									if (that.lists == undefined || that.lists.length == 0) {
										that.allLoaded = false;
										that.canShowEmpty = true;
									} else {
										that.canShowEmpty = false;
										if (res.result == undefined || res.result.length == 0) { //最多下拉三次
											that.allLoaded = true; //模拟数据加载完毕 禁用上拉加载
										} else {
											that.num++;
											that.allLoaded = false;
										}
										that.handleBottomChange("loadingEnd"); //数据加载完毕 修改状态码
										that.$refs.loadmore.onBottomLoaded();
									}

								}, 1500);

							}, (response) => {

							});
					} else {
						that.canShowEmpty = true;
					}

				}

			},

			//  initData() {
			//    let that = this
			//     var params = {}
			//     params.pta_id = that.user.pta_id;
			//     params.num = that.num;
			//     params.page_size = that.pageSize; // 页面展示多少条数据

			//     that.$post('/committee/resource/select', params)
			//     .then((res) => {
			//       console.log(res.result)
			//       if (res.result != null && res.result.length > 0) {
			//             that.canShowEmpty = false;
			//           } else {
			//             that.canShowEmpty = true;
			//           }
			//           that.lists = res.result;
			//           that.autofill = false
			//     },(response) => {

			//     });
			//  },
			// 撤销活动按钮点击事件
			revocationBtn() {

				this.popupVisible4 = false;
				MessageBox.confirm('', {
					message: '确定删除此资源吗？',
					// title: '用户未登录',
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
						var user = JSON.parse(localStorage.getItem("user"))
						if (user && user.pta_id) {
							var ptaId = user.pta_id;
							this.$post('/committee/resource/delete', {
								"pta_id": ptaId,
								"id": this.workId
							}).then((data) => {
								if (!data.success) {
									Toast(data.errorMsg)
								} else {
									if (data.success == true) {
										Toast('已删除');
										// this.num = 0;
										this.lists.splice(this.delIndex, 1);

										if (this.lists == undefined || this.lists.length == 0) {
											this.allLoaded = false;
											this.canShowEmpty = true;
										} else {
											this.canShowEmpty = false;
											this.handleBottomChange("loadingEnd"); //数据加载完毕 修改状态码
											// this.$refs.loadmore.onBottomLoaded();  // 固定方法，查询完要调用一次，用于重新定位
										}
										// this.loadBottom();

									}
								}
							});
						} else {
							this.canShowEmpty = true;
						}

					}
				}).catch(err => {
					//用户取消
					if (err == 'cancel') {

					}
				});
			},
			// 点击进入详细页
			goPageDetail(idx) {
				this.$router.push({
					name: 'resourceDetail',
					params: {
						workId: this.lists[idx].id,
            backpath:'/work/allResource/index'
					}
				})
			},
			// 点击进入编辑页面
			goEditorResource() {
				this.popupVisible4 = false;
				this.$router.push({
					name: 'editorResource',
					params: {
						workId: this.workId
					}
				})
			}

		}
	}
</script>
<style lang="scss" scoped>

	a {
		text-decoration: none;
	}

	.res-listbox {
		padding: 0 30px;
	}

	.res-list {
		width: 100%;
		align-items: center;

		.border-box {
			display: flex;
			justify-content: space-between;

			.link-bar {
				display: flex;
			}

			.list-icon {
				.icon-btn {
					width: 36px;
					height: 20px;
					padding: 0 0 30px 0;
				}
			}

			border-bottom: 1px solid #eaeef2;
			padding: 36px 30px;
			display: flex;

			.res-list-img {
				width: 160px;
				height: 120px;

				img {
					width: 160px;
					height: 120px;
					border-radius: 10px;
					object-fit: cover;
				}
			}

			.res-list-right {
				display: flex;
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
				min-width: 0;

				.res-list-text {
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
					text-align: left;
					padding-left: 20px;

					p {
						font-size: 30px;
						// overflow: hidden;
						// display: -webkit-box;
						// -webkit-box-orient: vertical;
						// -webkit-line-clamp: 2;
						color: #313340;
						font-weight: bold;
						word-break: break-word;
						word-wrap: break-word;
						width: 419px;
					}

					div {
						color: #888a97;
						font-size: 24px;
						margin-top: 10px;

						span {
							margin-right: 23px;
						}
					}
				}


			}
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

	.no-more-data {
		color: #999;
		font-size: 24px;
		text-align: center;
		padding: 20px 0;
	}

	// 右上角三个点点击后弹出框样式
	.mint-popup-4 {
		width: 100%;

		.btn {
			display: block;
			font-size: 30px;
			color: rgb(49, 51, 64);
			padding: 30px 0;
			background: #fff;
			border: none;
			width: 100%;
		}

		.revocation-btn {
			color: red;
		}

		.cancel-btn,
		.revocation-btn {
			border-top: 2px solid rgb(234, 238, 242)
		}
	}

	.data-has {
		height: 100vh;
		overflow: scroll;
		-webkit-overflow-scrolling: auto!important;
	}

	.data-nothing {
		height: 100%;
		overflow: scroll;
		-webkit-overflow-scrolling: auto!important;
	}

	.msg-container {
	  -webkit-overflow-scrolling: auto!important;
	}
</style>
