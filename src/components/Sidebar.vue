<template>
  <div v-if="!isSidebarOpen" class="sidebar-toggler">
    <i @click="isSidebarOpen = !isSidebarOpen" class="bi bi-list"></i>
  </div>
  <aside :class="{ active: isSidebarOpen }" class="sidebar">
    <div class="sidebar-inner">
      <div class="sidebar-header">
        <i @click="isSidebarOpen = !isSidebarOpen" class="bi bi-arrow-left"></i>
        <h3 class="sidebar-title">Admin Panel</h3>
      </div>
      <nav class="sidebar-nav">
        <ul class="nav-item-list">
          <li v-for="navItem in navItems" :key="navItem.name" class="nav-item">
            <router-link class="nav-link" :to="{ name: navItem.name }">
              <i :class="navItem.icon"></i>
              <span class="label">{{ navItem.label }}</span>
            </router-link>
          </li>
        </ul>
        <ThemeToggler />
      </nav>
      <div class="sidebar-profile">
        <div class="sidebar-profile-inner">
          <div class="profile-info">
            <div class="profile-image">
              <img src="@/assets/images/placeholder-image.png" alt="Profile" />
            </div>
            <div class="profile-info-body">
              <p class="profile-name">{{ sessionStore.getUserName }}</p>
              <p class="profile-email">{{ sessionStore.getUserEmail }}</p>
            </div>
          </div>
          <button @click.prevent="logout" class="logout-button">
            <i class="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import ThemeToggler from '@/components/ThemeToggler.vue'
import { ref } from 'vue'
import { useSessionStore } from '@/stores/session'
import { useRouter } from 'vue-router'

const sessionStore = useSessionStore()
const router = useRouter()
const isSidebarOpen = ref(false)

const navItems = ref([
  { name: 'admin-dashboard', label: 'Dashboard', icon: 'bi bi-house-door' },
  { name: 'admin-skills', label: 'Skills', icon: 'fa-solid fa-brain' },
  { name: 'admin-tools', label: 'Tools', icon: 'bi bi-wrench-adjustable' },
  { name: 'admin-projects', label: 'Projects', icon: 'bi bi-archive' },
])

function logout() {
  sessionStore.logout()
  router.push({ name: 'login' })
}
</script>
