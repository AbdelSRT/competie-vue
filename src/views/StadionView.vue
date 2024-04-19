<script setup lang="ts">
import { useAuth } from '@/services/auth.service'
import { useTeams } from '@/services/team.service'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const { loadTeamById, team, deleteTeam } = useTeams()

const route = useRoute()
const teamId = ref<string | null>(null)

const stadion = team.value?.venue
const { getToken } = useAuth()

onMounted(async () => {
  getToken()
  if (typeof route.params.id == 'string') {
    teamId.value = route.params.id
    await loadTeamById(teamId.value, false)
  }
})
</script>

<template>
  <div id="container" v-if="stadion">
    <h1 class="mt-5 text-3xl text-center">{{ stadion.name }}</h1>
    <div class="flex flex-row flex-wrap justify-around m-9">
      <img :src="stadion.image" class="h-48 m-4 rounded-md" />
      <div class="flex items-center justify-center">
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
