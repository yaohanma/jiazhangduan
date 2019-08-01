// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reSet.css'/*引入公共样式*/
import './assets/css/my-mint.scss' /*全局修改mint-UI样式*/
import store from './store'
import 'lib-flexible'
// 图片点击放大效果
import gallery from 'img-vuer'
// 原生交互
import Bridge from './appbrig/bridge.js'
Vue.prototype.$bridge = Bridge
Vue.use(gallery,{
	swipeThreshold: 150, // 滑动阈值，默认值 100
})
// 顶部导航栏，支持显示按钮、自定义文字和固定在顶部
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


// Toast 弹框
import { Toast } from 'mint-ui';
Vue.component(Toast.name, Toast);
// 其实我们看下Toast的使用语句,就可以知道Toast是一个方法,
// 既然是方法,直接在js里面未定义使用就会报错,所以我们在引入该组件的时候,将该方法设置为全局变量
window.Toast= Toast;


// 按钮
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
// 拍照
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);

// 弹出式提示框
import { MessageBox } from 'mint-ui';
Vue.component(MessageBox.name, MessageBox);
window.MessageBox= MessageBox;

// 弹出框，可自定义内容
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);

// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 选择器，支持多 slot 联动
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);

// 日期时间选择器，支持自定义类型。
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

// 侧滑删除
import { CellSwipe } from 'mint-ui'; 
Vue.component(CellSwipe.name, CellSwipe);

// 单元格，可用作展示列表信息、链接或者表单等。
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);

// 面板，可切换显示子页面。
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
