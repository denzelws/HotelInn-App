import styled, { css } from 'styled-components'

export const SearchList = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  justify-content: space-between;
  border: 0.1rem solid lightgray;
  gap: 2rem;
  margin-bottom: 2rem;

  > img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
  }
`

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 2;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.secondary};
  `}
`

export const Distance = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
  `}
`

export const TaxiOption = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.green};
    padding: 0.3rem;
    border-radius: 0.5rem;
    color: white;
    width: max-content;
  `}
`

export const DetailsBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: bold;
  `}
`

export const Features = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const CancelOption = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.green};
    font-weight: bold;
  `}
`

export const RatingBox = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    ${({ theme }) => css`
      font-weight: ${theme.font.higher};
    `}
  }
`

export const Rating = styled.span``

export const RatingNumber = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    padding: 0.5rem;
    font-weight: bold;
    border: none;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
  `}
`

export const DetailsText = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Price = styled.span`
  font-size: 2.4rem;
`

export const TaxOp = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
  `}
`

export const Check = styled.span``

export const CheckButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 3.4rem;
    cursor: pointer;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    border: none;
    border-radius: 0.5rem;

    :hover {
      background-color: ${theme.colors.primary};
      transition: 0.5s;
    }
  `}
`
