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
  
  <div class="container-fluid mt-5">
    
    
    <nav class="navbar navbar-expand-lg navbar-light fixed-top p-1" id="nav">
      

      <div class="col-12 mt-2">

        <raw>
          
          <!-- CONTAINER EDU -->

          <div class="d-flex justify-content-center mb-2">

            <header>
              <img :src="tec" width="550" height="75">
            </header>
          
          </div>

          <!-- CONTAINER NAVBAR -->

          <div class="container-fluid p-2">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              
              <a class="navbar-brand ms-5" id="aurlog">
                <img :src="logo" width="115" height="45">
                <span>AURORA</span>
              </a>

              <ul class="navbar-nav ms-auto border-top border-black border-1 fs-5" id="navbton">

                <li class="nav-item pe-5 mt-3 ms-3 me-5">
                  <RouterLink to="/" class="nav-link" style="text-">
                    INICIO
                  </RouterLink>
                </li>

                <li class="nav-item pe-5 mt-3 ms-5 me-5">
                  <RouterLink to="/" class="nav-link">
                    BIBLIOTECA
                  </RouterLink>
                </li>
                
                <li class="nav-item pe-5 mt-3 ms-5 me-5">
                  <RouterLink to="/" class="nav-link">
                    EVENTOS
                  </RouterLink>
                </li>

                <li class="nav-item mt-3 ms-5 me-2">
                  <RouterLink to="/" class="nav-link">
                    COMUNIDAD
                  </RouterLink>
                </li>

                <!-- Add your navigation links here -->
              </ul>

              <button type="button" class="btn btn-primary mx-2 ms-auto mt-3"> 
                <span class="fw-bold">Iniciar Sesion</span> 
              </button>
              
              <button type="button" class="btn btn-outline-primary mt-3"> 
                <span class="fw-bold">Registrarse</span> 
              </button>

            </div>
            

          </div>
    
        </raw>

      </div>

    </nav>

  </div>

</template>

<style>

#nav li > a {
  font-family: 'Anek Odia';
  font-weight: 600;
  height: 40px;
  color: #000E32;
  background-color: #FFFAE9;
}

#nav li > a:hover {
    transition: 0.4s;
    color: white;
    background-color: #000E32;
    border-radius: 5px;
}

#aurlog span {
  font-family: 'Cinzel Decorative';
  font-weight: 600;
  color: #000E32;
  opacity: 0;
  transition: 0.5s ;
}

#aurlog span:hover {
  opacity: 1;
}

</style>