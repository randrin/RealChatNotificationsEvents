import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../site/auth/Login';
import Signup from "../site/auth/Signup";
import Forum from "../site/forum/Forum";
import Questions from "../site/forum/Questions";
import Categories from "../site/forum/Categories";
import Logout from "../site/auth/Logout";

Vue.use(VueRouter);

const routes = [
    { path: '/login', component: Login, name: 'login' },
    { path: '/logout', component: Logout, name: 'logout' },
    { path: '/signup', component: Signup, name: 'signup' },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/questions', component: Questions, name: 'questions' },
    { path: '/categories', component: Categories, name: 'categories' }
  ];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
});

export default router;
