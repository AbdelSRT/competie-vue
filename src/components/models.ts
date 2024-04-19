export interface ApiResponse {
  teams: Team[]
}

export interface Team {
  id: string
  apiId: number
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
  id: string
  name: string
  address: string
  city: string
  capacity: number
  surface: string
  image: string
}

export interface UpdateTeamRequest {
  id: string
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
  number: number
  position: string
}

interface Birth {
  date: string
  place: string
  country: string
}

export interface PlayersApiResponse {
  players: Player[]
}

interface PlayerResponse {
  id: string
  apiId: number
  name: string
  firstname?: any
  lastname?: any
  age: number
  birth?: any
  nationality?: any
  height?: any
  weight?: any
  injured: boolean
  photo: string
  team?: any
  number: number
  position: string
}

export interface Account {
  firstname: string
  lastname: string
  email: string
  password: string
}

export interface AuthResponse {
  token: string
}

export interface Login {
  email: string
  password: string
}
