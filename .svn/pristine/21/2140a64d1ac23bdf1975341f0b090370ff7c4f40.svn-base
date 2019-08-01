<style lang='scss' scoped>
  .nav-bar {
    position: fixed;
    margin: 0 auto;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 98px;
    padding: 14px 0 0 0;
    background: #fff;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #eee;
    list-style: none;
    font-size: 14px;
    color: #333;
    li {
      -webkit-appearance: none;
	    -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
    .barIcon {
      width: 100%;
      height: 40px;
      p {
        font-size: 20px;
        color: #8e99a9;
        padding-top: 11px;
        text-align: center;
      }
      img {
        width: 40px;
        height: 40px;
        margin: 0 auto;
      }
    }
    .indexView{
      &.active{
        p {
          color: #1b76ff;
        }
      }
    }
    .workView{
      &.active{
        p {
          color: #1b76ff;
        }
      }
    }
    .myView {
      &.active{ 
        p {
          color: #1b76ff;
        }
      }
    }
  }
</style>

<style>
  /* iPhone X适配（底部栏黑横线） */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .nav-bar {
        padding-bottom: 34px !important;
    }
  }
  /* iPhone XS Max适配（底部栏黑横线） */
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    .nav-bar {
        padding-bottom: 34px !important;
    }
  }
</style>

<!-- 底部切换选项卡 -->
<template>
  <ul class="nav-bar fool">
    <li :class="['barIcon','indexView',$route.name==='homePage'?'active':'',$route.name==='homePageFamily'?'active':'']" @click="$router.push('/index/homePageFamily')">
      <!-- <span></span> -->
      <img v-if="$route.name==='homePage' || $route.name==='homePageFamily'" src="../assets/home_s.png" alt="首页">
      <img v-else src="../assets/home_n.png" alt="首页">
      <p>首页</p>
    </li>
    <li :class="['barIcon','workView',$route.name==='workIndex'?'active':'']" @click="$router.push('/work/workIndex/workIndex')">
    <!-- <span></span> -->
      <img v-if="$route.name==='workIndex'" src="../assets/work_s.png" alt="工作">
      <img v-else src="../assets/work_n.png" alt="工作">
      <p>工作</p>
    </li>
    <li :class="['barIcon','myView',$route.name==='MyIndex'||$route.name==='settings' || $route.name==='userInfo'?'active':'']" @click="$router.push('/my/myIndex/myIndex')">
    <!-- <span></span> -->
    <img v-if="$route.name==='MyIndex' || $route.name==='settings' || $route.name==='userInfo'" src="../assets/my_s.png" alt="我的">
    <img v-else src="../assets/my_n.png" alt="我的">
    <p>我的</p>
    </li>
  </ul>

</template>

<script>
  import Vue from 'vue';
  import Router from 'vue-router';
  Vue.use(Router)

  export default {
    data() {
      return {
      };
    },

    mounted: function () {}
  }

</script>