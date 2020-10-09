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
  path: '*',
  component: () => import('../views/404.vue'),
},
{
  path: '/meet',
  component: () => import('../views/Meet.vue'),
},
];

const router = new VueRouter({
  routes,
});

export default router;
