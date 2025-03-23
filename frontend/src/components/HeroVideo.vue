<template>
    <div>
        <!-- Hero Section -->
        <section class="hero-container">
        <!-- Background GIF -->
        <img src="../../img/herovideo.gif" alt="Hero animation" class="hero-background">

        <!-- Overlay Content -->
        <div class="hero-overlay">
            <img src="../../img/herovideo-title.png" alt="Hero title" class="hero-title">
        </div>

        <!-- SVG Curve -->
        <svg class="hero-curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="white" fill-opacity="1" d="M0,160 C360,300 1080,300 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
        </section>
    </div>
</template>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');

/* Hero Container */
.hero-container {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  display: flex;
  /* align-items: center;
  justify-content: center; */
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
  z-index: 1;
  pointer-events: none; /* Ensures the overlay doesn't block interactions */
}

/* Background GIF */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  left: -10%;
  width: 130%;
  height: 113%;
  object-fit: cover; /* Ensures the GIF covers the entire section */
  object-position: 100% 95%; /* 80% from the left, 100% from the top */
  z-index: 0;
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
  z-index: 3;
}

.hero-title {
  width: 75%;
  position: relative;
  max-width: 80%; /* Adjust size if needed */
  margin: 0 auto;
  transform: translate(20%, 130%); /* Moves the title slightly downwards */
  /* transform: translateY(100%); Moves the title slightly upwards */
}

</style>