<style lang='scss' scoped>
  .detail-container {
    margin: 100px 30px 30px 30px;

    // padding-bottom: ;
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #000;
      padding: 18px 0 28px 0;
      text-align: left;
      // word-break:break-all;
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
      height: 670px;
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
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 36px;
      color: #fff;
      text-align: center;
      padding: 32px 0;
      background: rgb(4, 147, 240);
      border: 0;
      width: 100%;
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
  }
</style>

<template>
  <div>
    <!-- 头部bar @click="goBack" -->
    <mt-header title="资源详情" fixed>
      <!-- <router-link v-model="pathGoBack" :to="{name:this.pathGoBack}" slot="left"> -->
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <div class="detail-container">
      <!-- 发布标题 -->
      <div class="title">{{theme}}</div>
      <div class='publish-view'>
        <!-- 发布人 -->
        <div class="name">{{creator!=null?creator:'佚名'}}</div>
        <!-- 发布时间 -->
        <div class="publish-time">{{publishTime}} 发布</div>
      </div>
      <!-- 分割线 -->
      <div class="line"></div>
      <!-- 类型 -->
      <div class="type">类型：{{type}}</div>
      <!-- 内容 -->
      <div class="desc">
        {{content!=null?content:''}}
      </div>
      <!-- 单张图片显示区域 -->
      <div v-if="lists.length == 1">
        <img class="img-one" @click="previewImg(0)" :src="lists[0]" alt="">
      </div>
      <!-- 多张图片显示区域 -->
      <div class='imgs-view' v-if="lists.length > 1">
        <div>
          <div class="item-view" v-for="(item, index) in lists" :key="item + index">
            <img class="img" @click="previewImg(index)" :src="item" height="100" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        // 返回上一页设置
        // pathGoBack:"",

        // 发布标题
        theme: "",
        // 发布人
        creator: "",
        // 发布时间
        publishTime: "",
        // 类型
        type: "",
        // 内容
        content: "",
        // 详细页 多图
        lists: [],
        //资源ID
        workId: '',
        //下载图片链接
        downloadImg: '',
        //图片容器高度
        imgHeight: '',
        // 图片预览
        photoBrowserFlg: false,
        // imgs:[],
      }
    },
    created() {
      window.addEventListener('setItem', () => {
        this.photoBrowserFlg = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
    },
    watch: {
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
    // 页面加载完成后执行
    mounted(index) {
      if (!!this.$route.params.backpath) {
        localStorage.setItem("backPath", this.$route.params.backpath);
      }
      // this.pathGoBack=this.$route.query.path;
      // console.log(path)
      this.workId = this.$route.params.workId;
      this.globalData = JSON.parse(localStorage.getItem("globalData"));
      this.user = JSON.parse(localStorage.getItem("user"));
      var param = "allResource";
      this.downloadImg = this.$ServerUrl + '/committee/activity/download_file?resource_name='
      this.initData();
      console.log('预加载')
    },
    // beforeRouteLeave(to, from, next) {
    //     // 设置下一个路由的 meta
    //     to.meta.keepAlive = true;  // 下一个路由的 meta 缓存
    //     next();
    //   },
    methods: {
      initData() {
        var params = {}
        params.pta_id = this.user.pta_id;
        params.id = this.workId;
        this.$post('/committee/resource/select_detail', params)
          .then((res) => {
            console.log(res)
            // 发布标题
            this.theme = res.result.theme;
            // 发布人
            this.creator = res.result.creator;
            // 发布时间
            this.publishTime = res.result.publishTime;
            // 类型
            this.type = res.result.type;
            // 内容
            this.content = res.result.content;
            if (!!res.result.url_list) {
              this.lists = res.result.url_list;
            }
            if (this.lists.length > 0) {
              for (let i = 0; i < this.lists.length; i++) {
                this.lists[i] = this.downloadImg + this.lists[i];
              }
            }
          }, (response) => {

          })
      },
      previewImg(index) {
        let photoBrowser = api.require('photoBrowser');
        this.photoBrowserFlg = true;
        photoBrowser.open({
          images: this.lists,
          activeIndex: index,
          placeholderImg: 'widget://res/img/apicloud.png',
          bgColor: '#000',
          mode: 2
        }, function(ret, err) {
          if (ret) {
            if (ret.eventType == 'click') {
              /* photoBrowser.close(); */
              photoBrowser.close()
              this.photoBrowserFlg = false;
            }
          } else {
            alert(JSON.stringify(err));
          }
        });
      }
    },
  };
</script>
