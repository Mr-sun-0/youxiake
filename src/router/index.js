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
  path: '/register',
  component: () => import('../views/Register.vue'),
},
];

const router = new VueRouter({
  routes,
});

export default router;
