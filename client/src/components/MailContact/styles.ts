import styled, { css } from 'styled-components'

export const Mail = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 5rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 5rem 0;
  `}
`

export const Title = styled.h1``

export const Description = styled.span``

export const InputBox = styled.div``

export const Input = styled.input`
  width: 30rem;
  height: 3rem;
  border: none;
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  outline: none;
`

export const Button = styled.button`
  ${({ theme }) => css`
    height: 5rem;
    background-color: ${theme.colors.secondary};
    color: white;
    font-weight: ${theme.font.higher};
    border: none;
    padding: 0.8rem;
    border-radius: 0.5rem;
    cursor: pointer;
  `}
`
