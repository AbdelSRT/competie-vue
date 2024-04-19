<script setup lang="ts">
import { useTeams } from '@/services/team.service'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const { getPlayerById, player } = useTeams()

const route = useRoute()
const playerId = route.params.playerId.toString()

onMounted(async () => {
  await getPlayerById(playerId)
})
</script>
<template>
  <div v-if="player" class="flex items-center justify-center w-full h-full">
    <div v-if="player.id === playerId" class="flex flex-col items-center w-full h-full">
      <div class="flex items-center gap-28">
        <img :src="player.photo" alt="" class="mt-6 rounded-md" />
        <div>
          <h1 class="text-4xl">{{ player.name }}</h1>
          <p class="block mt-2 text-center">{{ player.nationality }}</p>
        </div>
      </div>
      <table class="p-6 mb-5 text-center table-auto mt-7">
        <tr>
          <th v-if="player.firstname">First Name</th>
          <th v-if="player.age">Age</th>
          <th>Injured?</th>
          <th v-if="player.position">Position</th>
        </tr>
        <tr>
          <td v-if="player.firstname">{{ player.firstname }}</td>
          <td v-if="player.age">{{ player.age }}</td>
          <td v-if="player.injured">Yes</td>
          <td v-else>No</td>
          <td v-if="player.position">{{ player.position }}</td>
        </tr>
        <tr class="mt-6">
          <th v-if="player.lastname">Last Name</th>

          <th v-if="player.birth?.place">Place of birth</th>
          <th v-if="player.height">Height</th>
          <th v-if="player.weight">Weight</th>
          <th v-if="player.nationality">Nationality</th>
        </tr>
        <tr>
          <td v-if="player.lastname">{{ player.lastname }}</td>
          <td v-if="player.birth?.place">{{ player.birth?.place }}</td>
          <td v-if="player.height">{{ player.height }}</td>
          <td v-if="player.weight">{{ player.weight }}</td>
          <td v-if="player.nationality">{{ player.nationality }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped>
th,
td {
  padding: 0.5rem;
  min-width: 4rem;
  flex-wrap: wrap;
}
th {
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: x-large;
}
td {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 0.5rem;
}
table {
  width: 80%;
  border: solid 1px;
  min-width: 25rem;
  flex-wrap: wrap;
  box-shadow: 0 20px 50px rgba(240, 46, 170, 0.7);
}
.container {
}
</style>
