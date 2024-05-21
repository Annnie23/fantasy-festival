import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/program',
    name: 'program',
    component: () => import('../views/ProgramView.vue')
  },
  {
    path: '/quest',
    name: 'quest',
    component: () => import('../views/QuestView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router