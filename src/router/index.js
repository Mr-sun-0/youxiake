import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: () =>
            import ('../views/Index.vue'),
    },
    {
        path: '/mine',
        component: () =>
            import ('../views/Mine.vue'),
    }
];

const router = new VueRouter({
    routes,
});

export default router;