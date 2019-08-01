<style lang='scss' scoped>
  .view-container {
    margin: 30px;
  }

  /*新旧密码框*/

  .oldPassword, .newPassword {
    background: #f4f5f6;
    height: 88px;
    padding-left: 30px;
    margin-bottom: 30px;
    font-size: 30px;
    border-radius: 10px;
    font-weight: bold;
    border: 0;
    width: 100%;
    box-sizing: border-box;
  }

  /*密码提示框*/

  .tips {
    font-size: 24px;
    color: #b7bdc6;
    padding-bottom: 60px;
  }

  /*保存按钮*/

  .btn-save {
    background: #1b76ff;
    color: #fff;
    line-height: 100px;
    font-size: 36px;
    border-radius: 50px;
    text-align: center;
  }
</style>

<template>
	<div>
    <!-- 顶部导航栏 -->
    <mt-header title="修改密码">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)"></mt-button>
        </router-link>
        <mt-button  slot="right"></mt-button>
    </mt-header>
    
    <div class='view-container'>
      <!--旧密码输入框-->
      <input class='oldPassword' type='password' value='' placeholder='请输入当前密码'  maxlength='9'>

      <!--新密码输入框-->
      <input class='newPassword' type='password'  value='' placeholder='请输入新密码'  maxlength='9'>

      <!--提示密码组合-->
      <div class='tips'>新密码为：6-9位数字或字母或者组合</div>

      <!--保存按钮-->
      <div class='btn-save'>保存</div>
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