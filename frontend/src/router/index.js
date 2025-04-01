import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import LibraryView from '@/views/LibraryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router