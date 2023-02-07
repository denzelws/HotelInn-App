import styled, { css } from 'styled-components'

import { Envelope } from '@styled-icons/boxicons-solid/Envelope'
import { User } from '@styled-icons/boxicons-solid/User'
import { Lock } from '@styled-icons/boxicons-solid/Lock'

import img from '../../images/imglogin.jpg'

export const EnvelopeIcon = styled(Envelope)`
  width: 2.5rem;
  color: #7d2ae8;
`

export const LockIcon = styled(Lock)`
  width: 2.8rem;
  color: #7d2ae8;
`

export const UserIcon = styled(User)`
  width: 2.5rem;
  color: #7d2ae8;
`

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    width: 50%;
    height: 100vh;
  `}
`

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: column;
  background-image: url(${img});
  background-position: center center;
  background-size: cover;
  width: 50%;
  height: 100vh;
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
  `}
`

export const InputBoxes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
`

export const InputBox = styled.div`
  padding: 1.2rem 3rem;

  > svg {
    margin-right: 0.3rem;
  }
`

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: #7d2ae8;
    font-weight: ${theme.font.light};
    margin-bottom: 1.5rem;
  `}
`

export const ButtonBox = styled.div``

export const Input = styled.input`
  outline: none;
  font-size: 1.5rem;
  border: none;
  border-bottom: 0.2rem solid;
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    padding: 1.5rem 0;
    border: none;
    border-radius: 0.5rem;
    background-color: #7d2ae8;
    height: 2.8rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.elevated};

    &:hover {
      background-color: #5a189a;
      transition: 0.5s;
      color: ${theme.colors.white};
    }
  `}
`
