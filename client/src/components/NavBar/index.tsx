import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { IAuthContext } from '../../interfaces/AuthInterfaces'

import * as S from './styles'

const NavBar = () => {
  const { user } = useContext<IAuthContext>(AuthContext)

  return (
    <S.Navbar>
      <S.NavbarContainer>
        <S.Logo>
          <S.NavLink to="/">hotel inn</S.NavLink>
        </S.Logo>
        {user ? (
          <S.UserBox>
            <S.UserIcon />
            <S.Username>{user.username}</S.Username>
          </S.UserBox>
        ) : (
          <S.Items>
            <S.Button>Register</S.Button>
            <S.Button>Login</S.Button>
          </S.Items>
        )}
      </S.NavbarContainer>
    </S.Navbar>
  )
}

export default NavBar
