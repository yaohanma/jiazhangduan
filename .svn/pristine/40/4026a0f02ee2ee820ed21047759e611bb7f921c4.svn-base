// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reSet.css' /*引入公共样式*/
import './assets/css/my-mint.scss' /*全局修改mint-UI样式*/
import store from './store'
// 移动端px转rem插件
import 'lib-flexible'
// 图片点击放大效果
import gallery from 'img-vuer'
// 页面缓存插件
import Navigation from 'vue-navigation'
Vue.use(Navigation, {
  router,
  store
})
// loading
import {
  Indicator
} from 'mint-ui';
Vue.prototype.$Indicator = Indicator

// 原生交互
import Bridge from './appbrig/bridge.js'
Vue.prototype.$bridge = Bridge
// ajax
import {
  get,
  post
} from './utils/api'
Vue.prototype.$ServerUrl = 'https://tsdevfamily.ys100.com'
Vue.prototype.$post = post
Vue.prototype.$get = get

Vue.use(gallery, {
  swipeThreshold: 150, // 滑动阈值，默认值 100
})
// 顶部导航栏，支持显示按钮、自定义文字和固定在顶部
import {
  Header
} from 'mint-ui';
Vue.component(Header.name, Header);


// Toast 弹框
import {
  Toast
} from 'mint-ui';
Vue.component(Toast.name, Toast);
// 其实我们看下Toast的使用语句,就可以知道Toast是一个方法,
// 既然是方法,直接在js里面未定义使用就会报错,所以我们在引入该组件的时候,将该方法设置为全局变量
window.Toast = Toast;


// 按钮
import {
  Button
} from 'mint-ui';
Vue.component(Button.name, Button);
// 拍照
import {
  Actionsheet
} from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);

// 弹出式提示框
import {
  MessageBox
} from 'mint-ui';
Vue.component(MessageBox.name, MessageBox);
window.MessageBox = MessageBox;

// 弹出框，可自定义内容
import {
  Popup
} from 'mint-ui';
Vue.component(Popup.name, Popup);

// 轮播图
import {
  Swipe,
  SwipeItem
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 选择器，支持多 slot 联动
import {
  Picker
} from 'mint-ui';
Vue.component(Picker.name, Picker);



// 日期时间选择器，支持自定义类型。
import {
  DatetimePicker
} from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

// 侧滑删除
import {
  CellSwipe
} from 'mint-ui';
Vue.component(CellSwipe.name, CellSwipe);

// 单元格，可用作展示列表信息、链接或者表单等。
import {
  Cell
} from 'mint-ui';
Vue.component(Cell.name, Cell);

// 下拉刷新。
import {
  Loadmore
} from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

// 面板，可切换显示子页面。
import {
  TabContainer,
  TabContainerItem
} from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.config.productionTip = false

// 监听缓存变化
Vue.prototype.resetSetItem = function (key, newVal) {
   if (key === 'watchStorage') {

       // 创建一个StorageEvent事件
       var newStorageEvent = document.createEvent('StorageEvent');
       const storage = {
           setItem: function (k, val) {
               sessionStorage.setItem(k, val);

               // 初始化创建的事件
               newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

               // 派发对象
               window.dispatchEvent(newStorageEvent)
           }
       }
       return storage.setItem(key, newVal);
   }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
  components: {
    App
  },
  template: '<App/>'
})
