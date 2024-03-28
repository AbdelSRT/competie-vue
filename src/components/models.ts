export interface ApiResponse {
  teams: Team[]
}

export interface Team {
  Id: string
  name: string
  foundedYear: number
  wins: number
  loss: number
  draw: number
  playedGames: number
  points: number
  index?: number
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
