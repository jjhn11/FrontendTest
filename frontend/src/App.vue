<script setup>
import Navbar from './components/Navbar.vue';
import Foot from './components/Footer/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <Foot />
  </div>
</template>

<style>
/* Component-specific styles can stay here */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>