import { useReducer } from 'react'
import { SearchContextProviderProps } from '../interfaces/interfaces'
import { INITIAL_STATE, SearchContext } from './SearchContext'
import { SearchReducer } from './SearchReducer'

export const SearchContextProvider = ({
  children
}: SearchContextProviderProps) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE)

  return (
    <SearchContext.Provider
      value={{
        destination: state.destination,
        dates: state.dates,
        options: state.options,
        dispatch
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
