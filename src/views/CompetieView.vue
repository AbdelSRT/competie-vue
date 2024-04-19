<script setup lang="ts">
import { useTeams } from '@/services/team.service'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/services/auth.service'

const { getToken } = useAuth()
const { loadTeams, teams } = useTeams()
const router = useRouter()

onMounted(() => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push({ name: 'login' })
  }
  getToken()
  if (getToken != null) {
    loadTeams()
  }
})
</script>

<template>
  <div class="flex items-center justify-center h-full mt-16" v-if="teams.length > 0">
    <table class="text-center">
      <tr class="border-b text-emerald-200">
        <th scope="col">#</th>
        <th scope="col">Clubs</th>
        <th scope="col">Points</th>
        <th scope="col">Wins</th>
        <th scope="col">Losses</th>
        <th scope="col">Draw</th>
      </tr>
      <tr
        v-for="team in teams"
        :key="team.name"
        class="transition duration-300 ease-in-out cursor-pointer hover:bg-gray-800"
        @click="router.push({ name: 'team-detail', params: { id: team.id } })"
      >
        <td>{{ team.index }}</td>
        <td>
          {{ team.name }}
        </td>

        <td>{{ team.points }}</td>
        <td>{{ team.wins }}</td>
        <td>{{ team.loss }}</td>
        <td>{{ team.draw }}</td>
      </tr>
    </table>
  </div>
  <div v-else>
    <h1 class="m-14">No teams availlable!</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  width: 80%;
  border: solid 1px;
  margin-bottom: 20px;
}
</style>
