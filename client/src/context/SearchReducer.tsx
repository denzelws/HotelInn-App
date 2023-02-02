import { Action, initialState } from '../interfaces/interfaces'
import { INITIAL_STATE } from './SearchContext'

export const SearchReducer = (state: initialState, action: Action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return { ...state, ...action.payload }
    case 'RESET_SEARCH':
      return INITIAL_STATE
    default:
      return state
  }
}
