<template>
  <div id="app">
    <v-button></v-button>
    <router-view/>
  </div>
</template>

<script>

import Button from '../src/components/shared/button.vue';
//import Navigation from '../src/components/shared/navigation.vue';
//import Header from '../src/components/shared/header.vue';
//import SideMenu from '../src/components/shared/sidemenu.vue';
//import Footer from '../src/components/shared/footer.vue';
/* eslint-disable */
export default {
  name: 'App',
  components: {
    'v-button' : Button
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
