<style lang='scss' scoped>
  .view-container {
    margin: 30px;
  }

  .view-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 188px;
    padding: 0 30px;
    border-radius: 94px;
    box-shadow: 0 0 20px #e7e7e7;
    align-items: center;
    margin-bottom: 36px;
    margin-top: 60px;
    -webkit-appearance: none;
	  -webkit-tap-highlight-color:rgba(0,0,0,0);
    .header-box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .view-header-home {
    margin-top: 0;
    box-shadow: none;
    border-bottom: 2px solid #ededed;
    border-radius: 0;

    .right-arrow {
      display: none;
    }
  }

  .icon-header {
    height: 128px;
    width: 128px;
    margin-right: 30px;
    border-radius: 50%;
    object-fit: cover;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    width: 460px;
    height: 188px;
    justify-content: center;
  }

  .header-name {
    font-size: 48px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: -10px;
    padding-bottom: 10px;
    font-weight: bold;
  }

  .header-desc {
    display: flex;
    font-size: 24px;
    color: #a0a7b3;
    width: 460px;
  }
  .header-desc .position {
    width: 100px;
    word-break:keep-all;
    padding-right: 4px;

  }
  .header-desc span {
    padding: 0 20px;
  }
  .pat-name {
    // width: 70%;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
  }

  .cell-link {
    text-decoration: none;
  }

  .control-list {
    display: flex;
    flex-direction: row;
    line-height: 100px;
    justify-content: space-between;
    align-items: center;
  }

  .control-list .control-title {
    display: flex;
    align-items: center;
    /*垂直居中*/
    justify-content: center;
    /*水平居中*/
    font-weight: bold;
  }

  .control-list p {
    font-size: 30px;
    color: #000;
    padding-left: 20px;
  }

  .right-arrow {
    height: 18px;
    width: 12px;
  }

  .icon_committeeNum {
    width: 34px;
    height: 30px;
  }

  .icon_createCommittee {
    width: 32px;
    height: 32px;
  }

  .icon_settings {
    width: 34px;
    height: 33px;
  }
  [v-cloak] {
    display:none !important;
  }
</style>

<template>
  <div>
    <!-- 顶部导航栏 -->
    <mt-header title="我的" v-if="isAloneApp">
      <router-link to="/" slot="left">
        <!-- <mt-button icon="back"></mt-button> -->
      </router-link>
      <mt-button  slot="right"></mt-button>
    </mt-header>

    <!-- 顶部导航栏 -->
    <mt-header title="我的" v-if="!isAloneApp">
      <router-link to="/index/homePage" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button  slot="right"></mt-button>
    </mt-header>

    <div class='view-container'>

      <router-link class="cell-link" to="/my/userInfo/userInfo" v-if="isAloneApp">
        <div class='view-header'>
          <!--头像-->
          <div class="header-box">
            <img class="icon-header" :src='avatar!=""?avatar:defaultImg'>
            <div class='header-text'>
              <p v-cloak class='header-name'>{{userName}}</p>
              <div class='header-desc'>
                <p class="pat-name">{{ptaName!=null?ptaName:''}}</p>
                <span v-if="position!=null&&ptaName!=null?ptaName:''">|</span>
                <p class="position">{{position==null?'':position}}</p>
              </div>
            </div>
          </div>
          <!--右箭头-->
          <img class='right-arrow' src='../../../assets/right-arrow.png'>
        </div>
      </router-link>

      <div class='view-header view-header-home' v-if="!isAloneApp">
        <!--头像-->
        <div class="header-box">
          <img class="icon-header" :src='avatar!=""?avatar:defaultImg'>
          <div class='header-text'>
            <p v-cloak class='header-name'>{{userName}}</p>
            <div class='header-desc'>
              <p class="pat-name">{{ptaName!=null?ptaName:''}}</p>
                <span v-if="position!=null&&ptaName!=null?ptaName:''">|</span>
              <p class="position">{{position==null?'':position}}</p>
            </div>
          </div>
        </div>
        <!--右箭头-->
        <img class='right-arrow' src='../../../assets/right-arrow.png'>
      </div>

      <!--家委会成员-->
      <router-link class="cell-link" to="/my/familyMember/familyMember" >
        <div class='control-list'>
          <div class='control-title'>
            <img class='icon_committeeNum' src='../../../assets/icon_committeeNum.png'>
            <p>家委会成员</p>
          </div>
          <div>
            <img class='right-arrow' src='../../../assets/right-arrow.png'>
          </div>
        </div>
      </router-link>

      <!--创建家委会-->
      <router-link class="cell-link" to="/my/createCommittee/createCommittee" v-if="creatFlag">
        <div class='control-list'>
          <div class='control-title'>
            <img class='icon_createCommittee' src='../../../assets/icon_createCommittee.png'>
            <p>创建家委会</p>
          </div>
          <div>
            <img class='right-arrow' src='../../../assets/right-arrow.png'>
          </div>
        </div>
      </router-link>

      <!--切换家委会-->
      <router-link class="cell-link" to="/my/switchToCommittee/switchToCommittee" v-if="!isAloneApp">
          <div class='control-list'>
              <div class='control-title'>
                  <img class='icon_createCommittee' src='../../../assets/icon_switchToCommittee.png'>
                  <p>切换家委会</p>
              </div>
              <div>
                  <img class='right-arrow' src='../../../assets/right-arrow.png'>
              </div>
          </div>
      </router-link>

      <!--切换身份-->
      <!-- <router-link class="cell-link" to="" v-if="isAloneApp">
                <div class='control-list'>
                    <div class='control-title' @click="switchrole">
                        <img class='icon_createCommittee' src='../../../assets/icon_identity.png'>
                        <p>切换身份</p>
                    </div>
                    <div>
                        <img class='right-arrow' src='../../../assets/right-arrow.png'>
                    </div>
                </div>
            </router-link> -->

      <!--设置-->
      <router-link class="cell-link" to="/my/settings/settings" v-if="isAloneApp">
        <div class='control-list'>
          <div class='control-title'>
            <img class='icon_settings' src='../../../assets/icon_settings.png'>
            <p>设置</p>
          </div>
          <div>
            <img class='right-arrow' src='../../../assets/right-arrow.png'>
          </div>
        </div>
      </router-link>

    </div>

    <!-- 公共底部 -->
    <publicFooter v-if="isAloneApp"></publicFooter>

  </div>
