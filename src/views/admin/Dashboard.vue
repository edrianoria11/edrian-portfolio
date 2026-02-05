<template>
  <Sidebar />
  <div class="main-container">
    <div id="admin-home-section">
      <div class="admin-home-inner gap-10">
        <h2 class="section-title">Admin <span>Dashboard</span></h2>
        <div class="messages-container">
          <h3>Messages</h3>
          <div class="messages-filter">
            <button class="filter-toggler">
              <i class="bi bi-funnel"></i>
            </button>
            <ul class="filter-list">
              <li class="filter-item"></li>
            </ul>
          </div>
          <div class="messages-list">
            <div class="message-item">
              <div class="message-sender">
                <strong><i class="bi bi-person"></i></strong>
                <p class="sender-name">johndoe@gmail.com</p>
              </div>
              <div class="message-content">
                <strong><i class="bi bi-envelope"></i></strong>
                <p class="message">
                  Hello, I would like to connect with you regarding a potential project
                  collaboration.
                </p>
              </div>
            </div>

            <div class="message-item">
              <div class="message-sender">
                <strong><i class="bi bi-person"></i></strong>
                <p class="sender-name">johndoe@gmail.com</p>
              </div>
              <div class="message-content">
                <strong><i class="bi bi-envelope"></i></strong>
                <p class="message">
                  Hello, I would like to connect with you regarding a potential project
                  collaboration.
                </p>
              </div>
            </div>

            <div class="message-item">
              <div class="message-sender">
                <strong><i class="bi bi-person"></i></strong>
                <p class="sender-name">johndoe@gmail.com</p>
              </div>
              <div class="message-content">
                <strong><i class="bi bi-envelope"></i></strong>
                <p class="message">
                  Hello, I would like to connect with you regarding a potential project
                  collaboration.
                </p>
              </div>
            </div>

            <div class="message-item">
              <div class="message-sender">
                <strong><i class="bi bi-person"></i></strong>
                <p class="sender-name">johndoe@gmail.com</p>
              </div>
              <div class="message-content">
                <strong><i class="bi bi-envelope"></i></strong>
                <p class="message">
                  Hello, I would like to connect with you regarding a potential project
                  collaboration.
                </p>
              </div>
            </div>

            <div class="message-item">
              <div class="message-sender">
                <strong><i class="bi bi-person"></i></strong>
                <p class="sender-name">johndoe@gmail.com</p>
              </div>
              <div class="message-content">
                <strong><i class="bi bi-envelope"></i></strong>
                <p class="message">
                  Hello, I would like to connect with you regarding a potential project
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import { ref, onMounted } from 'vue'
import { useSessionStore } from '@/stores/session'

const sessionStore = useSessionStore()

const currentSection = ref()

const navItems = [
  { name: 'admin-home-section', label: 'Dashboard', icon: 'bi bi-house-door' },
  { name: 'admin-skills-section', label: 'Skills List', icon: 'fa-solid fa-brain' },
  { name: 'admin-tools-section', label: 'Tools List', icon: 'bi bi-wrench-adjustable' },
  { name: 'admin-projects-section', label: 'Projects List', icon: 'bi bi-archive' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.getAttribute('id')
        }
      })
    },
    { threshold: 0.6 },
  )

  document.querySelectorAll('div[id$="-section"]').forEach((section) => {
    observer.observe(section)
  })
})
</script>
