import type { ApiResponse, Team } from '@/components/models'
import axios from 'axios'
import { ref, type Ref } from 'vue'
const teams: Ref<Array<Team>> = ref([])

const useTeams = () => {
  const loadTeams = () => {
    axios
      .get<ApiResponse>('http://localhost:8080/api/v1/teams')
      .then((res) => {
        const teamData = res.data.teams

        const teamsArray = teamData.map((teamBackend) => {
          const points = teamBackend.wins * 3 + teamBackend.draw
          return {
            id: teamBackend.id,
            name: teamBackend.name,
            foundedYear: teamBackend.foundedYear,
            wins: teamBackend.wins,
            loss: teamBackend.loss,
            draw: teamBackend.draw,
            playedGames: teamBackend.playedGames,
            points: points
          }
        })
        teamsArray.sort((a, b) => b.points - a.points)

        teamsArray.forEach((team, index) => {
          team.index = index + 1
        })

        teams.value = teamsArray
      })
      .catch((error) => console.error(error))
  }

  return {
    loadTeams,
    teams
  }
}

export { useTeams }
