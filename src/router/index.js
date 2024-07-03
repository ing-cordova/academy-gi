import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/home-page.vue'
import LoginPage from '@/components/pages/login-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Login' },
    }
  ]
})

export default router
