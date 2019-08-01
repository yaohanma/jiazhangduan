<style lang='scss' scoped>
  .createActivity-container {
    padding: 90px 30px 120px 30px;
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
      font-size: 28px;
      word-wrap: break-word;
      color: #333;
      border: none;
      background: rgba(0, 0, 0, 0)
    }
    .keyword {
      border: 1px solid white;
      border-radius: 10px;
      margin-top: 30px;
      height: 88px;
      font-size: 28px;
      width: -webkit-fill-available;
      outline: none;
      padding: 0 30px;
      background: #f4f5f6;
      color: #333;
    }
    .type-container {
      border: 1px solid white;
      border-radius: 10px;
      background: #f4f5f6;
      margin-top: 30px;
      padding: 30px;
      line-height: 28px;
    }

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
      color: #333;
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
      color: #333;
      background: 0;
      border: 0;
      font-size: 28px;
      line-height: 36px;
      word-break:break-word;
      word-wrap:break-word;
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
      font-size: 28px;
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
  };
</style>
<style>
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    font-weight: normal;
    color: #b7bdc6;
    font-size: 28px;
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-weight: normal;
    color: #b7bdc6;
    font-size: 28px;
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-weight: normal;
    color: #b7bdc6;
    font-size: 28px;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-weight: normal;
    color: #b7bdc6;
    font-size: 28px;
  }
</style>

