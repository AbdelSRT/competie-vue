<script setup lang="ts">
import { useTeams } from '@/services/team.service'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

const { loadTeams, teams } = useTeams()

onMounted(() => {
  loadTeams()
})
</script>

<template>
  <div class="container">
    <table>
      <tr>
        <th>Position</th>
        <th>Clubs</th>
        <th>Points</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>Draw</th>
      </tr>
      <tr v-for="team in teams" :key="team.name">
        <td>{{ team.index }}</td>
        <td>{{ team.name }}</td>
        <td>{{ team.points }}</td>
        <td>{{ team.wins }}</td>
        <td>{{ team.loss }}</td>
        <td>{{ team.draw }}</td>
      </tr>
    </table>
  </div>
  <RouterView />
</template>

<style scoped>
.container {
  color: white;
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
