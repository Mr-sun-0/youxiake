import {
  Search, Lazyload, Swipe, SwipeItem, Grid, GridItem, Image as VanImage, Icon, Tabbar,
  TabbarItem, Tab, Tabs, NavBar,
} from 'vant';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import 'amfe-flexible';

// 引入reset文件
import './assets/css/reset.less';
import './assets/css/cities.css';

Vue.config.productionTip = false;

Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Search);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
