<style lang='scss' scoped>
  :focus {
    outline: none;
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
    background: #fff;
  }

  .detail-container {
    padding: 100px 30px 150px 30px;

    // padding-bottom: 150px;
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #000;
      padding: 18px 0 28px 0;
      text-align: left;
      // word-break:break-all;
      word-break: break-word;
      word-wrap: break-word;
    }

    .publish-view {
      font-size: 24px;
      color: #a0a7b3;
      display: flex;
      flex-direction: row;

      .publish-time {
        margin-left: 30px;
      }
    }

    .line {
      margin-top: 25px;
      width: 100%;
      border-bottom: 1px solid #eaeef2;
    }

    .type {
      margin-top: 12px;
      font-size: 24px;
      color: #a0a7b3;
      text-align: left;
    }

    .desc {
      line-height: 50px;
      margin-top: 14px;
      font-size: 30px;
      color: #333;
      text-align: left;
      // word-break:break-all;
      word-break: break-word;
      word-wrap: break-word;
    }

    .img-one {
      width: 100%;
      margin-top: 36px;
      border: 2px solid white;
      border-radius: 10px;
    }

    .imgs-view {
      margin-top: 30px;
      width: 100%;
      // height: 670px;
    }

    .item-view {
      float: left;
      padding: 9px;
      width: 33.33333333%;
      height: 222px;
      box-sizing: border-box;
    }

    .img {
      width: 100%;
      height: 100%;
      border: 2px solid white;
      border-radius: 10px;
      object-fit: cover;
    }

    .time-view {
      margin-top: 34px;
      font-size: 24px;
      color: #a0a7b3;
      text-align: left;
    }

    .statistics {
      margin-top: 30px;
      font-size: 24px;
      color: #1b76ff;
      border-bottom: 2px solid #1b76ff;
      text-align: left;
      width: 100px;
    }

    .send-parents-btn {
      position: fixed;
      bottom: -4px;
      left: 0;
      right: 0;
      font-size: 36px;
      color: #fff;
      text-align: center;
      padding: 34px 0;
      background: rgb(4, 147, 240);
      border: 0;
      width: 100%;
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

    // 报名
    .apply-btn {
      background: rgb(4, 147, 240);
      color: #fff;
    }

    // 活动已结束按钮
    .send-btn-over {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #a0a7b3;
      color: #fff;
      border-radius: 0;
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
  }

  // 统计弹框
  .dialog-screen {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, .5);
    overflow: hidden;
  }

  .dialog-box {
    position: relative;

    .people {
      font-size: 30px;
      color: rgb(49, 51, 64);
      text-align: center;
      font-weight: bold;
      margin: 38px 0 170px 0;
    }

    width: 86%;
    height: 728px;
    overflow: hidden;
    position: fixed;
    top: 30%;
    left: 0;
    z-index: 1001;
    background: white;
    margin: -150px 7% 0 7%;
    border-radius: 20px;

    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 27px;
      height: 26px;
      padding: 30px;
    }
  }
</style>

