<template>
    <div class="content" id="family-member">
        <!-- 顶部导航栏 -->
      <mt-header class="top-header-family" title="家委会成员" fixed>
        <router-link to="/my/myIndex/myIndex" slot="left">
          <mt-button icon="back"></mt-button> <!-- @click="$router.go(-1)" -->
          </router-link>
          <!-- <mt-button  slot="right"></mt-button> -->
      </mt-header>

      <!-- 顶部蓝色部分 -->
      <div class="top-UI">
          <!-- <div class="imgBg"> -->
              <!-- 头像-->
            <img src="../../../assets/my_headPlace.png" alt="占位头像">
          <!-- </div> -->
          <div class="textBg">
        <!-- 年级班 -->
          <p class="top-title">1年级1班家委会</p>
          <!-- 子标题 -->
          <!-- <p class="top-subTitle"></p> -->
          <!-- 邀请家委会 -->
          <p v-if="!isParent" class="top-rightSubTitle" @click="inviteFamilyClick">邀请家委</p>
          </div>
          
      </div>
      
      <!-- 底部UI -->
      <div class="bottom-UI">
        <div class="section-bg">
          <p class="list-setcion">创建者</p>
        </div>
          
          
          <!-- 创建者 -->  
          <div class="cell">
              <img class="left-icon" src="../../../assets/my_headZhou@2x.png" alt="创建家委会">
              <p class="cell-title">周菀青</p>
          </div>


          <!-- 家长家委 -->
          <div class="section-bg">
            <p class="list-setcion">家长家委</p>
            <p class="deal-duty" @click="goWaitAllocation" v-if="!isParent">分配职位</p>
          </div>

          <div class="content-bg">
            <div class="cell">
              <mt-cell-swipe
              class="cell-swipe"
              :right="[
                {
                  content: '删除',
                  style: { background: 'red', color: '#fff'},
                  handler: () => this.$messagebox('delete')
                }
              ]">
                  <img class="left-icon" src="../../../assets/my_headChenPa@2x.png" alt="创建家委会">
                  <p class="cell-title">陈秋雨爸爸</p>
                <div class="cell-text">
                    <p class="cell-subTitle">主任</p>
                </div>
                <div class="cell-line"></div>
              </mt-cell-swipe>
            </div>

            <div class="cell">
              <mt-cell-swipe
              class="cell-swipe"
              :right="[
                {
                  content: '删除',
                  style: { background: 'red', color: '#fff'},
                  handler: () => this.$messagebox('delete')
                }
              ]">
                <img class="left-icon" src="../../../assets/my_headChenMa@2x.png" alt="创建家委会">
                <p class="cell-title">陈知夏妈妈</p>
                <div class="cell-text">
                  <p class="cell-subTitle">副主任</p>
                </div> 
                <div class="cell-line"></div>
              </mt-cell-swipe>
              
            </div>

            <div class="cell">
               <mt-cell-swipe
              class="cell-swipe"
              :right="[
                {
                  content: '删除',
                  style: { background: 'red', color: '#fff'},
                  handler: () => this.$messagebox('delete')
                }
              ]">
                <img class="left-icon" src="../../../assets/my_headHua@2x.png" alt="创建家委会">
                <p class="cell-title">花浅笑妈妈</p>
                <div class="cell-text">
                  <p class="cell-subTitle">学习委员</p>
                </div>  
                <div class="cell-line"></div> 
              </mt-cell-swipe>
              
            </div>

            <div class="cell">
               <mt-cell-swipe
              class="cell-swipe"
              :right="[
                {
                  content: '删除',
                  style: { background: 'red', color: '#fff'},
                  handler: () => this.$messagebox('delete')
                }
              ]">
                <img class="left-icon" src="../../../assets/my_headLi@2x.png" alt="创建家委会">
                <p class="cell-title">李湘君妈妈</p>
                <div class="cell-text">
                  <p class="cell-subTitle" @click="goWaitAllocation">待分配</p>
                </div> 
              </mt-cell-swipe>
              
            </div>
          </div>
          
          

          <!-- 普通教师 -->
          <div class="section-bg">
            <p class="list-setcion">普通教师</p>
          </div>
          
          <div class="content-bg">
            <div class="cell">
               <mt-cell-swipe
              class="cell-swipe"
              :right="[
                {
                  content: '删除',
                  style: { background: 'red', color: '#fff'},
                  handler: () => this.$messagebox('delete')
                }
              ]">
                <img class="left-icon" src="../../../assets/my_headLi@2x.png" alt="创建家委会" v-if="!isParent">
                <p class="cell-title">李湘君妈妈</p>
                <div class="cell-subBtnBg">
                  <button class="cell-subBtn" @click="revocationBtn" v-if="!isParent">转让管理权给ta</button>
                </div>
              </mt-cell-swipe>
            
            </div>

          </div>
      </div>
      <!-- 邀请家委弹框 -->
      <div v-if="inviteFamilyTap" >
        <div class="invite-family-dialog">
          <h4>邀请家委</h4>
          <button class="invite-btn" @click="inviteFamilyBtn">邀请家长家委</button>
          <button class="invite-btn" @click="inviteTeacherBtn">邀请普通教师</button>
        </div>
        <div @click="inviteFamilyClose"  class="invite-family-tap"></div>
      </div>
      <!-- 邀请码弹框 -->
      <div></div>
    </div>
