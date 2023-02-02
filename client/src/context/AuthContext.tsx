import { createContext, useEffect, useReducer } from 'react'
import {
  AuthAction,
  AuthContextProviderProps,
  AuthState,
  IAuthContext
} from '../interfaces/AuthInterfaces'

const user = localStorage.getItem('user') as string | null

export const INITIAL_STATE: AuthState = {
  user: user ? JSON.parse(user) : null,
  loading: false,
  error: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {}
}

export const AuthContext = createContext<IAuthContext>(INITIAL_STATE)

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        loading: false,
        error: null
      }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