<template>
  <div>
    <!-- 头部bar -->
    <mt-header title="活动详情" fixed>
      <router-link to="" slot="left">
        <mt-button v-if="source=='share'"></mt-button>
        <mt-button v-else icon="back" @click="$router.go(-1)"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <div class="detail-container">
      <!-- 发布标题 -->
      <div class="title">{{lists.work_name}}</div>
      <div class='publish-view'>
        <!-- 发布人 -->
        <div class="name">{{lists.create_user!=null?lists.create_user:'佚名'}}</div>
        <!-- 发布时间 -->
        <div class="publish-time">{{lists.create_time}}发布</div>
      </div>
      <!-- 分割线 -->
      <div class="line"></div>
      <!-- 类型 -->
      <div class="type">类型：{{lists.work_type}}</div>
      <!-- 内容 -->
      <div class="desc">
        {{lists.work_content}}
      </div>
      <!-- 单张图片显示区域 -->
      <div v-if="lists.resource_list != null && lists.resource_list.length == 1">
        <img class="img-one" mode="aspectFill" @click="previewImg(0)" :src="lists.resource_list[0]" alt="">
      </div>
      <!-- 多张图片显示区域 -->
      <div class='imgs-view clearfix' v-else>
        <div class="item-view" v-for="(item, index) in lists.resource_list" :key="item + index">
          <img class="img" @click="previewImg(index)" :src="item" height="100">
        </div>
      </div>
      <!-- 活动时间 -->
      <div class="time-view">
        <div class="start-time">{{lists.start_time}} ~ {{lists.end_time}} {{lists.over_flag==1?'(已结束)':''}}</div>
      </div>
      <!-- 查看统计 -->
      <p v-if="!source" class="statistics" @click="showCompomentBtn">查看统计</p>
      <!-- 发送家长按钮 -->

      <div v-if="source == 'share'">
        <button class="send-btn send-parents-btn apply-btn" size="large" @click="applyRequest" v-if="lists.over_flag=='0' && lists.will_flag!='1'">{{applyFlag=='0'?'报名':'取消报名'}}</button>
        <button class="send-btn send-parents-btn" size="large" v-if="lists.will_flag=='1'">马上开始</button>
        <button class="send-btn send-btn-over" size="large" v-if="lists.over_flag=='1'">已结束</button>
      </div>

      <div v-else>
        <button class="send-btn send-btn-over" size="large" v-if="lists.will_flag=='1'">马上开始</button>
        <button class="send-parents-btn" size="large" @click="sendParent" v-if="lists.over_flag=='0' && sendToParent!=null && lists.will_flag!='1'">发给家长</button>
        <button class="send-btn send-btn-over" size="large" v-if="lists.over_flag=='1'">已结束</button>
      </div>

      <!-- 右上角点击按钮，下侧弹出按钮 -->
      <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
        <div class="wx" @click="wxShare()">
          <img class="wx-img" src="../../../assets/wx.png" alt="微信图片">
          <p class="wx-txt">微信好友</p>
        </div>
      </mt-popup>

      <div class="wrap-bg"></div>
    </div>

    <!-- 统计图弹框 -->
    <div v-show="showCompomentChart">
      <div class="dialog-box">
        <p class="people">统计（共{{parentCount}}人）</p>
        <div class="circle">
          <canvas-circle :percent="cicleData.percent" :id="cicleData.count"></canvas-circle>
        </div>
        <img class="close-btn" @click="cancelBtn" src="../../../assets/icon_dialog_close.png" alt="关闭按钮">
      </div>
      <div class="dialog-screen" @click="cancelBtn" @touchmove.prevent>

      </div>
    </div>

  </div>
</template>

