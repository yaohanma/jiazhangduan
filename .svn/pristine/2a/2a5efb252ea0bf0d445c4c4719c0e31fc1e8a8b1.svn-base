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

<style>
  #changePass input::-webkit-input-placeholder{
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #changePass input::-moz-placeholder{   /* Mozilla Firefox 19+ */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #changePass input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }
  #changePass input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
			font-weight: normal;
			color: #b7bdc6;
			font-size: 28px;
  }

</style>

<template>
	<div>
    <!-- 顶部导航栏 -->
    <mt-header title="修改密码">
      <router-link to="/my/userInfo/userInfo" slot="left">
        <mt-button icon="back" ></mt-button>
        </router-link>
        <mt-button  slot="right"></mt-button>
    </mt-header>

    <div class='view-container' id="changePass">
      <!--旧密码输入框 ref="oldPsd"-->
      <input  class='oldPassword' type='password' v-model="oldPsd" placeholder='请输入当前密码'  maxlength='9'>

      <!--新密码输入框  ref="newPsd"-->
      <input class='newPassword' type='password'  v-model="newPsd" placeholder='请输入新密码'  maxlength='9'>

      <!--提示密码组合-->
      <div class='tips'>新密码为：6-9位数字或字母或者组合</div>

      <!--保存按钮-->
      <div class='btn-save' type='button' @click="saveAction">保存</div>
    </div>

	</div>
</template>

<script>
  export default {
    components: {
      },
    data() {
      return{
        // 原密码
        oldPsd:"",
        // 新密码
        newPsd:"",
      }
    },

    mounted:function () {
      localStorage.setItem("backPath", "/my/userInfo/userInfo");
    },

    methods: {
      // 保存按钮点击事件
      saveAction() {
        // 原密码
        // this.oldPsd = this.$refs.oldPsd.value;
        // 新密码
        // this.newPsd = this.$refs.newPsd.value;
        // 正则
        var myreg = /^[0-9A-Za-z*$/g]{6,9}$/;
        var changeOldPassword = this.oldPsd;
        var changeNewPassword = this.newPsd;
        // 判断当前密码是否为空
        if (changeOldPassword == "") {
          Toast('请输入当前密码');
          return;
        }
        // 判断输入的新密码是否为空
        if (changeNewPassword == "") {
          Toast('请输入新密码');
          return;
        }
        // 两次密码是否相同 不可相同
        if (changeOldPassword == changeNewPassword) {
          Toast('两次密码不能相同');
          return;
        }
        // 判断是否符合正则
        if (!myreg.test(changeNewPassword)) {
          Toast('新密码为：6-9位数字或字母或者组合');
          return;
        }
        // this.$Indicator.open('');
        // 调接口更新密码同时check原始密码是否正确
        this.$post('/committee/my_message/update_password', {
        "old_password": changeOldPassword,
        "new_password": changeNewPassword
        }).then((data) => {
          // this.$Indicator.close();
          if (!data.success) {
            // 失败
            Toast(data.errorMsg)
          } else {
            // 修改成功 返回登录页面
            Toast('修改密码成功')
            // 防止清除家长端的数据,所以以下逐个清除 localStorage.clear();
						// 清空本地所有数据
						api.sendEvent({
							name: 'logoutFamily'
						});
						localStorage.removeItem('user');
						localStorage.removeItem('aloneApp');
						localStorage.removeItem('store');
						localStorage.removeItem('globalData');
            this.$router.push({
              path: '/login/passwordLogin/passwordLogin',
							query: {
								backflag: '1'
							}
            })
          }
        });
      }

    }
   }

</script>
