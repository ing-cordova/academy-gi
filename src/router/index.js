import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/components/pages/dashboard-page.vue'
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
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Login' },
    }
  ]
})

export default router
