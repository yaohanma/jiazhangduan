<style scoped lang="scss">
// 轮播图图片
.swipe-wrapper,
    img{
      width: 100%;
      height: 280px;
  }
  // 活动/资源链接列表
  .contaier-list {
    display: flex;
    justify-content: space-around;
    height: 152px;
    background: #fff;
    margin: 20px 0;
    .list-href {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      text-decoration: none;
        span {
          display: block;
          width: 98px;
          height: 98px;
        }
        p {
          font-size: 36px;
          color: rgb(49,51,64);
          padding-left: 12px;
        }
        .activity-icon {
          background: url("../../assets/activity-icon.png");
          background-size: cover;
        }
        .resource-icon {
          background: url("../../assets/resource-icon.png");
          background-size: cover;
        }
    } 
    .activity-href {
      border-right: 1px solid rgb(234,238,242);
    }
  }
  // 消息
  .msg-container {
    background: rgb(245,246,247);
    padding-bottom: 140px;
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
        padding:0 30px 30px 30px;
        
        .resource-tips,.activity-tips {
          position: absolute;
          top: -8px;
          right: 10px;
          width: 72px;
          height: 99px;
        }
        .release-time {
          font-size: 24px;
          color: rgb(136,138,151);
          padding: 30px 30px 30px 0;
          text-align: left;
        }
        .title-box {
          display: flex;
          padding: 10px 0 10px 10px;
          background: rgb(248,248,250);
          .msg-img {
            display: block;
            width: 100px;
            height: 100px;
          }
          .title-txt {
            font-size: 30px;
            color: rgb(49,51,64);
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
        color: rgb(160,164,177);
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
    .releasebg {
      display: block;
      background: url("../../assets/releasebg.png");
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
      .activity-bar,.resource-bar {
        padding: 0 50px;
      }
      .activity-btn {
        background: url("../../assets/activity-icon.png");
        width: 120px;
        height: 120px;
        background-size: cover;
      }
      .resource-btn {
        background: url("../../assets/resource-icon.png");
        width: 120px;
        height: 120px;
        background-size: cover;
      }
      .desc {
        font-size: 28px;
        color: rgb(51,51,51);
        padding-top: 28px;
      }
      .close-btn {
        background: url("../../assets/close-btn.png");
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
	<div>
    <!-- 头部bar -->
    <mt-header title="家委会">
      <router-link to="/" slot="left">
        <!-- <mt-button icon="back"></mt-button> -->
      </router-link>
      <mt-button  slot="right"></mt-button>
    </mt-header>
    <!-- 轮播图 -->
    <div class="swipe-wrapper">
      <mt-swipe :auto="4000" ref="swipeWrapper">
        <mt-swipe-item class="swip-item-1 item">
          <img src="../../assets/banner.png">
        </mt-swipe-item>
        <mt-swipe-item class="swip-item-2 item">
          <img src="../../assets/Jellyfish.jpg">
        </mt-swipe-item>
        <mt-swipe-item class="swip-item-3 item">
          <img src="../../assets/Koala.jpg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 活动/资源链接列表 -->
    <div class="contaier-list">
      <router-link class="list-href activity-href" to="/work/allActivitys/allActivitys"><span class="activity-icon"></span><p>活动</p></router-link>
      <router-link class="list-href" to="/work/allResource/index"><span class="resource-icon"></span><p>资源</p></router-link>
      <router-view></router-view>
    </div>
    <!-- 消息 -->
    <div class="msg-container">
      <div class="stance"></div>
      <div class="title">消息</div>
      <!-- 资源 -->
      <div class="msg-list">
        <div class="msg-inner resource-bar">
          <img class="resource-tips" src="../../assets/resource-tips.png" alt="资源标识图片">
          <p class="release-time">2018-08-23 10:26发布</p>
          <div class="title-box">
            <img class="msg-img" src="../../assets/title-icon.png" alt="图片" width="100px" height="100px" >
            <p class="title-txt">课外读本资源已筹集完毕，请点击查看</p>
          </div>
        </div>
        <!-- <button class="send-btn" size="large">发给家长</button> -->
      </div>
      <!-- 活动 -->
      <div class="msg-list">
        <div class="msg-inner">
          <img class="activity-tips" src="../../assets/activity-tips.png" alt="资源标识图片">
          <p class="release-time">2018-08-23 10:26发布</p>
          <div class="title-box">
            <img class="msg-img" src="../../assets/activity-img.png" alt="图片" width="100px" height="100px" >
            <p class="title-txt">消防安全宣讲活动</p>
          </div>
          <p class="apply-numb">报名人数 <span>20</span>/50</p>
        </div>
        <button class="send-btn" size="large" v-if="flag==0">发给家长</button>
        <button class="send-btn send-btn-over" size="large" v-else>已结束</button>
      </div>
      <div class="msg-list">
        <div class="msg-inner">
          <img class="activity-tips" src="../../assets/activity-tips.png" alt="资源标识图片">
          <p class="release-time">2018-08-23 10:26发布</p>
          <div class="title-box">
            <img class="msg-img" src="../../assets/activity-img.png" alt="图片" width="100px" height="100px" >
            <p class="title-txt">消防安全宣讲活动</p>
          </div>
          <p class="apply-numb">报名人数 <span>20</span>/50</p>
        </div>
        <button class="send-btn" size="large" v-if="flag==1">发给家长</button>
        <button class="send-btn send-btn-over" size="large" v-else>已结束</button>
      </div>

      <!-- 暂无数据 -->
      <div class="nothing-container" v-if="flag==0">
        <img class="icon-nothing" src="../../assets/icon_nothing.png" alt="暂无数据">
        <p>暂无数据</p>
      </div>
      <!-- 发布按钮 -->
      <div class="release-btn" @click="releaseBtnClick">
        发布
      </div>
    </div>

    <!-- 发布弹框内容 -->
    <div class="release" v-show="releaseShow">
      <div class="releasebg"></div>
      <div class="release-container">
        <router-link class="list-href"  to="/work/createActivity/createActivity">
          <div class="activity-bar">
            <div class="activity-btn"></div>
            <p class="desc">创建活动</p>
          </div>
        </router-link>

        <router-link class="list-href" to="/work/createResource/createResource">
        <div class="resource-bar">
          <div class="resource-btn"></div>
          <p class="desc">创建资源</p>
        </div>
        </router-link>
        <!-- 关闭按钮 -->
        <div class="close-btn" @click="closeBtn"></div>
      </div>
    </div>
    
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
      return{
         releaseShow:false, // 发布弹框默认隐藏
         flag:1 // 发送家长 和 已结束 按钮 显示隐藏， 默认1显示‘发送家长’
      }
    },
    computed: {
      
    },
		methods:{
      // 发布弹框事件
      releaseBtnClick() {
        this.releaseShow = true
      },
      // 关闭弹框事件
      closeBtn() {
        this.releaseShow = false
      }
    }
	}

</script>