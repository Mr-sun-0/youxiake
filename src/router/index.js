import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

<<<<<<< HEAD
const routes = [
  {
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
=======
const routes = [{
        path: '/',
        component: () =>
            import ('../views/Index.vue'),
    },
    {
        path: '/mine',
        component: () =>
            import ('../views/Mine.vue'),
    },
    {
        path:'/hangzhou',
        component:()=>
            import('../views/Hangzhou.vue')
    }
>>>>>>> nibaoshi
];

const router = new VueRouter({
  routes,
});

export default router;
