import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 1;
`
export const Highlight = styled.div`
  width: 100%;
  max-width: 103rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const HighlightItem = styled.div`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    border-radius: 1rem;
    overflow: hidden;

    > img {
      width: 100%;
      height: 22rem;
      object-fit: cover;
    }
  `}
`

export const HighlightTitles = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`

export const Title = styled.h1``

export const PropertyTitle = styled(Title)`
  width: 103rem;
  font-size: 2rem;
`

export const Description = styled.h2``
