<template>
  <div class="footer" id="footer-section">
    <div class="footer-inner">
      <div class="footer-section-1">
        <div class="footer-section-1-1">
          <p>Navigation</p>
          <ul class="nav-item-list">
            <li class="nav-item">
              <a href="#home-section" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="#skills-section" class="nav-link">Skills</a>
            </li>
            <li class="nav-item">
              <a href="#tools-section" class="nav-link">Tools</a>
            </li>
            <li class="nav-item">
              <a href="#projects-section" class="nav-link">Projects</a>
            </li>
            <li class="nav-item">
              <a href="#connect-section" class="nav-link">Connect</a>
            </li>
          </ul>
        </div>
        <div class="footer-section-1-2">
          <p>Social Links</p>
          <ul class="social-link-list">
            <li class="social-link-item">
              <a href="#" class="social-link">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li class="social-link-item">
              <a href="#" class="social-link">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li class="social-link-item">
              <a href="#" class="social-link">
                <i class="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-section-2">
        <p>© {{ year }} Edrian Oria. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let year = ref(new Date().getFullYear())
</script>

<style scoped>
@import '@/assets/css/style.css';
@import '@/assets/css/footer.css';
</style>
