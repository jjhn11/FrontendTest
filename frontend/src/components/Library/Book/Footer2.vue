<template>
    <footer class="footer">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eb0760392971ee528cd1c8ce2d6b1cea13279f4?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" class="divider-image" alt="Divider" />
      <section class="footer-main">
        <div class="footer-content">
          <div class="footer-sections">
            <div class="footer-columns">
              <section class="footer-column info-column">
                <div class="info-container">
                  <div class="logo-container">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/68dfe3b82a7292ba722f84b6ec356d6de4b7cc14?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" class="logo-image" alt="Logo" />
                    <h2 class="brand-name">AURORA</h2>
                  </div>
                  <p class="description">
                    Se brida un servicio de apoyo al área de conocimiento, para
                    facilitar el acceso a la información y el conocimiento, por
                    medio de bibliograficas actualizadas y servicios de
                    información.
                  </p>
                </div>
              </section>
              <section class="footer-column nav-column">
                <div class="nav-container">
                  <h3 class="nav-heading">EXPLORAR</h3>
                  <nav class="nav-links">
                    <a href="#" class="nav-link home-link">INICIO</a>
                    <a href="#" class="nav-link library-link">BIBLIOTECA</a>
                    <a href="#" class="nav-link events-link">EVENTOS</a>
                    <a href="#" class="nav-link community-link">COMUNIDAD</a>
                  </nav>
                </div>
              </section>
              <section class="footer-column contact-column">
                <div class="contact-container">
                  <div class="contact-email">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6590f95c87741b79139d4725b8b5610dfada489e?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" class="email-icon" alt="Email icon" />
                    <div class="contact-info">
                      <h3 class="contact-heading">CONTÁCTANOS</h3>
                      <a
                        href="mailto:cinformacion@itmexicali.edu.mx"
                        class="email-address"
                      >
                        cinformacion@itmexicali.edu.mx
                      </a>
                    </div>
                  </div>
                  <div class="contact-phone">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa3d631543a44346782ef32e819054e5e562b630?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" class="phone-icon" alt="Phone icon" />
                    <span class="phone-number">686 - 580 -4920 Ext. 4920</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="social-section">
            <h3 class="social-heading">SIGUENOS</h3>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c00ba637a96efa0136c4eecc682b98ccd59a8180?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" class="social-icons" alt="Social media icons" />
          </div>
        </div>
        <div class="copyright">
          © 2025 Sunware. Todos Los Derechos Reservados
        </div>
      </section>
    </footer>
  </template>
  
  <style scoped>
  .divider-image {
    aspect-ratio: 6.94;
    object-fit: contain;
    object-position: center;
    width: 100%;
    z-index: 10;
  }

  .footer-main {
    background-color: rgba(248, 247, 247, 1);
    display: flex;
    width: 100%;
    padding-top: 4rem;
    padding-bottom: 0;
    flex-direction: column;
    align-items: stretch;
  }

  .footer-content {
    width: 100%;
    max-width: 1481px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
  }

  .footer-sections {
    width: 100%;
    margin-bottom: 2rem;
  }

  .footer-columns {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .info-column {
    flex: 1;
    min-width: 300px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    color: rgba(0, 14, 50, 1);
    font-weight: 700;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-family: 'Cinzel Decorative', serif;
    font-size: 2rem;
  }

  .logo-image {
    max-width: 163px;
    height: auto;
  }

  .description {
    font-size: 1.125rem;
    font-family: 'Nunito Sans', sans-serif;
    margin-top: 1.5rem;
    line-height: 1.5;
  }

  .nav-column {
    flex: 0 1 auto;
    min-width: 180px;
  }

  .nav-container {
    display: flex;
    flex-direction: column;
  }

  .nav-heading {
    color: rgba(0, 14, 50, 1);
    font-size: 1.8rem;
    font-family: 'Crimson Text', serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.125rem;
    color: rgba(0, 71, 255, 1);
    font-weight: 200;
  }

  .nav-link {
    border: 1px solid rgba(0, 71, 255, 1);
    padding: 0.5rem 0.75rem;
    text-decoration: none;
    color: inherit;
    display: inline-block;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    background-color: rgba(0, 71, 255, 0.1);
  }

  .contact-column {
    flex: 1;
    min-width: 300px;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-email {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .email-icon {
    width: 30px;
    height: auto;
    margin-top: 0.75rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
  }

  .contact-heading {
    color: rgba(0, 14, 50, 1);
    font-size: 1.8rem;
    font-family: 'Crimson Text', serif;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .email-address {
    color: rgba(0, 71, 255, 1);
    font-size: 1.125rem;
    font-family: 'Nunito Sans', sans-serif;
    text-decoration: none;
    word-break: break-word;
  }

  .contact-phone {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.125rem;
    color: rgba(0, 71, 255, 1);
  }

  .phone-icon {
    width: 30px;
    height: auto;
  }

  .social-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }

  .social-heading {
    color: rgba(0, 14, 50, 1);
    font-size: 1.8rem;
    font-family: 'Crimson Text', serif;
    font-weight: 700;
    margin-bottom: 1rem;
    align-self: center;
  }

  .social-icons {
    max-width: 473px;
    width: 100%;
    height: auto;
  }

  .copyright {
    background-color: rgba(0, 14, 50, 1);
    width: 100%;
    padding: 1.5rem 1rem;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    text-align: center;
  }

  /* Tablet Styles */
  @media (max-width: 992px) {
    .footer-columns {
      gap: 3rem 1rem;
    }
    
    .nav-column {
      min-width: 160px;
    }
    
    .description {
      font-size: 1rem;
    }
    
    .nav-heading,
    .contact-heading,
    .social-heading {
      font-size: 1.5rem;
    }
    
    .copyright {
      font-size: 1rem;
    }
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    .footer-main {
      padding-top: 3rem;
    }
    
    .footer-columns {
      flex-direction: column;
      gap: 2.5rem;
    }
    
    .info-column,
    .nav-column,
    .contact-column {
      width: 100%;
      min-width: 100%;
    }
    
    .logo-container {
      font-size: 1.75rem;
      justify-content: center;
    }
    
    .description {
      text-align: center;
    }
    
    .nav-container {
      align-items: center;
    }
    
    .nav-links {
      align-items: center;
    }
    
    .contact-container {
      align-items: center;
    }
    
    .contact-email {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .contact-phone {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .email-icon,
    .phone-icon {
      margin: 0;
    }
    
    .social-heading {
      margin-bottom: 0.5rem;
    }
    
    .social-icons {
      max-width: 95%;
    }
    
    .copyright {
      padding: 1rem;
      font-size: 0.9rem;
    }
  }

  /* Extra small devices */
  @media (max-width: 576px) {
    .email-address {
      font-size: 1rem;
    }
    
    .logo-container {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .logo-image {
      max-width: 140px;
    }
  }
  </style>