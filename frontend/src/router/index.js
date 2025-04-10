import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EventsView from '@/views/EventsView.vue'
import CommunityView from '@/views/CommunityView.vue'
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
    path: '/library',
    name: 'library',
    component: LibraryView,
  },

  {
    path: '/events',
    name: 'events',
    component: EventsView,
  },

  {
    path: '/community',
    name: 'community',
    component: CommunityView,
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
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