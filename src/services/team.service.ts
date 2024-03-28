import type { ApiResponse, Team, UpdateTeamRequest } from '@/components/models'
import router from '@/router'
import axios from 'axios'
import { ref, type Ref } from 'vue'
const teams: Ref<Array<Team>> = ref([])
const team: Ref<null | Team> = ref(null)

const useTeams = () => {
  const loadTeams = () => {
    axios
      .get<ApiResponse>('http://localhost:8080/api/v1/teams')
      .then((res) => {
        const teamData = res.data.teams
        const teamsArray = teamData.map((teamBackend) => {
          const points = teamBackend.wins * 3 + teamBackend.draw
          return {
            Id: teamBackend.Id,
            name: teamBackend.name,
            foundedYear: teamBackend.foundedYear,
            wins: teamBackend.wins,
            loss: teamBackend.loss,
            draw: teamBackend.draw,
            playedGames: teamBackend.playedGames,
            points: points
          } as Team
        })
        teamsArray.sort((a, b) => b.points - a.points)

        teamsArray.forEach((team, index) => {
          team.index = index + 1
        })

        teams.value = teamsArray
      })
      .catch((error) => console.error(error))
  }

  const addTeam = (teamName: string, foundedYear: null | number): void => {
    axios
      .post('http://localhost:8080/api/v1/teams', {
        name: teamName,
        foundedYear: foundedYear
      })
      .then((response) => {
        if (response.status === 200) {
          loadTeams()
          console.log('Successfully')
          router.back()
        } else {
          console.error('Form submission failed:', response.statusText)
        }
      })
      .catch((error) => console.error('Network error:', error))
  }

  const deleteTeam = (id: string) => {
    axios
      .delete(`http://localhost:8080/api/v1/teams/${id}`)
      .then(() => {
        loadTeams()
        router.back()
        alert('Team deleted successfully')
      })
      .catch((error) => console.error('Network error:', error))
  }

  const loadTeamById = (id: string) => {
    axios
      .get<Team>(`http://localhost:8080/api/v1/teams/${id}`)
      .then((res) => {
        console.log('call werkt')
        console.log(id)
        const teamBackend = res.data
        const points = teamBackend.wins * 3 + teamBackend.draw
        team.value = {
          Id: teamBackend.Id,
          name: teamBackend.name,
          foundedYear: teamBackend.foundedYear,
          wins: teamBackend.wins,
          loss: teamBackend.loss,
          draw: teamBackend.draw,
          playedGames: teamBackend.playedGames,
          points: points
        } satisfies Team
        return team
      })
      .catch((error) => console.error('Network error:', error))
  }

  const updateTeam = (id: string, team: UpdateTeamRequest) => {
    axios
      .put<Team>(`http://localhost:8080/api/v1/teams/${id}`, {
        name: team.name,
        foundedYear: team.foundedYear,
        wins: team.wins,
        loss: team.loss,
        draw: team.draw,
        playedGames: team.playedGames
      })
      .then((res) => {
        loadTeams()
        router.back()
        alert('Team edeted successfully')
      })
      .catch((error) => console.error('Network error:', error))
  }

  return {
    loadTeams,
    teams,
    addTeam,
    deleteTeam,
    loadTeamById,
    team,
    updateTeam
  }
}

export { useTeams }
