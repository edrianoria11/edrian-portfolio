<template>
  <Header :nav-items="navItems" />
  <div class="main-container">
    {{ sessionStore.getUserEmail }}
    {{ sessionStore.getUserName }}
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue'
import { useSessionStore } from '@/stores/session'

const sessionStore = useSessionStore()

const navItems = [
  { name: 'home-section', label: 'Home', icon: 'bi bi-house-door' },
  { name: 'skills-section', label: 'Skills', icon: 'fa-solid fa-brain' },
  { name: 'tools-section', label: 'Tools', icon: 'bi bi-wrench-adjustable' },
  { name: 'projects-section', label: 'Projects', icon: 'bi bi-archive' },
  { name: 'connect-section', label: 'Connect', icon: 'bi bi-envelope' },
]
</script>
