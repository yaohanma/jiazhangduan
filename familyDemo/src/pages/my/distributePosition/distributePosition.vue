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
  border-bottom: 2px solid rgb(234, 238, 242);
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
    .cancel-btn,.sure-btn {
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
}
</style>


<template>
    <div>
      <!-- 顶部导航栏 -->
      <mt-header title="分配职位">
        <router-link to="/my/familyMember/familyMember" slot="left">
          <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button  slot="right"></mt-button>
      </mt-header>
      
      <div class='container-view'>
      <div class='title-view'>家长家委</div>

      <div>
        <div class='content'>
          <div class='assign-view'>
            <div class='creator-msg'>
              <img class='creator-img' src="../../../assets/my_headZhou@2x.png" />
              <div class='creator-name'>家委家长</div>
            </div>
            <div class='choose-position'>
              <!-- <picker bindchange="bindPickerChange" range="{{positions}}" range-key="role_name" data-index="{{index}}"> -->
                <div class='type' @click="popupVisible = true">待分配
                  <img class='type-img' src='../../../assets/icon_drop_down.png' />
                </div>
              <!-- </picker> -->
            </div>
          </div>
          <div class='line'></div>
        </div>
      </div>
    </div>
    <div class='save-btn'>保存</div>

    <!-- 待分配弹框 -->
      <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
      <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
        <mt-picker :slots="slots"  :visible-item-count="5" :show-toolbar="true"  ref="picker" value-key="cName">
              <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
              <mt-button @click="handleConfirm" class="sure-btn">确认</mt-button>
        </mt-picker>
      </mt-popup>

    </div>
</template>

<script>
  export default {
    data() {
      return{
        // 待分配 默认隐藏
        popupVisible: false,
        slots:[{values: ['主任', '副主任', '学校委员', '组织委员', '其他']}],
      }
    },
    methods: {
      handleConfirm () {
        this.currentTags = this.$refs.picker.getValues()[0]
        this.popupVisible = false
        console.log ('点击确定')
      },
      handleCancel () {
        this.popupVisible = false
        console.log ('点击取消')
      },
    }
   }

</script>