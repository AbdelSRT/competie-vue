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
    <div class="m-9 flex flex-row flex-wrap justify-around">
      <img :src="stadion.image" class="h-48 rounded-md m-4" />
      <div class="flex justify-center items-center">
        <table class="text-center table-auto">
          <tr>
            <th>Address:</th>
            <td>{{ stadion.address }}</td>
          </tr>
          <tr>
            <th>City:</th>
            <td>{{ stadion.city }}</td>
          </tr>
          <tr>
            <th>Capacity:</th>
            <td>{{ stadion.capacity.toLocaleString('en') }}</td>
          </tr>
          <tr>
            <th>Surface:</th>
            <td>{{ stadion.surface }}</td>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  </div>
  <div class="" v-else>
    <h1>Loading...</h1>
  </div>
</template>
<style scoped>
td {
  margin-left: 1rem;
}
</style>
