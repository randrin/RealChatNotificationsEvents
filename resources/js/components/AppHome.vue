<template>
  <div>
      <toolbar></toolbar>
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
    import toolbar from './Toolbars';
    import AppFooter from './AppFooter';
    import login from "./site/auth/Login";

    export default {
        components: { toolbar, AppFooter, login }
    }
</script>

<style>

</style>
