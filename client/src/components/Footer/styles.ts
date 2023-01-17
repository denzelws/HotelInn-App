import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    max-width: 103rem;
    font-size: ${theme.font.sizes.small};
  `}
`

export const List = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5rem;
`

export const Column = styled.ul`
  list-style: none;
`

export const Items = styled.li`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    color: ${theme.colors.secondary};
    cursor: pointer;
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
  `}
`
