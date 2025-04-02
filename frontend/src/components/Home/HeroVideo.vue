<template>
  <div>
    <section class="hero-container">
      <!-- Always show the GIF as fallback -->
      <img 
        src="@/assets/img/home/herovideo.gif" 
        alt="Hero animation" 
        class="hero-background"
      >
      
      <!-- Simple video implementation -->
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="hero-video"
      >
        <source src="@/assets/img/home/herovideo.mp4" type="video/mp4">
      </video>

      <!-- Overlay Content -->
      <div class="hero-overlay">
        <!-- <span class="hero-title">Aurora</span> -->
        <img src="@/assets/img/home/herovideo-title.png" alt="Hero title" class="hero-title">
      </div>

      <!-- SVG Curve -->
      <svg class="hero-curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="white" fill-opacity="1" d="M0,160 C360,300 1080,300 1440,160 L1440,321 L0,321 Z"></path>
      </svg>
    </section>
  </div>
</template>
  
<style scoped>

/* Hero Container */
.hero-container {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  display: flex;
  background-color: white;
}

/* Gradient Overlay */
.hero-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.66) 70%);
  z-index: 2;
  pointer-events: none; /* Ensures the overlay doesn't block interactions */
}

/* Background elements */
.hero-background, .hero-video {
  position: absolute;
  top: 0;
  left: -10%;
  width: 130%;
  height: 113%;
  object-fit: cover;
  object-position: 100% 95%;
}

.hero-background {
  z-index: 0;
}

.hero-video {
  z-index: 1;
}

/* Overlay Content */
.hero-overlay {
  position: relative;
  z-index: 2; /* Ensures content is above the gradient overlay */
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* SVG Curve */
.hero-curve {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 4;
}

/* .hero-title {
  font-family: 'Cinzel Decorative';
  font-weight: 700;
  font-size: 5rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  transform: translateY(30%);
  letter-spacing: 0.05em;
}
*/


.hero-title {
  width: 75%;
  max-width: 80%; 
  margin: 0 auto;
  transform: translate(20%, 130%); 
} 


</style>