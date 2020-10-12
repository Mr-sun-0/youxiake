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
  path: '*',
  component: () => import('../views/404.vue'),
},

];

const router = new VueRouter({
  routes,
});

export default router;
