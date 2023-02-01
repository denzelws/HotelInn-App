import React from 'react'
import { initialState } from '../interfaces/interfaces'

export const INITIAL_STATE: initialState = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {}
}

export const SearchContext = React.createContext<initialState>(INITIAL_STATE)
