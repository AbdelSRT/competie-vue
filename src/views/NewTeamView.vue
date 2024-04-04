<script setup lang="ts">
import { useTeams } from '@/services/team.service'

const { addTeam } = useTeams()

let teamName = ''

const handleSubmit = () => {
  addTeam(teamName)
}
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-3xl mb-5 text-emerald-200">Add Team</h2>

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
        class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Add Team
      </button>
    </form>
  </div>
</template>
