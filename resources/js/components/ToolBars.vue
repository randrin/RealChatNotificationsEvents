<template>
  <v-toolbar>
    <v-toolbar-title>Real Time Forum</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <router-link to="/login">
        <v-btn>Login</v-btn>
      </router-link>
      <v-btn>Link Two</v-btn>
      <v-btn>Link Three</v-btn>
    </div>
  </v-toolbar>
</template>


<style scoped>
  a:hover {
    text-decoration: none;
  }
</style>
