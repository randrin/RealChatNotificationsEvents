<template>
  <div>
      <toolbar></toolbar>
      <br/>
      <app-footer></app-footer>
  </div>
</template>

<script>
    import toolbar from './Toolbars';
    import appFooter from './AppFooter';

    export default {
        components: { toolbar, appFooter }
    }
</script>

<style>

</style>