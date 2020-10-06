import {
  Search, Lazyload, Swipe, SwipeItem, Grid, GridItem,
} from 'vant';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import 'amfe-flexible';

Vue.config.productionTip = false;

Vue.use(Search);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
