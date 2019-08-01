<template>
  <div id="app">
    <!-- <keep-alive >
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <div v-if="!hasInternet">
      <!-- 网络异常 -->
      <no-network></no-network>
    </div>
    <navigation>
      <router-view v-if="hasInternet"></router-view>
    </navigation>
  </div>
</template>

<script>
  // 网络异常组件
  import noNetwork from '@/components/noNetwork'

  export default {
    components: {
      noNetwork
    },

    name: 'App',
    data() {
      return {
        hasInternet: true,
        currentPageName: ''
      }
    },
    watch: {
      $route: {
        handler: function(val, oldVal) {
          this.currentPageName = ''
        },
        // 深度观察监听
        deep: true
      }
    },
    created() {
      //在页面加载时读取localStorage里的状态信息
      if (localStorage.getItem("store")) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem("store"))))
      }

      //在页面刷新时将vuex里的信息保存到localStorage里
      window.addEventListener("beforeunload", () => {
        localStorage.setItem("store", JSON.stringify(this.$store.state))
      })
    },
    mounted() {
      //apicloud监听
      let that = this;
      window.apiready = function() {
        let aloneFlag = JSON.parse(localStorage.getItem('aloneApp'))
        //监听虚拟按键
        api.addEventListener({
          name: 'keyback'
        }, function(ret, err) {
          let messagebox = document.getElementsByClassName("mint-msgbox");
          if(messagebox.length > 0) {
            if(messagebox[0].style.display != 'none') {
               MessageBox.close(false)
               return
            }
          }
          that.currentPageName = that.$route.name
          // 关闭弹窗
          if(JSON.parse(sessionStorage.getItem('watchStorage'))) {
            that.resetSetItem('watchStorage', false)

            return
          }

          if (aloneFlag == "1") {
            if (that.$route.name == "homePageFamily" || that.$route.name ==
              "workIndex" || that.$route.name == "MyIndex") {
              api.toast({
                msg: '再点一次退出鹰硕家校通',
                duration: 1000,
                location: 'middle'
              });
              api.addEventListener({
                name: 'keyback'
              }, function(ret, err) {
               let messagebox = document.getElementsByClassName("mint-msgbox");
               if(messagebox.length > 0) {
                 if(messagebox[0].style.display != 'none') {
                    MessageBox.close(false)
                    return
                 }
               }
                 if(JSON.parse(sessionStorage.getItem('watchStorage'))) {
                  that.resetSetItem('watchStorage', false)
                  return
                }

                if (that.$route.name == "homePageFamily" || that.$route
                  .name ==
                  "workIndex" || that.$route.name == "MyIndex") {
                  if (that.currentPageName == that.$route.name) {
                    api.sendEvent({
                      name: 'quiteFamliy'
                    });
                    localStorage.removeItem('user');
                    localStorage.removeItem('aloneApp');
                    localStorage.removeItem('store');
                    localStorage.removeItem('globalData');
                  } else {
                    that.currentPageName = that.$route.name
                    api.toast({
                      msg: '再点一次退出鹰硕家校通',
                      duration: 1000,
                      location: 'middle'
                    });
                  }
                } else if (that.$route.name == "verificationLogin" || that.$route.name == "passwordLogin" ) {
                    that.$router.push({
                      path: '/login/inviteLogin/inviteLogin',
                    })
                } else if (that.$route.name == "inviteLogin") {
                  api.sendEvent({
                    name: 'backFamliy'
                  });
                // } else if (that.$route.name == "passwordLogin" &&
                //   !JSON.parse(localStorage.getItem("passbackfalg"))) {
                //   api.sendEvent({
                //     name: 'backFamliy'
                //   });
                } else {
                  let backPath = localStorage.getItem("backPath")
                  if (backPath != undefined && backPath != "") {
                    that.$router.push({
                      path: backPath,
                    })
                  } else {
                    window.history.go(-1)
                  }
                }
              });
             } else if (that.$route.name == "verificationLogin" ||  that.$route.name == "passwordLogin") {
                that.$router.push({
                  path: '/login/inviteLogin/inviteLogin',
                })
            } else if (that.$route.name == "inviteLogin") {
              api.sendEvent({
                name: 'backFamliy'
              });
            // } else if (that.$route.name == "passwordLogin" &&
            //   !JSON.parse(localStorage.getItem("passbackfalg"))) {
            //   api.sendEvent({
            //     name: 'backFamliy'
            //   });
            } else {
              let backPath = localStorage.getItem("backPath")
              if (backPath != undefined && backPath != "") {
                that.$router.push({
                  path: backPath,
                })
              } else {
                window.history.go(-1)
              }
            }
          } else if (aloneFlag == "2") {
            let backPath = localStorage.getItem("backPath")
            if (that.$route.name == "homePage" || (that.$route.name == "inviteCode" && backPath == '')) {
              localStorage.removeItem('user');
              localStorage.removeItem('aloneApp');
              localStorage.removeItem('store');
              localStorage.removeItem('globalData');
              window.location.href = 'https://tsdevhouse.ys100.com/html/my/my_home.html'
            } else {
              if (backPath != undefined && backPath != "") {
                that.$router.push({
                  path: backPath,
                })
              } else {
                window.history.go(-1)
              }
            }
          } else {
            let backPath = localStorage.getItem("backPath")
            if (that.$route.name == "homePage" || (that.$route.name == "inviteCode" && backPath == '')) {
              localStorage.removeItem('user');
              localStorage.removeItem('aloneApp');
              localStorage.removeItem('store');
              localStorage.removeItem('globalData');
              api.sendEvent({
                name: 'backThapp'
              });
            } else {
              if (backPath != undefined && backPath != "") {
                that.$router.push({
                  path: backPath,
                })
              } else {
                window.history.go(-1)
              }
            }
          }
        })
        //监听网络
        api.addEventListener({
          name: 'offline'
        }, function(ret, err) {
          if (that.hasInternet) {
            that.hasInternet = false;
            api.toast({
              msg: '网络已断开，请连接网络后使用',
              duration: 1000,
              location: 'middle'
            });
          }
        });

        api.addEventListener({
          name: 'online'
        }, function(ret, err) {
          if (!that.hasInternet) {
            api.toast({
              msg: '网络已链接，请使用',
              duration: 1000,
              location: 'middle'
            });
            that.hasInternet = true;
            that.$router.go(0);
          }
        });
      }
    },
  }
</script>
