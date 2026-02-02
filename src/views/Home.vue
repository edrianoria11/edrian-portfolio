<template>
  <Header :current-section="currentSection" :nav-items="navItems" />
  <main class="main-container">
    <div id="home-section">
      <img src="@/assets/images/circuit-2.png" class="circuit-image-1" alt="" />
      <img src="@/assets/images/circuit-2.png" class="circuit-image-2" alt="" />
      <div class="home-inner">
        <div class="section-1">
          <p class="text-1">Hello, I'm</p>
          <h1>Edrian Oria</h1>
          <p class="text-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, deleniti.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center md:justify-start items-center sm:gap-4"
          >
            <a href="#projects-section" class="btn"
              >View my projects <i class="bi bi-arrow-right font-semibold text-2xl"></i
            ></a>
            <a href="/files/edrian-oria-cv.pdf" target="_blank" class="btn"
              >View my CV <i class="bi bi-arrow-right -rotate-45 font-semibold text-2xl"></i
            ></a>
          </div>
        </div>
        <div class="section-2">
          <div class="image-container">
            <img src="@/assets/images/profile-2.png" alt="Profile Image" />
          </div>
        </div>
      </div>
    </div>
    <div id="skills-section">
      <div class="skills-inner">
        <h2 class="section-title">My <span>Skills</span></h2>
        <div class="skills-list-container">
          <div class="skills-categories">
            <ul class="category-list">
              <li class="category-item active">Tech Skills</li>
              <li class="category-item">Soft Skills</li>
            </ul>
          </div>
          <div class="skills-list-wrapper">
            <div
              :class="{ active: activeSkillCategory === 'Tech Skills' }"
              class="skills-list-wrapper-inner tech"
            >
              <div class="skills-list">
                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/Vuejs.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">Vuejs</h6>
                    <p class="experience">Familiar</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/JavaScript.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">JavaScript</h6>
                    <p class="experience">Familiar</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/HTML5.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">HTML</h6>
                    <p class="experience">Proficient</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/CSS3.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">CSS</h6>
                    <p class="experience">Proficient</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/Codeigniter3.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">PHP Codeigniter 3</h6>
                    <p class="experience">Familiar</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/PythonFlask.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">Python Flask</h6>
                    <p class="experience">Working Knowledge</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/Csharp.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">C SHARP</h6>
                    <p class="experience">Familiar</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/Tailwindcss.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">Tailwind CSS</h6>
                    <p class="experience">Working Knowledge</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/Bootstrap.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">Bootstrap</h6>
                    <p class="experience">Working Knowledge</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/Supabase.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">Supabase</h6>
                    <p class="experience">Familiar</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/PostgreSQL.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">PostgreSQL</h6>
                    <p class="experience">Working Knowledge</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/MySQL.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">MySQL</h6>
                    <p class="experience">Working Knowledge</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/Git-Github.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">Git / Github</h6>
                    <p class="experience">Familiarity</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/Photoshop.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">Photoshop</h6>
                    <p class="experience">Familiarity</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/Canva.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">Canva</h6>
                    <p class="experience">Working Knowledge</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/MSOffice.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">MS Office</h6>
                    <p class="experience">Working Knowledge</p>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-icon">
                    <img src="/files/images/GoogleWorkspace.png" alt="" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">Google Workspace</h6>
                    <p class="experience">Working Knowledge</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              :class="{ active: activeSkillCategory === 'Soft Skills' }"
              class="skills-list-wrapper-inner soft"
            >
              <div class="skills-list">
                <div class="skill-item">
                  <div class="skill-body">
                    <h6 class="skill-title">Willingness to Learn</h6>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-body">
                    <h6 class="skill-title">Adaptability</h6>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-body">
                    <h6 class="skill-title">Attention to Detail</h6>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="skill-body">
                    <h6 class="skill-title">Ownership & Responsibility</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="tools-section">
      <div class="tools-inner">
        <h2 class="section-title">Tools <span>I use</span></h2>
        <div class="tools-container">
          <div class="carousel">
            <div class="group">
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Visual Studio Code</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">XAMPP</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Git</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">GitHub</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Canva</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">MS Office</h6>
                </div>
              </div>
            </div>

            <div aria-hidden class="group">
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Tool Name 1</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Tool Name 2</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Tool Name 3</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Tool Name 4</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Tool Name 5</h6>
                </div>
              </div>

              <div class="card">
                <div class="card-image-container">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Tool Name 6</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="projects-section" class="h-screen">
      <div class="projects-inner">
        <h2 class="section-title">My <span>Projects</span></h2>
        <div class="projects-container">
          <div class="project-categories active">
            <div class="category-item" data-category="category-1">
              <div class="category-item-image">
                <img src="@/assets/images/placeholder-image.png" alt="" />
              </div>
              <div class="category-item-body">
                <h6 class="category-title">Web Applications</h6>
                <p class="category-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, incidunt?
                </p>
              </div>
            </div>
            <div class="category-item" data-category="category-2">
              <div class="category-item-image">
                <img src="@/assets/images/placeholder-image.png" alt="" />
              </div>
              <div class="category-item-body">
                <h6 class="category-title">Graphic Designs</h6>
                <p class="category-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, incidunt?
                </p>
              </div>
            </div>
            <div class="category-item" data-category="category-3">
              <div class="category-item-image">
                <img src="@/assets/images/placeholder-image.png" alt="" />
              </div>
              <div class="category-item-body">
                <h6 class="category-title">Other Projects</h6>
                <p class="category-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, incidunt?
                </p>
              </div>
            </div>
          </div>
          <div class="project-list-wrapper">
            <div
              class="flex items-center w-full justify-end sm:justify-center relative pr-9 md:pr-0"
            >
              <i class="bi bi-arrow-left back-button"></i>
              <h3 class="project-category-title">{{ activeProjectCategory }}</h3>
            </div>
            <div class="project-list">
              <div class="project-item">
                <div class="project-item-image">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="project-item-body">
                  <h6 class="project-name">Project Name</h6>
                  <ul class="project-category-container">
                    <li class="project-category-item">Category 1</li>
                    <li class="project-category-item">Category 2</li>
                    <li class="project-category-item">Category 3</li>
                    <li class="project-category-item">Category 4</li>
                  </ul>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-image">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="project-item-body">
                  <h6 class="project-name">Project Name</h6>
                  <ul class="project-category-container">
                    <li class="project-category-item">Category 1</li>
                    <li class="project-category-item">Category 2</li>
                    <li class="project-category-item">Category 3</li>
                    <li class="project-category-item">Category 4</li>
                  </ul>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-image">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="project-item-body">
                  <h6 class="project-name">Project Name</h6>
                  <ul class="project-category-container">
                    <li class="project-category-item">Category 1</li>
                    <li class="project-category-item">Category 2</li>
                    <li class="project-category-item">Category 3</li>
                    <li class="project-category-item">Category 4</li>
                  </ul>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-image">
                  <img src="@/assets/images/placeholder-image.png" alt="" />
                </div>
                <div class="project-item-body">
                  <h6 class="project-name">Project Name</h6>
                  <ul class="project-category-container">
                    <li class="project-category-item">Category 1</li>
                    <li class="project-category-item">Category 2</li>
                    <li class="project-category-item">Category 3</li>
                    <li class="project-category-item">Category 4</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="connect-section">
      <div class="connect-inner">
        <h2 class="section-title">Connect <span>with me</span></h2>
        <div class="connect-container">
          <div class="connect-section-1">
            <h1 class="text-6xl md:text-7xl">Let's Connect</h1>
          </div>
          <div class="connect-section-2">
            <form class="connect-form" @submit.prevent>
              <h3 class="form-title">Send me a <span>message</span></h3>
              <div class="input-wrapper">
                <input type="text" id="email" required />
                <label for="email">Email</label>
              </div>
              <div class="input-wrapper">
                <textarea id="message" v-model="message" required></textarea>
                <label for="message">Write a message</label>
              </div>
              <button class="btn">Send Message <i class="bi bi-send"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted, watch } from 'vue'

