import * as S from './styles'

const NavBar = () => {
  return (
    <S.Navbar>
      <S.NavbarContainer>
        <S.Logo>
          <S.NavLink to="/">hotel inn</S.NavLink>
        </S.Logo>
        <S.Items>
          <S.Button>Register</S.Button>
          <S.Button>Login</S.Button>
        </S.Items>
      </S.NavbarContainer>
    </S.Navbar>
  )
}

export default NavBar
