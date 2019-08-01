<style lang='scss' scoped>
.allActivitys-warp {
  // position: fixed;
  height: 100%;
  width: 100%;
  background: rgb(245,246,247);
}
	.msg-container {
    padding-bottom: 140px;
    padding-top: 90px;
    .stance {
      height: 20px;
    }
    .title {
      font-size: 36px;
      color: rgb(49,51,64);
      background: #fff;
      padding: 24px;
      text-align: left;
      font-weight: bold;
    }
    .msg-list {
      margin: 30px 26px 0 26px;
      .msg-inner {
        position: relative;
        background: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding:30px;
        
        .activity-tips {
          position: absolute;
          top: 0;
          right: 0;
          padding: 30px;
          width: 36px;
          height: 20px;
        }
        
        .title-box {
          display: flex;
          padding: 10px 0 10px 10px;
          .msg-img {
            display: block;
            width: 160px;
            height: 120px;
          }
          .title-txt {
            font-size: 30px;
            color: rgb(49,51,64);
            font-weight: bold;
            text-align: left;
            padding-left: 20px;
            // display: -webkit-box;
            // -webkit-line-clamp:2;
            // -webkit-box-orient: vertical;
            // overflow: hidden;
            // height: 80px;
          }
          .release-time {
            font-size: 24px;
            color: rgb(136,138,151);
            padding: 10px 20px;
            text-align: left;
          }
        }
        .apply-numb {
          font-size: 28px;
          color: rgb(136,138,151);
          text-align: left;
          padding: 20px 0;
          span {
            color: rgb(49,51,64);
          }
        }
      }
      .resource-bar {
        padding-bottom: 80px;
      }
      // 发送家长  按钮
      .send-btn {
        font-size: 30px;
        font-weight: bold;
        color: rgb(4,147,240);
        padding: 30px 0;
        background: #fff;
        border-top: 2px solid rgb(234,238,242);
        border-left: none;
        border-right: none;
        border-bottom: none;
        width: 100%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      // 活动已结束按钮
      .send-btn-over {
        color: rgb(160,164,177);
      }
    }
    // 暂无数据
    .nothing-container {
      width: 100%;
      margin-top: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: ceter;
      .icon-nothing {
        width: 305px;
        height: 186px;
        margin-bottom: 58px;
      }
      p {
        color: #999;
        font-size: 30px;
      }
    }
    // 右上角三个点点击后弹出框样式
    .mint-popup-4 {
      width: 100%;
      // 发送微信好友
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
      .btn {
        display: block;
        font-size: 30px;
        color: rgb(49,51,64);
        padding: 30px 0;
        background: #fff;
        border: none;
        width: 100%;
      }
      .revocation-btn {
        color: rgb(255,106,103);
      }
      .cancel-btn {
        border-top: 2px solid rgb(234,238,242)
      }
    }
  }

  .mint-msgbox-wrapper .mint-msgbox {
      border-radius: 50px;
      background: red;
    }
</style>



<template>
	<div id="list" class="allActivitys-warp">
	<!-- 头部bar -->
  <mt-header title="活动" fixed>
    <router-link to="" slot="left">
      <mt-button icon="back" @click="$router.go(-1)"></mt-button>
    </router-link>
    <mt-button  slot="right"></mt-button>
  </mt-header>
  <!-- 活动列表 -->
    <div class="msg-container">
      <div class="msg-list" v-for="(item,index) in items" :key="index">
        <div class="msg-inner">
          <img class="activity-tips" @click="popup4" src="../../../assets/activity-btn.png" alt="撤销活动按钮">
          <div class="title-box" @click="goPageDetail">
            <img class="msg-img" :src="item.imgUrl" alt="图片" width="100px" height="100px" >
            <div>
              <p class="title-txt">{{item.title}}</p>
              <p class="release-time">{{item.time}}发布</p>
            </div>
          </div>
          <p class="apply-numb">报名人数 <span>20</span>/50</p>
        </div>
        <button class="send-btn" size="large" v-if="item.flag" @click="popupForFamily">发给家长</button>
        <button class="send-btn send-btn-over" size="large" v-else :disabled="disabled">已结束</button>
      </div>
      <!-- 右上角三个点点击按钮，下侧弹出框 -->
      <mt-popup
      v-model="popupVisible4"
      position="bottom"
      class="mint-popup-4">
        <button class="btn revocation-btn" size="large" @click="revocationBtn">撤销活动</button>
        <button class="btn cancel-btn" size="large" @click="cancelBtn">取消</button>
      </mt-popup>

      <!-- 点击发给家长 -->
      <mt-popup
      v-model="popupVisibleForFamily"
      position="bottom"
      class="mint-popup-4">
        <div class="wx">
          <img class="wx-img" src="../../../assets/wx.png" alt="微信图片">
          <p class="wx-txt">微信好友</p>
        </div>
      </mt-popup>

      <!-- 暂无数据 -->
      <div class="nothing-container" v-if="flag==0">
        <img class="icon-nothing" src="../../../assets/icon_nothing.png" alt="暂无数据">
        <p>暂无数据</p>
      </div>
    </div>
	</div>
</template>


<script>
  export default {
    components: {
      },
    data() {
      return{
        flag:true, // 发送家长 和 已结束 按钮 显示隐藏， 默认1显示‘发送家长’
        popupVisible4: false, // 点击右上角三个点，下弹出事件，默认隐藏
        popupVisibleForFamily:false, // 发给家长下拉弹微信
        disabled:true,
        
        
        items: [
        {
          title:'本学期第一次家长',
          time:'2018-08-23 10:26',
          imgUrl:require('@/assets/activitys1.png'),
          flag:true
        },
        {
          title:'第三季趣味运动会',
          time:'2018-08-23 10:26',
          imgUrl:require('@/assets/activitys2.png'),
          flag:true
        },
        {
          title:'消防安全宣讲活动',
          time:'2018-09-23 09:23',
          imgUrl:require('@/assets/activitys3.png'),
          flag:false
        },
        {
          title:'第一届父母训练营活动',
          time:'2018-08-23 10:26',
          imgUrl:require('@/assets/activitys1.png'),
          flag:true
        }
      ]
      }
    },
    methods: {
      // 右上角三个点撤销按钮点击事件
      popup4 () {
        this.popupVisible4 = true;
      },
      // 发给家长
      popupForFamily () {
        this.popupVisibleForFamily = true;
      },
      // 撤销活动按钮点击事件
      revocationBtn () {
        this.popupVisible4 = false;
        MessageBox.confirm('', {
          message: '确定取消此次活动吗？',
          // title: '用户未登录',
          showConfirmButton:true,
          showCancelButton:true,
          closeOnClickModal: false, // 点击背景是否关闭弹框
          cancelButtonClass:'cancelButton',
          confirmButtonClass:'confirmButton',
          confirmButtonText:'确定',
          cancelButtonText:'取消'
        }).then(action => {
          //用户选择确定
          if (action == 'confirm') {
            Toast('确定')
          }
        }).catch(err => {
          //用户取消
          if (err == 'cancel') {
            Toast('取消')
          }
        });
      },
      // 取消按钮点击事件
      cancelBtn () {
        this.popupVisible4 = false;
      },
      // 点击进入详细页
      goPageDetail() {
        this.$router.push({
          path:'/work/activityDetail/activityDetail'
        })
      }
    }
   }

</script>