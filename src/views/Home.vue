<template>
  <Header :current-section="currentSection" :nav-items="navItems" />
  <main class="main-container">
    <div id="home-section">
      <img src="@/assets/images/circuit-2.png" class="circuit-image-1" alt="" />
      <img src="@/assets/images/circuit-2.png" class="circuit-image-2" alt="" />
      <div class="home-inner">
        <div class="section-1">
          <p class="text-1">Hello, I'm</p>
          <div class="animation-wrapper">
            <h1 class="animation-header">Edrian Oria</h1>
          </div>
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
        <h2
          :class="{ 'slide-from-top': currentSection === 'skills-section' }"
          class="section-title"
        >
          My <span>Skills</span>
        </h2>
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
                <div v-for="skillItem in techSkills" class="skill-item" :key="skillItem.id">
                  <div class="skill-icon">
                    <img :src="skillItem.skillImage" :alt="skillItem.alt" />
                  </div>
                  <div class="skill-body">
                    <h6 class="skill-title">{{ skillItem.skillName }}</h6>
                    <p class="experience">{{ skillItem.experience }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              :class="{ active: activeSkillCategory === 'Soft Skills' }"
              class="skills-list-wrapper-inner soft"
            >
              <div class="skills-list">
                <div v-for="skillItem in softSkills" class="skill-item" :key="skillItem.id">
                  <div class="skill-body">
                    <h6 class="skill-title">{{ skillItem.skillName }}</h6>
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
              <div v-for="tool in tools" class="card" :key="tool.id">
                <div class="card-image-container">
                  <img :src="tool.toolImage" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">{{ tool.toolName }}</h6>
                </div>
              </div>
            </div>

            <div aria-hidden class="group">
              <div v-for="tool in tools" class="card" :key="tool.id">
                <div class="card-image-container">
                  <img :src="tool.toolImage" alt="" />
                </div>
                <div class="card-body">
                  <h6 class="card-title">{{ tool.toolName }}</h6>
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
            <form class="connect-form" @submit.prevent="sendMessage">
              <h3 class="form-title">Send me a <span>message</span></h3>
              <div
                v-if="successMessage || errorMessage"
                :class="{ 'alert-danger': errorMessage, 'alert-success': successMessage }"
                class="alert"
              >
                <p class="alert-message">
                  {{ successMessage || errorMessage || '' }}
                </p>
              </div>
              <div class="input-wrapper">
                <input type="text" id="email" required v-model.trim="email" />
                <label for="email">Email</label>
              </div>
              <div class="input-wrapper">
                <textarea id="message" v-model="message" required></textarea>
                <label for="message">Write a message</label>
              </div>
              <button class="btn" :disabled="isSendingMessage">
                <i v-if="isSendingMessage" class="fa-solid fa-spinner"></i>
                <span v-else class="flex items-center gap-3"
                  >Send Message <i class="bi bi-send"></i
                ></span>
              </button>
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
import { supabase } from '@/supabase/supabaseclient'

let currentSection = ref()
let activeSkillCategory = ref('Tech Skills')
let activeProjectCategory = ref()
const isSendingMessage = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const email = ref('')
const message = ref('')

const techSkills = [
  {
    id: '1',
    skillImage: '/files/images/Vuejs.png',
    skillName: 'Vuejs',
    experience: 'Familiar',
    alt: '',
  },
  {
    id: '2',
    skillImage: '/files/images/JavaScript.png',
    skillName: 'JavaScript',
    experience: 'Working Knowledge',
    alt: '',
  },
  {
    id: '3',
    skillImage: '/files/images/HTML5.png',
    skillName: 'HTML5',
    experience: 'Working Knowledge',
    alt: '',
  },
  {
    id: '4',
    skillImage: '/files/images/CSS3.png',
    skillName: 'CSS3',
    experience: 'Working Knowledge',
    alt: '',
  },
  {
    id: '5',
    skillImage: '/files/images/Codeigniter3.png',
    skillName: 'PHP Codeigniter 3',
    experience: 'Familiar',
    alt: '',
  },
  {
    id: '6',
    skillImage: '/files/images/PythonFlask.png',
    skillName: 'Python Flask',
    experience: 'Working Knowledge',
    alt: '',
  },
  {
    id: '7',
    skillImage: '/files/images/Csharp.png',
    skillName: 'C Sharp',
    experience: 'Familiar',
    alt: '',
  },
  {
    id: '8',
    skillImage: '/files/images/Tailwindcss.png',
    skillName: 'Tailwind CSS',
    experience: 'Working Knowledge',
    alt: '',
  },
  {
    id: '9',
    skillImage: '/files/images/Bootstrap.png',
    skillName: 'Bootstrap',
    experience: 'Working Knowledge',
    alt: '',
  },
  {
    id: '10',
    skillImage: '/files/images/Supabase.png',
    skillName: 'Supabase',
    experience: 'Familiar',
    alt: '',
  },
  {
    id: '11',
    skillImage: '/files/images/PostgreSQL.png',
    skillName: 'PostgreSQL',
    experience: 'Working Knowledge',
    alt: '',
  },
  {
    id: '12',
    skillImage: '/files/images/MySQL.png',
    skillName: 'MySQL',
    experience: 'Working Knowledge',
    alt: '',
  },
  {
    id: '13',
    skillImage: '/files/images/Git-Github.png',
    skillName: 'Git / Github',
    experience: 'Familiar',
    alt: '',
  },
  {
    id: '14',
    skillImage: '/files/images/Photoshop.png',
    skillName: 'Photoshop',
    experience: 'Familiar',
    alt: '',
  },
  {
    id: '15',
    skillImage: '/files/images/Canva.png',
    skillName: 'Canva',
    experience: 'Familiar',
    alt: '',
  },
  {
    id: '16',
    skillImage: '/files/images/MSOffice.png',
    skillName: 'MS Office',
    experience: 'Working Knowledge',
    alt: '',
  },
  {
    id: '17',
    skillImage: '/files/images/GoogleWorkspace.png',
    skillName: 'Google Workspace',
    experience: 'Working Knowledge',
    alt: '',
  },
]

const softSkills = [
  {
    id: '1',
    skillName: 'Willingness to learn',
  },
  {
    id: '2',
    skillName: 'Adaptability',
  },
  {
    id: '3',
    skillName: 'Attention to detail',
  },
  {
    id: '4',
    skillName: 'Ownership & Responsibility',
  },
]

const tools = [
  {
    id: '1',
    toolImage: '/files/images/VSCode.png',
    toolName: 'Visual Studio Code',
    alt: '',
  },
  {
    id: '2',
    toolImage: '/files/images/XAMPP.png',
    toolName: 'XAMPP',
    alt: '',
  },
  {
    id: '3',
    toolImage: '/files/images/Git.png',
    toolName: 'Git',
    alt: '',
  },
  {
    id: '4',
    toolImage: '/files/images/GitHub.png',
    toolName: 'GitHub',
    alt: '',
  },
  {
    id: '5',
    toolImage: '/files/images/Canva.png',
    toolName: 'Canva',
    alt: '',
  },
  {
    id: '6',
    toolImage: '/files/images/Photoshop.png',
    toolName: 'Photoshop',
    alt: '',
  },
  {
    id: '7',
    toolImage: '/files/images/MSOffice.png',
    toolName: 'MS Office',
    alt: '',
  },
  {
    id: '8',
    toolImage: '/files/images/GoogleWorkspace.png',
    toolName: 'Google Workspace',
    alt: '',
  },
  {
    id: '9',
    toolImage: '/files/images/Vercel.png',
    toolName: 'Vercel',
    alt: '',
  },
  {
    id: '10',
    toolImage: '/files/images/Render.png',
    toolName: 'Render',
    alt: '',
  },
]

const navItems = [
  { name: 'home-section', label: 'Home', icon: 'bi bi-house-door' },
  { name: 'skills-section', label: 'Skills', icon: 'fa-solid fa-brain' },
  { name: 'tools-section', label: 'Tools', icon: 'bi bi-wrench-adjustable' },
  { name: 'projects-section', label: 'Projects', icon: 'bi bi-archive' },
  { name: 'connect-section', label: 'Connect', icon: 'bi bi-envelope' },
]

function endProcess() {
  isSendingMessage.value = false
  email.value = ''
  message.value = ''

  setTimeout(() => {
    errorMessage.value = ''
    successMessage.value = ''
  }, 3000)
}

async function sendMessage() {
  try {
    isSendingMessage.value = true

    const { error } = await supabase.from('messages').insert({
      email: email.value,
      message: message.value,
    })

    if (error) throw error

    successMessage.value = 'Message has been sent successfully!'
  } catch (error) {
    errorMessage.value = 'An error occurred while sending message.'
    console.error('Send message error: ', error)
  } finally {
    endProcess()
  }
}

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

  const header = document.querySelector('.animation-header')
  const texts = ['Edrian Oria', 'Web Developer']
  let index = 1

  function changeText() {
    if (!header) return

    header.textContent = texts[index]
    index = (index + 1) % texts.length
  }

  setInterval(changeText, 2000)
})
</script>

<style scoped>
@import '@/assets/css/style.css';
</style>
