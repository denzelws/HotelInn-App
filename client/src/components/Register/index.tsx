import * as S from './styles'

import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { IAuthContext } from '../../interfaces/AuthInterfaces'

const Register = () => {
  const { error } = useContext<IAuthContext>(AuthContext)

  return (
    <S.Container>
      <S.Image />
      <S.ContainerForm>
        <S.Title>Registrar</S.Title>
        <S.InputBoxes>
          <S.InputBox>
            <S.UserIcon />
            <S.Input type="text" placeholder="Nome do usuário" id="username" />
          </S.InputBox>

          <S.InputBox>
            <S.EnvelopeIcon />
            <S.Input type="text" placeholder="Nome de e-mail" id="username" />
          </S.InputBox>

          <S.InputBox>
            <S.LockIcon />
            <S.Input type="text" placeholder="Senha..." id="password" />
          </S.InputBox>
        </S.InputBoxes>
        <S.ForgotPassword>Esqueceu sua senha?</S.ForgotPassword>

        <S.ButtonBox>
          <S.Button>Cadastrar</S.Button>
          {error && <span>{error.message}</span>}
        </S.ButtonBox>
      </S.ContainerForm>
    </S.Container>
  )
}

export default Register
