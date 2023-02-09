import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle'

export const UserIcon = styled(UserCircle)`
  width: 2rem;
  margin-right: 0.5rem;
  margin-top: 0.3rem;
`

export const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const Navbar = styled.nav`
  ${({ theme }) => css`
    height: 50px;
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
  `}
`

export const UserBox = styled.div`
  display: flex;
  align-items: center;
`

export const Username = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.higher};
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
  cursor: pointer;
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
