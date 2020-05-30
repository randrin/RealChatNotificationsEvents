import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../site/Login';

Vue.use(VueRouter);

const routes = [
    { path: '/login', component: Login },
    // { path: '/bar', component: Bar }
  ]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
});

export default router;
