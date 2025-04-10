<template>
    <nav class="footer-nav">
      <div class="footer-nav__content">
        <h3 class="footer-nav__title">EXPLORAR</h3>
        <ul class="footer-nav__links">
          <li>
            <RouterLink to="/" class="footer-nav__link footer-nav__link--inicio"
              >INICIO</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/library" class="footer-nav__link footer-nav__link--biblioteca"
              >BIBLIOTECA</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/events" class="footer-nav__link footer-nav__link--eventos"
              >EVENTOS</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/community" class="footer-nav__link footer-nav__link--comunidad"
              >COMUNIDAD</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  // Component for the navigation links section of the footer
  </script>
  
  <style scoped>
  .footer-nav {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    line-height: normal;
    width: 17%;
    margin-left: 20px;
  }
  
  .footer-nav__content {
    margin-top: auto;
    margin-bottom: auto;
    align-self: stretch;
  }
  
  .footer-nav__title {
    color: rgba(0, 14, 50, 1);
    font-size: 29px;
    font-family:
      Crimson Text,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-weight: 700;
    margin: 0 0 20px 0;
  }
  
  .footer-nav__links {
    display: flex;
    min-height: 158px;
    width: 120px;
    max-width: 100%;
    padding: 0;
    flex-direction: column;
    align-items: stretch;
    font-family:
      Nunito Sans,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 18px;
    color: rgba(0, 71, 255, 1);
    font-weight: 700;
    white-space: nowrap;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .footer-nav__link {
    padding: 5px 0px;
    color: rgba(0, 71, 255, 1);
    text-decoration: none;
    display: inline-block;
    transition:
      background-color 0.3s,
      color 0.3s;
  }
  
  .footer-nav__link:hover {
    color: #FBE326;
  }
  
  .footer-nav__link--inicio,
  .footer-nav__link--eventos {
    align-self: start;
  }
  
  .footer-nav__link--biblioteca,
  .footer-nav__link--comunidad {
    align-self: stretch;
    width: 100%;
  }
  
  .footer-nav__link--comunidad {
    overflow: hidden;
  }
  
  @media (max-width: 991px) {
    .footer-nav {
      width: 100%;
      margin-top: 40px;
    }
  
    .footer-nav__title {
      margin-left: 8px;
    }
  
    .footer-nav__links {
      white-space: initial;
    }
  
    .footer-nav__link {
      white-space: initial;
    }
  }
  </style>
  