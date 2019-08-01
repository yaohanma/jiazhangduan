<style lang="scss" scoped>
.container-view {
  padding: 0 30px;
  .banner-pic {
    width: 100%;
    padding: 268px 0 60px 0;
  }
}

.desc {
  font-size: 32px;
  text-align: center;
  padding-bottom: 50px;
}

.download-app {
  height: 96px;
  width: 526px;
  margin: 0 auto;
  font-size: 36px;
  color: #fff;
  background: rgb(4,147,240);
  text-align: center;
  border-radius: 48px;
  line-height: 96px;
  margin-bottom: 104px;
  box-shadow: 0 10px 20px #ddeafd;
}
.qr-code {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
}
.invite-code {
  display: flex;
  justify-content: center;
  align-items: center;
  .invite-title {
    font-size: 36px;
    color: #333;
    font-weight: bold;
  }
  .number {
    font-size: 50px;
    font-weight: bold;
    color: rgb(4,147,240);
    padding: 0 40px 0 10px;
  }
  .copy-btn {
    font-size: 24px;
    color: rgb(4,147,240);
    border: 2px solid rgb(4,147,240);
    width: 150px;
    width: 58px;
    text-align: center;
    border-radius: 50px;
    padding: 20px 50px;
  }
}
.code {
    width: 200px;
    height: 200px;
  }
// 浏览器打开弹框
.dialogs {
  .content {
    position: fixed;
    top: 354px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    font-weight: bold;
    // color: red;
    .item-list {
      font-size: 36px;
      height: 46px;
      line-height: 46px;
      color: #fff;
      padding-bottom: 34px;
      .num1,.num2 {
        display: inline-block;
        width: 46px;
        height: 46px;
        background: red;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        font-size: 36px;
        line-height: 46px;
        font-weight: normal;
      }
      .tips {
        position: relative;
        bottom: 6px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background: #fff;
        width: 72px;
        height: 46px;
        line-height: 46px;
        i {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: #333;
          border-radius: 50%;
          margin: 0 4px;
        }
      }
      .explorer-txt {
        background: #fff;
        border-radius: 10px;
        color: #333;
        padding: 4px 10px;
      }
      .explorer-txt::before {
        position: relative;
        top: 2px;
        display: inline-block;
        content: '';
        background: url('../../../assets/earth.png') no-repeat 0 0;/*兼容没测*/
        background-size: cover;
        width: 32px;
        height: 32px;
      }
    }
  }
  .open-explorer {
    position: fixed;
    top: 120px;
    z-index: 999;
    right: 40px;
    width: 229px;
    height: 184px;
  }
  .mask-bg {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    // z-index: 99;
  }

}

</style>

<template>
    <div>
      <!-- 顶部导航栏 -->
      <mt-header title="下载鹰硕家校通" fixed>
        <router-link to="" slot="left">
          <mt-button></mt-button>
          </router-link>
          <mt-button  slot="right"></mt-button>
      </mt-header>

      <div class='container-view'>
        <img class='banner-pic' src='../../../assets/downloadApp.png'>
        <p class="desc">让学习更高效，让家校更互通</p>
        <!-- <div class='download-app' @click="downloadApp">下载鹰硕家校通</div> -->
        <div class="qr-code">
          <img class="code" src="../../../assets/testqrcode.png" alt="">
          <!-- <img class="code" src="../../../assets/code.png" alt=""> -->
        </div>

        <div class="invite-code">
          <span class="invite-title">邀请码：</span>
          <span class="number" id="copy_text">{{code}}</span>
          <span class="copy-btn tagRead" data-clipboard-action="copy" data-clipboard-target="#copy_text" @click="copy">复制</span>
        </div>
        <!-- <img class="code" src="../../../assets/code.png" alt="">
        <img class="code" src="../../../assets/code2.png" alt=""> -->
      </div>

      <!-- 浏览器打开弹框 -->
      <!-- <div class="dialogs" v-if="dialogsContent">
        <img class="open-explorer" src="../../../assets/download-app-arrows.png" alt="浏览器打开">
        <div class="content">
          <div>
            <div class="item-list">
              <span class="num1">1</span>
              点击右上角的
              <span class="tips">
                <i></i>
                <i></i>
                <i></i>
              </span>
              按钮
            </div>
            <div class="item-list">
              <span class="num2">2</span>
              选择
              <span class="explorer-txt">在浏览器中打开</span>
            </div>
          </div>
        </div>
        <div class="mask-bg" @click="closeMask"></div>
      </div> -->
    </div>
</template>

<script>
	import Clipboard from "clipboard";
  export default {
    data() {
      return{
        // 浏览器打开弹框
        dialogsContent:false,
				code:""
      }
    },
		mounted(){
			this.code = this.$route.query.code;
			// let userAgent = navigator.userAgent;
			// let isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
			// let isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			// if(isAndroid) {
			// 	Toast("是在安卓手机的微信浏览器里");
			// } else if(isiOS) {
			// 	Toast("是在ios手机里的微信浏览器里");
			// }
		},
    methods:{
			// 复制功能 added by stt 20190506
			copy() {
				var clipboard = new Clipboard(".tagRead");
				clipboard.on("success", e => {
					// console.log("复制成功");
					// 释放内存
					e.clearSelection();
					clipboard.destroy();
					Toast('复制成功');
				});
				clipboard.on("error", e => {
					// 不支持复制
					// console.log("该浏览器不支持自动复制");
					// 释放内存
					e.clearSelection();
					clipboard.destroy();
					Toast('复制失败！请手动长按邀请码复制');
				});
      },
      // 点击打开浏览器打开弹框
      downloadApp() {
        this.dialogsContent=true
      },
      // 点击关闭浏览器打开弹框
      closeMask() {
        this.dialogsContent=false
      }
    }
   }

</script>