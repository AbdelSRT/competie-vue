<script setup lang="ts">
import { useTeams } from '@/services/team.service'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { loadTeamById, team, deleteTeam } = useTeams()

const route = useRoute()
const router = useRouter()
const teamId = ref<string | null>(null)

onMounted(async () => {
  teamId.value = route.params.id.toString()

  await loadTeamById(teamId.value)
})
</script>

<template>
  <div v-if="team">
    <h1 class="text-4xl text-center">
      {{ team.name }}
      <p class="text-sm mt-1">{{ team.foundedYear }}</p>
    </h1>
    <div class="relative overflow-x-auto mt-10 rounded-sm">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Played Games</th>
            <th scope="col" class="px-6 py-3">Wins</th>
            <th scope="col" class="px-6 py-3">Draws</th>
            <th scope="col" class="px-6 py-3">Losses</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">{{ team.playedGames }}</td>
            <td class="px-6 py-4">{{ team.wins }}</td>
            <td class="px-6 py-4">{{ team.draw }}</td>
            <td class="px-6 py-4">{{ team.loss }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex mt-2 justify-between">
      <button
        type="button"
        @click="router.push({ name: 'team-update', params: { id: team.Id } })"
        class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Update
      </button>
      <button
        type="button"
        @click="deleteTeam(team.Id)"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Delete Team
      </button>
    </div>
  </div>

  <div v-else>Loading...</div>
</template>
