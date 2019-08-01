import Vue from 'vue'
import Router from 'vue-router'
// 欢迎页面
import welcome from '@/pages/welcome/welcome'
// 邀请码登录
import inviteLogin from '@/pages/login/inviteLogin/inviteLogin'
// 密码登录
import passwordLogin from '@/pages/login/passwordLogin/passwordLogin'
// 验证码登录
import verificationLogin from '@/pages/login/verificationLogin/verificationLogin'

// 首页
import homePage from '@/pages/index/homePage/'
// 纯家委会首页
import homePageFamily from '@/pages/index/homePageFamily/'


// 工作首页
import workIndex from '@/pages/work/workIndex/workIndex'


// 活动列表
import allActivitys from '@/pages/work/allActivitys/allActivitys'
// 活动详情
import activityDetail from '@/pages/work/activityDetail/activityDetail'
// 创建活动
import createActivity from '@/pages/work/createActivity/createActivity'


// 我的
import MyIndex from '@/pages/my/myIndex/myIndex'
// 我的-个人信息
import userInfo from '@/pages/my/userInfo/userInfo'
// 我的-设置
import settingsIndex from '@/pages/my/settings/settings'
// 我的-家委会成员
import familyMember from '@/pages/my/familyMember/familyMember'
// 我的-待分配
import distributePosition from '@/pages/my/distributePosition/distributePosition'
// 我的-切换家委会
import switchToCommittee from '@/pages/my/switchToCommittee/switchToCommittee'
// 我的-修改密码
import changePassword from '@/pages/my/changePassword/changePassword'
// 我的-更换手机号
import changePhoneNum from '@/pages/my/changePhoneNum/changePhoneNum'
// 我的-填写验证码
import sendVerification from '@/pages/my/sendVerification/sendVerification'
// 我的-修改真实姓名
import changeRealName from '@/pages/my/changeRealName/changeRealName'

// 邀请家委
import inviteFamily from '@/pages/my/inviteFamily/inviteFamily'
// 邀请家委-登录
import inviteFamilyLogin from '@/pages/my/inviteFamilyLogin/inviteFamilyLogin'

// 邀请码
import inviteCode from '@/pages/inviteCode/inviteCode'


//资源
import allResource from '@/pages/work/allResource/index'
//资源详情
import resourceDetail from '@/pages/work/resourceDetail/index'
// 创建资源
import createResource from '@/pages/work/createResource/createResource'
// 编辑资源
import editorResource from '@/pages/work/editorResource/editorResource'

// 我的 - 创建家委会
import createCommittee from '@/pages/my/createCommittee/createCommittee.vue'

Vue.use(Router)


export default new Router({
  mode : 'history',  // 去掉地址栏的/#号
  routes: [
    // 欢迎页面
    {
      path: '/',
      name: 'welcome',
      component: welcome,
    },
    {
      // 邀请码登录
      path: '/login/inviteLogin/inviteLogin',
      name: 'inviteLogin',
      component: inviteLogin,
    },
    // 密码登录
    {
      path: '/login/passwordLogin/passwordLogin',
      name: 'passwordLogin',
      component: passwordLogin,
    },
    // 验证码登录
    {
      path: '/login/verificationLogin/verificationLogin',
      name: 'verificationLogin',
      component: verificationLogin,
    },
    {
      // 首页
      path: '/index/homePage',
      name: 'homePage',
      component: homePage,
      // 首页的子页面
      // children:[
      //   {
      //     path: '',
      //     name: '',
      //     component: 
      //   }
      // ]
    },
    {
      // 纯家委会首页
      path: '/index/homePageFamily',
      name: 'homePageFamily',
      component: homePageFamily,
    },


    {
      path: '/work/workIndex/workIndex',
      name: 'workIndex',
      component: workIndex
    },
    // 活动列表
    {
      path: '/work/allActivitys/allActivitys',
      name: 'allActivitys',
      component: allActivitys
    },
    // 活动详情
    {
      path: '/work/activityDetail/activityDetail',
      name: 'activityDetail',
      component: activityDetail
    },
    // 创建活动
    {
      path: '/work/createActivity/createActivity',
      name: 'createActivity',
      component: createActivity
    },
    // 我的
    {
      path: '/my/myIndex/myIndex',
      name: 'MyIndex',
      component: MyIndex
    },
    // 我的-个人信息
    {
      path: '/my/userInfo/userInfo',
      name: 'userInfo',
      component: userInfo
    },
    // 我的-设置
    {
      path: '/my/settings/settings',
      name: 'settingsIndex',
      component: settingsIndex
    },
    // 我的-邀请家委
    {
      path: '/my/inviteFamily/inviteFamily',
      name: 'inviteFamily',
      component: inviteFamily
    },
    // 我的-邀请家委-登录
    {
      path: '/my/inviteFamilyLogin/inviteFamilyLogin',
      name: 'inviteFamilyLogin',
      component: inviteFamilyLogin
    },
    // 我的-待分配
    {
      path: '/my/distributePosition/distributePosition',
      name: 'distributePosition',
      component: distributePosition
    },
    // 我的-切换家委会
    {
      path:'/my/switchToCommittee/switchToCommittee',
      name: 'switchToCommittee',
      component: switchToCommittee
    },
    // 我的-修改密码
    {
      path:'/my/changePassword/changePassword',
      name: 'changePassword',
      component: changePassword
    },
    // 我的-更换手机号
    {
      path:'/my/changePhoneNum/changePhoneNum',
      name: 'changePhoneNum',
      component: changePhoneNum
    },
    // 我的-填写验证码
    {
      path:'/my/sendVerification/sendVerification',
      name: 'sendVerification',
      component: sendVerification
    },
    // 我的-修改真实姓名
    {
      path:'/my/changeRealName/changeRealName',
      name: 'changeRealName',
      component: changeRealName
    },
    // 邀请码
    {
      path: '/inviteCode',
      name: 'inviteCode',
      component: inviteCode
    },
   // 资源页面
    {
       path: '/work/allResource/index',
       name: 'allResource',
       component: allResource,
     },
    
      // 资源详情
      {
        path: '/work/resourceDetail/index',
        name: 'resourceDetail',
        component: resourceDetail
      },
    // 创建资源
    {
      path: '/work/createResource/createResource',
      name: 'createResource',
      component: createResource
    },
    // 编辑资源
    {
      path: '/work/editorResource/editorResource',
      name: 'editorResource',
      component: editorResource
    },
        
      // 我的-家委会成员
      {
        path:'/my/familyMember/familyMember',
        name: 'familyMember',
        component: familyMember
      },

      // 我的-创建家委会
      {
        path:'/my/createCommittee/createCommittee',
        name: 'createCommittee',
        component: createCommittee
      }

    // 其他平级页面 打开下面注释，输入路径

    // {
    //   path: '',
    //   name: '',
    //   component: 
    // },
  ]
})
