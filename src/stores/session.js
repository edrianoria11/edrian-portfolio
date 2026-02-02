import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', {
    state: () => ({
        isLoggedIn: false,
        email: null,
        name: null
    }),
    getters: {
        getUserEmail(state) {
            return state.email
        },
        getUserName(state) {
            return state.name
        },
        getLoginStatus(state) {
            return state.isLoggedIn
        }
    },
    actions: {
        login(user, info) {
            this.isLoggedIn = true
            this.email = user.email
            this.name = info.name
        },
        logout() {
            this.$reset()
        }
    },
    persist: true
})