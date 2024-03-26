import type { Team } from '@/components/models'
import axios from 'axios'
import { ref, type Ref } from 'vue'

const teams = [
  {
    Id: '65fd9f708850fe7d0204be7a',
    name: 'Sifaw United',
    founded_year: 2020,
    wins: 0,
    loss: 0,
    draw: 0,
    played_games: 0
  },
  {
    Id: '65fda257992de71762ce1e78',
    name: 'Barcelona',
    founded_year: 2020,
    wins: 0,
    loss: 0,
    draw: 0,
    played_games: 0
  },
  {
    Id: '66019b9b616cbd690e982d96',
    name: 'Atletico Madrista',
    founded_year: 1985,
    wins: 100,
    loss: 3,
    draw: 1,
    played_games: 9
  }
]

const useTeams = () => {
  /*
    const loadTeams = () => {
    axios
      .get<Array<Team>>('http://localhost:8080/api/v1/teams')
      .then((response) => (teams.value = response.data))
      .catch((error) => console.error('Error loading teams:', error))
  }
  */
  return {
    teams
  }
}

export { useTeams }
