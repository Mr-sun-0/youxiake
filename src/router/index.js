import Vue from 'vue';
import VueRouter from 'vue-router';

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
  path: '*',
  component: () => import('../views/404.vue'),
},

];

const router = new VueRouter({
  routes,
});

export default router;
