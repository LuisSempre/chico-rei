import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('@/views/CheckOutView.vue')
    },
    {
      path: '/tshirts',
      name: 'tshirts',
      component: () => import('@/views/TshirtsView.vue')
    },
    {
      path: '/sweatshirts',
      name: 'sweatshirts',
      component: () => import('@/views/SweatshirtsView.vue')
    },
    {
      path: '/shirts',
      name: 'shirts',
      component: () => import('@/views/ShirtsView.vue')
    }
  ]
})

export default router
