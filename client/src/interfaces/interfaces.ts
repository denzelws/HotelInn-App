export interface initialState {
  destination: string | undefined
  dates: Array<{ startDate: Date; endDate: Date; key: string }> | []
  options: {
    adult: number | undefined
    children: number | undefined
    room: number | undefined
  }
  dispatch: any
}

export type Action =
  | { type: 'NEW_SEARCH'; payload: initialState }
  | { type: 'RESET_SEARCH' }

export interface SearchContextProviderProps {
  children: React.ReactNode
}
