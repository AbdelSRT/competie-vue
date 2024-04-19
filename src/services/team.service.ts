import type {
  ApiResponse,
  Team,
  UpdateTeamRequest,
  Player,
  PlayersApiResponse
} from '@/components/models'
import { useAuth } from '@/services/auth.service'
import router from '@/router'
import axios from 'axios'
import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
const teams: Ref<Array<Team>> = ref([])
const team: Ref<null | Team> = ref(null)
const players: Ref<Array<Player>> = ref([])
const player: Ref<null | Player> = ref(null)

const { getToken } = useAuth()

const useTeams = () => {
  const router = useRouter()
  const loadTeams = () => {
    const token = getToken()
    if (token) {
      axios
        .get<ApiResponse>('http://localhost:8080/api/v1/teams', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
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
  }

  const addTeam = (teamName: string): void => {
    const token = getToken()
    axios
      .post(
        'http://localhost:8080/api/v1/teams',
        {
          name: teamName
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
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
    const token = getToken()
    axios
      .delete(`http://localhost:8080/api/v1/teams/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        loadTeams()
        router.back()
        alert('Team deleted successfully')
      })
      .catch((error) => console.error('Network error:', error))
  }

  const loadTeamById = (id: string, compact: boolean) => {
    const token = getToken()
    let comp = ''
    if (compact === true) {
      comp = '?compact=true'
    }
    axios
      .get<Team>(`http://localhost:8080/api/v1/teams/${id}${comp}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        const teamBackend = res.data
        const points = teamBackend.wins * 3 + teamBackend.draw
        team.value = {
          id: teamBackend.id,
          apiId: teamBackend.apiId,
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
      .catch((error) => {
        console.error('Network error:', error)
      })
  }

  const updateTeam = (id: string, team: UpdateTeamRequest) => {
    const token = getToken()
    axios
      .put<Team>(
        `http://localhost:8080/api/v1/teams/${id}`,
        {
          name: team.name,
          foundedYear: team.foundedYear,
          wins: team.wins,
          loss: team.loss,
          draw: team.draw,
          playedGames: team.playedGames
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(() => {
        loadTeams()
        router.push({ name: 'leaderboard' })
        alert('Team edeted successfully')
      })
      .catch((error) => console.error('Network error:', error))
  }

  const loadPlayers = (id: string) => {
    const token = getToken()
    axios
      .get<PlayersApiResponse>(`http://localhost:8080/api/v1/teams/${id}/players`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        const playersBack = res.data.players
        console.log(playersBack)
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
            team: playerBackend?.team,
            number: playerBackend.number,
            position: playerBackend.position
          } as Player
        })
        console.log(players)
        return players
      })
  }

  const getPlayerById = (id: String) => {
    const token = getToken()
    axios
      .get<Player>(`http://localhost:8080/api/v1/players/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        player.value = res.data
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
    updateTeam,
    loadPlayers,
    players,
    getPlayerById,
    player,
    getToken
  }
}

export { useTeams }
