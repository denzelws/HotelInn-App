export interface initialState {
  city: string | undefined
  dates: Date[] | []
  options: {
    adult: number | undefined
    children: number | undefined
    room: number | undefined
  }
  dispatch: React.Dispatch<Action>
}

export interface Action {
  type: string
  payload: initialState
}

export interface SearchContextProviderProps {
  children: React.ReactNode
}
