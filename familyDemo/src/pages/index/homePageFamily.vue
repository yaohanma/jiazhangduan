<style scoped lang="scss">
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
    <mt-header title="家委会" fixed>
      <router-link to="/" slot="left">
        <!-- <mt-button icon="back"></mt-button> -->
      </router-link>
      <mt-button  slot="right"></mt-button>
    </mt-header>
    <!-- 消息 -->
    <div class="msg-container">
      <div class="stance"></div>
      <div class="title">消息</div>

      <!-- 活动 -->
      <div class="msg-list">
        <div class="msg-inner">
          <img class="activity-tips" src="../../assets/activity-tips.png" alt="资源标识图片">
          <p class="release-time">2018-08-23 10:26发布</p>
          <router-link to="/work/activityDetail/activityDetail" slot="left">
          <div class="title-box">
            <img class="msg-img" src="../../assets/activity-img.png" alt="图片" width="100px" height="100px" >
            <p class="title-txt">秋游活动已发布，请点击查看</p>
          </div>
          </router-link>
          <p class="apply-numb">报名人数 <span>20</span>/50</p>
        </div>
        <button class="send-btn send-btn-over" size="large" v-if="flag==0" >已结束</button>
        <button class="send-btn" size="large" @click="popupForFamily" v-else>发给家长</button>
      </div>
      <!-- 点击发给家长 -->
      <mt-popup
      v-model="popupVisibleForFamily"
      position="bottom"
      class="mint-popup-4">
        <div class="wx">
          <img class="wx-img" src="../../assets/wx.png" alt="微信图片">
          <p class="wx-txt">微信好友</p>
        </div>
      </mt-popup>

      <!-- 资源 -->
      <div class="msg-list">
        <div class="msg-inner resource-bar">
          <img class="resource-tips" src="../../assets/resource-tips.png" alt="资源标识图片">
          <p class="release-time">2018-08-23 10:26发布</p>
          <router-link to="/work/resourceDetail/index" slot="left">
          <div class="title-box">
            <img class="msg-img" src="../../assets/title-icon.png" alt="图片" width="100px" height="100px" >
            <p class="title-txt">课外读本资源已筹集完毕，请点击查看</p>
          </div>
          </router-link>
        </div>
        <!-- <button class="send-btn" size="large">发给家长</button> -->
      </div>
      
      
      
      
      <div class="msg-list">
        <div class="msg-inner">
          <img class="activity-tips" src="../../assets/activity-tips.png" alt="资源标识图片">
          <p class="release-time">2018-08-23 10:26发布</p>
          <router-link to="/work/activityDetail/activityDetail" slot="left">
          <div class="title-box">
            <img class="msg-img" src="../../assets/activity-img2.png" alt="图片" width="100px" height="100px" >
            <p class="title-txt">消防安全宣讲活动</p>
          </div>
          </router-link>
          <p class="apply-numb">报名人数 <span>20</span>/50</p>
        </div>
        <!-- <button class="send-btn" size="large" v-if="flag==1">发给家长</button>
        <button class="send-btn send-btn-over" size="large" v-else>已结束</button> -->
      </div>
      

      <!-- 暂无数据 -->
      <div class="nothing-container" v-if="flag==0">
        <img class="icon-nothing" src="../../assets/icon_nothing.png" alt="暂无数据">
        <p>暂无数据</p>
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
         flag:1, // 发送家长 和 已结束 按钮 显示隐藏， 默认1显示‘发送家长’
         popupVisibleForFamily:false, // 发给家长下拉弹微信
      }
    },
    computed: {
     
    },
		methods:{
      // 发给家长下拉弹微信
      popupForFamily () {
        this.popupVisibleForFamily = true;
         }
      },
	}

</script>