<template>
    <section class="footer-social">
      <h3 class="footer-social__title">SIGUENOS</h3>
      <div class="footer-social__icons">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f622abeaf585639325cd9491a9eaba9774f0e2f?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" alt="Social media icons" class="footer-social__image" />
      </div>
    </section>
  </template>
  
  <script setup>
  // Component for the social media section of the footer
  </script>
  
  <style scoped>
  .footer-social {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 27px;
  }
  
  .footer-social__title {
    color: rgba(0, 14, 50, 1);
    font-size: 29px;
    font-family:
      Crimson Text,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-weight: 700;
    margin: 0 156px 19px 0;
  }
  
  .footer-social__icons {
    display: flex;
    justify-content: flex-end;
  }
  
  .footer-social__image {
    aspect-ratio: 7.87;
    object-fit: contain;
    object-position: center;
    width: 473px;
    max-width: 100%;
  }
  
  @media (max-width: 991px) {
    .footer-social__title {
      margin-right: 10px;
    }
  }
  </style>
  