<script setup lang="ts">
import { useTeams } from '@/services/team.service'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { loadPlayers, players } = useTeams()

const route = useRoute()
const router = useRouter()
const teamId = ref<string | null>(null)

onMounted(async () => {
  if (typeof route.params.id == 'string') {
    teamId.value = route.params.id
    await loadPlayers(teamId.value)
  }
  console.log('test' + players)
})
</script>

<template>
  <div class="flex justify-center items-center text-center gap-5 mt-10 min-w-64 mb-10 rounded-md">
    <div class="bg-sky-950 rounded-md shadow-lg shadow-white">
      <table class="">
        <tr class="bg-slate-700">
          <th class="text-3xl rounded-t-md" colspan="2">Players</th>
        </tr>
        <tr
          v-for="player in players"
          :key="player.id"
          class="duration-300 ease-in-out hover:bg-gray-800 cursor-pointer"
        >
          <td><img :src="player.photo" class="rounded-full h-10" alt="" /></td>
          <td class="">{{ player.name }}</td>
        </tr>
      </table>
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
