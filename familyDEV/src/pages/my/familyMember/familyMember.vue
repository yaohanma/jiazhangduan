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
    <div class="top-UI" v-if="flag">
      <!-- <div class="imgBg"> -->
      <!-- 头像-->
      <img src="../../../assets/my_headPlace.png" alt="占位头像">
      <!-- </div> -->
      <div class="textBg">
        <!-- 年级班 -->
        <p @touchstart.prevent="touchin" @touchend.prevent="cleartime" class="top-title">{{ptaName}}</p>
        <!-- 子标题 -->
        <!--<p class="top-subTitle">家委会</p>-->
        <!-- 邀请家委会 -->
        <p class="top-rightSubTitle" v-if="checkRole" @click="inviteFamilyClick">邀请家委</p>
      </div>

    </div>

    <!-- 底部UI -->
    <div class="bottom-UI" v-if="flag">
      <div class="section-bg">
        <p class="list-setcion">创建者</p>
      </div>


      <!-- 创建者 -->
      <div class="cell">
        <img class="left-icon" :src='avatar!=""?avatar:defaultImg' alt="">
        <p class="cell-title">{{memberName}}</p>
      </div>

      <!-- 家长家委 -->
      <div class="section-bg" v-if="checkParentList">
        <p class="list-setcion">家长家委</p>
        <p class="deal-duty" @click="goWaitAllocation" v-if="checkRole">分配职位</p>
      </div>

      <div class="content-bg" v-if="checkParentList">
        <div class="cell" v-for="(item,index) in parentList" :key="index">
          <mt-cell-swipe  v-if="!checkRole"
                          class="cell-swipe"
          >
            <img class="left-icon" :src="item.photo" alt="">
            <p class="cell-title">{{(item.member_name!=null&&item.member_name!='')?item.member_name:'家委家长'+(index+1)}}</p>
            <div class="cell-text">
              <p class="cell-subTitle">{{item.role_name==''?'待分配':item.role_name}}</p>
            </div>
            <div class="cell-line"></div>
          </mt-cell-swipe>
          <mt-cell-swipe  v-if="checkRole"
                          class="cell-swipe"
                          :right="[
                {
                  content: '删除',
                  style: { background: 'red', color: '#fff'},
                  handler: () => delMember(item.member_id)
                }
              ]" style="touch-action: none;">
            <img class="left-icon" :src="item.photo" alt="">
            <p class="cell-title">{{(item.member_name!=null&&item.member_name!='')?item.member_name:'家委家长'+(index+1)}}</p>
            <div class="cell-text">
              <p class="cell-subTitle">{{item.role_name==''?'待分配':item.role_name}}</p>
            </div>
          <div class="cell-line"></div>
          </mt-cell-swipe>
        </div>

        <!-- <div class="cell">
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

        </div> -->




      </div>



      <!-- 普通教师 -->
      <div class="section-bg" v-if="checkTeacherList">
        <p class="list-setcion">普通教师</p>
      </div>

      <div class="content-bg" v-if="checkTeacherList">
        <div class="cell" v-for="(item , index) in teacherList" :key="index">
          <mt-cell-swipe v-if="!checkRole"
                         class="cell-swipe">
            <img class="left-icon" :src="item.photo" alt="创建家委会">
            <p class="cell-title">{{(item.member_name!=null&&item.member_name!='')?item.member_name:'普通教师'+(index+1)}}</p>
            <div class="cell-subBtnBg" v-if="checkRole && item.is_creator == '0'">
              <button class="cell-subBtn" @click="revocationBtn(item.member_id)">转让管理权给ta</button>
            </div>
            <div class="cell-line"></div>
          </mt-cell-swipe>
          <mt-cell-swipe v-if="checkRole"
                         class="cell-swipe"
                         :right="[
                {
                  content: '删除',
                  style: { background: 'red', color: '#fff'},
                  handler: () => delMember(item.member_id)
                }
              ]" style="touch-action: none;">
            <img class="left-icon" :src="item.photo" alt="创建家委会">
            <p class="cell-title">{{(item.member_name!=null&&item.member_name!='')?item.member_name:'普通教师'+(index+1)}}</p>
            <div class="cell-subBtnBg" v-if="checkRole && item.is_creator == '0'">
              <button class="cell-subBtn" @click="revocationBtn(item.member_id)">转让管理权给ta</button>
            </div>
            <div class="cell-line"></div>
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
      <div @click="inviteFamilyClose"  class="invite-family-tap" @touchmove.prevent></div>
    </div>
    <!-- 暂无数据 -->
    <div class="nothing-container" v-if="!flag">
      <img class="icon-nothing" src="../../../assets/icon_nothing.png" alt="暂无数据">
      <p>暂无数据</p>
    </div>

    <!-- 邀请码弹框 -->
    <div></div>
    <div class="wrap-bg"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrap-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: rgb(245, 246, 247);
}
  // 样式
  .content {
    overflow: hidden;
    padding-bottom: 30px;
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
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

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
        padding: 20px;
      }

    }

    // 底部UI
    .bottom-UI{
      position: relative;
      .content-bg {
        background-color: white;
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;
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
        line-height: 132px;

        // 头像
        img{
          object-fit: cover;
          margin-left: 30px;
          display: inline-block;
          width: 73px;
          height: 73px;
          border-radius: 50%;
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
          height: 2.6px;
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
  // 暂无数据
    .nothing-container {
      width: 100%;
      margin-top: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
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
<style>
.top-header-family {
  background: #1b76ff !important;
  color: white;
  border-bottom: 0px;
  line-height: 90px;
  font-size: 36px;
  font-weight: bold;
}
.bottom-UI .mint-cell-swipe{
  touch-action: manipulation !important;
}
</style>

<script>

  export default {

    data() {

      return{
        // 是否是创建之
        iscreater:'',
        // 邀请家委弹框 默认隐藏
        inviteFamilyTap:false,
        examplename: 'familyMember',
        memberName : "",
        ptaName : "",
        parentList : "",
        teacherList : "",
        memberId:"",
        checkRole:false,
        flag:true,
        checkParentList:true,
        checkTeacherList:true,
        avatar:"",
        defaultImg: require('@/assets/default-header.png'),
        memberDefaultImg: require('@/assets/my_headZhou@2x.png'),
        downloadImg : this.$ServerUrl + '/committee/activity/download_file?resource_name=',
      }
    },
     created() {
      window.addEventListener('setItem', ()=> {
        this.inviteFamilyTap = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
    },
     watch: {
    	inviteFamilyTap: function (val) {
    		if(val) {
    			sessionStorage.setItem('watchStorage',true)
    		} else {
    			sessionStorage.setItem('watchStorage',false)
    		}
    	}
    },
    mounted(){
      localStorage.setItem("backPath", "/my/myIndex/myIndex");
      this.init();
    },

    methods:{

      // 点击-转让管理权给ta
      revocationBtn (teacherId) {
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
            var user = JSON.parse(localStorage.getItem("user"))
            if(user && user.pta_id){
              var ptaId = user.pta_id;
              this.$post('/committee/family/set_manager', {
                "pta_id": ptaId,
                "member_id": teacherId
              }).then((data) => {
                if (!data.success) {
                  Toast(data.errorMsg)
                } else {
                  Toast("操作成功")
                  this.init();
                  //  this.$router.push({
                  //   path: '/my/myIndex/myIndex',
                  // })
                }
              });
            }
          }
        }).catch(err => {
          //用户取消
          if (err == 'cancel') {
            // Toast('取消')
          }
        });
      },
      init(){
        var user = JSON.parse(localStorage.getItem("user"))
        if(user && user.pta_id){
          var ptaId = user.pta_id;
          this.$post('/committee/family/member_info', {
            "pta_id": ptaId
          }).then((data) => {
            if (!data.success) {
              Toast(data.errorMsg)
            } else {
							if(data.result.member_name == null || data.result.member_name == '') {
								this.memberName = '创建者'
							} else {
								this.memberName = data.result.member_name
							}

              this.ptaName = data.result.pta_name

              // 判断是否是创建者
              if (data.result.member_id === user.pta_user_id) {
                this.iscreater = '1';
              }
              if(data.result.parent_list && data.result.parent_list.length==0){
                this.checkParentList = false;
              }else{
                this.checkParentList = true;
                if(data.result.parent_list){
                  for(var i =0; i<data.result.parent_list.length; i++){
                    if(data.result.parent_list[i].photo){
                      if(data.result.parent_list[i].photo.indexOf("http") == -1){
                        data.result.parent_list[i].photo = this.downloadImg + data.result.parent_list[i].photo;
                      }
                    }else {
                      data.result.parent_list[i].photo = this.memberDefaultImg;
                    }
                  }
                }
              }
              this.parentList = data.result.parent_list;
              if(data.result.teacher_list && data.result.teacher_list.length==0){
                this.checkTeacherList = false;
              }else{
                this.checkTeacherList = true;
                if(data.result.teacher_list){
                  for(var i =0; i<data.result.teacher_list.length; i++){
                    if(data.result.teacher_list[i].photo){
                      if(data.result.teacher_list[i].photo.indexOf("http") == -1){
                        data.result.teacher_list[i].photo = this.downloadImg + data.result.teacher_list[i].photo;
                      }
                    }else {
                      data.result.teacher_list[i].photo = this.memberDefaultImg;
                    }
                  }
                }
              }
              this.teacherList = data.result.teacher_list;
              let header = data.result.photo;
              if(header){
                if(header.indexOf("http") == -1){
                  this.avatar = this.downloadImg + header;
                } else {
                  this.avatar = header;
                }
              }
              this.memberId = data.result.member_id
              if(this.memberId == user.pta_user_id){
                this.checkRole = true
              }else{
                this.checkRole = false
              }
            }
          });
        }else{
          this.flag = false;
        }
        
      },
      // 长按蓝色区域标题 删除该家委会
      touchin () {
        // 创建者才有权限删除
        if (this.iscreater === '1') {
          clearInterval(this.Loop);
          this.Loop = setTimeout(function() {
              MessageBox.confirm('', {
              message: '确定删除家委会吗？',
              title: '',
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
                this.deleteFamilyMember();
              }
            }).catch(err => {
              //用户取消
              if (err == 'cancel') {
              }
            });
          }.bind(this), 800);
        }
      },
      // 长按蓝色区域标题 删除该家委会
      deleteFamilyMember(){
        var user = JSON.parse(localStorage.getItem("user"))
        // 删除家委会
        this.$post('/committee/family/delete', {
        "pta_id": user.pta_id,
        }).then((result) => {
            if (!result.success) {
              // 失败
              Toast(result.errorMsg)
            } else {
              // 成功 改变涉及的权限
              this.$post('/committee/setting/switch', {
              }).then((data) => {
                // 修改本地用户的pta_id
                if (data.result == undefined || data.result.length <= 0) {
                  // 删除前 只有一个家委会
                  user.pta_id = '';
                } else {
                  // 删除后 还有其他家委会
                  user.pta_id = data.result[0].pta_id;
                }
                localStorage.setItem("user", JSON.stringify(user));

                if (!data.success) {
                  // 失败
                  Toast(data.errorMsg)
                } else {
                  Toast('成功删除家委会')
                  this.$router.push({
                    path: '/my/myIndex/myIndex',
                  })
                }
              });
            }
        });
      },
      // 每次手指移出之后将计时器清零
      cleartime () {
        clearInterval(this.Loop);
      },
      // 点击删除按钮 弹出提示框
      delMember(memberId){
        MessageBox.confirm('', {
					message: '确定删除此家委成员吗？',
					title: '',
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
						this.deleteMember(memberId);
					}
				}).catch(err => {
					//用户取消
					if (err == 'cancel') {
					}
				});
      },
      // 调接口删除成员
      deleteMember(memberId){
        var user = JSON.parse(localStorage.getItem("user"))
        if(user && user.pta_id){
          var ptaId = user.pta_id;
          this.$post('/committee/family/delete_member', {
            "pta_id" : ptaId,
            "member_id" : memberId
          }).then((data) => {
            if (!data.success) {
              Toast(data.errorMsg)
            } else {
              Toast("已删除")
              this.init()
            }
          });
        }
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
          path:'/my/inviteFamilyLogin/inviteFamilyLogin?code=0'
        })
      },
      // 邀请教师家委点击事件
      inviteTeacherBtn() {
        this.$router.push({
          path:'/my/inviteFamilyLogin/inviteFamilyLogin?code=1'
        })
      },
      // 点击进入分配页
      goWaitAllocation() {
        this.$router.push({
          path:'/my/distributePosition/distributePosition'
        })
      }
    },

  }

</script>
