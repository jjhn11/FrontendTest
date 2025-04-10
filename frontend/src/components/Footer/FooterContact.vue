<template>
    <section class="footer-contact">
      <div class="footer-contact__content">
        <div class="footer-contact__email-section">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6590f95c87741b79139d4725b8b5610dfada489e?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" alt="Email icon" class="footer-contact__email-icon" />
          <div class="footer-contact__email-content">
            <h3 class="footer-contact__title">CONTÁCTANOS</h3>
            <a
              href="mailto:cinformacion@itmexicali.edu.mx"
              class="footer-contact__email"
            >
              cinformacion@itmexicali.edu.mx
            </a>
          </div>
        </div>
        <div class="footer-contact__phone-section">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5638b16b394e367006f13d1ae52e1c4832eeea8?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" alt="Phone icon" class="footer-contact__phone-icon" />
          <a href="tel:6865804920" class="footer-contact__phone">
            686 - 580 -4920 Ext. 4920
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Component for the contact information section of the footer
  </script>
  
  <style scoped>
  .footer-contact {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    line-height: normal;
    width: 36%;
    margin-left: 20px;
  }
  
  .footer-contact__content {
    display: flex;
    margin-top: 14px;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    font-weight: 700;
  }
  
  .footer-contact__email-section {
    display: flex;
    align-items: stretch;
    gap: 33px;
    white-space: nowrap;
  }
  
  .footer-contact__email-icon {
    aspect-ratio: 1.43;
    object-fit: contain;
    object-position: center;
    width: 30px;
    align-self: end;
    margin-top: 48px;
    flex-shrink: 0;
  }
  
  .footer-contact__email-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    width: fit-content;
  }
  
  .footer-contact__title {
    color: rgba(0, 14, 50, 1);
    font-size: 29px;
    font-family:
      Crimson Text,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    align-self: start;
    margin: 0;
  }
  
  .footer-contact__email {
    color: rgba(0, 71, 255, 1);
    font-size: 18px;
    font-family:
      Nunito Sans,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    margin-top: 11px;
    text-decoration: none;
    transition: text-decoration 0.3s;
  }
  
  .footer-contact__email:hover {
    text-decoration: underline;
  }
  
  .footer-contact__phone-section {
    align-self: start;
    display: flex;
    margin-top: 25px;
    align-items: start;
    gap: 33px;
    font-family:
      Nunito Sans,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 18px;
    color: rgba(0, 71, 255, 1);
  }
  
  .footer-contact__phone-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    flex-shrink: 0;
  }
  
  .footer-contact__phone {
    margin-top: 12px;
    flex-basis: auto;
    color: rgba(0, 71, 255, 1);
    text-decoration: none;
    transition: text-decoration 0.3s;
  }
  
  .footer-contact__phone:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 991px) {
    .footer-contact {
      width: 100%;
    }
  
    .footer-contact__content {
      margin-top: 40px;
    }
  
    .footer-contact__email-section {
      white-space: initial;
    }
  
    .footer-contact__email-content {
      white-space: initial;
    }
  
    .footer-contact__email-icon {
      margin-top: 40px;
    }
  }
  </style>
  