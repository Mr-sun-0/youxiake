import Vue from 'vue';
import VueRouter from 'vue-router';
import { Toast } from 'vant';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/index',
},
{
  path: '/index',
  component: () => import('../views/Index.vue'),
},
{
  path: '/mine',
  component: () => import('../views/Mine.vue'),
},
{
  path: '/meet',
  component: () => import('../views/Meet.vue'),
},
{
  path: '/hangzhou',
  component: () => import('../views/Hangzhou.vue'),
  children: [
    {
      path: '/',
      redirect: '/rese',
    },
    {
      path: '/rese',
      component: () => import('../components/hangzhou/Rese.vue'),
    },
    {
      path: '/strategy',
      component: () => import('../components/hangzhou/Strategy.vue'),
    },
    {
      path: '/trip',
      component: () => import('../components/hangzhou/Trip.vue'),
    },
    {
      path: '/note',
      component: () => import('../components/hangzhou/Note.vue'),
    },
    {
      path: '/movie',
      component: () => import('../components/hangzhou/Movie.vue'),
    },
  ],
},
{
  path: '/cities',
  component: () => import('../views/Cities.vue'),
},
{
  path: '/register',
  component: () => import('../views/Register.vue'),
},
{
  path: '/community',
  component: () => import('../views/community.vue'),
  meta: { needLogin: true },
},
{
  path: '/setting',
  component: () => import('../components/mine/Setting.vue'),
},
{
  path: '/message',
  component: () => import('../components/mine/Message.vue'),
},
{
  path: '/photography',
  component: () => import('../components/hangzhou/Photography.vue'),
},
{
  path: '*',
  component: () => import('../views/404.vue'),
},

];

const router = new VueRouter({
  routes,
});
// 社区设置守卫需要token才能查看
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (sessionStorage.getItem('token')) {
      next();
    } else {
      Toast('您还没有登入，给爷登入去');
      next('/register');
    }
  } else {
    next();
  }
});
export default router;
