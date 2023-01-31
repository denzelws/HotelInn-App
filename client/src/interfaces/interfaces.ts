export interface Date {
  date: number
}

export interface SearchContextState {
  city: string
  dates: Date[]
  options: {
    adult: number
    children: number
    room: number
  }
}