<script>
  // 圆形统计图表组件
  import canvasCircle from '@/components/canvasCircle'

  export default {
    components: {
      canvasCircle
    },
    data() {
      return {
        // 返回上一页设置
        // pathGoBack:"",
        // path:"",
        // 活动默认图片
        defaultImg: require('@/assets/img_resource_default.png'),
        defaultActImg: require('@/assets/img_main_acitivty_default.png'),
        downloadImg: this.$ServerUrl + '/committee/activity/download_file?resource_name=',
        //页面来源
        source: '',
        //活动ID
        workId: '',
        //报名标志 0:报名 ，1：取消报名
        applyFlag: '0',
        //家长总数
        parentCount: '0',
        //发送给家长权限
        sendToParent: null,
        // 详细页 多图
        lists: {},
        //统计图是否显示标志
        showCompomentChart: false,
        popupVisible4: false, // 发送家长弹出微信，默认隐藏
        // val:true,
        // url:"",
        // 图片预览
        photoBrowserFlg: false,
        // 统计图表
        cicleData: {
          percent: 0,
          count: 0
        }
      }
    },
    created() {
      window.addEventListener('setItem', () => {
        this.popupVisible4 = JSON.parse(sessionStorage.getItem('watchStorage'));
        this.showCompomentChart = JSON.parse(sessionStorage.getItem('watchStorage'));
        this.photoBrowserFlg = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
    },
    watch: {
      popupVisible4: function(val) {
        if (val) {
          sessionStorage.setItem('watchStorage', true)
        } else {
          sessionStorage.setItem('watchStorage', false)
        }
      },
      showCompomentChart: function(val) {
        if (val) {
          sessionStorage.setItem('watchStorage', true)
        } else {
          sessionStorage.setItem('watchStorage', false)
        }
      },
      photoBrowserFlg: function(val) {
        if (val) {
          sessionStorage.setItem('watchStorage', true)
        } else {
          sessionStorage.setItem('watchStorage', false)
          let photoBrowser = api.require('photoBrowser')
          photoBrowser.close()
        }
      }
    },
    mounted() {
      // this.pathGoBack=this.$route.params.path;
      // this.path=this.$route.query.fatherPath;
      if (!!this.$route.params.backpath) {
        localStorage.setItem("backPath", this.$route.params.backpath);
      }
      //获取页面来源
      if (!!this.$route.query.where) {
        this.source = this.$route.query.where;
      }
      //获取活动ID
      //发送给家长权限
      if (this.source == 'share') {
        if (!!this.$route.query.workId) {
          this.workId = this.$route.query.workId;
        }
        this.sendToParent = this.$route.query.sendToParent;
        this.parentCount = this.$route.query.parentCount;
      } else {
        if (!!this.$route.params.workId) {
          this.workId = this.$route.params.workId;
        }
        let globalData = JSON.parse(localStorage.getItem("globalData"));
        this.sendToParent = globalData.sendToParent;
        this.parentCount = globalData.parentCount;
      }
      let param = {
        'work_id': this.workId
      };
      this.getActivityDetail(param);
    },
    // beforeRouteLeave(to, from, next) {
    //     // 设置下一个路由的 meta
    //     to.meta.keepAlive = true; // 下一个路由 刷新
    //     next();
    //   },

    methods: {
      // 发布弹框事件
      showCompomentBtn() {
        this.showCompomentChart = true
      },
      // 点击黑色背景，关闭弹框
      cancelBtn(event) {
        this.showCompomentChart = false
        event.cancelBubble = true
      },
      // 发送家长点击事件
      sendParent() {
        this.popupVisible4 = true;
      },
      // added by stt 微信分享 20190505
      wxShare() {
        this.popupVisible4 = false;
        let that = this;
        var wx = api.require('wx');
        // 活动详情画面所需参数
        let globalData = JSON.parse(localStorage.getItem("globalData"));
        /* wx.isInstalled(function(ret, err) {
        	if (ret.installed) { */
        /* alert("当前设备已安装微信客户端"); */
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
            /* alert(JSON.stringify(ret)) */
          } else {
            /* alert(JSON.stringify(err)) */
            alert('发送失败！');
          }
        });
        /* 	} else {
							alert('当前设备未安装微信客户端');
					}
			}); */

      },
      getActivityDetail(param) {
        this.$post('/committee/activity/detail',
          param
        ).then((data) => {
          let res = data.result;
          console.log(data)
          if (res.work_name == null || res.work_name == '') {
            let instance = Toast('该活动已撤销!');
            setTimeout(() => {
              instance.close();
              this.$router.back(-1);
            }, 2000);
          } else {
            this.lists = res;
            if (!!this.lists.resource_list) {
              if (this.lists.resource_list.length > 0) {
                for (let i = 0; i < this.lists.resource_list.length; i++) {
                  this.lists.resource_list[i] = this.downloadImg + this.lists.resource_list[i];
                }
              }
            }
            if (!!res.apply_account) {
              this.cicleData.count = parseInt(res.apply_account);
              if (this.parentCount != '0') {
                this.cicleData.percent = parseInt(res.apply_account) / parseInt(this.parentCount) * 100;
              }
            }
          }
        }, (response) => {
          console.error(response);
        });
      },
      applyRequest() {
        let param = {
          'work_id': this.workId,
          'apply_flag': this.applyFlag
        };
        this.$post('/committee/activity/applyActivity',
          param
        ).then((data) => {
          if (this.applyFlag == '0') {
            Toast('报名成功')
            this.applyFlag = '1'
          } else {
            Toast('取消报名成功')
            this.applyFlag = '0'
          }
        }, (response) => {
          console.error(response);
        });
      },
      previewImg(index) {
        let photoBrowser = api.require('photoBrowser');
        this.photoBrowserFlg = true
        photoBrowser.open({
          images: this.lists.resource_list,
          activeIndex: index,
          placeholderImg: 'widget://res/img/apicloud.png',
          bgColor: '#000'
        }, function(ret, err) {
          if (ret) {
            if (ret.eventType == 'click') {
              photoBrowser.close();
              this.photoBrowserFlg = false
            }
          } else {
            alert(JSON.stringify(err));
          }
        });
      }
    }
  };
</script>