</template>

<script>
  // 公共底部
  import publicFooter from '@/components/publicFooter'
  export default {
    components: {
      publicFooter
    },
    data() {
      return {
        userName:"",
        position:"",
        ptaName:"",
        creatFlag:"",
        avatar:"",
        defaultImg: require('@/assets/default-header.png'),
        downloadImg : this.$ServerUrl + '/committee/activity/download_file?resource_name=',
      }
    },
    // beforeRouteLeave(to, from, next) {
    //   // 设置下一个路由的 meta
    //   to.meta.keepAlive = false;
    //   from.meta.keepAlive = true;
    //   next();
    //   // if (to.name =='workIndex' || to.name =='homePageFamily' || to.name =='homePage') {
    //   //   to.meta.keepAlive = false;
    //   // }
    //   // next();
    // },
    // beforeRouteEnter(to, from, next) {
    //   // next(vm => { // 这个时候组件还没有创建，所以要通过vm来访问
    //   //   if (from.fullPath == '/A' && to.fullPath == '/B') { //只有是从A进到B页面才执行
    //   //       // 将要执行的逻辑
    //   //       }
    //   //     })
    //   to.meta.keepAlive = false;
    //   next();
    //     },

    mounted:function () {
      var user = JSON.parse(localStorage.getItem("user"))
      if(JSON.parse(localStorage.getItem("aloneApp")) != '1') {
        localStorage.setItem("backPath", "/index/homePage");
      }
      if(user && !user.pta_id){
        user.pta_id = "";
        }
        var ptaId = user.pta_id;
        this.$post('/committee/my_message/select', {
          "pta_id": ptaId
        }).then((data) => {
          if (!data.success) {
            Toast(data.errorMsg)
          } else {
            if(data.result.data_status == '1') {
              data.result.position = ''
              data.result.pta_name = ''

            }
            // flag_no 该账号有没有创建者权限， 1:有 ， 0：没有
            this.userName = (data.result.user_name =="" || data.result.user_name ==null)?'家委001':data.result.user_name;
            this.position = data.result.position
            this.ptaName = data.result.pta_name
            if(data.result.flag_no == 1){
              this.creatFlag = true
            }else{
              this.creatFlag = false
            }
            let header = data.result.header;
            if(header){
              if(header.indexOf("http") == -1){
                this.avatar = this.downloadImg + header;
              } else {
                this.avatar = header;
              }
            }
          }
        });
    },
    computed:{
      isAloneApp() {
        return JSON.parse(localStorage.getItem("aloneApp")) == '1'
      }
    },
  }
</script>
