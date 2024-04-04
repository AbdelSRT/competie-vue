<script setup lang="ts">
import type { UpdateTeamRequest } from '@/components/models'
import { useTeams } from '@/services/team.service'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { loadTeamById, team, updateTeam } = useTeams()

const teamId = ref<string | null>(null)

let loss: number
let wins: number
let draws: number
let playedGames: number

const handleSubmit = () => {
  if (team.value) {
    const updatedTeam: UpdateTeamRequest = {
      Id: team.value.Id,
      foundedYear: team.value.foundedYear,
      name: team.value.name,
      playedGames: playedGames,
      wins: wins,
      loss: loss,
      draw: draws
    }
    updateTeam(team.value.Id, updatedTeam)
  }
}

onMounted(async () => {
  teamId.value = route.params.id.toString()

  await loadTeamById(teamId.value)
})
</script>

<template>
  <div v-if="team" class="p-7">
    <h1 class="text-center text-3xl mb-10">{{ team?.name }}</h1>
    <form class="max-w-md mx-auto" @submit.prevent="handleSubmit">
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="playedGames"
            id="playedGames"
            v-model="playedGames"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            :placeholder="team.playedGames.toString()"
            required
          />
          <label
            for="playedGames"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Played Games</label
          >
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="wins"
            id="wins"
            v-model="wins"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            :placeholder="team.playedGames.toString()"
            required
          />
          <label
            for="wins"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Wins</label
          >
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="loss"
            id="loss"
            v-model="loss"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            :placeholder="team.loss.toString()"
            required
          />
          <label
            for="loss"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Losses</label
          >
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="draw"
            id="draw"
            v-model="draws"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            :placeholder="team.draw.toString()"
            required
          />
          <label
            for="draw"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Draws</label
          >
        </div>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </button>
    </form>
  </div>
  <div v-else>Loading...</div>
</template>
