<style lang='scss' scoped>
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
<style>
  #pass-world-numb input::-webkit-input-placeholder{
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #pass-world-numb input::-moz-placeholder{   /* Mozilla Firefox 19+ */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #pass-world-numb input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #pass-world-numb input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }

</style>

<template>
	<div>
    <!-- 顶部导航栏 -->
    <mt-header title="更换手机号">
      <router-link to="/my/userInfo/userInfo" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button  slot="right"></mt-button>
    </mt-header>

    <div class='view-container' id="pass-world-numb">
      <!-- 请输入新的手机号码 -->
      <input ref="newPhoneNo" class='newPhoneNum' name="change_phone" type='tel' value='' placeholder='请输入新的手机号码'  oninput="if(value.length>11)value=value.slice(0,11)" pattern="[0-9]*">
      <div class='tips'>更换手机号后请用新的手机号登录</div>
      <!-- 下一步按钮 -->
      <div class='btn-next' type='button' @click="nextClickAcion">下一步</div>
    </div>

	</div>
</template>

<script>

  export default {
    components: {
      },
    data() {
      return{
        phoneNumber:'',
        user:{},
      }
    },
    computed:{
      isAloneApp() {
        return JSON.parse(localStorage.getItem("aloneApp")) == '1'
      }
    },

    mounted:function () {
      this.aloneApp = this.$route.query.aloneApp;
      // 获取本地用户个人信息
      this.user = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem("backPath", "/my/userInfo/userInfo");
    },

    methods: {
      // "下一步" btn点击事件
      nextClickAcion () {

        // 获取输入的手机号码
        this.phoneNumber = this.$refs.newPhoneNo.value;

        // 正则: 手机号判断
        var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
        // 判断手机号是否为空
        if (this.phoneNumber == "") {
          Toast('手机号不能为空');
          return;
        }
        // 判断是否为手机号码格式
        if (!myreg.test(this.phoneNumber)) {
          Toast('请输入正确的手机号');
          return;
        }
        // 判断新输入的手机号与原用手机号是否相同
        if (this.user.pta_user_id == this.phoneNumber) {
          Toast('该手机号与当前手机号相同');
          return;
        }else {
          // 调接口
          this.$post('/committee/my_message/checkChangePhone', {
					 "change_phone":this.phoneNumber
          }).then((data) => {
            if (!data.success) {
              // 失败
              Toast(data.errorMsg)
              return;
            }else {
              MessageBox.confirm('', {
              message: '我们将发送短信验证码到这个号码:<br />'+this.phoneNumber,
              title: '确认手机号码',
              showConfirmButton: true,
              showCancelButton: true,
              closeOnClickModal: false, // 点击背景是否关闭弹框
              cancelButtonClass: 'cancelButton',
              confirmButtonClass: 'confirmButton',
              confirmButtonText: '确定',
              cancelButtonText: '取消'
            }).then(action => {
              //用户选择确定
              if (action == 'confirm') {
                // Toast('确定')
                // 调接口更新手机号码, 成功后 跳入验证码输入页面
                this.$post('/committee/my_message/getVerificationCode', {
                "change_phone": this.phoneNumber
                }).then((data) => {
                  if (!data.success) {
                    // 失败
                    Toast(data.errorMsg)
                  } else {
                    // 成功 跳入验证码输入页面
                    this.$router.push({
                      path: '/my/sendVerification/sendVerification',
                      query: {
                        newPhone: this.phoneNumber
                      }
                    })
                  }
                });
              }
            }).catch(err => {
              //用户取消
              if (err == 'cancel') {
                // Toast('取消')
              }
            });
            }

          });
        }


      }
    }

   }

</script>
