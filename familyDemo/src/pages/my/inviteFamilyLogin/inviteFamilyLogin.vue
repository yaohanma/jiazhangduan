<style lang="scss" scoped>
.container-view {
  width: 100%;
  overflow: hidden;
  display: fixed;
  top: 0;
}

.img-bg {
  width: 100%;
}

.main-view {
  display: flex;
  position: absolute;
  top: 241px;
  width: 100%;
  height: 703px;
  text-align: center;
  justify-content: center;
}

.code-bg {
  position: absolute;
  width: 630px;
  height: 703px;
}

.code-container {
  // position: relative;
  width: 630px;
  height: 703px;
}

.invite-text {
  position: absolute;
  top: 235px;
  width: 630px;
  font-size: 36px;
  font-weight: bold;
  color: black;
}

.code-view {
  position: absolute;
  top: 300px;
  width: 630px;
  font-size: 72px;
  color: #1b76ff;
  font-weight: bold;
}

.copy-text {
  position: absolute;
  top: 450px;
  line-height: 66px;
  margin-left: 225px;
  width: 180px;
  font-size: 28px;
  color: #1b76ff;
  border: 2px solid #1b76ff;
  border-radius: 34px;
}

.start-invite {
  position: relative;
  border-radius: 0;
  border-bottom: 2px solid #1b76ff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 0;
  bottom: -564px;
  line-height: 96px;
  width: 630px;
  font-size: 36px;
  background: #1b76ff;
  color: white;
}
</style>

<template>
    <div>
      <!-- 顶部导航栏 -->
      <mt-header title="邀请家委登录">
        <router-link to="/my/familyMember/familyMember" slot="left">
          <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button  slot="right"></mt-button>
      </mt-header>

      <div class='container-view'>
        <img class='img-bg' mode='scaleToFill' src='../../../assets/invite_family_bg.png'>
      </div>
      <div class='main-view'>
        <img class='code-bg' mode='scaleToFill' src='../../../assets/invite_family_code_bg.png'>
        <div class='code-container'>
          <div class='code-view'>123456</div>
          <div class='copy-text'>复 制</div>

          <button class='start-invite' lang="zh_CN">立即登录</button>
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return{
      }
    },
    methods:{
    }
   }

</script>