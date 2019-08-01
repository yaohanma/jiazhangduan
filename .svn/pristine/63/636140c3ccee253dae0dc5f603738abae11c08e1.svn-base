<style lang='scss' scoped>
  .view-container {
    margin: 30px;
  }

  .changeNickName {
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
<style>
  #change-box input::-webkit-input-placeholder{
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #change-box input::-moz-placeholder{   /* Mozilla Firefox 19+ */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #change-box input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #change-box input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }

</style>

<template>
	<div>
    <!-- 顶部导航栏 -->
    <mt-header title="修改昵称">
      <router-link to="/my/userInfo/userInfo" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button  slot="right"></mt-button>
    </mt-header>

    <div class='view-container' id="change-box">
      <!-- 修改昵称输入框  -->
      <input v-model="nickName" class='changeNickName' v-on:input="changeInput()"  type='text'  maxlength='8' placeholder='请输入您的昵称'/>
      <!-- 保存按钮 -->
      <div class='btn-save' @click="saveAction">保存</div>
    </div>

	</div>
</template>

<script>
  export default {
    components: {
      },
    data() {
      return{
        nickName:'',
      }
    },
    mounted:function () {
      // 获取本地用户个人信息
      this.user = JSON.parse(localStorage.getItem("user"));
      this.nickName = this.$route.query.nickName == ""?"家委001":this.$route.query.nickName;
      localStorage.setItem("backPath", "/my/userInfo/userInfo");
    },
    methods: {
      //表情符控制
      changeInput() {
        var regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
        var nameValue = this.nickName
        var nameValueRe = nameValue.replace(regStr, '')
        if(nameValue != nameValueRe) {
          Toast("不能输入表情符")
          this.nickName = nameValueRe
        }
      },
      // 保存按钮点击事件
      saveAction() {
        // 判断输入是否为空
        if (this.nickName == "") {
          Toast('请输入昵称');
          return;
        }
        // 判断输入的是否是汉字
        // if (!(/^[\u4E00-\u9FA5]+$/i.test(this.nickName))) {
        //   Toast('请输入汉字');
        //   return;
        // }
        // console.log(this.nickName)
        // this.$Indicator.open('');
        this.$post('/committee/my_message/update_nick_name', {
            "nick_name": this.nickName,
            }).then((data) => {
              // this.$Indicator.close();
              if (!data.success) {
                // 失败
                Toast(data.errorMsg)
              } else {
                console.log(data)
                // 成功 跳入验证码输入页面
                this.$router.push({
                  path: '/my/userInfo/userInfo',
                })
              }
            });
      }

    }
   }

</script>
