<style lang='scss' scoped>
.wrap {
  padding: 0;
  margin: 0;
  height: 100%;
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
  .list-bg {
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
  .allActivitys-warp {
    // position: fixed;
    // -webkit-overflow-scrolling: touch;
    height: 100%;
    width: 100%;
  }
  .msg-container {
    padding-bottom: 30px;
    margin-top: 90px;

    .stance {
      height: 20px;
    }
    .title {
      font-size: 36px;
      color: rgb(49,51,64);
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
        padding:30px;

        .activity-tips {
          position: absolute;
          top: 0;
          right: 0;
          padding: 30px;
          width: 36px;
          height: 20px;
        }

        .title-box {
          display: flex;
          padding: 10px 0 10px 10px;
          .msg-img {
            display: block;
            width: 160px;
            height: 120px;
            border-radius: 10px;
            object-fit: cover;
          }
          .title-txt {
            font-size: 30px;
            color: rgb(49,51,64);
            font-weight: bold;
            text-align: left;
            padding:0 30px 0 20px;
            word-break:break-word;
            word-wrap:break-word;
            width: 419px;
            // display: -webkit-box;
            // -webkit-line-clamp:2;
            // -webkit-box-orient: vertical;
            // overflow: hidden;
            // height: 80px;
          }
          .release-time {
            font-size: 24px;
            color: rgb(136,138,151);
            padding: 10px 20px;
            text-align: left;
          }
        }
        .apply-numb {
          font-size: 28px;
          color: rgb(136,138,151);
          text-align: left;
          padding: 20px 0;
          span {
            color: rgb(49,51,64);
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
        color: rgb(4,147,240);
        padding: 30px 0;
        background: #fff;
        border-top: 2px solid rgb(234,238,242);
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
      text-align: ceter;
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
      // 发送微信好友
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
      .btn {
        display: block;
        font-size: 30px;
        color: rgb(49,51,64);
        padding: 30px 0;
        background: #fff;
        border: none;
        width: 100%;
      }
      .revocation-btn {
        color: rgb(255,106,103);
      }
      .cancel-btn {
        border-top: 2px solid rgb(234,238,242)
      }
    }
  }

  .mint-msgbox-wrapper .mint-msgbox {
    border-radius: 50px;
    background: red;
  }
  .data-has {
    height: 100vh;
    overflow: scroll;
  }
  .data-nothing {
    height: 100%;
    overflow: scroll;
  }

</style>

<style>
  *{
    touch-action: pan-y;
  }
</style>



<template>
  <div id="list" class="allActivitys-warp">
    <!-- 头部bar -->
    <mt-header title="活动" fixed>
      <router-link to="/work/workIndex/workIndex" slot="left" v-if="isAloneApp">
        <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/index/homePage" slot="left"  v-if="!isAloneApp">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 活动列表 -->
    <div class="wrap">
    <div class="msg-container clearfix" :class="{'data-has':dataHas,'data-nothing':dataNothing}" >
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange" :auto-fill="false"  ref="loadmore" style="touch-action: auto;">
        <div class="msg-list" v-for="(item,idx) in items" :key="idx">
          <div class="msg-inner">
            <img class="activity-tips" v-if="(item.flag == 1 || item.flag == 2) && deleteActivity != null" @click="popup4(item.work_id,idx)" src="../../../assets/activity-btn.png" alt="撤销活动按钮">
            <div class="title-box" @click="goPageDetail(item.work_id)">
              <img class="msg-img" :src="item.resource_name!=null?downloadImg+item.resource_name:defaultImg" alt="图片" width="100px" height="100px" >
              <div>
                <p class="title-txt">{{item.work_name}}</p>
                <p class="release-time">{{item.create_time}}发布</p>
              </div>
            </div>
            <p class="apply-numb">报名人数 <span>{{item.apply_account}}</span>/{{parentCount}}</p>
          </div>
          <button class="send-btn" size="large" v-if="item.flag == 1 && sendToParent != null" @click="popupForFamily(item.work_id)">发给家长</button>
          <button class="send-btn send-btn-over" size="large" v-if="item.flag == false">已结束</button>
          <button class="send-btn will-flag" size="large" v-if="item.flag == 2">马上开始</button>
        </div>
      </mt-loadmore>
      <!-- 右上角三个点点击按钮，下侧弹出框 -->
      <mt-popup
        v-model="popupVisible4"
        position="bottom"
        class="mint-popup-4">
        <button class="btn revocation-btn" size="large" @click="revocationBtn">撤销活动</button>
        <button class="btn cancel-btn" size="large" @click="cancelBtn">取消</button>
      </mt-popup>
      <div v-if="allLoaded" class="no-more-data">没有更多数据了</div>

      <!-- 点击发给家长 -->
      <mt-popup
        v-model="popupVisibleForFamily"
        position="bottom"
        class="mint-popup-4">
        <div class="wx" @click="wxShare()">
          <img class="wx-img" src="../../../assets/wx.png" alt="微信图片">
          <p class="wx-txt">微信好友</p>
        </div>
      </mt-popup>

      <!-- 暂无数据 -->
      <div class="nothing-container" v-if="flag==0">
        <img class="icon-nothing" src="../../../assets/icon_nothing.png" alt="暂无数据">
        <p>暂无数据</p>
      </div>
      <div class="wrap-bg"></div>
    </div>
    </div>

  </div>
</template>


<script>
  export default {
    components: {
    },
    data() {
      return{
        // 返回上一页设置
        // pathGoBack:"",
         // 返回上一页传参（由于ios端 go(-1)不好用）
        // path:'',

        // 有数据
        dataHas:true,
        // 无数据
        dataNothing:false,
        flag:true,
        popupVisible4: false, // 点击右上角三个点，下弹出事件，默认隐藏
        popupVisibleForFamily:false, // 发给家长下拉弹微信
        items:[],
        workId:"",
        parentCount:"",
        defaultImg: require('@/assets/activity3.png'),
        downloadImg: this.$ServerUrl + '/committee/activity/download_file?resource_name=',

        // 上拉加载

        //数据页数
        num: 0,
        // 暂无数据
        canShowEmpty:false,
        // 全局展示页数
        pageSize:4,
        //数据是否加载完毕
        allLoaded: false,
        //底部上拉加载状态
        bottomStatus: '',
        translate: 0,
        moveTranslate: 0,
        //撤销活动权限
        deleteActivity:null,
        //发送家长权限
        sendToParent:null,
        delIndex:0,
        // 监测mt-popup滚动穿透
				handler:function(e) {
					e.preventDefault();
				}

      }
    },
    mounted(){
        this.globalData = JSON.parse(localStorage.getItem("globalData"));
        this.user = JSON.parse(localStorage.getItem("user"));
        if(JSON.parse(localStorage.getItem("aloneApp")) == '1') {
          localStorage.setItem("backPath", "/work/workIndex/workIndex");
        } else {
          localStorage.setItem("backPath", "/index/homePage");
        }
        this.initData();
    },
    computed:{
      isAloneApp() {
        return JSON.parse(localStorage.getItem("aloneApp")) == '1'
      }
    },
    created() {
      window.addEventListener('setItem', ()=> {
        this.popupVisible4 = JSON.parse(sessionStorage.getItem('watchStorage'));
        this.popupVisibleForFamily = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
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
			},
      popupVisibleForFamily: function (val) {
      	if(val) {
      		sessionStorage.setItem('watchStorage',true)
      	} else {
      		sessionStorage.setItem('watchStorage',false)
      	}
      }
		},
    methods: {
      initData () {
        var user = JSON.parse(localStorage.getItem("user"))
        var globalData = JSON.parse(localStorage.getItem("globalData"))
        this.parentCount = globalData.parentCount;
        if(globalData){
          if(globalData.deleteActivity){
            this.deleteActivity = globalData.deleteActivity;
          }
          if(globalData.sendToParent){
            this.sendToParent = globalData.sendToParent;
          }
        }
        var params = {}
        params.pta_id = this.user.pta_id;
        params.num = this.num;
        params.page_size = this.pageSize; // 页面展示多少条数据
        if(user && user.pta_id){
          var ptaId = user.pta_id;
          this.$post('/committee/activity/list', {
            "pta_id": ptaId,
            "num":this.num,
            "page_size":this.pageSize
          }).then((data) => {
            if (!data.success) {
              Toast(data.errorMsg)
            } else {
              this.num++;
              if(data.result && data.result.length>0){
                // this.items = data.result
                for(var i =0;i< data.result.length;i++){

                  if(data.result[i].will_flag == "1"){
                    // 即将开始
                    data.result[i].flag = "2";
                  }else if(data.result[i].over_flag == "1"){
                    // 已结束
                    data.result[i].flag = false;
                  }else{
                    // 发送家长
                    data.result[i].flag = "1";
                  }
                  this.items.push(data.result[i]);
                }

              }
              if(this.items==undefined || this.items.length == 0) {
                this.flag = 0;
                this.dataNothing=true;
                this.dataHas=true;
              }else {
                this.flag = 1;
                 this.dataNothing=false;
                  this.dataHas=true;
              }
              // 如果少于2条不能下拉显示暂无数据
            //  if(this.items.length <= 3) {
            //       this.allLoaded = true;
            //     }
              // 如果少于3条不能下拉显示暂无数据
              if (this.items.length != 0) {
                if(this.items.length <= 3 ) {
                  this.allLoaded = true;
                } else {
                  this.allLoaded = false;
                }
              } else {
                this.allLoaded = false;
              }



              if (this.items.length == 3 || this.items.length < 3) {
                this.dataNothing=true;
                this.dataHas=false;
              } else {
                this.dataNothing=false;
                this.dataHas=true;
              }
            }
          });
        }else{
          this.flag = 0
        }
      },
      init(){
        var user = JSON.parse(localStorage.getItem("user"))
        var globalData = JSON.parse(localStorage.getItem("globalData"))
        this.parentCount = globalData.parentCount;
        if(globalData){
          if(globalData.deleteActivity){
            this.deleteActivity = globalData.deleteActivity;
          }
          if(globalData.sendToParent){
            this.sendToParent = globalData.sendToParent;
          }
        }
        var params = {}
        params.pta_id = this.user.pta_id;
        params.num = this.num;
        params.page_size = this.pageSize; // 页面展示多少条数据
        if(user && user.pta_id){
          var ptaId = user.pta_id;
          this.$post('/committee/activity/list', {
            "pta_id": ptaId,
            "num":this.num,
            "page_size":this.pageSize
          }).then((data) => {
            if (!data.success) {
              Toast(data.errorMsg)
            } else {
              if(data.result && data.result.length>0){
                // this.items = data.result

                  for(var i =0;i< data.result.length;i++){

                    if(data.result[i].will_flag == "1"){
                      // 即将开始
                      data.result[i].flag = "2";
                    }else if(data.result[i].over_flag == "1"){
                      // 已结束
                      data.result[i].flag = false;
                    }else{
                      // 发送家长
                      data.result[i].flag = "1";
                    }
                    this.items.push(data.result[i]);
                  }



               setTimeout(() => {
                  this.num++;
                  this.allLoaded = false;//没有更多数据
                  this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
                  this.$refs.loadmore.onBottomLoaded();
                },1500)
              }else{
                 setTimeout(() => {
                  this.allLoaded = true;//模拟数据加载完毕 禁用上拉加载
                  this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
                  this.$refs.loadmore.onBottomLoaded();
                  if(!this.items.length > 0){
                    this.allLoaded = false;
                    this.flag = 0
                  }
                 },1500)
              }

            }
          });
        }else{
          this.flag = 0
        }
      },
      // 右上角三个点撤销按钮点击事件
      popup4 (workId,delIndex) {
        this.popupVisible4 = true;
        this.workId = workId;
        this.delIndex = delIndex
      },
      // 发给家长
      popupForFamily (workId) {
				this.workId = workId;
        this.popupVisibleForFamily = true;
      },
			// added by stt 微信分享 20190505
			wxShare(){
				this.popupVisibleForFamily = false;
				// apicloud
				var wx = api.require('wx');
				// 活动详情画面所需参数
				let globalData = JSON.parse(localStorage.getItem("globalData"));
				let that = this;
				// wx.isInstalled(function(ret, err) {
				// 		if (ret.installed) {
								// alert("当前设备已安装微信客户端");
								wx.shareWebpage({
									apiKey : 'wx6d38404a28adb5e3',
									scene : 'session',
									title : '您被邀请参加活动~',
									description : '家校互联互通，用爱呵护孩子成长',
									thumb : 'widget://res/iconfont-touxiang.png',
									contentUrl : 'https://tsdevfamily.ys100.com/work/activityDetail/activityDetail/share?workId='+that.workId+'&where=share&sendToParent='+globalData.sendToParent+'&parentCount='+globalData.parentCount
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
      // 撤销活动按钮点击事件
      revocationBtn () {
        this.popupVisible4 = false;
        MessageBox.confirm('', {
          message: '确定撤销此次活动吗？',
          // title: '用户未登录',
          showConfirmButton:true,
          showCancelButton:true,
          closeOnClickModal: false, // 点击背景是否关闭弹框
          cancelButtonClass:'cancelButton',
          confirmButtonClass:'confirmButton',
          confirmButtonText:'确定',
          cancelButtonText:'取消'
        }).then(action => {
          //用户选择确定
          if (action == 'confirm') {
            var user = JSON.parse(localStorage.getItem("user"))
            if(user && user.pta_id){
              var ptaId = user.pta_id;
              this.$post('/committee/activity/delete', {
                "pta_id": ptaId,
                "work_id":this.workId
              }).then((data) => {
                if (!data.success) {
                  Toast(data.errorMsg)
                } else {
                  if(data.success == true){
                    Toast('已撤销');
                    this.items.splice(this.delIndex,1);
                    this.initData();
                  }
                }
              });
            }

          }
        }).catch(err => {
          //用户取消
          if (err == 'cancel') {
//            Toast('取消')
          }
        });
      },
      // 取消按钮点击事件
      cancelBtn () {
        this.popupVisible4 = false;
      },
      // 点击进入详细页
      goPageDetail(work_id) {
        this.$router.push({name:'activityDetail',params:{workId:work_id,backpath:'/work/allActivitys/allActivitys'}})
        // this.$router.push({
        //   path:'/work/activityDetail/activityDetail?workId='+work_id
        // })
      },

      handleBottomChange(status) {
      this.moveTranslate = 1;
      this.bottomStatus = status;
    },

    loadBottom() {
      // debugger
      this.handleBottomChange("loading");//上拉时 改变状态码
      // this.pageNum++;

      if (!this.allLoaded) {
        this.init();
        // console.log(this.num)
        // this.allLoaded = false;
        // var params = {};
        // params.pta_id = this.user.pta_id;
        // params.num = this.num;
        // params.page_size = this.pageSize;

        // this.$post('/committee/activity/list', params)
        // .then((data) => {
        //   console.log(data.result)
        //   if (data.result != null) {
        //     for (var i = 0; i < data.result.length; i++) {
        //       this.items.push(data.result[i]);
        //       console.log()
        //     }
        //     setTimeout(() => {//上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
        //       if(this.items==undefined || this.items.length == 0) {
        //         this.allLoaded = false;
        //         this.flag = 0;
        //       }else {
        //         this.flag = true;
        //         console.log('加载完成')
        //         if(data.result.length == 0){//最多下拉三次
        //         console.log('判断等于空')

        //           this.allLoaded = true;//模拟数据加载完毕 禁用上拉加载
        //         }else{
        //           this.num++;
        //           this.allLoaded = false;
        //         }
        //         this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
        //         this.$refs.loadmore.onBottomLoaded();
        //         }
        //       }, 1500);
        //   } else {
        //     // 当接口数据返回为空时，若无数据显示 暂无数据，否则显示 没有更多数据了
        //     if(this.items==undefined || this.items.length == 0) {
        //       // 暂无数据
        //       this.flag = 0;
        //       this.allLoaded = false;//模拟数据加载完毕 禁用上拉加载
        //     }else {
        //       this.flag = true;
        //       this.allLoaded = true;//模拟数据加载完毕 禁用上拉加载
        //       this.$refs.loadmore.onBottomLoaded();
        //     }
        //     this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
        //   }
        // },(response) => {

        // });
      }

    },
    },
    destroyed() {
      this.popupVisible4 = false
    }
  }

</script>
