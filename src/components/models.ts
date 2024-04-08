export interface ApiResponse {
  teams: Team[]
}

export interface Team {
  Id: string
  api_id: number
  name: string
  foundedYear: number
  code: string
  country: string
  logo: string
  national: boolean
  wins: number
  loss: number
  draw: number
  playedGames: number
  points: number
  venue: Venue
  index?: number
}

export interface Venue {
  Id: string
  name: string
  address: string
  city: string
  capacity: number
  surface: string
  image: string
}

export interface UpdateTeamRequest {
  Id: string
  name: string
  foundedYear: number
  wins: number
  loss: number
  draw: number
  playedGames: number
}

export interface Player {
  id: string
  apiId: number
  name: string
  firstname: string
  lastname: string
  age: number
  birth: Birth
  nationality: string
  height: string
  weight: string
  injured: boolean
  photo: string
  team?: any
}

interface Birth {
  date: string
  place: string
  country: string
}
