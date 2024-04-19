<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { useAuth } from '@/services/auth.service'
import { onMounted } from 'vue'
const router = useRouter()
const { logout, getToken } = useAuth()
let loggedIn = false
onMounted(() => {
  getToken()
  const token = localStorage.getItem('token')
  if (token) {
    loggedIn = true
  } else {
    loggedIn = false
  }
})
</script>
<template>
  <nav
    class="flex flex-col w-full px-4 py-4 font-sans text-center bg-black shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline"
  >
    <div class="sm:mb-0">
      <a
        @click="router.push({ name: 'home' })"
        class="text-sm no-underline text-grey-darkest hover:text-blue-dark"
        >Home</a
      >
    </div>
    <div>
      <a
        @click="router.push({ name: 'leaderboard' })"
        class="ml-2 text-xs no-underline text-grey-darkest hover:text-blue-dark"
        >Leaderboard</a
      >
      <a
        @click="router.push({ name: 'add-team' })"
        class="ml-2 text-xs no-underline text-grey-darkest hover:text-blue-dark"
        >Add Team</a
      >
      <a
        v-if="!loggedIn"
        @click="router.push({ name: 'login' })"
        class="ml-2 text-xs no-underline text-grey-darkest hover:text-blue-dark"
        >Login</a
      >
      <a
        v-else
        @click="logout()"
        class="ml-2 text-xs no-underline text-grey-darkest hover:text-blue-dark"
        >Loggout</a
      >
      <a
        @click="router.push({ name: 'contact' })"
        class="ml-2 text-xs no-underline text-grey-darkest hover:text-blue-dark"
        >Contact</a
      >
    </div>
  </nav>

  <RouterView />
</template>

<style>
a {
  cursor: pointer;
}
</style>
