import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from '@/stores/session'
import HomeView from '@/views/Home.vue'
import LoginView from '@/views/Login.vue'
import AdminDashboardView from '@/views/admin/Dashboard.vue'
import AdminSkillsView from '@/views/admin/Skills.vue'
import AdminToolsView from '@/views/admin/Tools.vue'
import AdminProjectsView from '@/views/admin/Projects.vue'

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
    },
    {
      path: '/admin/skills',
      name: 'admin-skills',
      component: AdminSkillsView,
    },
    {
      path: '/admin/tools',
      name: 'admin-tools',
      component: AdminToolsView,
    },
    {
      path: '/admin/projects',
      name: 'admin-projects',
      component: AdminProjectsView,
    },
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
