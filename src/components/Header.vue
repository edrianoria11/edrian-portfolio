<template>
  <header :class="{ active: currentSection === 'home-section' }" class="header">
    <button v-if="screenWidth <= 640" @click.prevent="isNavOpen = !isNavOpen" class="nav-toggler">
      <i class="bi bi-list"></i>
    </button>
    <nav
      :class="{
        active: isNavOpen,
        'transition-all': screenWidth < 640,
        'duration-300': screenWidth < 640,
      }"
      class="navbar"
    >
      <ul class="nav-item-list">
        <li
          v-for="(navItem, index) in navItems"
          :key="index"
          class="nav-item"
          :class="{ active: navItem.name == currentSection }"
        >
          <a :href="`#${navItem.name}`" class="nav-link">{{ navItem.label }}</a>
        </li>
      </ul>
      <div class="line"></div>
      <ThemeToggler />
    </nav>
  </header>

  <div
    :class="{ active: currentSection !== 'home-section' && currentSection !== 'footer-section' }"
    class="scrollspy-nav"
    id="draggable"
  >
    <!-- <button v-if="screenWidth <= 640" @click.prevent="isNavOpen = !isNavOpen" class="nav-toggler">
      <i class="bi bi-list"></i>
    </button> -->

    <nav class="navbar">
      <i
        class="bi bi-arrows-move drag-handle px-2 cursor-grabbing hover:text-[var(--teal-color-dark)] text-xl sm:text-2xl"
      ></i>
      <ul class="nav-item-list">
        <li
          v-for="(navItem, index) in navItems"
          :key="index"
          class="nav-item"
          :class="{ active: navItem.name == currentSection }"
        >
          <a :href="`#${navItem.name}`" class="nav-link"
            ><i :class="navItem.icon"></i> <span class="label">{{ navItem.label }}</span></a
          >
        </li>
      </ul>
      <div class="line"></div>
      <ThemeToggler />
    </nav>
  </div>
</template>

<script setup>
import ThemeToggler from './ThemeToggler.vue'
import { ref, onMounted } from 'vue'

let screenWidth = ref()
let isNavOpen = ref(false)

const navItems = [
  { name: 'home-section', label: 'Home', icon: 'bi bi-house-door' },
  { name: 'skills-section', label: 'Skills', icon: 'fa-solid fa-brain' },
  { name: 'tools-section', label: 'Tools', icon: 'bi bi-wrench-adjustable' },
  { name: 'projects-section', label: 'Projects', icon: 'bi bi-archive' },
  { name: 'connect-section', label: 'Connect', icon: 'bi bi-envelope' },
]

const props = defineProps({
  currentSection: {
    type: String,
    required: false,
  },
})

onMounted(() => {
  let isDragging = ref(false)
  let offsetX = ref(0)
  let offsetY = ref(0)

  const dragHandle = document.querySelector('.drag-handle')
  const scrollSpyDiv = document.getElementById('draggable')

  dragHandle.addEventListener('pointerdown', (e) => {
    isDragging.value = true
    scrollSpyDiv.setPointerCapture(e.pointerId)

    offsetX.value = e.clientX - scrollSpyDiv.offsetLeft
    offsetY.value = e.clientY - scrollSpyDiv.offsetTop
  })

  document.addEventListener('pointermove', (e) => {
    if (!isDragging.value) return

    const rect = scrollSpyDiv.getBoundingClientRect()

    const maxX = window.innerWidth - rect.width
    const maxY = window.innerHeight - rect.height

    let nextX = e.clientX - offsetX.value
    let nextY = e.clientY - offsetY.value

    // clamp values
    nextX = Math.max(0, Math.min(nextX, maxX))
    nextY = Math.max(0, Math.min(nextY, maxY))

    scrollSpyDiv.style.left = `${nextX}px`
    scrollSpyDiv.style.top = `${nextY}px`
  })

  document.addEventListener('pointerup', () => {
    isDragging.value = false
  })

  document.addEventListener('pointercancel', () => {
    isDragging.value = false
  })

  screenWidth.value = window.innerWidth

  if (screenWidth.value > 640) {
    isNavOpen.value = true
  }

  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach((el) => {
        el.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
})

window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth

  if (screenWidth.value > 640) {
    isNavOpen.value = true
  } else {
    isNavOpen.value = false
  }
})
</script>

<style scoped>
@import '@/assets/css/header.css';
@import '@/assets/css/style.css';
</style>
