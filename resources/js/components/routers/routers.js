import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../site/auth/Login';
import Signup from "../site/auth/Signup";
import Forum from "../site/forum/Forum";
import Categories from "../site/categories/Categories";
import Logout from "../site/auth/Logout";
import Question from "../site/questions/Question";
import CreateQuestion from "../site/questions/CreateQuestion";
import CreateCategory from "../site/categories/CreateCategory";
import AppForum from "../AppForum";
import Error404 from "../inc/Error404";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: AppForum, name: 'appForum' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/logout', component: Logout, name: 'logout' },
    { path: '/signup', component: Signup, name: 'signup' },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/ask/question', component: CreateQuestion, name: 'createQuestion' },
    { path: '/create/category', component: CreateCategory, name: 'createCategory' },
    { path: '/question/:slug', component: Question, name: 'questions' },
    { path: '/categories', component: Categories, name: 'categories' },
    { path: '/**', component: Error404, name: 'error404' }
  ];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
});

export default router;
