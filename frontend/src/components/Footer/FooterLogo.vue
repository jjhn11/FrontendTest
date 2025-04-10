<template>
    <section class="footer-logo">
      <div class="footer-logo__content">
        <div class="footer-logo__header">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c178bb3bd53de52acd6a9a3fa8a3555b1e06ae3?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" alt="Aurora Logo" class="footer-logo__image" />
          <h2 class="footer-logo__title">AURORA</h2>
        </div>
        <p class="footer-logo__description">
          Se brida un servicio de apoyo al área de conocimiento, para facilitar el
          acceso a la información y el conocimiento, por medio de bibliograficas
          actualizadas y servicios de información.
        </p>
      </div>
    </section>
  </template>
  
  <script setup>
  // Component for the logo and description section of the footer
  </script>
  
  <style scoped>
  .footer-logo {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    line-height: normal;
    width: 47%;
    margin-left: 0px;
  }
  
  .footer-logo__content {
    width: 100%;
    color: rgba(0, 14, 50, 1);
    font-weight: 700;
  }
  
  .footer-logo__header {
    display: flex;
    width: 340px;
    max-width: 100%;
    align-items: start;
    gap: 11px;
    font-family:
      Cinzel Decorative,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 32px;
    white-space: nowrap;
  }
  
  .footer-logo__image {
    aspect-ratio: 2.47;
    object-fit: contain;
    object-position: center;
    width: 163px;
    flex-shrink: 0;
    max-width: 100%;
  }
  
  .footer-logo__title {
    align-self: stretch;
    margin-top: 6px;
    padding: 10px;
    gap: 10px;
    font-size: 32px;
    font-weight: 700;
    margin: 0;
  }
  
  .footer-logo__description {
    font-size: 18px;
    font-family:
      Nunito Sans,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    margin-top: 47px;
    margin-left: 13px;
    font-weight: 600;
    text-align: justify;
  }
  
  @media (max-width: 991px) {
    .footer-logo {
      width: 100%;
    }
  
    .footer-logo__content {
      max-width: 100%;
      margin-top: 40px;
    }
  
    .footer-logo__header {
      white-space: initial;
    }
  
    .footer-logo__title {
      white-space: initial;
    }
  
    .footer-logo__description {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  </style>
  