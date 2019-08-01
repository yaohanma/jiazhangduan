<style lang="scss" scoped>
  .container-view {
    padding-bottom: 100px;
    overflow: hidden;
  }

  .title-view {
    width: 100%;
    line-height: 110px;
    background: #f5f6f7;
    font-size: 34px;
    font-weight: bold;
    padding-left: 24px;
  }

  .content {
    // width: 100%;
    line-height: 132px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
  }

  .assign-view {
    display: flex;
    line-height: 132px;
    border-bottom: 1px solid rgb(234, 238, 242);
  }

  .creator-msg {
    width: 100%;
    line-height: 72px;
    align-content: center;
    display: flex;
    flex-direction: row;
  }

  .creator-img {
    margin: 30px 30px 30px 0;
    width: 72px;
    height: 72px;
    border-radius: 36px;
    object-fit: cover;
  }

  .creator-name {
    line-height: 132px;
    font-size: 30px;
    color: black;
    font-weight: bold;
  }

  .choose-position {
    margin-top: 47px;
    margin-right: 60px;
    width: 420px;
    height: 50px;
    line-height: 50px;
    font-size: 28px;
    color: #a0a7b3;
    background: #f1f2f5;
    border: 2px solid #cfd5de;
    border-radius: 8px;
  }

  .type {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
  }

  .type-img {
    width: 16px;
    height: 9px;
    padding-right: 18px;
  }

  .line {
    width: 100%;
    border-bottom: 1px solid #eaeef2;
  }

  .save-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    line-height: 96px;
    background: #1b76ff;
    color: white;
    font-size: 36px;
    text-align: center;
  }

  .mint-popup {
    width: 100%;
    .picker-toolbar {
      .cancel-btn, .sure-btn {
        line-height: 80px;
        font-size: 24px;
      }
      .cancel-btn {
        color: rgb(4, 147, 240);
      }
      .sure-btn {
        color: rgb(49, 51, 64);
      }
      .mint-button {
        width: 50%;
        height: 80px;
        line-height: 80px;
        font-size: 24px;
        background: #fff;
        border-bottom: 2px solid #eaeaea;
        border-right: 2px solid #eaeaea;
        padding: 0;
        border-radius: 0;
      }
    }

  }
</style>

<style>
  .picker-toolbar {
    height: 80px;
    display: flex;
    /* border-bottom: none; */
  }
</style>


<template>
  <div>
    <!-- 顶部导航栏 -->
    <mt-header title="分配职位">
      <router-link to="/my/familyMember/familyMember" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>

    <div class='container-view'>
      <div class='title-view'>家长家委</div>

      <div>
        <div class='content' v-for="(item,index) in parentList">
          <div class='assign-view'>
            <div class='creator-msg'>
              <img class='creator-img' v-if="item.photo" v-bind:src="item.photo"/>
              <img class='creator-img' v-else src="../../../assets/my_headZhou@2x.png"/>
              <div class='creator-name'>{{(item.member_name!=null&&item.member_name!='')?item.member_name:'家委家长'+(index+1)}}</div>
            </div>
            <div class='choose-position'>
               <!--<picker bindchange="bindPickerChange" range="{{positions}}" range-key="role_name" data-index="{{index}}">-->
              <div class='type' @click="popupClick(index,item.member_id)">{{item.role_name =="" ?'待分配':item.role_name}}
                <img class='type-img' src='../../../assets/icon_drop_down.png'/>
              </div>
               <!--</picker>-->
            </div>
          </div>
          <!-- <div class='line'></div> -->
        </div>
      </div>
    </div>
    <div class='save-btn' @click="savePosition">保存</div>

    <!-- 待分配弹框 -->
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
      <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
      <mt-picker :slots="slotsList" :visible-item-count="5" :show-toolbar="true" ref="picker" value-key="">
        <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
        <mt-button @click="handleConfirm" class="sure-btn">确定</mt-button>
      </mt-picker>
    </mt-popup>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 待分配 默认隐藏
        popupVisible: false,
//        slots:[{values: ['主任', '副主任', '学校委员', '组织委员', '其他']}],
        slotsList: null,
