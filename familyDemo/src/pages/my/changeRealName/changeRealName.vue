<style lang='scss' scoped>
  .view-container {
    margin: 30px;
  }

  .changeRealName {
    background: #f4f5f6;
    height: 88px;
    padding-left:30px;
    font-size: 30px;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    width: 100%;
    box-sizing: border-box;
  }

  .btn-save {
    margin-top: 60px;
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
    <mt-header title="修改真实姓名">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)"></mt-button>
        </router-link>
        <mt-button  slot="right"></mt-button>
    </mt-header>
    
    <div class='view-container'>
      <!-- 修改真实姓名输入框  -->
      <input class='changeRealName' value='' type='text'  maxlength='8' placeholder='请输入您的真实姓名'/>
      <!-- 保存按钮 -->
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