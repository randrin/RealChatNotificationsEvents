<template>
    <div>
        <toolbar class="forum-toolbar-wrapper"></toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
        <scroll-to-top></scroll-to-top>
    </div>
</template>

<script>
    import toolbar from './Toolbars';
    import AppFooter from './AppFooter';
    import login from "./site/auth/Login";
    import ScrollToTop from "./ScrollToTop";

    export default {
        name: "AppForum",
        components: {ScrollToTop, toolbar, AppFooter, login }
    }
</script>

<style>

</style>
