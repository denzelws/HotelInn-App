import styled, { css } from 'styled-components'

export const PropertyPlace = styled.div`
  width: 100%;
  max-width: 103rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const PropertyPlaceItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > img {
    width: 100%;
    height: 20rem;
  }
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`

export const City = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.higher};
    color: ${theme.colors.gray};
  `}
`

export const PriceDescription = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.higher};
  `}
`

export const PriceBox = styled.div`
  ${({ theme }) => css`
    > button {
      background-color: ${theme.colors.primary};
      color: white;
      font-weight: bold;
      border: none;
      margin-right: 1rem;
      padding: 0.3rem;
    }
  `}
`

export const Rating = styled.button``

export const RatingLevel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`