let currentSection = ref()
let activeSkillCategory = ref('Tech Skills')
let activeProjectCategory = ref()
let message = ref()

watch(currentSection, (newSection) => {
  console.log(newSection)
})

watch(activeProjectCategory, (newCategory) => {
  console.log(newCategory)
})

const navItems = [
  { name: 'home-section', label: 'Home', icon: 'bi bi-house-door' },
  { name: 'skills-section', label: 'Skills', icon: 'fa-solid fa-brain' },
  { name: 'tools-section', label: 'Tools', icon: 'bi bi-wrench-adjustable' },
  { name: 'projects-section', label: 'Projects', icon: 'bi bi-archive' },
  { name: 'connect-section', label: 'Connect', icon: 'bi bi-envelope' },
]

onMounted(() => {
  document.addEventListener('click', (e) => {
    const projectCategory = e.target.closest('.project-categories .category-item')
    if (projectCategory) {
      activeProjectCategory.value = projectCategory.getAttribute('data-category')

      const projectCategoriesDiv = document.querySelector('.project-categories')

      if (projectCategoriesDiv) {
        projectCategoriesDiv.classList.remove('active')
      }

      const projectListDiv = document.querySelector('.project-list-wrapper')

      if (projectListDiv) {
        projectListDiv.classList.add('active')
      }
    }
  })

  document.addEventListener('click', (e) => {
    const backButton = e.target.closest('.project-list-wrapper .back-button')
    if (backButton) {
      const projectCategoriesDiv = document.querySelector('.project-categories')

      if (projectCategoriesDiv) {
        projectCategoriesDiv.classList.add('active')
      }

      const projectListDiv = document.querySelector('.project-list-wrapper')

      if (projectListDiv) {
        projectListDiv.classList.remove('active')
      }
    }
  })

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

  document.querySelectorAll('.category-item').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.category-item').forEach((el) => {
        el.classList.remove('active')
      })
      item.classList.add('active')
    })
  })

  let categoryContainer = document.querySelector('.category-list')

  categoryContainer.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('category-item')) {
      const category = target.textContent.trim()
      activeSkillCategory.value = category
    }
  })
})
</script>

<style scoped>
@import '@/assets/css/style.css';
</style>
