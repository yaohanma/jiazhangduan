<style lang='scss' scoped>
	.detail-container {
    padding: 100px 30px 150px 30px;
    // padding-bottom: 150px;
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #000;
      padding: 18px 0 28px 0;
      text-align: left;
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
      width: 98px;
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
      background: rgb(4,147,240);
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
      color: rgb(49,51,64);
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
    <!-- 头部bar -->
    <mt-header title="活动详情" fixed>
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)"></mt-button>
      </router-link>
      <mt-button  slot="right"></mt-button>
    </mt-header>
    <div class="detail-container">
      <!-- 发布标题 -->
      <div class="title">本学期第一次家长会</div>
      <div class='publish-view'>
        <!-- 发布人 -->
        <div class="name">麦田妈妈</div>
        <!-- 发布时间 -->
        <div class="publish-time">2018-09-29 11:50发布</div>
      </div>
      <!-- 分割线 -->
      <div class="line"></div>
      <!-- 类型 -->
      <div class="type">自发社会实践活动</div>
      <!-- 内容 -->
      <div class="desc">
        Hi,一（一）班学生家长，诚邀您参加本学期第一次家长会，Hi,一（一）班学生家长，诚邀您参加本学期第一次家长会，Hi,一（一）班学生家长，诚邀您参加本学期第一次家长会，
      </div>
      <!-- 单张图片显示区域 -->
      <!-- <div>
        <img class="img-one" mode="aspectFill" src="../../../assets/img_resource_default.png" alt="">
      </div> -->
      <!-- 多张图片显示区域 -->
      <div  class='imgs-view'>
        <div>
          <div class="item-view" v-for="(item, index) in lists" :key="index">
            <img class="img" :src="item.imgUrl" height="100" v-gallery="lists" mode="aspectFill" alt="">
          </div>
           <!-- <div class="item-view">
            <img class="img" mode="aspectFill" src="../../../assets/activity2.png" alt="">
          </div>
          <div class="item-view">
            <img class="img" mode="aspectFill" src="../../../assets/activity3.png" alt="">
          </div>
           <div class="item-view">
            <img class="img" mode="aspectFill" src="../../../assets/activity4.png" alt="">
          </div>
          <div class="item-view">
            <img class="img" mode="aspectFill" src="../../../assets/activity5.png" alt="">
          </div>
           <div class="item-view">
            <img class="img" mode="aspectFill" src="../../../assets/activity6.png" alt="">
          </div>
          <div class="item-view">
            <img class="img" mode="aspectFill" src="../../../assets/activity7.png" alt="">
          </div>
           <div class="item-view">
            <img class="img" mode="aspectFill" src="../../../assets/activity8.png" alt="">
          </div>
          <div class="item-view">
            <img class="img" mode="aspectFill" src="../../../assets/activity9.png" alt="">
          </div> -->
        </div>
      </div>
      <!-- 活动时间 -->
      <div class="time-view">
        <div class="start-time">2019-07-10 11:50 ~ 2019-08-10 11:50</div>
      </div>
      <!-- 查看统计 -->
      <p class="statistics" @click="showCompomentBtn">查看统计</p>
      <!-- 发送家长按钮 -->
      <button class="send-parents-btn" size="large" @click="popup4">发送家长</button>
      <!-- 右上角点击按钮，下侧弹出按钮 -->
      <mt-popup
      v-model="popupVisible4"
      position="bottom"
      class="mint-popup-4">
        <div class="wx">
          <img class="wx-img" src="../../../assets/wx.png" alt="微信图片">
          <p class="wx-txt">微信好友</p>
        </div>
      </mt-popup>
    </div>

    <!-- 统计图弹框 -->
    <div v-show="showCompomentChart">
       <div class="dialog-box">
          <p class="people">统计（共50人）</p>
          <div class="circle">
              <canvas-circle v-for="(item,index) in cicleList" :key="index" :percent="item.ratio" :id="index"></canvas-circle>
          </div>
        </div>
      <div class="dialog-screen" @click="cancelBtn">
        
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
      return{
        // 详细页 多图
        lists: [
        {
          imgUrl:require('@/assets/activity-img.png'),
        },
        {
          imgUrl:require('@/assets/activity2.png'),
        },
        {
          imgUrl:require('@/assets/activity3.png'),
        },
        {
          imgUrl:require('@/assets/activity4.png'),
        },
        {
          imgUrl:require('@/assets/activity5.png'),
        },
        {
          imgUrl:require('@/assets/activity6.png'),
        },
        {
          imgUrl:require('@/assets/activity7.png'),
        },
        {
          imgUrl:require('@/assets/activity8.png'),
        },
        {
          imgUrl:require('@/assets/activity9.png'),
        }
      ],
        //统计图是否显示标志
        showCompomentChart: false,
        popupVisible4: false, // 发送家长弹出微信，默认隐藏
        // msg: 'Welcome to Your Vue.js App',
        // val:true,
        // url:"",
        // 统计图表
        cicleList: [{
          ratio: '38',
        }
        ]
      }
    },
    
    methods:{
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
      popup4 () {
        this.popupVisible4 = true;
      },
    },
  };
</script>