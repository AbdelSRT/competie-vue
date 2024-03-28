<script setup lang="ts">
import { useTeams } from '@/services/team.service'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { loadTeams, teams } = useTeams()
const router = useRouter()

onMounted(() => {
  loadTeams()
})
</script>

<template>
  <div class="container">
    <table>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Clubs</th>
        <th scope="col">Points</th>
        <th scope="col">Wins</th>
        <th scope="col">Losses</th>
        <th scope="col">Draw</th>
      </tr>
      <tr v-for="team in teams" :key="team.name">
        <td>{{ team.index }}</td>
        <td
          @click="router.push({ name: 'team-detail', params: { id: team.Id } })"
          class="cursor-pointer"
        >
          {{ team.name }}
        </td>

        <td>{{ team.points }}</td>
        <td>{{ team.wins }}</td>
        <td>{{ team.loss }}</td>
        <td>{{ team.draw }}</td>
      </tr>
    </table>
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
}
th {
  color: aquamarine;
}
td {
  text-align: center;
}
</style>
