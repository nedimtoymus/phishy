<template>
  <div id="app">
    <nav v-if="!hideNavigation">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    hideNavigation() {
      return this.$route.meta.hideNavigation;
    }
  }
}
</script>

<style>
/* Stil bilgileriniz */
</style>
