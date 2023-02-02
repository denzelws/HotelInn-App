export interface AuthState {
  user: any | null
  loading: boolean
  error: any | null
  dispatch: any
}

export interface IAuthContext {
  user: any
  loading: boolean
  error: any
  dispatch: React.Dispatch<AuthAction>
}

export type AuthAction =
  | { type: 'LOGIN' }
  | { type: 'LOGIN_SUCCESS'; payload: any }
  | { type: 'LOGIN_FAILURE'; payload: any }
  | { type: 'LOGOUT' }

export interface AuthContextProviderProps {
  children: React.ReactNode
}
