export interface AuthState {
  user: any | null
  loading: boolean
  error: any | null
}

export type AuthAction =
  | { type: 'LOGIN' }
  | { type: 'LOGIN_SUCCESS'; payload: any }
  | { type: 'LOGIN_FAILURE'; payload: any }
  | { type: 'LOGOUT' }

export interface AuthContextProviderProps {
  children: React.ReactNode
}
