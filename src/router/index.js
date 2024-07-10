import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/components/pages/dashboard-page.vue'
import LoginPage from '@/components/pages/login-page.vue'
import privateRoutes from '@/router/routes-private.js'
import SYSTEM_NAME from '@/utils/configuration-env.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: privateRoutes.LOGIN,
      name: 'Login',
      component: LoginPage
    },
    {
      path: privateRoutes.DASHBOARD,
      name: 'Dashboard',
      component: DashboardPage
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Login' }
    }
  ]
})

router.afterEach(() => {
  document.title = SYSTEM_NAME || 'Administrator'
})

export default router
