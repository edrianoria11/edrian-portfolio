<template>
  <div class="theme" @click.prevent="toggleDark()">
    <i v-if="!isDark" class="bi bi-moon-stars-fill"></i>
    <i v-else class="bi bi-sun-fill"></i>
    <label class="hidden text-base!">Theme</label>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>

<style scoped>
@import '@/assets/css/style.css' reference;

.theme {
  @apply px-1 py-2 text-2xl sm:px-0 sm:py-0;
}

.scrollspy-nav .theme {
  @apply px-1 py-2 flex items-center justify-center gap-3 w-full;
}

.scrollspy-nav .theme:hover i,
.scrollspy-nav .theme:hover label {
  @apply text-teal-color-dark transition-colors duration-300;
}

.scrollspy-nav:hover .theme i {
  @apply text-xl sm:text-2xl;
}

.scrollspy-nav:hover .theme label {
  @apply inline-block w-full cursor-pointer;
}

.theme i {
  @apply text-white hover:text-teal-color-dark transition-colors duration-300 cursor-pointer;
}
</style>
