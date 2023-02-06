import axios from 'axios'

import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { IAuthContext } from '../../interfaces/AuthInterfaces'

import * as S from './styles'

type CredentialsProps = {
  username: string | undefined
  password: string | undefined
}

const Login = () => {
  const [credentials, setCredentials] = useState<CredentialsProps>({
    username: undefined,
    password: undefined
  })

  const { user, loading, error, dispatch } =
    useContext<IAuthContext>(AuthContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({ type: 'LOGIN' })
    try {
      const res = await axios.post('/api/auth/login', credentials)
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
    } catch (err: any) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
    }
  }

  console.log(user)

  return (
    <S.Container>
      <S.ContainerForm>
        <S.Title>Login</S.Title>
        <S.InputBoxes>
          <S.InputBox>
            <S.UserIcon />
            <S.Input
              type="text"
              placeholder="Insira seu usuário"
              id="username"
              onChange={handleChange}
            />
          </S.InputBox>

          <S.InputBox>
            <S.LockIcon />
            <S.Input
              type="text"
              placeholder="senha..."
              id="password"
              onChange={handleChange}
            />
          </S.InputBox>
        </S.InputBoxes>
        <S.ForgotPassword>Esqueceu sua senha?</S.ForgotPassword>

        <S.ButtonBox>
          <S.Button onClick={handleLogin}>Entrar</S.Button>
          {error && <span>{error.message}</span>}
        </S.ButtonBox>
      </S.ContainerForm>

      <S.Image />
    </S.Container>
  )
}

export default Login
