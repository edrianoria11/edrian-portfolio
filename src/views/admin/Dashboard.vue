<template>
  <Sidebar />
  <div class="main-container">
    <div id="admin-home-section">
      <div class="admin-home-inner gap-10">
        <h2 class="section-title">Admin <span>Dashboard</span></h2>
        <div class="messages-container">
          <div class="container-header">
            <h3 class="container-title">Messages</h3>
            <div class="container-header-inner">
              <div class="flex items-center gap-3">
                <button @click.prevent="isFilterOpen = !isFilterOpen" class="filter-toggler">
                  <i class="bi bi-funnel"></i>
                </button>
                <button @click.prevent="resetValues" class="reset-button">
                  <i class="bi bi-arrow-repeat"></i>
                </button>
              </div>
              <select class="list-sorter" v-model="sortInput">
                <option value="sort by" selected disabled>Sort By</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
              <div class="input-wrapper">
                <input type="text" id="search" v-model.trim="searchInput" />
                <label :class="{ active: searchInput === '' }" for="search"
                  >Search something here...</label
                >
              </div>
            </div>
          </div>
          <div :class="{ active: isFilterOpen }" class="messages-filter">
            <ul class="filter-list">
              <li v-for="filterItem in filterItems" :key="filterItem.id" class="filter-item">
                <input
                  type="checkbox"
                  v-model="selectedFilterItems"
                  :value="filterItem.label"
                  :id="filterItem.label"
                />
                <label :for="filterItem.label">{{ filterItem.label }}</label>
              </li>
            </ul>
          </div>
          <div v-if="isMessageLoading" class="messages-list">
            <div v-for="n in 6" :key="n" class="message-item-loader">
              <div class="message-sender-loader">
                <strong></strong>
                <p class="sender-name-loader"></p>
              </div>
              <div class="message-content-loader">
                <strong></strong>
                <div class="message-loader">
                  <div class="content-placeholder bg-primary-background"></div>
                  <div class="content-placeholder"></div>
                  <div class="content-placeholder"></div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="messages-list">
            <div
              v-if="messages.length > 0"
              v-for="message in messages"
              :class="{ seen: message.status == 'read' }"
              :key="message.message_id"
              @click="openMessage(message)"
              class="message-item"
            >
              <div class="message-header">
                <span class="message-date">{{
                  new Date(message.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                }}</span>
              </div>
              <div class="message-sender">
                <strong><i class="bi bi-person"></i></strong>
                <p class="sender-name">{{ message.email }}</p>
              </div>
              <div class="message-content">
                <strong><i class="bi bi-envelope"></i></strong>
                <p class="message">
                  {{ message.message }}
                </p>
              </div>
            </div>
            <div
              v-else
              class="w-full min-h-100 flex items-center justify-center text-secondary font-semibold"
            >
              No results.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div :class="{ active: isMessageModalActive }" class="modal">
      <div class="modal-inner">
        <div class="modal-header">
          <i
            @click="isMessageModalActive = !isMessageModalActive"
            class="bi bi-x modal-close-btn"
          ></i>
          <h3 class="modal-title">Modal <span>Title</span></h3>
        </div>
        <div class="message-content">
          <div class="form-group">
            <i class="bi bi-person"></i>
            <p class="sender-email">{{ selectedMessageValues.email }}</p>
          </div>
          <div class="form-group">
            <i class="bi bi-envelope"></i>
            <p class="sender-message">
              {{ selectedMessageValues.message }}
            </p>
          </div>
          <div class="actions">
            <button class="btn reply-button bg-teal text-white">Reply</button>
            <button class="btn delete-button bg-red-500 text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import { ref, onMounted, watch, reactive, nextTick } from 'vue'
import { supabase } from '@/supabase/supabaseclient'

const currentSection = ref()
const isFilterOpen = ref(false)
const isMessageLoading = ref(false)
const isMessageModalActive = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const sortInput = ref('sort by')
const searchInput = ref('')
const selectedFilterItems = ref([])
const messages = ref([])

const selectedMessageValues = reactive({
  id: '',
  email: '',
  message: '',
  created_at: null,
})

const filterItems = [
  {
    id: '1',
    label: 'read',
  },
  {
    id: '2',
    label: 'unread',
  },
]

watch(
  [selectedFilterItems, searchInput, sortInput],
  ([newSelectedFilterItems, newSearchInput, newSortInput]) => {
    fetchMessages(newSelectedFilterItems, newSortInput, newSearchInput)
  },
)

watch(messages, async () => {
  await nextTick()

  document.querySelectorAll('.message-content').forEach((content) => {
    const message = content.querySelector('.message')

    if (!message) return

    if (message.scrollHeight > content.clientHeight) {
      content.classList.add('fade')
    } else {
      content.classList.remove('fade')
    }
  })
})

function resetValues() {
  sortInput.value = 'sort by'
  searchInput.value = ''
  selectedSortItems.value = ref([])
}

function endProcess() {
  isMessageLoading.value = false
  setTimeout(() => {
    errorMessage.value = ''
    successMessage.value = ''
  }, 3000)
}

function openMessage(message) {
  isMessageModalActive.value = true
  selectedMessageValues.id = message.message_id
  selectedMessageValues.email = message.email
  selectedMessageValues.message = message.message
  selectedMessageValues.created_at = message.created_at

  if (message.status === 'unread') updateMessageStatus(selectedMessageValues.id)
}

async function updateMessageStatus(message_id) {
  try {
    const { error } = await supabase
      .from('messages')
      .update({
        status: 'read',
      })
      .eq('message_id', message_id)

    if (error) throw error
  } catch (error) {
    console.error('An error occurred while updating the message status.', error)
  } finally {
    fetchMessages(selectedFilterItems.value, sortInput.value, searchInput.value, false)
  }
}

async function fetchMessages(filter, sort, search, useMessageLoader) {
  try {
    isMessageLoading.value = !useMessageLoader ? false : true

    let query = supabase.from('messages').select()

    if (filter.length > 0) query = query.in('status', filter)

    if (sort && sort !== 'sort by') {
      if (sort === 'newest') query.order('created_at', { ascending: false })

      if (sort === 'oldest') query.order('created_at', { ascending: true })
    }

    if (search) query.ilike('email', `%${search}%`)

    const { data: messagesData, error: messagesError } = await query

    if (messagesError) throw messagesError

    messages.value = messagesData
  } catch (error) {
    errorMessage.value = 'An error occurred while fetching all messages.'
    console.error('Messages fetching error: ', error)
  } finally {
    endProcess()
  }
}

onMounted(() => {
  fetchMessages(selectedFilterItems.value, sortInput.value, searchInput.value)

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
