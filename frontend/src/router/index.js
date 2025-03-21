import { createRouter, createWebHistory } from 'vue-router'
import TasksListView from '../views/TasksListView.vue'
import AddTaskView from '@/views/AddTaskView.vue'

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: TasksListView
  },
  {
    path: '/add',
    name: 'add',
    component: AddTaskView
  },
]

const router = createRouter({
    history: createWebHistory('/'),
  routes
})

export default router