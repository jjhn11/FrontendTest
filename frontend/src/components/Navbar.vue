<script setup>
  // [Imports]
  import { RouterLink, useRoute } from 'vue-router';
  import { ref } from 'vue'
  
  // [Imagenes]
  import logo from '../assets/img/LogoAurora.png';
  import tec from '../assets/img/tec.png';
  import B1N from '../assets/img/B1 NOVEDADES.png';
  import B2R from '../assets/img/B2 RESEÑAS.png';
  import B3C from '../assets/img/B3 CATALOGO.png';
  import E1C from '../assets/img/E1 CULTURALES.png';
  import E2D from '../assets/img/E2 DEPORTIVOS.png';
  import E3E from '../assets/img/E3 ESCOLARES.png';
  import DDMV from '../assets/img/DDM VACIO.png';


  // [JavaScript]

  // Función para verificar si un enlace está activo

  const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
  }

  // @@ Menu de Usuario @@

    // ## Datos reactivos para el menú de usuario ##

      const showMenu = ref(false) // Estado del menú de usuario
      const currentView = ref('MainMenu') // Vista actual del menú
      const viewStack = ref(['MainMenu']) // Pila de vistas para la navegación

    // ## Funciones para manejar la navegación del menú ##

      // Función para mostrar/ocultar el menú de usuario

      const toggleMenu = () => {
        showMenu.value = !showMenu.value
        if (showMenu.value) {
          viewStack.value = ['MainMenu']
          currentView.value = 'MainMenu'
        }
      }

      // Función para navegar a una vista específica y agregarla a la pila de vistas

      const navigateTo = (view) => {
        viewStack.value.push(view)
        currentView.value = view
      }

      // Función para regresar a la vista anterior (si hay más de una vista en la pila)

      const goBack = () => {
        if (viewStack.value.length > 1) {
          viewStack.value.pop()
          currentView.value = viewStack.value[viewStack.value.length - 1]
        }
      }

      // ## Datos reactivos para las configuraciones ##

      const darkTheme = ref(false)
      const currentFontSize = ref(1)
      const fontSizes = [0.8, 1, 1.2]
      const currentLanguage = ref('Español')

    // ## Funciones para manejar las configuraciones ##
    
      // Cambia el tema entre claro y oscuro

      const toggleTheme = () => {
        darkTheme.value = !darkTheme.value
        document.body.classList.toggle('dark-theme', darkTheme.value)
      }

      // Cambia el tamaño de la fuente entre los valores definidos en fontSizes y actualiza el tamaño de fuente del documento
      
      const changeFontSize = () => {
        const currentIndex = fontSizes.indexOf(currentFontSize.value)
        const nextIndex = (currentIndex + 1) % fontSizes.length
        currentFontSize.value = fontSizes[nextIndex]
        document.documentElement.style.fontSize = `${currentFontSize.value}rem`
      }

      // Cambia el idioma actual y actualiza la lógica de idioma (aquí se puede agregar la lógica para cambiar el idioma de la aplicación)
      // En este caso, solo se actualiza el valor de currentLanguage

      const changeLanguage = (lang) => {
        currentLanguage.value = lang
        // Aquí iría la lógica para cambiar el idioma
      }

  ///////////////////////////

</script>

<template>
  
  <!-- @@@@@@@@ Navbar @@@@@@@@ -->

  <div class="container-fluid mt-5">
    
    <nav class="navbar navbar-expand-lg navbar-light fixed-top justify-content-center">
      
      <div class="col-12 mt-2">

        <raw>
          
          <!-- CONTAINER EDU -->

          <div class="container-fluid p-1 d-flex justify-content-center mb-1" id="edu">

            <header>
              <img :src="tec" width="525" height="70">
            </header>
          
          </div>

          <!-- CONTAINER NAVBAR -->

          <div class="container-fluid p-2 justify-content-center">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              
              <a class="navbar-brand me-auto" id="aurlog">
                  <img :src="logo" width="130" height="50" id="log">
                  <span id="aur">AURORA</span>
              </a>

              <ul class="navbar-nav border-top border-black border-2 d-flex justify-content-center" id="nav">

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
              
              <button @click="toggleMenu" type="button" class="btn btn-white mt-3 ms-auto me-5 justify-content-center" id="user"> 
                <i class="bi bi-person-circle"></i>
              </button>

            </div>

          </div>
    
        </raw>

      </div>

    </nav>

  </div>

  <!-- @@@@@@@@ Menu de Usuario @@@@@@@@ -->

  <div class="container-fluid mt-5">
    
    <!-- Contenedor del menú -->
    <form v-if="showMenu" class="bg-white border shadow mt-2 fixed-top" id="uform">
      <raw>

        <div class="container-fluid p-1 justify-content-center">
          <!-- Menú principal -->
          <div v-if="currentView === 'MainMenu'">

            <div class="mb-3">
              <label class="form-label bi bi-person-circle">
                INVITADO
              </label>
            </div>

            <div class="mb-3">
              <RouterLink to="/" class="btn btn-outline-primary">
                INICIAR SESION
              </RouterLink>
            </div>

            <div class="mb-3">
              <RouterLink to="/"  class="btn btn-outline-primary">
                CREAR CUENTA
              </RouterLink>
            </div>

            <div class="mb-3">
              <button @click="navigateTo('ConfigMenu')" class="btn btn-outline-secondary">
                CONFIGURACION
              </button>
            </div>

          </div>

          <!-- Menú de configuración -->
          <div v-if="currentView === 'ConfigMenu'">

            <div class="mb-3">
              <label class="form-label">
                CONFIGURACION
              </label>
            </div>

            <div class="mb-3 justify-content-center">
              <button @click="navigateTo('PersonalizationMenu')" class="btn btn-outline-secondary">
                PERSONALIZACION
              </button>
            </div>

            <div class="mb-3">
              <button @click="navigateTo('LanguageMenu')" class="btn btn-outline-secondary">
                LENGUAJE
              </button>
            </div>

          </div>

          <!-- Menú de personalización -->
          <div v-if="currentView === 'PersonalizationMenu'">

            <div class="mb-3">
              <label class="form-label">
                PERSONALIZACION
              </label>
            </div>

            <div class="mb-3">
              <button @click="toggleTheme" class="btn btn-outline-secondary">
                {{ darkTheme ? 'PREDETERMINADO' : 'TEMA OSCURO' }}
              </button>
            </div>

            <div class="mb-3">
              <button @click="changeFontSize"class="btn btn-outline-secondary">
                TAMAÑO: {{ currentFontSize }}rem
              </button>
            </div>

          </div>

          <!-- Menú de idioma -->
          <div v-if="currentView === 'LanguageMenu'">
            
            <div class="mb-3">
              <label class="form-label">
                LENGUAJE
              </label>
            </div>

            <div class="mb-3">
              <button @click="changeLanguage('Español')" class="btn btn-outline-secondary mb-2">
                ESPAÑOL
              </button>
            </div>
            
            <div class="mb-3">
              <button @click="changeLanguage('English')" class="btn btn-outline-secondary">
                ENGLISH
              </button>
            </div>

          </div>

        </div>

        <!-- Botón de regreso al menú principal -->
        <!-- Este botón solo se muestra si no estamos en el menú principal -->

        <div class="container-fluid">
          <button v-if="currentView != 'MainMenu'" @click="goBack" class="btn btn-outline-danger" id="atbot">
            ←
          </button>
        </div>

      </raw>
    </form>

  </div>

</template>