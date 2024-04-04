<script setup lang="ts">
import { useTeams } from '@/services/team.service'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { loadTeamById, team, deleteTeam } = useTeams()

const route = useRoute()
const router = useRouter()
const teamId = ref<string | null>(null)

const stadion = team.value?.venue

onMounted(async () => {
  teamId.value = route.params.id.toString()

  await loadTeamById(teamId.value)
})
</script>

<template>
  <div id="container" v-if="stadion">
    <h1 class="text-center text-3xl mt-5">{{ stadion.name }}</h1>
    <div class="m-9 flex flex-row flex-wrap">
      <img :src="stadion.image" class="h-48 rounded-md m-4" />
      <ul class="text-center flex flex-col justify-center items-center gap-3">
        <li>Address: {{ stadion.address }}</li>
        <li>City: {{ stadion.city }}</li>
        <li>Capacity: {{ stadion.capacity }}</li>
        <li>Surface: {{ stadion.surface }}</li>
      </ul>
    </div>
  </div>
  <div class="" v-else>
    <h1>Loading...</h1>
  </div>
</template>
