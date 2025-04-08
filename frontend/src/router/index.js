import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Biblioteca from '@/views/Biblioteca.vue'
import Eventos from '@/views/Eventos.vue'
import Comunidad from '@/views/Comunidad.vue'


const routes = [
  {
    path: '/',
    name: 'tasks',
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
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router