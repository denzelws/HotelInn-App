import styled, { css } from 'styled-components'

export const Property = styled.div`
  width: 100%;
  max-width: 103rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const PropertyItem = styled.div`
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  > img {
    width: 100%;
    height: 13rem;
    object-fit: cover;
  }
`

export const PropertyDescription = styled.div``

export const Title = styled.h1`
  font-size: 1.8rem;
`

export const Description = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: 300;
  `}
`