</template>

<style lang="scss" scoped>
// 样式
.content {
    background: rgb(245,246,247);
    overflow: hidden;
    .top-UI {
        position: relative;
        background: url("../../../assets/member_title_bg.png");
        background-size: cover;
        height: 223px;
        width: 100%;
        margin-top: 90px;
        // 头像
        img {
            position: absolute;
            top: 21px;
            left: 30px;
            width: 88px;
            display: inline-block;
        }
        // 标题背景
        .textBg {
            position: absolute;
            left: 138px;
            top: 21px;
            right: 31px;
            // background-color: green;
            display: inline;
        }
        // 大标题 年级班
        .top-title {
            // background-color: red;
            font-size: 46px;
            color: rgb(255,255,255);
            font-weight: bold;
            padding-top: 10px;
        }
        // 子标题
        .top-subTitle {
            display: inline;
            font-size: 24px;
            color: rgb(255,255,255);
        }
        // 右侧子标题
        .top-rightSubTitle {
            position: absolute;
            display: inline;
            font-size: 24px;
            color: rgb(255,255,255);
            right: 0px;
            padding: 0 20px 20px 20px;
        }

    }

    // 底部UI
    .bottom-UI{
        position: relative;
        .content-bg {
          background-color: white;
          // position: absolute;
          width: 100%;
        }
        // 区头
        .list-setcion {
            display: inline;
            color: rgb(160,164,177);
            font-size: 24px;
            padding-left: 29px;
            // height: 62px;
            // p标签文字垂直居中(line-height与height相同时)
            line-height: 62px;
        }
        // 分配职务
        .deal-duty {
            position: absolute;
            color: rgb(27,118,255);
            font-size: 24px;
            display: inline-block;
            padding-right: 29px; 
            text-align: right;
            right: 0px;
            line-height: 62px;
        }
        // cell
        .cell {
          position: relative;
            background-color: white;
            height: 132px;
            
            // 头像
            img{
                padding-left: 30px;
                display: inline-block;
                width: 73px;
                // left: 0px;
                // 图片在div垂直居中
                vertical-align: middle;
            }
            // 文字部分
            .cell-text {
              position: absolute;
              width: 150px;
              right: 58px;
              top: 0px;
              height: 100%;
              padding-right: 0px;
              display: inline-block;
              
            }
            // 名称
            .cell-title{
              font-size: 30px;
              color: rgb(49,51,64);
              display: inline-block;
              font-weight: bold;
              line-height: 132px;
              padding-left: 20px;
            }
            // 职位
            .cell-subTitle {
              display: inline-block;
              font-size: 28px;
              color: rgb(160,164,177);
              width: 100%;
              text-align: right;
              // padding-right: 58px;
              line-height: 132px;

            }
            // cell底部的线
            .cell-line {
              background-color: rgb(234,238,242);
              position: absolute;              
              height: 2px;
              left: 30px;
              right: 0px;
              bottom: 0px;
            }
            // 右侧button背景
            .cell-subBtnBg {
              position: absolute;
              display: inline-block;
              width: 270px;
              right: 0px;
              height: 100%;
            }
            // cell右侧的按钮
            .cell-subBtn {
              position: absolute;
              display: inline-block;
              background-color: rgb(241,242,245);
              right: 30px;
              width: 240px;
              height: 48px;
              top: 35.6%;
              border-radius: 10px;
              border: 2px solid rgb(207,213,222);
              color: rgb(160,164,177);
              font-size: 28px;
            }
        }

        
    }
}
// 邀请家委弹框
.invite-family-tap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(000, 000, 000, .5);
  width:100%;
  height: 100%;
  z-index: 1;
}
.invite-family-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    right: 0;
    width: 90%;
    margin: 0 auto;
    background: #fff;
    z-index: 999;
    transform: translate3d(-50%, -50%, 0);
    transition: .2s;
    h4 {
      font-size: 36px;
      color: rgb(4,147,240);
      font-weight: bold;
      padding-top: 46px;
      text-align: center;
    }
    .invite-btn {
      display: block;
      border: 0;
      background: rgb(4,147,240);
      color: #fff;
      font-size: 36px;
      text-align: center;
      padding: 30px 0;
      margin: 66px auto;
      width: 604px;
      border-radius: 8px;
    }
  }

