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
  path: '/hangzhou',
  component: () => import('../views/Hangzhou.vue'),
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
