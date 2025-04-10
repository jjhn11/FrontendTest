<template>
  <div class="book-detail-page">
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
      <p>Cargando detalles del libro...</p>
    </div>
    
    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
      <button @click="fetchBookData" class="retry-button">Intentar de nuevo</button>
    </div>
    
    <main v-else class="book-content">
      <Breadcrumb :paths="breadcrumbPaths" />
      
      <BookInfo
        :title="book.title"
        :authors="book.authors"
        :coverImage="book.coverImage"
        :synopsis="book.synopsis"
      />
      
      <BookActions />
      
      <BookMetadata
        :format="book.format"
        :authors="book.authorText"
        :publisher="book.publisher"
        :year="book.year"
        :pages="book.pages"
        :binding="book.binding"
        :isbn="book.isbn"
        :isbn13="book.isbn13"
        :edition="book.edition"
        :categories="book.categories"
      />
      
      <!-- Uncomment when components are ready -->
      <!-- <BookReviews :reviews="book.reviews" /> -->
      <!-- <RelatedBooks :books="relatedBooks" /> -->
      
      <!-- <div class="progress-bar">
        <div class="progress-bar-blue"></div>
      </div> -->
    </main>
    
    <!-- <Footer2 /> -->
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Breadcrumb from "@/components/Library/Book/Breadcrumb.vue";
import BookInfo from "@/components/Library/Book/BookInfo.vue";
import BookActions from "@/components/Library/Book/BookActions.vue";
import BookMetadata from "@/components/Library/Book/BookMetadata.vue";
// import BookReviews from "@/components/Library/Book/BookReviews.vue";
// import RelatedBooks from "@/components/Library/Book/RelatedBooks.vue";
// import Footer2 from "@/components/Library/Book/Footer2.vue";

// State management
const route = useRoute();
const loading = ref(true);
const error = ref(null);
const book = reactive({
  id: '',
  title: '',
  authors: [],
  authorText: '',
  coverImage: '',
  synopsis: '',
  format: '',
  publisher: '',
  year: '',
  pages: '',
  binding: '',
  isbn: '',
  isbn13: '',
  edition: '',
  categories: [],
  reviews: []
});
const relatedBooks = ref([]);

// Computed properties
const breadcrumbPaths = computed(() => [
  { name: 'INICIO', path: '/' },
  { name: 'BIBLIOTECA', path: '/biblioteca' },
  { name: 'CATALOGO', path: '/biblioteca/catalogo' },
  {
    name: book.title || 'Cargando...',
    path: `/biblioteca/libro/${route.params.id || ''}`,
    active: true,
  },
]);

// Methods
const fetchBookData = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    // Get the book ID from route params
    const bookId = route.params.id;
    
    // In a real app, you would fetch from your API
    // const response = await fetch(`/api/books/${bookId}`);
    // const data = await response.json();
    
    // For demo, we'll simulate an API response with timeout
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock data - replace with actual API call
    const data = {
      id: bookId || '123',
      title: 'Big Data: la Revolución de los Datos Masivos',
      authors: ['Viktor Mayer-Schönberger', 'Kenneth Cukier'],
      authorText: 'Viktor Mayer-Schönberger y Kenneth Cukier',
      coverImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5441e3a1d6cebb44ed0a7f840df7d73dabef7cbf?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc',
      synopsis: 'Qué color de pintura es más probable que le diga si un vehículo de segunda mano está en buen estado. Cómo puede identificar un ayuntamiento cuáles son los baches más peligrosos de una ciudad. La clave para responder a todas estas preguntas son los datos masivos, los big data. Este término hace referencia a la ingente cantidad de información que proviene de la red, una información que hoy estamos en condiciones de procesar, analizar, tabular y utilizar, para bien o para mal. Los datos masivos representan una revolución que ya está cambiando la forma de hacer negocios, la sanidad, la política, la educación y la innovación. A la vez, significan el fin de la privacidad tal como la considerábamos hasta ahora. Este es un ensayo accesible sobre el mundo big data, cómo nos puede cambiar la vida, y qué podemos hacer frente a sus riesgos.',
      format: 'Libro Físico',
      publisher: 'Turner',
      year: '2013',
      pages: '278',
      binding: 'Tapa Blanda',
      isbn: '8415832109',
      isbn13: '9788415832102',
      edition: '1',
      categories: ['Ciencias', 'Computación'],
      reviews: []
    };
    
    // Update our reactive state with the fetched data
    Object.assign(book, data);
    
    // Fetch related books (in a real app)
    await fetchRelatedBooks(data.categories);
    
  } catch (err) {
    console.error('Error fetching book data:', err);
    error.value = 'No se pudo cargar la información del libro. Por favor intenta de nuevo más tarde.';
  } finally {
    loading.value = false;
  }
};

const fetchRelatedBooks = async (categories) => {
  try {
    // In a real app, fetch related books by categories
    // const response = await fetch(`/api/books/related?categories=${categories.join(',')}`);
    // relatedBooks.value = await response.json();
    
    // For demo, simulate related books
    relatedBooks.value = [
      {
        id: '124',
        title: 'Inteligencia Artificial',
        author: 'Stuart Russell',
        coverImage: '/placeholder-book.jpg'
      },
      {
        id: '125',
        title: 'Machine Learning con Python',
        author: 'Sarah Guido',
        coverImage: '/placeholder-book.jpg'
      }
    ];
  } catch (err) {
    console.error('Error fetching related books:', err);
    // Non-critical error, so we don't set the main error state
  }
};

// Lifecycle hooks
onMounted(() => {
  fetchBookData();
});
</script>

<style scoped>
.book-detail-page {
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  margin-top: 40px;
  min-height: 100vh; /* Ensure full height even when loading */
}

.book-content {
  align-self: center;
  display: flex;
  margin-top: 31px;
  width: 100%;
  max-width: 1468px;
  flex-direction: column;
  align-items: stretch;
  padding: 0 15px; /* Add padding for mobile */
}

/* Loading state */
.loading-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  font-family: 'Nunito Sans', sans-serif;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid rgba(0, 71, 255, 1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

/* Error state */
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 20px;
  text-align: center;
  color: #721c24;
  background-color: #f8d7da;
  border-radius: 4px;
  margin: 40px auto;
  max-width: 600px;
}

.retry-button {
  background-color: rgba(0, 71, 255, 1);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 15px;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  transition: background-color 0.3s ease;
}

.retry-button:hover {
  background-color: rgba(0, 50, 180, 1);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 991px) {
  .book-content {
    max-width: 100%;
  }
  
  /* Adjust spinner size for mobile */
  .spinner {
    width: 40px;
    height: 40px;
  }
  
  /* Adjust error message for mobile */
  .error-message {
    margin: 20px;
    padding: 15px;
  }
}

/* Existing styles */
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
    padding: 0 20px;
    margin-top: 40px;
    margin-left: 0;
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

/* Add styles for small screens */
@media (max-width: 576px) {
  .book-content {
    margin-top: 20px;
  }
  
  .progress-bar {
    margin-top: 30px;
  }
}
</style>