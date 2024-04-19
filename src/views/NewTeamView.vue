<script setup lang="ts">
import { useTeams } from '@/services/team.service'
import { onMounted } from 'vue'
import { useAuth } from '@/services/auth.service'
import { useRouter } from 'vue-router'

const { addTeam } = useTeams()
const { getToken } = useAuth()
const router = useRouter()

let teamName = ''

const handleSubmit = () => {
  addTeam(teamName)
}

onMounted(() => {
  getToken()
  const token = localStorage.getItem('token')
  if (!token) {
    router.push({ name: 'login' })
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h2 class="mb-5 text-3xl text-emerald-200">Add Team</h2>

    <form @submit.prevent="handleSubmit">
      <div class="mb-5">
        <label for="teamName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Team Name:</label
        >
        <input
          type="text"
          id="teamName"
          v-model="teamName"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        class="px-3 py-2 mb-2 text-xs font-medium text-center text-gray-900 border border-gray-800 rounded-lg hover:text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Add Team
      </button>
    </form>
  </div>
</template>
