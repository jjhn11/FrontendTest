<script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import logo from '../assets/img/LogoAurora.png';
  import tec from '../assets/img/tec.png';

  import B1N from '../assets/img/B1 NOVEDADES.png';
  import B2R from '../assets/img/B2 RESEÑAS.png';
  import B3C from '../assets/img/B3 CATALOGO.png';

  import E1C from '../assets/img/E1 CULTURALES.png';
  import E2D from '../assets/img/E2 DEPORTIVOS.png';
  import E3E from '../assets/img/E3 ESCOLARES.png';
  
  import DDMV from '../assets/img/DDM VACIO.png';

  const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
  }

</script>

<template>
  
  <div class="container-fluid mt-5" id="contnav">
    
    
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      

      <div class="col-12 mt-2">

        <raw>
          
          <!-- CONTAINER EDU -->

          <div class="container-fluid p-1 d-flex justify-content-center mb-1" id="edu">

            <header>
              <img :src="tec" width="525" height="70">
            </header>
          
          </div>

          <!-- CONTAINER NAVBAR -->

          <div class="container-fluid p-2">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              
              <a class="navbar-brand ps-5 ms-5 me-ls-5" id="aurlog">
                  <img :src="logo" width="130" height="50" id="log">
                  <span id="aur">AURORA</span>
              </a>

              <ul class="navbar-nav ms-auto border-top border-black border-2 me-auto d-flex" id="nav">

                <li class="nav-item pe-5 mt-4 ms-3 me-5">
                  <RouterLink to="/" class="nav-link" id="bot">
                    INICIO
                  </RouterLink>
                </li>

                <li class="nav-item dropdown position-static pe-5 mt-4 ms-5 me-4" id="droph">
                  <RouterLink to="/" class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="bot">
                    BIBLIOTECA
                  </RouterLink>

                  <ul class="dropdown-menu">
                    <div class="container-fluid d-flex justify-content-center align-items-center">
                      <div class="row w-100 justify-content-center px-0">

                        <div class="col-12 col-md-4 py-4">

                          <li><RouterLink to="/" class="dropdown-item" id="dropimg">
                            <img :src="B1N" width="300" height="175" id="log">
                            <span class="mt-3">NOVEDADES</span>
                          </RouterLink></li>

                        </div>

                        <div class="col-12 col-md-4 py-4">

                          <li><RouterLink to="/" class="dropdown-item" id="dropimg">
                            <img :src="B2R" width="300" height="175" id="log">
                            <span class="mt-3">RESEÑAS</span>
                          </RouterLink></li>

                        </div>

                        <div class="col-12 col-md-4 py-4">

                          <li><RouterLink to="/" class="dropdown-item" id="dropimg">
                            <img :src="B3C" width="300" height="175" id="log">
                            <span class="mt-3">CATALOGO</span>
                          </RouterLink></li>

                        </div>
                        
                      </div>
                    </div>
                  </ul>

                </li>

                <li class="nav-item dropdown position-static pe-5 mt-4 ms-5 me-4" id="droph">
                  <RouterLink to="/" class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="bot">
                    EVENTOS
                  </RouterLink>
                  
                  <ul class="dropdown-menu">
                    <div class="container-fluid d-flex justify-content-center align-items-center">
                      <div class="row w-100 justify-content-center px-0">

                        <div class="col-12 col-md-4 py-4">

                          <li><RouterLink to="/" class="dropdown-item" id="dropimg">
                            <img :src="E1C" width="300" height="175" id="log">
                            <span class="mt-3">CULTURALES</span>
                          </RouterLink></li>

                        </div>

                        <div class="col-12 col-md-4 py-4">

                          <li><RouterLink to="/" class="dropdown-item" id="dropimg">
                            <img :src="E2D" width="300" height="175" id="log">
                            <span class="mt-3">DEPORTIVOS</span>
                          </RouterLink></li>

                        </div>

                        <div class="col-12 col-md-4 py-4">

                          <li><RouterLink to="/" class="dropdown-item" id="dropimg">
                            <img :src="E3E" width="300" height="175" id="log">
                            <span class="mt-3">ESCOLARES</span>
                          </RouterLink></li>

                        </div>
                        
                      </div>
                    </div>
                  </ul>

                </li>

                <li class="nav-item dropdown position-static mt-4 ms-5 me-2" id="droph">
                  <RouterLink to="/" class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="bot">
                    COMUNIDAD
                  </RouterLink>

                  <ul class="dropdown-menu">
                    <div class="container-fluid d-flex justify-content-center align-items-center">
                      <div class="row w-100 justify-content-center px-0">

                        <div class="col-12 col-md-4 py-4">

                          <li><RouterLink to="/" class="dropdown-item" id="dropimg">
                            <img :src="DDMV" width="300" height="175" id="log">
                            <span class="mt-3">TABLEROS DE COMUNICACION</span>
                          </RouterLink></li>

                        </div>

                        <div class="col-12 col-md-4 py-4">

                          <li><RouterLink to="/" class="dropdown-item" id="dropimg">
                            <img :src="DDMV" width="300" height="175" id="log">
                            <span class="mt-3">TABLEROS DE COMUNICACION</span>
                          </RouterLink></li>

                        </div>

                        <div class="col-12 col-md-4 py-4">

                          <li><RouterLink to="/" class="dropdown-item" id="dropimg">
                            <img :src="DDMV" width="300" height="175" id="log">
                            <span class="mt-3">TABLEROS DE COMUNICACION</span>
                          </RouterLink></li>

                        </div>
                        
                      </div>
                    </div>
                  </ul>
                  
                </li>
              </ul>
              
              <RouterLink to="/" type="button" class="btn btn-white mx-5 mt-3 ms-auto me-5 justify-content-center" id="user"> 
                <i class="bi bi-person-circle"></i>
              </RouterLink>
              
            </div>

          </div>
    
        </raw>

      </div>

    </nav>

  </div>
  
</template>