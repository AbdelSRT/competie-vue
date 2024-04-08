import type { ApiResponse, Team, UpdateTeamRequest, Player } from '@/components/models'
import router from '@/router'
import axios from 'axios'
import { ref, type Ref } from 'vue'
const teams: Ref<Array<Team>> = ref([])
const team: Ref<null | Team> = ref(null)
const players: Ref<Array<Player>> = ref([])

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

  const addTeam = (teamName: string): void => {
    axios
      .post('http://localhost:8080/api/v1/teams', {
        name: teamName
      })
      .then((response) => {
        if (response.data !== '') {
          loadTeams()
          console.log('Successfully')
          router.back()
        } else {
          console.error('Form submission failed:', response.statusText)
          alert('Team does not exist!')
        }
      })
      .catch((error) => {
        alert('Team already exists')
        console.error('Network error:', error)
      })
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
        const teamBackend = res.data
        const points = teamBackend.wins * 3 + teamBackend.draw
        team.value = {
          Id: teamBackend.Id,
          api_id: teamBackend.api_id,
          name: teamBackend.name,
          foundedYear: teamBackend.foundedYear,
          code: teamBackend.code,
          country: teamBackend.country,
          logo: teamBackend.logo,
          national: teamBackend.national,
          wins: teamBackend.wins,
          loss: teamBackend.loss,
          draw: teamBackend.draw,
          playedGames: teamBackend.playedGames,
          points: points,
          venue: teamBackend.venue
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
      .then(() => {
        loadTeams()
        router.push({ name: 'stadion-detail' })
        alert('Team edeted successfully')
      })
      .catch((error) => console.error('Network error:', error))
  }

  const loadPlayers = (id: string) => {
    axios.get<Array<Player>>(`http://localhost:8080/api/v1/teams/${id}/players`).then((res) => {
      console.log(res.data)
      const playersBack = res.data
      players.value = playersBack.map((playerBackend) => {
        return {
          id: playerBackend.id,
          apiId: playerBackend.apiId,
          name: playerBackend.name,
          firstname: playerBackend.firstname,
          lastname: playerBackend.lastname,
          age: playerBackend.age,
          birth: playerBackend.birth,
          nationality: playerBackend.nationality,
          height: playerBackend.height,
          weight: playerBackend.weight,
          injured: playerBackend.injured,
          photo: playerBackend.photo,
          team: playerBackend?.team
        } as Player
      })
      return players
    })
  }

  return {
    loadTeams,
    teams,
    addTeam,
    deleteTeam,
    loadTeamById,
    team,
    updateTeam,
    loadPlayers,
    players
  }
}

export { useTeams }
