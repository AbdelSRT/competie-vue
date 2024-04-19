<script setup lang="ts">
import { useAuth } from '@/services/auth.service'
import { useTeams } from '@/services/team.service'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { loadTeamById, team, deleteTeam } = useTeams()

const route = useRoute()
const router = useRouter()
const teamId = ref<string | null>(null)
const { getToken } = useAuth()

onMounted(async () => {
  getToken()
  if (typeof route.params.id == 'string') {
    teamId.value = route.params.id
    await loadTeamById(teamId.value, true)
  }

  console.log(team)
})
</script>

<template>
  <div v-if="team" class="m-10">
    <div class="flex justify-around">
      <img class="h-24" :src="team.logo" alt="" />
      <div class="text-4xl text-center">
        {{ team.name }}
        <div class="flex justify-around gap-3">
          <p class="text-base">{{ team.foundedYear }}</p>
          <p class="text-base">{{ team.country }}</p>
        </div>
        <button
          type="button"
          @click="router.push({ name: 'team-players', params: { id: team.id } })"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
        >
          Players
        </button>
        <button
          type="button"
          @click="router.push({ name: 'stadion-detail', params: { id: team.id } })"
          class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center mb-2"
        >
          Stadion
        </button>
      </div>
    </div>

    <div class="mt-10">
      <table
        class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400 rounded-xl"
      >
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
    <div class="flex justify-between mt-2">
      <button
        type="button"
        @click="router.push({ name: 'team-update', params: { id: team.id } })"
        class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Update
      </button>
      <button
        type="button"
        @click="deleteTeam(team.id)"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
      >
        Delete Team
      </button>
    </div>
  </div>

  <div v-else>Loading...</div>
</template>