</style>

<style lang="scss">
/* 顶部导航栏 */
 #family-member {
   .top-header-family {
    background: #1b76ff !important;
    color: white;
    border-bottom: 0px;
    line-height: 90px;
    font-size: 36px;
    font-weight: bold;
   }
  
}

/* 左滑删除 */
.mint-cell-swipe-button {
    background:rgb(249,91,92);
    line-height: 132px;
    font-size: 34px;
    padding: 0 40px;
  }
.mint-cell:first-child .mint-cell-wrapper {
    height: 132px;
    
} 
.mint-cell-title {
    display: none;
}

/* 去掉自带分割线 */
.mint-cell:last-child{
  background-repeat: repeat;
  background: #fff;
}

/* 添加1像素避免右边多一条红线 */
.mint-cell:last-child{
  transform: translate3d(1px, 0px, 0px);
}

.mint-cell-left {
  transform: translate3d(1px, 0px, 0px);
}
.mint-cell-swipe-buttongroup {
  background: white;
}
</style>

<script>

  export default {
      
    data() {
        
      return{
        // 邀请家委弹框 默认隐藏
        inviteFamilyTap:false,
        examplename: 'familyMember',

      }
    },
		computed:{
			isParent() {
					return this.$store.getters.isParent
				}
		},
    methods:{
        
        // 点击-转让管理权给ta
        revocationBtn () {
        this.popupVisible4 = false;
        MessageBox.confirm('', {
          message: '将家委会转让给ta？<br />转让后您将变为普通教师',
          // title: '用户未登录',
          showConfirmButton:true,
          showCancelButton:true,
          closeOnClickModal: true, // 点击背景是否关闭弹框
          cancelButtonClass:'cancelButton',
          confirmButtonClass:'confirmButton',
          confirmButtonText:'确定',
          cancelButtonText:'取消'
        }).then(action => {
          //用户选择确定
          if (action == 'confirm') {
            // Toast('确定')
          }
        }).catch(err => {
          //用户取消
          if (err == 'cancel') {
            // Toast('取消')
          }
        });
      },
      // 邀请家委弹框按钮
      inviteFamilyClick () {
        this.inviteFamilyTap = true
      },
      // 邀请家委弹框-点击背景关闭
      inviteFamilyClose () {
        this.inviteFamilyTap = false
      },
      // 邀请家长家委点击事件
      inviteFamilyBtn() {
        this.$router.push({
          path:'/my/inviteFamily/inviteFamily'
        })
      },
      // 邀请教师家委点击事件
      inviteTeacherBtn() {
        this.$router.push({
          path:'/my/inviteFamily/inviteFamily'
        })
      },
      // 点击进入分配页
      goWaitAllocation() {
        this.$router.push({
          path:'/my/distributePosition/distributePosition'
        })
      }
    }
   }

</script>