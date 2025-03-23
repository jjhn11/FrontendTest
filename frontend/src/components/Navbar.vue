<script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import logo from '../../img/LogoAurora.png';
  import tec from '../../img/tec.png';

  const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
  }

</script>

<template>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <row>
      <div class="container col-12 justify-content-center">
        <header class="container-fluid d-flex justify-content-center">
          <img :src="tec" width="700" height="100">
        </header>
      </div>
      
      <div class="container col-12 justify-content-center">

        <a class="navbar-brand">
          <img :src="logo" width="125" height="50">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">

          <ul class="navbar-nav">

            <li class="nav-item">
              <RouterLink to="/" class="nav-link">
                INICIO
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/" class="nav-link">
                BIBLIOTECA
              </RouterLink>
            </li>
            
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">
                EVENTOS
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/" class="nav-link">
                COMUNIDAD
              </RouterLink>
            </li>

            <!-- Add your navigation links here -->
          </ul>

        </div>

      </div>

    </row>
  </nav>

</template>

<style scoped>
</style>