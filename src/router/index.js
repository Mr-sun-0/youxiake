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
  children: [
    {
      path: '/index/country',
      component: () => import('../views/index/CountryTravel.vue'),
    },
  ],
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
  children: [{
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
  // meta: { needLogin: true },
  children: [{
    path: '/commfiv02',
    component: () => import('../components/community/CommFiv/CommFiv02.vue'),
  }],
},
{
  path: '/setting',
  component: () => import('../components/mine/Setting.vue'),
  children: [{
    path: '/security',
    component: () => import('../components/mine/Security.vue'),
  },
  {
    path: '/privacy',
    component: () => import('../components/mine/Privacy.vue'),
  },
  {
    path: '/about',
    component: () => import('../components/mine/About.vue'),
  },
  {
    path: '/agree',
    component: () => import('../components/mine/Agree.vue'),
  },

  ],
},
{
  path: '/message',
  component: () => import('../components/mine/Message.vue'),

},
{
  path: '/person',
  component: () => import('../components/mine/PersonPage.vue'),
  meta: { needLogin: true },
  children: [{
    path: '/',
    redirect: '/metting',
  },
  {
    path: '/metting',
    component: () => import('../components/mine/Metting.vue'),
  },
  {
    path: '/attitude',
    component: () => import('../components/mine/Attitude.vue'),
  },
  {
    path: '/phone',
    component: () => import('../components/mine/Phone.vue'),
  },
  {
    path: '/travel',
    component: () => import('../components/mine/Travel.vue'),
  },
  ],
},
{
  path: '/community',
  component: () => import('../views/community.vue'),
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