<template>
  <div>
    <!-- 头部bar -->
    <mt-header title="编辑资源" fixed>
      <router-link to="/work/allResource/index" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <div class="createActivity-container">
      <!-- 资源主题 v-model="lists.theme" -->
      <div class='theme-view'>
        <textarea class='theme' v-on:input="changeInput()" placeholder='请输入资源主题' maxlength='30' v-model="resData.theme"/>
      </div>
      <!-- 关键字  -->
      <input class='keyword' v-on:input="changeInput()" placeholder='请输入关键字' maxlength='4' v-model="resData.keyword">
      <!-- 资源类型选择器 {{lists.type!=''?lists.type:'请选择资源类型'}} -->
      <div class="type-container" @click="popupVisible = true">
        <div class="type-active"> {{resData.type!=''?resData.type: '请选择资源类型'}}
          <img class='type-img' src='../../../assets/icon_drop_down.png'/>
        </div>
      </div>
      <!-- 资源类型下拉弹框 -->
      <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
        <!-- 此处slots为动态传入的值，通过computed来处理，数据通过vuex管理，由于数据为对象数组，需设置 value-key 属性来指定显示的字段名 -->
        <mt-picker :slots="typeLists" :visible-item-count="5" :show-toolbar="true" ref="picker" value-key="cName">
          <mt-button @click="handleCancel" class="cancel-btn">取消</mt-button>
          <mt-button @click="handleConfirm" class="sure-btn">确定</mt-button>
        </mt-picker>
      </mt-popup>

      <!-- 资源内容 -->
      <div class='remarks-container'>
        <textarea class='remarks' v-on:input="changeInput()" maxlength='3000' placeholder='请输入资源内容，最多3000字' placeholder-style='color:#b7bdc6'
                  v-model="resData.content">
        </textarea>
        <!-- <div  class="remarks-text">请输入资源内容，最多3000字</div> -->
      </div>
      <!-- 显示图片 -->
      <div class='media-view clearfix'>
        <div class='media-view-imgs'>
          <div v-for="(item, index) in imgs" :key="item + index" >
            <div class="media-view-item">
              <img class="media-view-img" :src="downloadImg + item" mode="aspectFill">
              <img class='media-delete' src='../../../assets/icon_delete.png' @click="delImg(item)">
            </div>
          </div>
          <img class='media-view-item' src='../../../assets/icon_img.png' :class="{'pointer-events':pointerEvents }"  @click="showActionSheet"/>
        </div>
      </div>

      <!-- 发送家长按钮 -->
      <button class="send-parents-btn" type="button" size="large" v-bind:disabled="btn_enable" @click="saveBtnClick">发布</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 按钮禁止点击
        btn_enable: false,
        // 添加图片按钮禁止点击
        pointerEvents:false,
        //原始图片集合
        oldImgs: [],
        //删除图片集合
        deleteImgs: [],
        //资源类型集合
        typeLists: [],
        //数据集合
        resData: {
          theme: '', //资源标题
          keyword: '', //资源关键词
          type: '', //资源类型
          content: '', //资源内容
          work_id: '', // 资源ID
          pta_id: '', // 家委ID
          //已选图片集合
          url_list: [],
          img_list: []
        },
        //下载图片链接
        downloadImg: '',
        popupVisible: false,
        // 资源类型
        slots: [],
        currentTags: {},
        //已选图片集合
        pictures: [],
        imgs: [],
        addImgs: [],
        delImgs: []
      }
    },
    computed: {},
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
    mounted() {
      localStorage.setItem("backPath", "/work/allResource/index");
      this.workId = this.$route.params.workId;
      var param = "editorResource";
      this.downloadImg = this.$ServerUrl + '/committee/activity/download_file?resource_name=';
      this.globalData = JSON.parse(localStorage.getItem("globalData"));
      this.user = JSON.parse(localStorage.getItem("user"));
      // 获取资源类型
      this.getActivityTypeList();
      this.initData();
    },
    methods: {
      //表情符控制
      changeInput() {
        var regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
        var nameValue = this.resData.theme
        var nameValue1 = this.resData.keyword
        var nameValue2 = this.resData.content
        var nameValueRe = nameValue.replace(regStr, '')
        var nameValueRe1 = nameValue1.replace(regStr, '')
        var nameValueRe2 = nameValue2.replace(regStr, '')
        if(nameValue != nameValueRe) {
          Toast("不能输入表情符")
          this.resData.theme = nameValueRe
        }
        if(nameValue1 != nameValueRe1) {
          Toast("不能输入表情符")
          this.resData.keyword = nameValueRe1
        }
        if(nameValue2 != nameValueRe2) {
          Toast("不能输入表情符")
          this.resData.content = nameValueRe2
        }
      },
      // 获取页面数据
      initData() {
        var params = {}
        params.pta_id = this.user.pta_id;
        params.id = this.workId;
        //获取页面数据
        this.$post('/committee/resource/select_detail', params)
          .then((res) => {
            // 发布标题
            this.resData.theme = res.result.theme;
            // 发布时间
            this.resData.keyword = res.result.keyword;
            // 类型
            this.resData.type = res.result.type;
            // 内容
            this.resData.content = res.result.content;
            // 资源ID
            this.resData.work_id = this.workId;
            //图片
            if (!!res.result.url_list) {
              if (res.result.url_list.length > 9) {
                this.imgs = res.result.url_list.slice(0, 9);
              } else {
                this.imgs = res.result.url_list;
              }
            }
          }, (response) => {

          })
      },
      /**
       * 保存按钮
       */
      saveBtnClick() {
        if (!this.resData.theme) {
          Toast('资源主题不能为空！')
          return;
        }
        if (!this.resData.keyword) {
          Toast('关键字不能为空！')
          return;
        }
        if (!this.resData.type) {
          Toast('资源类型不能为空！')
          return;
        }
        if (this.delImgs.length > 0) {
          this.resData.url_list = this.delImgs;
        }

        if (this.addImgs.length > 0) {
          this.resData.img_list = this.addImgs;
        }
        this.resData.pta_id = this.user.pta_id;
        this.btn_enable = true;
        this.$post('/committee/resource/update', this.resData)
          .then((res) => {
            if (res.success) {
              this.pointerEvents = true;
              let instance = Toast('修改成功');
              setTimeout(() => {
                instance.close();
                this.$router.push({
                  name:'allResource'
                });
              }, 2000);
            } else {
              Toast('修改失败')
              this.btn_enable = false;
            }
          }, (response) => {

          })
      },

      handleConfirm() {
        this.resData.type = this.$refs.picker.getValues()[0]
        this.popupVisible = false
        console.log('点击确定')
      },
      handleCancel() {
        this.popupVisible = false
        console.log('点击取消')
      },

      handleVisibleChange(isVisible) {
        // console.log('弹窗是否显示：',isVisible);
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
      //根据学校获取资源类型
      getActivityTypeList() {
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
        } else if (this.user.identity == '2') {
          params.district_id = this.user.district_id;
        }

        this.$post('/committee/resource/get_resource_type',
          params
        ).then((data) => {
          if (!!data) {
            let values = {values: data.result};
            this.typeLists.push(values);
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
          if (ret.success) {
            let kk = ret.result.split(",");//以逗号作为分隔字符串
            for (let i=0;i<kk.length;i++) {
              if (kk[i]) {
                that.imgs.push(kk[i]);
                that.addImgs.push(kk[i]);
              }
            }
          }
          // 成功后删除加载中
          api.hideProgress();
        })
      },
      // delImg(path) {
      //   for (let i = 0; i < this.imgs.length; i++) {
      //     if (path == this.imgs[i]) {
      //       this.delImgs.push(path);
      //       this.imgs.splice(i, 1);
      //       break;
      //     }
      //   }
      //   for (let i = 0; i < this.addImgs.length; i++) {
      //     if (path == this.addImgs[i]) {
      //       this.addImgs.splice(i, 1);
      //       break;
      //     }
      //   }
      // }
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
            this.delImgs.push(path);
            this.imgs.splice(i, 1);
            break;
          }
        }
        for (let i = 0; i < this.addImgs.length; i++) {
          if (path == this.addImgs[i]) {
            this.addImgs.splice(i, 1);
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
