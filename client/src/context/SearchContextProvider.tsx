import { SearchContextState } from '../interfaces/interfaces'
import { SearchContext } from './SearchContext'

export const INITIAL_STATE: SearchContextState = {
  city: '',
  dates: [],
  options: {
    adult: 0,
    children: 0,
    room: 0
  }
}

type ProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const SearchContextProvider = ({ children }: ProviderProps) => {
  return <SearchContext.Provider value={{}}>{children}</SearchContext.Provider>
}

export default SearchContextProvider
