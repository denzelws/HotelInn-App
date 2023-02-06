import styled, { css } from 'styled-components'

import { Envelope } from '@styled-icons/boxicons-solid/Envelope'

export const EnvelopeIcon = styled(Envelope)`
  width: 2rem;
`

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7d2ae8;
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
`

export const ForgotPassword = styled.a`
  cursor: pointer;
  color: #0000ee;
  margin-bottom: 1rem;
`

export const ButtonBox = styled.div``

export const Input = styled.input`
  outline: none;
  font-size: 1.5rem;
`

export const Button = styled.button`
  ${({ theme }) => css`
    width: 7rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #90e0ef;
    height: 2.8rem;
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
      background-color: #0077b6;
      transition: 0.5s;
      color: ${theme.colors.white};
    }
  `}
`
