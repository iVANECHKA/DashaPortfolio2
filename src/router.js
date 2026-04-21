import { createRouter, createWebHistory } from 'vue-router'

import CapitalCaseView from './views/CapitalCaseView.vue'
import HomeView from './views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projects/capital',
    name: 'capital-case',
    component: CapitalCaseView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 24,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

export default router
