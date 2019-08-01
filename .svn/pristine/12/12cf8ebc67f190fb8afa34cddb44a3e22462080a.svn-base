<style scoped lang="scss">
.wrap {
  margin-top: 90px;
}
// 轮播图图片
.swipe-wrapper,
    img{
      width: 100%;
      height: 280px;
  }
  // 近期活动列表
  .activity-item,.resource-item {
    padding: 20px 0;
    background: rgb(245,246,247);
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
        justify-content: s;
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
      justify-content: space-around;
      background: #fff;
      padding: 40px 0;
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
        color: rgb(49,51,64);
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
      }
    }
  }
  // 资源列表
  .resource-item {
    margin-bottom: 80px;
    padding-bottom: 80px;
    .contaier-list {
      display: block;
      padding: 40px 0 0 30px;
      .list-href {
        width: 100%;
        text-decoration: none;
        span {
          display: block;
          width: 690px;
          height: 280px;
        }
        .activity-icon {
          background: url("../../../assets/img_resource_default_2.png");
          background-size: cover;
          border-radius: 10px;
        }
        .activity-icon2 {
          background: url("../../../assets/img_resource_default_1.png");
          background-size: cover;
          border-radius: 10px;
        }
        .resource-list {
          padding-bottom: 30px;
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
      .activity-bar,.resource-bar {
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
        color: rgb(51,51,51);
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
        <mt-swipe-item class="swip-item-1 item">
          <img src="../../../assets/banner.png">
        </mt-swipe-item>
        <mt-swipe-item class="swip-item-2 item">
          <img src="../../../assets/Jellyfish.jpg">
        </mt-swipe-item>
        <mt-swipe-item class="swip-item-3 item">
          <img src="../../../assets/Koala.jpg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 近期活动 -->
    <div class="activity-item">
      <!--标题-->
      <div class='title clearfix'>
        近期活动
        <span class='sub-title'>最近有什么新活动</span>
        <router-link class="list-href" to="/work/allActivitys/allActivitys">
          <span class='all clearfix'>全部
            <img class="all-img" src="../../../assets/right-arrow.png">
          </span>
        </router-link>
      </div>
      <!-- 活动列表 -->
      <router-link to="/work/activityDetail/activityDetail" slot="left">
      <div class="contaier-list">
        <div class="activities-list" v-for="(item,index) in items" :key="index">
          <img class="activity-icon" :src="item.imgUrl" alt="图片" />
          <p class="title-href">{{item.title}}</p>
          <p class="create-time">{{item.time}}</p>
          <!--进行中和已结束和马上开始 按钮-->
          <div class="goingEndBtn">
            <img v-if="item.survival =='0'" src="../../../assets/ongoing.png">
            <img v-if="item.survival =='1'" src="../../../assets/ended.png">
            <img v-if="item.survival =='2'" src="../../../assets/will_flag.png">
        </div>
        </div>
        
      </div>
      </router-link>
    </div>
    <!-- 资源储备 -->
    <div class="resource-item">
      <!--标题-->
      <div class='title clearfix'>
        资源储备
        <span class='sub-title'>最近有发现什么新资源</span>
        <router-link class="list-href" to="/work/allResource/index">
          <span class='all clearfix'>全部
            <img class="all-img" src="../../../assets/right-arrow.png">
          </span>
        </router-link>
      </div>
      <!-- 资源列表 -->
      <div class="contaier-list">
        <router-link class="list-href" to="/work/resourceDetail/index">
          <div class="resource-list">
            <span class="activity-icon"></span>
            <p class="title-href">秋游活动开始了~</p>
            <p class="create-time">2019-09-23 08:50</p>
          </div>
        </router-link>
        <router-link class="list-href" to="/work/resourceDetail/index">
          <div class="resource-list">
            <span class="activity-icon activity-icon2"></span>
            <p class="title-href">郊游活动</p>
            <p class="create-time">2019-09-23 08:50</p>
          </div>
        </router-link>
        <router-view></router-view>
      </div>
    </div>
    <!-- 暂无数据 -->
      <div class="nothing-container" v-if="flag==0">
        <img class="icon-nothing" src="../../../assets/icon_nothing.png" alt="暂无数据">
        <p>暂无数据</p>
      </div>
      <!-- 发布按钮 -->
      <div class="release-btn" @click="releaseBtnClick">
        发布
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
         flag:1, // 发送家长 和 已结束 按钮 显示隐藏， 默认1显示‘发送家长’
         survival:0,
         survival:1,
         survival:2,
        //  近期活动
         items: [
          {
            title:'消防安全宣讲活动',
            time:'2018-08-23 10:26',
            imgUrl:require('@/assets/acitivty_home1.png'),
            flag:true,
            survival:1,
            linkHref:'/work/activityDetail/activityDetail'
          },
          {
            title:'食品健康安全宣讲活动',
            time:'2018-08-23 10:26',
            imgUrl:require('@/assets/acitivty_home2.png'),
            flag:false,
            survival:2
          }
        ]
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