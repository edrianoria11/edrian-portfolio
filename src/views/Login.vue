<template>
  <main class="main-container login">
    <img src="@/assets/images/circuit-2.png" class="circuit-image-1" alt="" />
    <img src="@/assets/images/circuit-2.png" class="circuit-image-2" alt="" />
    <header class="header login"><ThemeToggler /></header>
    <form class="login-form" @submit.prevent="login()">
      <h2 class="form-title">Login</h2>
      <div class="input-wrapper">
        <input type="text" id="email" v-model="email" required />
        <label for="email">Email</label>
      </div>
      <div class="input-wrapper">
        <input
          :type="isPasswordVisible ? 'text' : 'password'"
          id="password"
          v-model="password"
          required
        /><button
          type="button"
          class="cursor-pointer"
          @click.prevent="isPasswordVisible = !isPasswordVisible"
        >
          <i
            :class="{
              'bi-eye-slash-fill': isPasswordVisible,
              'bi-eye-fill': !isPasswordVisible,
            }"
            class="bi"
          ></i>
        </button>
        <label for="password">Password</label>
      </div>
      <button class="btn" :disabled="isLoading">
        <i v-if="isLoading" class="fa-solid fa-spinner"></i>
        <span v-else>Login</span>
      </button>

      <div class="alert alert-danger" v-if="errorMessage">
        <p class="alert-message">{{ errorMessage }}</p>
      </div>
    </form>
  </main>
</template>

<script setup>
import ThemeToggler from '@/components/ThemeToggler.vue'
import { ref } from 'vue'
import { supabase } from '@/supabase/supabaseclient.js'
import { useSessionStore } from '@/stores/session'
import { useRouter } from 'vue-router'

const sessionStore = useSessionStore()
const router = useRouter()

const email = ref('')
const password = ref('')

let isLoading = ref(false)
let errorMessage = ref('')
let isPasswordVisible = ref(false)

async function fetchUserInfo(userId) {
  const { data, error } = await supabase.from('users_info').select('name').eq('id', userId).single()

  if (error) {
    errorMessage.value = 'An error occurred while fetching user info.'
    throw error
  }
  return data
}

async function authLogin() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    errorMessage.value = 'Incorrect email or password.'
    throw error
  }
  return data
}

async function login() {
  try {
    isLoading.value = true

    const user = await authLogin()
    const info = await fetchUserInfo(user.user.id)

    sessionStore.login(user.user, info)
    router.push('/admin/dashboard')
  } catch (error) {
    console.error('Login error:', error)
  } finally {
    isLoading.value = false

    setTimeout(() => {
      errorMessage.value = ''
    }, 4000)
  }
}
</script>
