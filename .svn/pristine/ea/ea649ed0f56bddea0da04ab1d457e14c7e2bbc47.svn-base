<style lang='scss' scoped>
	.userInfo {
		font-size: 28px;
		color: #a0a7b3;
		margin: 60px 30px 30px 30px;
	}

	.title-text {
		font-size: 30px;
		font-weight: bold;
		color: black;
	}
	.userInfo .userHeader .header-box {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#header + * {
		margin: 0 !important;
		padding-left: 20px;
	}

	.userInfo .viewBar {
		padding-bottom: 26px;
	}

	.userInfo p:first-child {
		font-weight: bold;
		color: #000;
	}

	.userHeader,
	.userName,
	.userPosition,
	.userAccount {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		line-height: 100px;
	}

	.right-bar {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.userInfo .userHeader .userinfo-avatar {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 128px;
		width: 128px;
		border-radius: 50%;
		object-fit: cover;
	}

	.userInfo .right-arrow {
		height: 16px;
		width: 9px;
	}

	.phoneNum,
	.realName,
	.userinfo-nickname {
		padding-right: 20px;
	}

	.link {
		text-decoration: none;
		color: #a0a7b3;
	}
	[v-cloak] {
		display:none !important;
	}
</style>

<template>
	<div>
		<!-- 顶部导航栏 -->
		<mt-header title="用户信息">
			<router-link to="/my/myIndex/myIndex" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button slot="right"></mt-button>
		</mt-header>

		<div class='userInfo'>
			<div>
				<!--头像-->
				<div class='viewBar userHeader' @click="changeHeader">
					<div class='title-text'>头像</div>
					<!-- ../../../assets/my_header@2x.png -->
					<div class="header-box">
						<img class="userinfo-avatar" id="header" :src='avatar!=""?avatar:defaultImg' mode="cover">
						<img class='right-arrow' src='../../../assets/right-arrow.png'>
					</div>
				</div>
				<!-- 昵称
				<router-link class="link" to="/my/changeNickName/changeNickName" slot="left">
					<div class='userName'>
					<div class='title-text'>昵称</div>
					<p class="userinfo-nickname">{{userNikeName}}</p>
					</div>
				</router-link> -->
			</div>
			<!--昵称-->
			<router-link class="link" :to="{name:'changeNickName', query:{nickName:userNickName}}" slot="left">
				<div class='userName'>
					<div class='title-text'>昵称</div>
					<div class="right-bar">
						<span v-cloak class='userinfo-nickname'>{{userNickName}}</span>
						<img class='right-arrow' src='../../../assets/right-arrow.png'>
					</div>
				</div>
			</router-link>

			<!--我的职位-->
			<div class='userPosition'>
				<div class='title-text'>我的职位</div>
				<p>{{position}}</p>
			</div>
			<!--我的账号-->
			<router-link class="link" :to="{name:'changePhoneNum',query:{account:userAccount}}" tag="div" slot="left">
				<div class='userAccount'>
					<div class='title-text'>我的账号</div>
					<div class="right-bar">
						<span class='phoneNum'>{{userAccount}}</span>
						<img class='right-arrow' src='../../../assets/right-arrow.png'>
					</div>
				</div>
			</router-link>
			<!--修改密码-->
			<router-link class="link" to="/my/changePassword/changePassword" slot="left">
				<div class='userAccount'>
					<div class='title-text'>修改密码</div>
					<img class='right-arrow' src='../../../assets/right-arrow.png'>
				</div>
			</router-link>
			<!--真实姓名-->
			<router-link class="link" :to="{name:'changeRealName', query:{oldName:userName}}" slot="left">
				<div class='userAccount'>
					<div class='title-text'>真实姓名</div>
					<div class="right-bar">
						<span v-cloak class='realName'>{{userName}}</span>
						<img class='right-arrow' src='../../../assets/right-arrow.png'>
					</div>
				</div>
			</router-link>

		</div>

	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
        downloadImg : this.$ServerUrl + '/committee/activity/download_file?resource_name=',
				userName: "",
				position: "",
				ptaName: "",
				userAccount: "",
				userNickName: "",
				user: {},
				oldName: "",
				nickName: "",
				headerUrl:require('@/assets/default-header.png'),
        avatar:"",
        defaultImg: require('@/assets/default-header.png'),
			}
		},
		// 钩子函数: 在执行函数前执行(所以先获取个人信息, 后调接口处理数据)
		mounted: function() {
      localStorage.setItem("backPath", "/my/myIndex/myIndex");
			this.aloneApp = this.$route.query.aloneApp;
			// 获取本地用户个人信息
			this.user = JSON.parse(localStorage.getItem("user"));
			// 接口返回相关个人信息
      if(this.user && !this.user.pta_id){
        this.user.pta_id = "";
      }
			this.getUserInfo(this.user.pta_id);
			// 个人信息相关赋值处理
			this.dealData(this.user);
		},
		computed: {
			isAloneApp() {
				return JSON.parse(localStorage.getItem("aloneApp")) == '1'
			}
		},

		// 执行的函数
		methods: {
			// 个人信息相关赋值处理
			dealData(user) {

				// 我的账号
				this.userAccount = user.pta_user_id;
			},

			// 接口返回相关个人信息
			getUserInfo(ptaId) {
				this.$post('/committee/my_message/select', {
					"pta_id": ptaId
				}).then((data) => {
					if (!data.success) {
						Toast(data.errorMsg)
					} else {
						console.log(data)
						// 昵称
						this.userNickName = (data.result.nick_name =="" || data.result.nick_name ==null)?'家委001':data.result.nick_name;
						// 真实姓名
						this.userName = (data.result.user_name ==""||data.result.user_name ==null)?'家委001':data.result.user_name;
						// 职位
						this.position = data.result.position

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
			changeHeader: function() {
				// 点击弹出选择框
        let that = this;
				api.actionSheet({
					cancelTitle: '取消',
					buttons: ['拍照', '手机相册']
				}, function(ret, err) {
					if (ret) {
						// 调用拍照功能
            that.getPicture(ret.buttonIndex);
					}
				});
			},
      //相机拍照
      getPicture(sourceType) {
        let that = this;
        if (sourceType == 1) { // 拍照
          //获取一张图片
          let FNPhotograph = api.require('FNPhotograph');
          FNPhotograph.open({
            path: 'fs://savePath',
            album: false ,
            qualityValue : 90
          }, function(ret){
            if (!!ret && ret.eventType == 'takePhoto') {
              FNPhotograph.close();
              that.headerUrl = ret.imagePath;
              that.saveImg();
            }
          });
        } else if (sourceType == 2) { // 从相册中选择
          // 从相册里选择图片
          let UIMediaScanner = api.require('UIMediaScanner');
          UIMediaScanner.open({
            type: 'picture',
            column: 4,
            classify: true,
            max: 1,
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
                that.headerUrl = ret.list[0].path
                that.saveImg();
              }
            }
          });
        }
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
        api.ajax({
          method:"post",
          url: that.$ServerUrl + '/committee/activity/upload_file',
          data:{
            files: {
              file:that.headerUrl
            },
            values: {pta_user_id: 'Avatar'}
          },
          dataType:'json',
          async:true,
        },function(ret,err){
          if (ret.success) {
            that.avatar = that.downloadImg + ret.result;
            //调用更新头像接口
            that.updateHeader(ret.result)
          }
          // 成功后删除加载中
          api.hideProgress();
        })
      },
      updateHeader(header) {
        this.$post('/committee/my_message/update_header', {
          "header": header
        }).then((data) => {
          if (!data.success) {
            // 失败
            Toast(data.errorMsg)
          } else {
            Toast('操作成功')
          }
        });
      }
		}
	}
</script>
