/* Denne kode opsætter en router ved hjælp af Vue Router til en Vue-applikation. 
Den definerer tre ruter: en til hjemmesiden, en til programvisning og en til questvisning. 
Hver rute er knyttet til en specifik komponent. Derudover sættes der en scrolladfærd, der sikrer, 
at siden altid scroller til toppen, når der navigeres til en ny rute. */

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