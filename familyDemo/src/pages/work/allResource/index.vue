<template>
  <div >
        <!-- 头部 开始 -->
        <mt-header title="资源" fixed id="header">
            <router-link to="/index/homePage" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button slot="right" icon="more"></mt-button> -->
        </mt-header>
        <!-- 头部  end -->
        <div>
            <div v-for="(list,idx) in lists" :key="idx" class="res-listbox">
                <div  class="res-list">
                    <div class="border-box">
                        <div class="link-bar" @click="goPageDetail">
                        <div class="res-list-img">
                            <img :src="list.imgUrl">
                        </div>
                        <div class="res-list-right">
                            <div class="res-list-text">
                                <p >{{list.title}}</p>
                                <div >
                                    <span>{{list.date}}</span>
                                    <span>{{list.time}}</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="list-icon" >
                            <img class="icon-btn" @click="goEditorResource"  src="@/assets/activity-btn.png" >
                        </div>
                    </div>
                </div>
            </div>

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
  
  data () {
    return {
        flag:true,
         popupVisible4: false, // 点击右上角三个点，下弹出事件，默认隐藏
        lists:[
           {
               title:"课外读本资源借阅室",
               date:"2018-08-27",
               time:"10:15发布",
               imgUrl: require("@/assets/activitys2.png"),
           },
           {
               title:"宝安中学课外读本资源",
               date:"2018-08-27",
               time:"10:15发布",
               imgUrl: require("@/assets/img/jwhresource/ffuisg.png"),
           },
           {
               title:"新安中学课外读本资源",
               date:"2018-08-27",
               time:"10:15发布",
               imgUrl: require("@/assets/activitys3.png"),
           }
        ]
    }
  },
  method () {
      
  },
  methods: {
     // 右上角三个点撤销按钮点击事件
      popup4 () {
        this.popupVisible4 = true;
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
          path:'/work/resourceDetail/index'
        })
      },
      // 点击进入编辑页面
      goEditorResource() {
        this.$router.push({
          path:'/work/editorResource/editorResource'
        })
      }
  }
}

</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
.res-listbox{
    padding: 0 30px;
}
.res-list{
    width: 100%;
    align-items: center;
    .border-box{
      display: flex;
      justify-content: space-between;
        .link-bar {
            display: flex;
        }
        .list-icon{
          .icon-btn {
              width: 36px;
              height: 20px;
              padding: 0 0 30px 0;
          }
        }
        border-bottom: 1px solid #eaeef2;
        padding: 36px 30px;
        display: flex;
        .res-list-img{
            width: 160px;
            height: 120px;
             img{
                width: 160px;
                height: 120px;
             }
        }
        .res-list-right{
            display: flex;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            min-width: 0;
            
            .res-list-text{
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                flex: 1;
                text-align: left;
                padding-left: 20px;
                p{
                    font-size: 30px;
                    // height:80px;
                    overflow: hidden;
                    // text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    color: #313340;
                    font-weight: bold;
                }
                div{
                    color: #888a97;
                    font-size: 24px;
                    margin-top: 10px;
                    span{
                        margin-right: 23px;
                    }
                }
            }
           

        }
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
</style>
