<script setup lang="ts">
import { useAuth } from '@/services/auth.service'
import { useTeams } from '@/services/team.service'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { loadPlayers, players } = useTeams()

const route = useRoute()
const router = useRouter()
const teamId = ref<string | null>(null)
const { getToken } = useAuth()

onMounted(async () => {
  getToken()
  if (typeof route.params.id == 'string') {
    teamId.value = route.params.id
    await loadPlayers(teamId.value)
  }
})
</script>

<template>
  <div class="flex items-center justify-center gap-5 mt-10 mb-10 text-center rounded-md min-w-64">
    <div v-if="players" class="rounded-md shadow-lg bg-sky-950 shadow-white">
      <table class="">
        <tr class="text-3xl bg-slate-700 rounded-t-md">
          <th class="text-3xl rounded-tl-md" colspan="2">Players</th>
          <th>Position</th>
          <th class="text-3xl rounded-tr-md">#</th>
        </tr>
        <tr
          v-for="player in players"
          :key="player.id"
          @click="
            router.push({
              name: 'player-detail',
              params: { playerId: player.id }
            })
          "
          class="duration-300 ease-in-out cursor-pointer hover:bg-gray-800"
        >
          <td>
            <img
              :src="player.photo"
              class="h-10 rounded-full shadow-md hover:shadow-slate-400"
              alt=""
            />
          </td>
          <td class="">{{ player.name }}</td>
          <td v-if="player.position == 'Goalkeeper'">GK</td>
          <td v-else-if="player.position == 'Defender'">DEF</td>
          <td v-else-if="player.position == 'Midfielder'">MF</td>
          <td v-else-if="player.position == 'Attacker'">ATT</td>

          <td>{{ player.number }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <h1>No Players found</h1>
    </div>
  </div>
</template>
<style scoped>
th,
td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}
</style>
