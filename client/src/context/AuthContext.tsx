import React, { createContext, useEffect, useReducer } from 'react'
import {
  AuthAction,
  AuthContextProviderProps,
  AuthState
} from '../interfaces/AuthInterfaces'

export const INITIAL_STATE: AuthState = {
  user: null,
  loading: false,
  error: null
}

// export const AuthContext = React.createContext<AuthState>(INITIAL_STATE)

export const AuthContext = createContext<{
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
}>({
  state: INITIAL_STATE,
  dispatch: () => null
})

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: null,
        loading: true,
        error: null
      }
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: null
      }
    case 'LOGIN_FAILURE':
      return {
        user: null,
        loading: false,
        error: action.payload
      }
    case 'LOGOUT':
      return {
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
        state,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
