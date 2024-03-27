export interface ApiResponse {
  teams: Team[]
}

export interface Team {
  id: string
  name: string
  foundedYear: number
  wins: number
  loss: number
  draw: number
  playedGames: number
  points?: number
  index?: number
}