//        roleName:"待分配",
        parentList:"",
        selectIndex: 0,
        roleList:null,
        downloadImg : this.$ServerUrl + '/committee/activity/download_file?resource_name=',
      }
    },
   created() {
      window.addEventListener('setItem', ()=> {
        this.popupVisible = JSON.parse(sessionStorage.getItem('watchStorage'));
      })
    },
	 watch: {
		popupVisible: function (val) {
			if(val) {
				sessionStorage.setItem('watchStorage',true)
			} else {
				sessionStorage.setItem('watchStorage',false)
			}
		}
	},
	mounted: function () {
      var user = JSON.parse(localStorage.getItem("user"))
      localStorage.setItem("backPath", "/my/familyMember/familyMember");
      if (user && user.pta_id) {
        var ptaId = user.pta_id;
        var schoolId = "";
        var cityId = "";
        var districtId = "";
        // if (user.school_id) {
        //   schoolId = user.school_id;
        // } else if (user.city_id) {
        //   cityId = user.city_id;
        // }

        /**
        * 身份
        * 0 无权限
        * 1 city
        * 2 diatrict
        * 3 school
        *
        *private String identity
        * **/
        if (user.identity == '3') {
          schoolId = user.school_id;
        } else if (user.identity == '1') {
          cityId = user.city_id;
        } else if (user.identity == '2') {
          districtId = user.district_id;
        }
        this.$post('/committee/family/role_list', {
          "pta_id": ptaId,
          "school_id": schoolId,
          "city_id": cityId,
          "district_id": districtId,
        }).then((data) => {
          if (!data.success) {
            Toast(data.errorMsg)
          } else {
            var roleArray = new Array();
            var roleList = [];
            var role = [];
            role.push("待分配");
            if(data.result){
              for (var i = 0; i < data.result.length; i++) {
                var roleInfo = {};
                role.push(data.result[i].role_name);
                roleInfo.roleId = data.result[i].role_id
                roleInfo.roleName = data.result[i].role_name
                roleList.push(roleInfo);
              }
            }
            var roleArray = new Array(), roleData = {};
            roleData.values = role;
            roleArray.push(roleData);
            this.slotsList = roleArray
            this.roleList = roleList
          }
        });
        this.$post('/committee/family/member_info', {
          "pta_id": ptaId
        }).then((data) => {
          if (!data.success) {
            Toast(data.errorMsg)
          } else {
            if(data.result.parent_list){
                  for(var i =0; i<data.result.parent_list.length; i++){
                    if(data.result.parent_list[i].photo){
                      if(data.result.parent_list[i].photo.indexOf("http") == -1){
                        data.result.parent_list[i].photo = this.downloadImg + data.result.parent_list[i].photo;
                      }
                    }
                  }
                }
            this.parentList = data.result.parent_list
        }
        });
      }
    },
    methods: {
      handleConfirm() {//确认
        var checkFlag = true;
        for(var i=0;i<this.parentList.length;i++){
          if(this.parentList[i].role_name == this.$refs.picker.getValues()[0] && this.$refs.picker.getValues()[0] != "待分配"){
            Toast("此职位已被分配，请选择其他职位");
            checkFlag = false;
          }
        }
        this.popupVisible = false
        if(checkFlag){
          this.currentTags = this.$refs.picker.getValues()[0]
          this.parentList[this.selectIndex].role_name = this.$refs.picker.getValues()[0];
        }
      },
      handleCancel() {
        this.popupVisible = false
        console.log('点击取消')
      },
      popupClick(index,memberId) {
        this.popupVisible = true;
        this.selectIndex = index;
      },
      savePosition(){
        var dataList = [];
        var dataArr = {}
        for(var i = 0;i<this.parentList.length;i++){
          for(var s = 0;s<this.roleList.length;s++){
            if(this.parentList[i].role_name == this.roleList[s].roleName){
              this.parentList[i].role_id = this.roleList[s].roleId
            }
          }
          if(this.parentList[i].role_name == "待分配" || this.parentList[i].role_name == ""){
            this.parentList[i].role_id = "";
            this.parentList[i].role_name = "";
          }
        }
        var user = JSON.parse(localStorage.getItem("user"))
        if (user && user.pta_id) {
          var ptaId = user.pta_id;
          this.$post('/committee/family/set_role', {
            "pta_id": ptaId,
            "data":this.parentList
          }).then((data) => {
            if (!data.success) {
              Toast(data.errorMsg)
            } else {
//              this.$router.go(0)
              Toast("操作成功")
              this.$router.push({
                path:'/my/familyMember/familyMember'
              })
            }
          });
        }
      }
    }
  }

</script>
