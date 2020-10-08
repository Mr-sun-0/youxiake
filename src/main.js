import {
  Search,
  Lazyload,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Icon,
  Tab,
  Tabs,
} from 'vant';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import 'amfe-flexible';

// 引入reset文件
import './assets/css/reset.less';

Vue.config.productionTip = false;

Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Search);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
