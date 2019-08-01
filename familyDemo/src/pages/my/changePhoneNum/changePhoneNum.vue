<style lang='scss' scoped>
.wrap {
  margin-top: 120px;
}
  .view-container {
    margin: 30px;
  }

  .newPhoneNum {
    background: #f4f5f6;
    height: 88px;
    padding-left: 30px;
    margin-bottom: 30px;
    font-size: 30px;
    border-radius: 10px;
    font-weight: bold;
    border: 0;
    width: 100%;
    outline: none;
    box-sizing: border-box;
  }

  .tips {
    font-size: 24px;
    color: #b7bdc6;
    padding-bottom: 60px;
  }

  .btn-next {
    background: #1b76ff;
    color: #fff;
    line-height: 100px;
    font-size: 36px;
    border-radius: 50px;
    text-align: center;
  }
</style>

<template>
	<div class="wrap">
    <!-- 顶部导航栏 -->
    <mt-header title="更换手机号" fixed>
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)" ></mt-button>
        </router-link>
        <mt-button  slot="right"></mt-button>
    </mt-header>

    <div class='view-container'>
      <!-- 请输入新的手机号码 -->
      <input class='newPhoneNum' name="change_phone" type='number' value='' placeholder='请输入新的手机号码'  maxlength='11'>
      <div class='tips'>更换手机号后请用新的手机号登录</div>
      <!-- 下一步按钮 -->
      <div class='btn-next'>下一步</div>
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