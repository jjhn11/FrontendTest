<template>
    <div class="book-detail-page">
      <main class="book-content">
        <Breadcrumb
          :paths="[
            { name: 'INICIO', path: '#' },
            { name: 'BIBLIOTECA', path: '#' },
            { name: 'CATALOGO', path: '#' },
            {
              name: 'Big Data: La Revolución de los Datos Masivos',
              path: '#',
              active: true,
            },
          ]"
        />
        <BookInfo
          title="Big Data: la Revolución de los Datos Masivos"
          :authors="['Viktor Mayer-Schönberger', 'Kenneth Cukier']"
          coverImage="https://cdn.builder.io/api/v1/image/assets/TEMP/5441e3a1d6cebb44ed0a7f840df7d73dabef7cbf?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc"
          synopsis="Qué color de pintura es más probable que le diga si un vehículo de segunda mano está en buen estado. Cómo puede identificar un ayuntamiento cuáles son los baches más peligrosos de una ciudad. La clave para responder a todas estas preguntas son los datos masivos, los big data. Este término hace referencia a la ingente cantidad de información que proviene de la red, una información que hoy estamos en condiciones de procesar, analizar, tabular y utilizar, para bien o para mal. Los datos masivos representan una revolución que ya está cambiando la forma de hacer negocios, la sanidad, la política, la educación y la innovación. A la vez, significan el fin de la privacidad tal como la considerábamos hasta ahora. Este es un ensayo accesible sobre el mundo big data, cómo nos puede cambiar la vida, y qué podemos hacer frente a sus riesgos."
        />
        <BookActions />
        <BookMetadata
          format="Libro Físico"
          authors="Viktor Mayer-Schönberger y Kenneth Cukier"
          publisher="Turner"
          year="2013"
          pages="278"
          binding="Tapa Blanda"
          isbn="8415832109"
          isbn13="9788415832102"
          edition="1"
          :categories="['Ciencias', 'Computación']"
        />
        <!-- <BookReviews />
        <RelatedBooks />
        <div class="progress-bar">
          <div class="progress-bar-blue"></div>
        </div> -->
      </main>
      <Footer2 />
    </div>
  </template>
  
  <script setup>
  import Breadcrumb from "@/components/Library/Book/Breadcrumb.vue";
  import BookInfo from "@/components/Library/Book/BookInfo.vue";
  import BookActions from "@/components/Library/Book/BookActions.vue";
  import BookMetadata from "@/components/Library/Book/BookMetadata.vue";
//   import BookReviews from "./BookReviews.vue";
//   import RelatedBooks from "./RelatedBooks.vue";
  import Footer2 from "@/components/Library/Book/Footer2.vue";
  </script>
  
  <style scoped>
  .book-detail-page {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: stretch;
  }
  
  .book-content {
    align-self: center;
    display: flex;
    margin-top: 31px;
    width: 100%;
    max-width: 1468px;
    flex-direction: column;
    align-items: stretch;
  }
  
  @media (max-width: 991px) {
    .book-content {
      max-width: 100%;
    }
  }
  
  .progress-bar {
    border-radius: 20px;
    background-color: rgba(226, 227, 228, 1);
    align-self: center;
    display: flex;
    margin-top: 84px;
    margin-left: 12px;
    width: 1278px;
    max-width: 100%;
    flex-direction: column;
    align-items: start;
  }
  
  @media (max-width: 991px) {
    .progress-bar {
      padding-right: 20px;
      margin-top: 40px;
    }
  }
  
  .progress-bar-blue {
    border-radius: 20px;
    background-color: rgba(0, 71, 255, 1);
    display: flex;
    width: 639px;
    flex-shrink: 0;
    max-width: 100%;
    height: 19px;
  }
  
  .wave-divider {
    aspect-ratio: 6.94;
    object-fit: contain;
    object-position: center;
    width: 100%;
    z-index: 10;
    margin-top: 178px;
  }
  
  @media (max-width: 991px) {
    .wave-divider {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  </style>
  