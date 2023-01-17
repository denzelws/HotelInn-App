import * as S from './styles'

const NavBar = () => {
  return (
    <S.Navbar>
      <S.NavbarContainer>
        <span>
          <S.Logo>hotel inn</S.Logo>
        </span>
        <S.Items>
          <S.Button>Register</S.Button>
          <S.Button>Login</S.Button>
        </S.Items>
      </S.NavbarContainer>
    </S.Navbar>
  )
}

export default NavBar
