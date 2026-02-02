import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from '@/stores/session'
import HomeView from '@/views/Home.vue'
import LoginView from '@/views/Login.vue'
import AdminDashboardView from '@/views/admin/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView,
      meta: { requiresAuth: true }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const sessionStore = useSessionStore()

  if (to.meta.requiresAuth && !sessionStore.getLoginStatus) {
    next({ name: 'login' })
  }

  if (to.name === 'login' && sessionStore.getLoginStatus) {
    next({ name: 'admin-dashboard' })
  }
  else next()
})

export default router
