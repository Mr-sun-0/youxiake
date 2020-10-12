import {
  Search,
  Lazyload,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Image as VanImage,
  Icon,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Field,
  Button,
  NavBar,
  Cell,
  CellGroup,
  List,
  ShareSheet,
  PullRefresh,

} from 'vant';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import 'amfe-flexible';

// 引入reset文件
import './assets/css/reset.less';
import './assets/css/cities.css';// 解决杨师傅该问题
import './assets/css/photography.css';// 解决样式覆盖问题

Vue.config.productionTip = false;
Vue.use(List);
Vue.use(Button);
Vue.use(Field);
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
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(ShareSheet);
Vue.use(PullRefresh);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(Lazyload, {
  lazyComponent: true,
  loading: '../src/assets/logo.png',
  preload: '0px',
});
