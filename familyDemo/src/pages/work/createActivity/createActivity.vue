<style lang='scss' scoped>
	.createActivity-container {
    padding: 0 30px;
    .send-parents-btn {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 36px;
      color: #fff;
      text-align: center;
      padding: 32px 0;
      background: rgb(4,147,240);
      border: 0;
      width: 100%;
    }
    .theme-view {
      border: 1px solid white;
      border-radius: 10px;
      background: #f4f5f6;
      margin-top: 30px;
      padding: 30px;
      height: 108px;
    }
    .theme {
      height: 108px;
      width: 100%;
      word-wrap: break-word;
      color: rgb(183, 189, 198);
      border:none;
      background: rgba(0, 0, 0, 0)
    }
    .keyword {
      border: 1px solid white;
      border-radius: 10px;
      margin-top: 30px;
      height: 88px;
      width: -webkit-fill-available;
      outline: none;
      padding: 0 30px;
      background: #f4f5f6;
      color: rgb(183, 189, 198);
    }
    .type-container {
      border: 1px solid white;
      border-radius: 10px;
      background: #f4f5f6;
      margin-top: 30px;
      padding: 30px;
      line-height: 28px;
    }
    .picker .picker-toolbar {
      display: flex;
    }
    // .mint-popup {
    //   .picker-toolbar {
    //     .cancel-btn,.sure-btn {
    //       line-height: 80px;
    //       font-size: 24px;
    //     }
    //     .cancel-btn {
    //         color: rgb(4, 147, 240);
    //     }
    //     .sure-btn {
    //         color: rgb(49, 51, 64);
    //     }
    //   .mint-button {
    //     width: 50%;
    //     height: 80px;
    //     line-height: 80px;
    //     font-size: 24px;
    //     background: #fff;
    //     border-bottom: 2px solid #eaeaea;
    //     padding: 0;
    //     border-radius: 0;
    //     }
    //   }
      
    // }
    .type {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 28px;
    }
    .type-active {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color:rgb(183, 189, 198);
      font-size: 28px;
    }
    .type-img {
      width: 16px;
      height: 9px;
    }
    .date-container {
      display: flex;
      flex-direction: row;
      margin-top: 30px;
      .mint-button {
        height: 100%;
        border: none;
        border-radius: 10px;
        flex: 1;
        background: #f4f5f6;
      }
      .start-time, .end-time {
        line-height: 88px;
        margin-left: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .start-time-active, .end-time-active {
        line-height: 88px;
        margin-left: 30px;
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(183, 189, 198);
      }
      .calendar-img {
        width: 30px;
        height: 30px;
        margin-right: 15px;
      }
      .empty-view {
        width: 22px;
      }
    }
    .mint-popup-bottom {
      width: -webkit-fill-available;
    }
    .remarks-container {
      overflow: hidden;
      margin-top: 30px;
      padding: 30px;
      border: 1px solid white;
      border-radius: 10px;
      background: #f4f5f6;
    }
    .remarks {
      width: 100%;
      height: 240px;
      word-wrap: break-word;
      color: black;
      background: 0;
      border: 0;
    }
    .remarks-text {
      width: 100%;
      height: 240px;
      word-wrap: break-word;
      color: #b7bdc6;
    }
    .remarks-desc {
      text-align: right;
      margin-right: 20px;
      color: gray;
      font-size: 24px;
    }
    .media-view {
      margin: 30px;
    }
    .media-view-imgs .media-view-item:nth-child(1),
    .media-view-imgs .media-view-item:nth-child(6) {
      padding-left: 0px;
    }
    .media-view-item:nth-child(1) .media-delete,
    .media-view-item:nth-child(6) .media-delete {
      left: 6px;
    }
    .media-view-imgs .media-view-item:nth-child(5),
    .media-view-imgs .media-view-item:nth-child(10) {
      padding-right: 0px;
    }
    .media-view-item {
      position: relative;
      float: left;
      width: 128px;
      height: 128px;
      padding: 12px 6.5px;
    }
    .media-view-img {
      width: 100%;
      height: 100%;
      border: 1px solid white;
      border-radius: 10px;
    }
    .media-delete {
      position: absolute;
      top: 16px;
      left: 12px;
      width: 40px;
      height: 40px;
    }
    
  }
    
  
</style>

<template>
	<div>
    <!-- 头部bar -->
    <mt-header title="创建活动"  v-if="isAloneApp">
      <router-link to="/work/workIndex/workIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button  slot="right"></mt-button>
    </mt-header>

     <!-- 头部bar -->
    <mt-header title="创建活动" v-if="!isAloneApp">
      <router-link to="/index/homePage" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button  slot="right"></mt-button>
    </mt-header>


    <div class="createActivity-container">
      <!-- 活动主题 -->
      <div class='theme-view'>
        <textarea class='theme' placeholder='请输入活动主题'  maxlength='30'  value="" />
      </div>
      <!-- 关键字 -->
      <input class='keyword' placeholder='请输入关键字'  maxlength='4' >
      <!-- 活动类型选择器 -->
      <div class="type-container" @click="popupVisible = true" >
        <div class="type-active">请选择活动类型
          <img class='type-img' src='../../../assets/icon_drop_down.png' />
        </div>
      </div>
      <!-- 活动类型下拉弹框 -->
      <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
      <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
        <mt-picker :slots="slots"  :visible-item-count="5" :show-toolbar="true"  ref="picker" value-key="cName">
              <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
              <mt-button @click="handleConfirm" class="sure-btn">确认</mt-button>
        </mt-picker>
      </mt-popup>

      <!-- 时间选择器 -->
      <div class='date-container'>
        <!-- 开始时间 -->
        <mt-button @click="open('picker1')" size="large">
          <div class='start-time' >开始时间
            <img class='calendar-img' src='../../../assets/icon_calendar.png' />
          </div>
          <!-- <div class='start-time-active'> 
            <image class='calendar-img' src='../../../assets/icon_calendar.png' />
          </div> -->
        </mt-button>

        <div class='empty-view'></div>
        <!-- 结束时间 -->
        <mt-button @click="open('picker1')" size="large">
          <div class='end-time' >结束时间
            <img class='calendar-img' src='../../../assets/icon_calendar.png' />
          </div>
          <!-- <div class='end-time-active'> 
            <img class='calendar-img' src='../../../assets/icon_calendar.png' />
          </div> -->
        </mt-button>
      </div>
      
      <mt-datetime-picker 
        ref="picker1"
        v-model="value"
        :closeOnClickModel="false"
        @visible-change="handleVisibleChange"
        @confirm="handleChange">
      </mt-datetime-picker>

      <!-- 活动内容 -->
      <div class='remarks-container'>
        <textarea class='remarks' cursor-spacing='50' maxlength='3000' placeholder='请输入活动内容，最多3000字' placeholder-style='color:#b7bdc6'   value="" ></textarea>
        <!-- <div  class="remarks-text">请输入活动内容，最多3000字</div> -->
      </div>
      <!-- 显示图片 -->
      <div class='media-view'>
        <div class='media-view-imgs'>
          <img class='media-view-item' src='../../../assets/icon_img.png' @click="showActionSheet" />
          <div>
            <div class="media-view-item" style="display:none;">
              <!-- <img class="media-view-img" src="{{item}}" mode="aspectFill"> -->
              <img class='media-delete' src='../../../assets/icon_delete.png'/>
            </div>
          </div>
        </div>
      </div>
      <!-- 相机弹框 -->
      <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
      </mt-actionsheet>


      <!-- 发送家长按钮 -->
      <button class="send-parents-btn" size="large">发布</button>
    </div>

	</div>
</template>

<script>
  export default {
  name: 'myshow',
  data () {
    return {
      value: null,
      popupVisible: false,
      dateSlots: [ // 当slots这样定义时，因为tagList是通过api异步请求的，无法正常渲染，出现下图空白
       /* {
          flex: 1,
          values: this.$store.state.tagList,
          className: 'slot1',
          textAlign: 'center'
        } */
      ],
      slots:[{values: ['年假', '事假', '病假', '婚假', '其他']}],
      currentTags: {},
      // 拍照
      actions:[],
      sheetVisible:false,
    }
  },
  created () {
    this.$store.dispatch('getTags') // 数据需在create生命周期中设定，否则picker中无法获取
    // 拍照
    this.actions = [
      {name:'拍照',method:this.tackPhoto},
      {name:'从相册中选',method:this.openAlbum}
    ]
  },
  computed:{
			isAloneApp() {
					return this.$store.getters.isAlone
				}
		},
  methods: {
    // ...mapMutations([
    //   'GET_TAGS'
    // ]),
    handleConfirm () {
      this.currentTags = this.$refs.picker.getValues()[0]
      this.popupVisible = false
      console.log ('点击确定')
    },
    handleCancel () {
      this.popupVisible = false
      console.log ('点击取消')
    },
    // 选择时间
    open(picker) {
      // console.log(picker);
      this.$refs[picker].open();
    },
    handleChange(value) {
      // console.log(value);
      Toast({
        message: '已选择 ' + value.toString(),
        position: 'bottom'
      })
    },
    handleVisibleChange(isVisible) {
      // console.log('弹窗是否显示：',isVisible);
    },
    // 拍照
    showActionSheet() {
      this.sheetVisible = true
    },
    tackPhoto() {
      console.log('调用拍照了')
    },
    openAlbum() {
      console.log('调用打开相册')
    }
  }
}
</script>