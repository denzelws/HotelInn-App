import { SearchContextState } from '../interfaces/interfaces'
import { INITIAL_STATE } from './SearchContextProvider'

type SearchActions =
  | { type: 'NEW_SEARCH'; payload: SearchContextState }
  | { type: 'RESET_SEARCH'; payload: string }

export const SearchReducer = (
  state: SearchContextState,
  action: SearchActions
) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload
    case 'RESET_SEARCH':
      return INITIAL_STATE
    default:
      return state
  }
}
