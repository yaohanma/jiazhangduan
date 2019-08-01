<style lang='scss' scoped>
:focus {
  outline: none;
}
	input {
  background: 0;
  border: 0;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
  .createActivity-container {
    padding: 90px 30px 0 30px;
    margin-bottom: 120px;
    .send-parents-btn {
      position: fixed;
      bottom: -4px;
      left: 0;
      right: 0;
      font-size: 36px;
      color: #fff;
      text-align: center;
      padding: 34px 0;
      background: rgb(4, 147, 240);
      border: 0;
      width: 100%;
    }
    .theme-view {
      display: flex;
      border: 1px solid white;
      border-radius: 10px;
      background: #f4f5f6;
      margin-top: 30px;
      height: 168px;
    }
    .theme {
      height: 108px;
      width: 100%;
      font-size: 30px;
      padding: 30px 10px 30px 25px;
      line-height: 1.2;
      word-wrap: break-word;
      color: #333;
      border: none;
      background: rgba(0, 0, 0, 0)
    }
    .keyword {
      border: 1px solid white;
      border-radius: 10px;
      margin-top: 30px;
      font-size: 30px;
      width: -webkit-fill-available;
      outline: none;
      padding: 30px;
      background: #f4f5f6;
      color: #333;
    }
    .type-container {
      border: 1px solid white;
      border-radius: 10px;
      background: #f4f5f6;
      margin-top: 30px;
      padding: 30px;
    }
    .picker .picker-toolbar {
      display: flex;
    }
    .type {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 30px;
    }
    .type-active {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: rgb(183, 189, 198);
      font-size: 30px;
    }
    .has-type-active {
      color: #333;
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
        padding: 30px 0 30px 15px;
        display: flex;
        font-size: 30px;
        justify-content: space-between;
        align-items: center;
        color: #b7bdc6;
      }
      .start-time-active, .end-time-active {
        font-size: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333;
      }
      .calendar-img {
        width: 30px;
        height: 30px;
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
      padding: 30px 10px 30px 25px;
      border: 1px solid white;
      border-radius: 10px;
      background: #f4f5f6;
    }
    .remarks {
      width: 100%;
      height: 240px;
      font-size: 30px;
      line-height: 1.2;
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
      margin: 0;
      padding-top: 10px;
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
      padding: 12px 6px;
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
  // 添加图片按钮禁止点击
  .pointer-events {
    pointer-events: none;
  }
</style>

<style>
.mint-button::after {
  border: none;
}
.createActivity-container input::-webkit-input-placeholder,
.createActivity-container textarea::-webkit-input-placeholder{
      font-weight: normal;
      color: #b7bdc6;
      font-size: 30px;
      line-height: 1.2;
      border: 0;
  }
  .createActivity-container input::-moz-placeholder,
  .createActivity-container textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
      font-weight: normal;
      color: #b7bdc6;
      font-size: 30px;
      line-height: 1.2;
      border: 0;
  }
  .createActivity-container input:-moz-placeholder,
  .createActivity-container textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
      font-weight: normal;
      color: #b7bdc6;
      font-size: 30px;
      line-height: 1.2;
      border: 0;
  }
  .createActivity-container input:-ms-input-placeholder,
  .createActivity-container textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */
      font-weight: normal;
      color: #b7bdc6;
      font-size: 30px;
      line-height: 1.2;
      border: 0;
  }
</style>

