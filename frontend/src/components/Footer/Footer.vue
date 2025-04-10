<template>
  <footer class="footer">
    <img v-if="isHomePage" src="@/assets/img/footer/tec-map.png" alt="Mapa del TecNM" class="img-fluid">
    <div class="footer__main">
      <div class="footer__container">
        <div class="footer__row">
          <FooterLogo class="footer__logo" />
          <FooterNavigation class="footer__navigation" />
          <FooterContact class="footer__contact" />
        </div>
        <FooterSocial />
      </div>
      <FooterCopyright />
    </div>
  </footer>
</template>

<script setup>
import { computed} from "vue";
import { useRoute } from "vue-router";
import FooterLogo from "./FooterLogo.vue";
import FooterNavigation from "./FooterNavigation.vue";
import FooterContact from "./FooterContact.vue";
import FooterSocial from "./FooterSocial.vue";
import FooterCopyright from "./FooterCopyright.vue";

// Get current route
const route = useRoute();

// Check if current page is home
const isHomePage = computed(() => {
  return route.path === '/' || route.path === '/home';
});
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 0;
}

.footer__main {
  background-color: rgba(248, 247, 247, 1);
  display: flex;
  width: 100%;
  padding-top: 78px;
  flex-direction: column;
  align-items: stretch;
}

.footer__container {
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1481px;
  flex-direction: column;
  align-items: end;
  padding: 0 30px; /* Added padding to keep content from touching edges */
}

.footer__row {
  gap: 40px; /* Increased from 20px to 40px for more spacing */
  display: flex;
  align-self: stretch;
  width: 100%;
  justify-content: space-between; /* Distribute space evenly */
}

/* New classes to control component widths */
.footer__logo {
  flex: 1; /* Logo gets 1 part of available space */
  max-width: 30%; 
}

.footer__navigation {
  flex: 1.2; /* Navigation gets slightly more space than logo */
  padding: 0 5%; /* Add padding on both sides of navigation */
  max-width: 20%; 
}

.footer__contact {
  flex: 1; /* Contact gets same base space as logo */
  display: flex;
  padding: 0 3%; /* Add padding on both sides of contact */
  max-width: 30%;
}

@media (max-width: 991px) {
  .footer__main {
    max-width: 100%;
  }

  .footer__container {
    max-width: 100%;
    padding: 0 15px; /* Less padding on smaller screens */
  }

  .footer__row {
    flex-direction: column;
    align-items: stretch;
    gap: 40px; /* Maintain vertical spacing */
    max-width: 100%;
  }
  
  /* Reset flex properties for mobile view */
  .footer__logo, 
  .footer__navigation, 
  .footer__contact {
    flex: none;
    width: 100%;
    max-width: 100%;
    padding: 0;
    justify-content: flex-start;
  }
}

/* Additional adjustment for smaller mobile screens */
@media (max-width: 576px) {
  .footer__row {
    gap: 30px;
  }
  
  .footer__container {
    padding: 0 10px;
  }
}
</style>