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
  top: 220px;
  width: 100%;
  height: 965px;
  text-align: center;
  justify-content: center;
}

.code-bg {
  position: absolute;
  width: 630px;
  height: 965px;
}

.code-container {
  position: relative;
  width: 630px;
  height: 965px;
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

.rule-view {
  display: flex;
  flex-direction: row;
  width: 630px;
  justify-content: center;
  margin-top: 580px;
}

.line {
  border-bottom: 1px solid #dde4ea;
  width: 169px;
  height: 16px;
}

.invite-rule {
  font-size: 24px;
  font-weight: bold;
  color: #a0a7b3;
  margin: 0 20px;
}

.illustrate-view {
  display: flex;
  flex-direction: column;
  margin: 40px 76px;
  font-size: 24px;
  color: #a0a7b3;
  justify-content: start;
  text-align: start;
}

.rule-two {
  margin-top: 12px;
}

.start-invite {
  position: relative;
  border-radius: 0;
  border-bottom: 1px solid #1b76ff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 0;
  bottom: -4px;
  line-height: 96px;
  width: 630px;
  font-size: 36px;
  background: #1b76ff;
  color: white;
}
// 发送微信好友
    .mint-popup-4 {
      width: 100%;
      .wx {
        width: 100%;
        padding: 30px 0;
        background: #fff;
        .wx-img {
          width: 88px;
          height: 88px;
          padding-bottom: 10px;
          margin: 0 auto;
        }
        .wx-txt {
          font-size: 26px;
          color: rgb(49, 51, 64);
          text-align: center;
        }
      }
    }
</style>

<template>
    <div>
      <!-- 顶部导航栏 -->
      <mt-header title="邀请家委">
        <router-link to="/my/familyMember/familyMember" slot="left">
          <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button  slot="right"></mt-button>
      </mt-header>

      <div class='container-view'>
        <img class='img-bg' mode='scaleToFill' src='../../../assets/invite_family_bg.png'>
      </div>
      <div class='main-view'>
        <img class='code-bg' mode='scaleToFill' src='../../../assets/invite_family_code_big_bg.png'>
        <div class='code-container'>
          <div class='invite-text'>邀请码</div>
          <div class='code-view'>123456</div>
          <div class='copy-text'>复 制</div>
          <div class='rule-view'>
            <div class='line'></div>
            <div class='invite-rule'>邀请规则</div>
            <div class='line'></div>
          </div>

          <div class='illustrate-view'>
            <div>1.点击“复制”复制邀请码，可以去家委会群里粘贴邀请码，告诉家长家委和普通教师，可复制去登录小程序。</div>
            <div class='rule-two'>2.点击“开始邀请”可发给微信朋友和群。</div>
          </div>

          <button class='start-invite'  @click="popup4">开始邀请</button>
          <!-- 微信弹框 -->
          <mt-popup
          v-model="popupVisible4"
          position="bottom"
          class="mint-popup-4">
            <div class="wx">
              <img class="wx-img" src="../../../assets/wx.png" alt="微信图片">
              <p class="wx-txt">微信好友</p>
            </div>
          </mt-popup>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return{
        popupVisible4: false, // 发送家长弹出微信，默认隐藏
      }
    },
     created() {
      window.addEventListener('setItem', ()=> {
        this.popupVisible4 = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
    },
    watch: {
    	popupVisible4: function (val) {
    		if(val) {
    			sessionStorage.setItem('watchStorage',true)
    		} else {
    			sessionStorage.setItem('watchStorage',false)
    		}
    	}
    },
    mounted() {
      localStorage.setItem("backPath", "/my/familyMember/familyMember");
    },
    methods: {
      // 发送家长点击事件
      popup4 () {
        this.popupVisible4 = true;
      },
    }
   }

</script>
