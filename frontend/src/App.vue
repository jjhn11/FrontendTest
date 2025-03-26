<script setup>
import Navbar from './components/Navbar.vue';
import Carrusel from './components/Carrusel.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <Navbar />
    <Carrusel />
    <RouterView />

  </div>
</template>

<style>
/* Component-specific styles can stay here */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>