<template>
  <div>
    <!-- 头部bar -->
    <mt-header title="创建活动" v-if="isAloneApp" fixed>
      <router-link to="/work/workIndex/workIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>

    <!-- 头部bar -->
    <mt-header title="创建活动" v-else fixed>
      <router-link to="/index/homePage" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>


    <div class="createActivity-container">
      <!-- 活动主题 -->
      <div class='theme-view'>
        <textarea class='theme' v-on:input="changeInput()" placeholder='请输入活动主题' maxlength='30' v-model="actData.work_name"/>
      </div>
      <!-- 关键字 -->
      <input class='keyword' v-on:input="changeInput()" placeholder='请输入关键字' maxlength='4' v-model="actData.work_keyword">
      <!-- 活动类型选择器 -->
      <div class="type-container" @click="popupVisible = true">
        <div :class="{'type-active':typeActive , 'has-type-active':activeTypeStyle}">{{actData.work_type==""?"请选择活动类型":actData.work_type}}
          <img class='type-img' src='../../../assets/icon_drop_down.png'/>
        </div>
      </div>
      <!-- 活动类型下拉弹框 -->
      <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
        <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
        <mt-picker :slots="typeLists" :visible-item-count="5" :show-toolbar="true" ref="picker" value-key="cName">
          <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
          <mt-button @click="handleConfirm" class="sure-btn">确定</mt-button>
        </mt-picker>
      </mt-popup>

      <!-- 时间选择器 -->
      <div class='date-container'>
        <!-- 开始时间 -->
        <mt-button @click="open('picker1')" size="large">
          <div :class="{'start-time':typeActive , 'start-time-active':activeStartTimeStyle}">{{actData.start_time==""?"开始时间":actData.start_time}}
            <img class='calendar-img' src='../../../assets/icon_calendar.png'/>
          </div>
          <!-- <div class='start-time-active'>
            <image class='calendar-img' src='../../../assets/icon_calendar.png' />
          </div> -->
        </mt-button>

        <div class='empty-view'></div>
        <!-- 结束时间 -->
        <mt-button @click="open('picker2')" size="large">
          <div :class="{'start-time':typeActive , 'start-time-active':activeEndTimeStyle}">{{actData.end_time==""?"结束时间":actData.end_time}}
            <img class='calendar-img' src='../../../assets/icon_calendar.png'/>
          </div>
          <!-- <div class='end-time-active'>
            <img class='calendar-img' src='../../../assets/icon_calendar.png' />
          </div> -->
        </mt-button>
      </div>

      <mt-datetime-picker
        ref="picker1"
        v-model="startPickerValue"
        :closeOnClickModel="false"
        @visible-change="handleVisibleChangePicker1"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="startHandleChange">
      </mt-datetime-picker>

      <mt-datetime-picker
        ref="picker2"
        v-model="endPickerValue"
        :closeOnClickModel="false"
        @visible-change="handleVisibleChangePicker2"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleChange">
      </mt-datetime-picker>

      <!-- 活动内容 -->
      <div class='remarks-container'>
        <textarea class='remarks' v-on:input="changeInput()" cursor-spacing='50' maxlength='3000' placeholder='请输入活动内容，最多3000字'
                  placeholder-style='color:#b7bdc6' v-model="actData.work_content"></textarea>
        <!-- <div  class="remarks-text">请输入活动内容，最多3000字</div> -->
      </div>
      <!-- 显示图片 -->
      <div class='media-view clearfix'>
        <div class='media-view-imgs' >
          <div v-for="(item, index) in imgs" :key="item + index" >
            <div class="media-view-item">
              <img class="media-view-img" :src="downloadImg + item" mode="aspectFill">
              <img class='media-delete' src='../../../assets/icon_delete.png' @click="delImg(item)">
            </div>
          </div>
          <img class='media-view-item' :class="{'pointer-events':pointerEvents }" src='../../../assets/icon_img.png' @click="showActionSheet"/>
        </div>
      </div>

      <!-- 发送家长按钮 -->
      <button type="button" class="send-parents-btn" size="large" @click="publishAct" :disabled="isDisable">发布</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 防止提交按钮双击创建两次活动
        isDisable: false,
        // 添加图片按钮禁止点击
        pointerEvents:false,
        // 图片资源
        downloadImg : this.$ServerUrl + '/committee/activity/download_file?resource_name=',
        startPickerValue: new Date(),
        endPickerValue: new Date(),
        popupVisible: false,
        visiblePicker1: false,
        visiblePicker2: false,
        // 选中前样式
        typeActive:true,
        // 类型选中后样式
        activeTypeStyle :false,
        // 开始时间选中后样式
        activeStartTimeStyle :false,
        // 结束时间选中后样式
        activeEndTimeStyle :false,
        //全局数据
        globalData: {},
        user: {},
        //活动类型集合
        typeLists: [],
        actData: {
          pta_id: '',
          work_name: '',
          //关键字
          work_keyword: '',
          //活动类型
          work_type: '',
          //开始时间
          start_time: '',
          //结束时间
          end_time: '',
          //活动内容
          work_content: '',
          resource_list:[]
        },
        //已选图片集合
        pictures: [],
        imgs: []
      }
    },
     created() {
        window.addEventListener('setItem', ()=> {
          this.popupVisible = JSON.parse(sessionStorage.getItem('watchStorage'));
          if(this.visiblePicker1) {
            this.$refs["picker1"].close()
          } else if(this.visiblePicker2) {
            this.$refs["picker2"].close()
          }
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
    mounted() {
      if(JSON.parse(localStorage.getItem("aloneApp")) == '1') {
        localStorage.setItem("backPath", "/work/workIndex/workIndex");
      } else {
        localStorage.setItem("backPath", "/index/homePage");
      }
      this.globalData = JSON.parse(localStorage.getItem("globalData"));
      this.user = JSON.parse(localStorage.getItem("user"));
      this.getActivityTypeList();
    },
    computed: {
      isAloneApp() {
        return JSON.parse(localStorage.getItem("aloneApp")) == '1'
      }
    },
    // beforeRouteLeave(to, from, next) {
    //   // 设置下一个路由的 meta
    //   to.meta.keepAlive = false;  // 下一个路由的 meta 缓存
    //   next();
    //   // if (to.name =='workIndex' || to.name =='homePageFamily' || to.name =='homePage') {
    //   //   from.meta.keepAlive = false;
    //   // }
    //   // next();
    // },
    methods: {
      //表情符控制
      changeInput() {
        var regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
        var nameValue = this.actData.work_keyword
        var nameValue1 = this.actData.work_name
        var nameValue2 = this.actData.work_content
        var nameValueRe = nameValue.replace(regStr, '')
        var nameValueRe1 = nameValue1.replace(regStr, '')
        var nameValueRe2 = nameValue2.replace(regStr, '')
        if(nameValue != nameValueRe) {
          Toast("不能输入表情符")
          this.actData.work_keyword = nameValueRe
        }
        if(nameValue1 != nameValueRe1) {
          Toast("不能输入表情符")
          this.actData.work_name = nameValueRe1
        }
        if(nameValue2 != nameValueRe2) {
          Toast("不能输入表情符")
          this.actData.work_content = nameValueRe2
        }
      },
      handleConfirm() {
        if(this.$refs.picker.getValues()[0] != undefined ) {
          this.actData.work_type = this.$refs.picker.getValues()[0];
          // 选中后颜色加深
          this.activeTypeStyle = true;
        }

        // this.actData.work_type = this.$refs.picker.getValues()[0];
        this.popupVisible = false;
      },
      handleCancel() {
        this.popupVisible = false
      },
      // 选择时间
      open(picker) {
        // console.log(picker);
        this.$refs[picker].open();
      },
      startHandleChange(value) {
        let time = this.GMTToStr(value);
        if (this.actData.end_time != "") {
          if (time >= this.actData.end_time) {
            Toast('开始时间应该设置为结束时间之前！')
            return;
          }
        }
        this.startPickerValue = time;
        this.actData.start_time = this.startPickerValue;
        // 选中后颜色加深
        this.activeStartTimeStyle = true;
      },
      handleChange(value) {
        let time = this.GMTToStr(value);
        let nowDate = new Date();
        if (nowDate > new Date(value)) {
          Toast('结束时间应该设置为当前时间之后！')
        } else if (time <= this.actData.start_time) {
          Toast('结束时间应该设置为开始时间之后！')
        } else {
          this.endPickerValue = time;
          this.actData.end_time = time;
          // 选中后颜色加深
          this.activeEndTimeStyle = true;
        }
      },
      handleVisibleChangePicker1(isVisible) {
        sessionStorage.setItem('watchStorage',isVisible)
        this.visiblePicker1 = isVisible
      },
      handleVisibleChangePicker2(isVisible) {
        sessionStorage.setItem('watchStorage',isVisible)
        this.visiblePicker2 = isVisible
      },
      GMTToStr(time) {
        let date = new Date(time)
        let month = date.getMonth() + 1;
        let nowMonth = month >= 10 ? month : '0' + month;
        let hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
        let day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
        let minute = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
        let Str = date.getFullYear() + '-' +
          nowMonth + '-' + day + ' ' + hour + ':' + minute;
        return Str
      },
      // 拍照
      showActionSheet() {
        let that = this;
        api.actionSheet({
          cancelTitle: '取消',
          buttons: ['拍照', '手机相册']
        }, function(ret, err) {
          if (ret) {
            // 调用拍照功能
            if (ret.buttonIndex == 1) {
              if (that.imgs.length >= 9) {
                Toast('最多上传9张图片')
              } else {
                that.openCamera();
              }
            } else if (ret.buttonIndex == 2){
              if (that.imgs.length >= 9) {
                Toast('最多上传9张图片')
              } else {
                that.openPicture();
              }
            }
          }
        });
      },
      getActivityTypeList() {
        //根据学校获取活动类型
        let params = {};
        params.pta_id = this.user.pta_id;
        // if (this.user.school_id != null && this.user.school_id != '') {
        //   //学校ID
        //   params.school_id = this.user.school_id;
        // } else if (this.user.city_id != null && this.user.city_id != '') {
        //   //城市ID
        //   params.city_id = this.user.city_id;
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
        if (this.user.identity == '3') {
          params.school_id = this.user.school_id;
        } else if (this.user.identity == '1') {
          params.city_id = this.user.city_id;
        }
        else if (this.user.identity == '2') {
          params.district_id = this.user.district_id;
        }
        console.log(params)
        this.$post('/committee/activity/activityTypeList',
          params
        ).then((data) => {

          console.log(data)
          if (!!data) {
            let values = {values: data.result};
            this.typeLists.push(values);
          }
        }, (response) => {
          console.error(response);
        });
      },
      publishAct() {
        if (this.actData.work_name === '') {
          Toast('主题不能为空！')
          return;
        }
        if (this.actData.work_keyword === '') {
          Toast('关键字不能为空！')
          return;
        }

        if (this.actData.work_type === '' || this.actData.work_type == null) {
          Toast('活动类型不能为空！')
          return;
        }
        if (this.actData.start_time === '') {
          Toast('开始时间不能为空！')
          return;
        }
        if (this.actData.end_time === '') {
          Toast('结束时间不能为空！')
          return;
        }
        if (this.imgs.length > 0) {
          this.actData.resource_list = this.imgs;
        }
        this.isDisable = true
        //调接口发布活动
        this.actData.pta_id = this.user.pta_id;
        this.$post('/committee/activity/add',
          this.actData
        ).then((data) => {
          if (data.success) {
            this.pointerEvents = true;
            let instance = Toast('发布成功');
            setTimeout(() => {
              instance.close();
              // this.$router.go(-1);
              // 判断是家长端还是纯家委会
              if(JSON.parse(localStorage.getItem("aloneApp")) == '1') {
                this.$router.push({
                name:'workIndex'
              });
              }else {
                this.$router.push({
                name:'homePage'
              });
            }

            }, 2000);
          } else {
            Toast('发布失败')
            this.isDisable = false
          }
        }, (response) => {
          console.error(response);
        });
      },
      openCamera() {
        let that = this;
        let FNPhotograph = api.require('FNPhotograph');
        FNPhotograph.open({
          path: 'fs://savePath',
          album: false ,
          qualityValue : 90
        }, function(ret){
          if (!!ret && ret.eventType == 'takePhoto') {
            FNPhotograph.close();
            that.pictures = [];
            that.pictures.push(ret.imagePath);
            that.saveImg();
          }
        });
      },
      openPicture() {
        let that = this;
        // 从相册里选择图片
        let UIMediaScanner = api.require('UIMediaScanner');
        UIMediaScanner.open({
          type: 'picture',
          column: 4,
          classify: true,
          max: 9 - that.imgs.length,
          sort: {
            key: 'time',
            order: 'desc'
          },
          texts: {
            stateText: '已选择*项',
            cancelText: '取消',
            finishText: '完成'
          },
          styles: {
            bg: '#fff',
            mark: {
              icon: '',
              position: 'bottom_left',
              size: 20
            },
            nav: {
              bg: '#eee',
              stateColor: '#000',
              stateSize: 18,
              cancelBg: 'rgba(0,0,0,0)',
              cancelColor: '#000',
              cancelSize: 18,
              finishBg: 'rgba(0,0,0,0)',
              finishColor: '#000',
              finishSize: 18
            }
          },
          exchange: true,
          rotation: true
        }, function (ret) {
          if (!!ret) {
            if (ret.list && ret.list.length > 0) {
              that.pictures = [];
              for (let i=0;i<ret.list.length;i++) {
                that.pictures.push(ret.list[i].path)
              }
              that.saveImg();
            }
          }
        });
      },
      transPath(path) {
        this.UIMediaScanner.transPath({
          path : path//要转换的图片路径（在相册库的绝对路径）
        }, function(ret, err) {
          if (ret) {
            alert('transPath' + JSON.stringify(ret));
            return ret.path;
          } else {
            alert('err' + JSON.stringify(err));
          }
        });
      },
      bb: function () {
        // 点击保存按钮
        let FNImageClip = api.require('FNImageClip');
        FNImageClip.save({
          destPath : 'fs://imageClip/result.jpg',
          copyToAlbum : false,
          quality : 1
        }, function(ret, err) {
          // ret.destPath为返回图片路径
          FNImageClip.close();

        });
      },
      saveImg() {
        let that = this;
        // 出现加载中
        api.showProgress({
          animationType: 'fade',
          title: '上传图片中',
          text: '',
        });
        // 上传图片
        let user_id = this.user.pta_user_id;
        api.ajax({
          method:"post",
          url:  that.$ServerUrl + '/committee/activity/upload_file',
          data:{
            files: {
              file:that.pictures
            },
            values: {pta_user_id: user_id}
          },
          dataType:'json',
          async:true,
        },function(ret,err){
          // alert(JSON.stringify(ret))
          if (!!ret && ret.success) {
            let kk = ret.result.split(",");//以逗号作为分隔字符串
            for (let i=0;i<kk.length;i++) {
              if (kk[i]) {
                that.imgs.push(kk[i]);
              }
            }
          }else {
            alert(JSON.stringify(err))
          }
          // 成功后删除加载中
          api.hideProgress();
        })
      },
      delImg (path) {
        MessageBox.confirm('', {
          message: '确定删除这张图片吗？',
          showConfirmButton:true,
          showCancelButton:true,
          closeOnClickModal: false, // 点击背景是否关闭弹框
          cancelButtonClass:'cancelButton',
          confirmButtonClass:'confirmButton',
          confirmButtonText:'确定',
          cancelButtonText:'取消'
        }).then(action => {
          //用户选择确定
          for (let i = 0; i < this.imgs.length; i++) {
          if (path == this.imgs[i]) {
            this.imgs.splice(i, 1);
            break;
          }
        }
        }).catch(err => {
          //用户取消
          if (err == 'cancel') {

          }
        });
      }
    }
  }
</script>
