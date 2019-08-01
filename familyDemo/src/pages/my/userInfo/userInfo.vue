<style lang='scss' scoped>
.userInfo {
  font-size: 28px;
  color: #a0a7b3;
  margin: 60px 30px 30px 30px;
}

.title-text {
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.userInfo .viewBar {
  padding-bottom: 26px;
}

.userInfo p:first-child {
  font-weight: bold;
  color: #000;
}

.userHeader, .userName, .userPosition, .userAccount {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 100px;
}
.right-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.userInfo .userHeader .userinfo-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 128px;
  width: 128px;
  border-radius: 50%;
}

.userInfo .right-arrow {
  height: 16px;
  width: 9px;
}

.phoneNum, .realName {
  padding-right: 20px;
}
.link {
  text-decoration: none;
  color: #a0a7b3;
}
</style>

<template>
	<div>
    <!-- 顶部导航栏 -->
      <mt-header title="用户信息">
        <router-link to="/my/myIndex/myIndex" slot="left">
          <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button  slot="right"></mt-button>
      </mt-header>

      <div class='userInfo'>
      <div>
        <!--头像-->
        <div class='viewBar userHeader'>
          <div class='title-text'>头像</div>
          <img class="userinfo-avatar" src="../../../assets/my_header@2x.png" mode="cover">
        </div>
        <!--昵称-->
        <div class='userName'>
          <div class='title-text'>昵称</div>
          <p class="userinfo-nickname">家委001</p>
        </div>
      </div>

      <!--我的职位-->
      <div class='userPosition'>
        <div class='title-text'>我的职位</div>
        <p>创建者</p>
      </div>
      <!--我的账号-->
      <router-link class="link" to="/my/changePhoneNum/changePhoneNum" tag="div" slot="left">
      <div class='userAccount'>
        <div class='title-text'>我的账号</div>
        <div class="right-bar">
          <span class='phoneNum'>13888888888</span>
          <img class='right-arrow' src='../../../assets/right-arrow.png'>
        </div>
      </div>
      </router-link>
      <!--修改密码-->
      <router-link class="link"  to="/my/changePassword/changePassword" slot="left">
      <div class='userAccount'>
        <div class='title-text'>修改密码</div>
        <img class='right-arrow' src='../../../assets/right-arrow.png'>
      </div>
      </router-link>
      <!--真实姓名-->
      <router-link class="link"  to="/my/changeRealName/changeRealName" slot="left">
      <div class='userAccount'>
        <div class='title-text'>真实姓名</div>
        <div class="right-bar">
          <span class='realName'>刘木木</span>
          <img class='right-arrow' src='../../../assets/right-arrow.png'>
        </div>
      </div>
      </router-link>

    </div>
    
	</div>
</template>

<script>
  export default {
    components: {
      },
    data() {
      return{
      }
    },
    methods: {
    }
   }

</script>