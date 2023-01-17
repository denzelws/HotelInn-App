import styled, { css } from 'styled-components'

export const Navbar = styled.nav`
  ${({ theme }) => css`
    height: 50px;
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
  `}
`

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 103rem;
  color: white;
`

export const Logo = styled.h1`
  font-weight: 500;
`

export const Items = styled.div``

export const Button = styled.button`
  ${({ theme }) => css`
    margin-left: 2rem;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    color: ${theme.colors.primary};
  `}
`
