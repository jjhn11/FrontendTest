import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Biblioteca from '@/views/Biblioteca.vue'
import Eventos from '@/views/Eventos.vue'
import Comunidad from '@/views/Comunidad.vue'
import UserView from '@/views/UserView.vue'
import LibraryView from '@/views/LibraryView.vue'
import BookView from '@/views/BookView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/biblioteca',
    name: 'library',
    component: Biblioteca,
  },

  {
    path: '/eventos',
    name: 'events',
    component: Eventos,
  },

  {
    path: '/comunidad',
    name: 'community',
    component: Comunidad,
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
  },
  {
    path: '/library',
    name: 'library',
    component: LibraryView,
  },
  {
    path: '/library/book',
    name: 'library-book',
    component: BookView,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router