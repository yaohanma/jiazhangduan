<style scoped lang="scss">
  .wrap {
    margin-top: 90px;
  }
  .wrap-bg {
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

  // 轮播图图片
  .swipe-wrapper,
  img {
    // width: 100%;
    height: 280px;
  }

  // 近期活动列表
  .activity-item, .resource-item {
    padding: 20px 0;
    .title {
      font-size: 40px;
      color: #000;
      padding: 40px 30px 0 30px;
      font-weight: bold;
      background: #fff;
      .sub-title {
        font-size: 24px;
        color: #a0a7b3;
        padding-left: 24px;
        font-weight: normal;
      }
      .all {
        display: flex;
        justify-content: space-around;
        align-items: center;
        float: right;
        font-size: 24px;
        color: #a0a7b3;
        padding-top: 16px;
        font-weight: normal;
      }
      .all-img {
        height: 18px;
        width: 10px;
        margin-left: 10px;
      }
    }
    .contaier-list {
      display: flex;
      justify-content: space-between;
      background: #fff;
      padding: 40px 30px;
      .activities-list {
        position: relative;
        width: 330px;
        .goingEndBtn {
          position: absolute;
          top: 20px;
          right: -12px;
          img {
            width: 129px;
            height: 72px;
          }
        }
      }
      span {
        display: block;
        width: 330px;
        height: 240px;
      }
      .title-href {
        font-size: 30px;
        color: rgb(49, 51, 64);
        padding-left: 12px;
        padding: 28px 0 12px 0;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .create-time {
        font-size: 24px;
        color: #999;
      }
      .activity-icon {
        border-radius: 10px;
        width: 100%;
        object-fit: cover;
      }
      .resource-icon {
        border-radius: 10px;
      }
    }
  }

  // 资源列表
  .resource-item {
    margin-bottom: 80px;
    padding-bottom: 80px;
    .contaier-list {
      display: block;
      padding: 40px 30px 0 30px;
      .list-href {
        width: 100%;
        text-decoration: none;
        span {
          display: block;
          width: 690px;
          height: 280px;
        }
        // .activity-icon {
        //   background: url("../../../assets/img_resource_default_2.png");
        //   background-size: cover;
        //   border-radius: 10px;
        // }
        .activity-icon2 {
          background: url("../../../assets/img_resource_default2x.png");
          background-size: cover;
          border-radius: 10px;
        }
      }
      .resource-list {
          padding-bottom: 30px;
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

  // 发布按钮
  .release-btn {
    position: fixed;
    bottom: 10%;
    right: 4%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    text-decoration: none;
    background: #0493f0;
    border-radius: 100%;
    box-shadow: 0 10px 20px #afcffe;
  }

  // 发布弹框内容
  .release {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 999;
    .releasebg {
      display: block;
      background: url("../../../assets/releasebg.png");
      background-size: cover;
      height: 100%;
    }
    .release-container {
      position: absolute;
      top: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .list-href {
        text-decoration: none;
      }
      .activity-bar, .resource-bar {
        padding: 0 50px;
      }
      .activity-btn {
        background: url("../../../assets/activity-icon.png");
        width: 120px;
        height: 120px;
        background-size: cover;
      }
      .resource-btn {
        background: url("../../../assets/resource-icon.png");
        width: 120px;
        height: 120px;
        background-size: cover;
      }
      .desc {
        font-size: 28px;
        color: rgb(51, 51, 51);
        padding-top: 28px;
      }
      .close-btn {
        background: url("../../../assets/close-btn.png");
        width: 230px;
        height: 230px;
        background-size: cover;
        position: fixed;
        bottom: 140px;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>

<template>
  <div class="wrap">
    <!-- 头部bar -->
    <mt-header title="工作" fixed>
      <router-link to="/" slot="left">
        <!-- <mt-button icon="back"></mt-button> -->
      </router-link>
    </mt-header>
    <!-- 轮播图 -->
    <div class="swipe-wrapper">
      <mt-swipe :auto="4000" ref="swipeWrapper">
        <mt-swipe-item class="swip-item-1 item" v-for="(url, index) in imgUrls" :key="index">
          <img :src=url>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 近期活动 -->
    <div class="activity-item" v-show="lists.work!=null && lists.work.length > 0">
      <!--标题-->
      <div class='title clearfix'>
        近期活动
        <span class='sub-title'>最近有什么新活动?</span>
        <router-link class="list-href" :to="{name:'allActivitys',params:{path:'workIndex'}}">
          <span class='all clearfix'>全部
            <img class="all-img" src="../../../assets/right-arrow.png">
          </span>
        </router-link>
      </div>
      <!-- 活动列表 -->

      <div class="contaier-list">
        <div class="activities-list" v-for="(item,index) in lists.work" :key="item.id">
          <router-link :to="{name:'activityDetail',params:{workId:item.id,backpath:'/work/workIndex/workIndex'}}" slot="left">
            <img class="activity-icon" :src="item.url!=null?downloadImg+item.url:defaultImg" alt="图片"/>
            <p class="title-href">{{item.theme}}</p>
            <p class="create-time">{{item.publishTime}}</p>
            <!--进行中和已结束和马上开始 按钮-->
            <div class="goingEndBtn">
              <img v-if="item.survival =='0'" src="@/assets/ongoing.png">
              <img v-else-if="item.survival =='1'" src="@/assets/ended.png">
              <img v-else-if="item.survival =='2'" src="@/assets/will_flag.png">
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 资源储备 -->
    <div class="resource-item" v-show="lists.resource!=null && lists.resource.length > 0">
      <!--标题-->
      <div class='title clearfix'>
        资源储备
        <span class='sub-title'>最近有发现什么新资源?</span>
        <router-link class="list-href" :to="{name:'allResource',params:{path:'workIndex'}}">
          <span class='all clearfix'>全部
            <img class="all-img" src="../../../assets/right-arrow.png">
          </span>
        </router-link>
      </div>
      <!-- 资源列表 -->
      <div class="contaier-list">

          <div class="resource-list" v-for="(item,index) in lists.resource" :key="item.id">
            <router-link class="list-href" :to="{name:'resourceDetail',params:{workId:item.id,backpath:'/work/workIndex/workIndex'}}">
            <!-- <span class="activity-icon"></span> -->
            <img class="activity-icon" :src="item.url!=null?downloadImg+item.url:defaultImg" alt="图片"/>
            <p class="title-href">{{item.theme}}</p>
            <p class="create-time">{{item.publishTime}}</p>
            </router-link>
          </div>

        <router-view></router-view>
      </div>
    </div>
    <!-- 暂无数据 -->
    <div class="nothing-container" v-show="isAllEmpty">
      <img class="icon-nothing" src="@/assets/icon_nothing.png" alt="暂无数据">
      <p>暂无数据</p>
    </div>
    <!-- 发布按钮 -->
    <div class="release-btn" v-show="canCreate" @click="releaseBtnClick">
      发布
    </div>

    <!-- 发布弹框内容 -->
    <div class="release" v-show="releaseShow" @touchmove.prevent>
      <div class="releasebg"></div>
      <div class="release-container">
        <router-link v-show="!!globalData.createActivity" class="list-href" to="/work/createActivity/createActivity">
          <div @click="releaseCloseBtn"  class="activity-bar">
            <div class="activity-btn"></div>
            <p class="desc">创建活动</p>
          </div>
        </router-link>

        <router-link v-show="!!globalData.createResource" class="list-href" to="/work/createResource/createResource">
          <div @click="releaseCloseBtn"  class="resource-bar">
            <div class="resource-btn"></div>
            <p class="desc">创建资源</p>
          </div>
        </router-link>
        <!-- 关闭按钮 -->
        <div class="close-btn" @click="closeBtn"></div>
      </div>
    </div>
    <div class="wrap-bg"></div>
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
    data() {
      return {
        // 返回上一页传参（由于ios端 go(-1)不好用）
      	path:'',
        releaseShow: false, // 发布弹框默认隐藏
        // 活动默认图片
        defaultImg: require('@/assets/img_resource_default2x.png'),
        //全局数据
        globalData: {},
        user: {},
        //是否返回的数据都为空
        isAllEmpty: false,
        //是否有家委ID，是否有创建权限
        canCreate: false,
        downloadImg: this.$ServerUrl + '/committee/activity/download_file?resource_name=',
        lists: {},
        imgUrls: [ //轮播图 三张图片示
          require('@/assets/banner.png'),
          require('@/assets/Jellyfish.jpg'),
          require('@/assets/Koala.jpg')
        ]
      }
    },
    created() {
      window.addEventListener('setItem', ()=> {
        this.releaseShow = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
    },
    computed: {},
     watch: {
    	releaseShow: function (val) {
    		if(val) {
    			sessionStorage.setItem('watchStorage',true)
    		} else {
    			sessionStorage.setItem('watchStorage',false)
    		}
    	}
    },
    mounted() {
      //进入页面获取数据
      this.globalData = JSON.parse(localStorage.getItem("globalData"));
      this.user = JSON.parse(localStorage.getItem("user"));
      if (!!this.user.pta_id) {
        this.getAllDatas(this.user.pta_id);
      } else {
        this.isAllEmpty = true;
      }
    },

    methods: {
      // 发布弹框事件
      releaseBtnClick() {
        this.releaseShow = true
      },
      // 关闭弹框事件
      closeBtn() {
        this.releaseShow = false
      },
      // 点击创建按钮，跳转同时关闭弹框
      releaseCloseBtn() {
        this.releaseShow = false
      },
      getAllDatas(ptaId) {
        this.$post('/committee/work/select',
          {"pta_id": ptaId}
        ).then((data) => {

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
          console.log(data)
          if (data.success) {
            if (data.result.work.length == 0 && data.result.resource.length == 0) {
              this.isAllEmpty = true;
            } else {
              this.isAllEmpty = false;
            }
            this.lists = data.result;
          }
        }, (response) => {
          console.error(response);
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
					this.globalData.parentCount = this.parentCount;
					if (this.globalData.sendToParent == '1') {
						this.sendToParent = '1';
					} else {
						this.sendToParent = "";
					}
          localStorage.setItem("globalData", JSON.stringify(this.globalData))
          if (!!this.globalData.createActivity || !!this.globalData.createResource) {
            this.canCreate = true;
            } else {
              this.canCreate = false;
            }
				}, (response) => {
					console.error(response);
				});
			}
    }
  }

</script>
