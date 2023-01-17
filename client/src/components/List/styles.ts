import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 103rem;
  display: flex;
  gap: 2rem;
`

export const ListSearch = styled.div`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.yellow};
    padding: 1rem;
    border-radius: 1rem;
    position: sticky;
    top: 1rem;
    height: max-content;

    > button {
      padding: 1rem;
      background-color: ${theme.colors.secondary};
      color: white;
      border: none;
      cursor: pointer;
      width: 100%;
      font-weight: ${theme.font.elevated};
    }
  `}
`

export const Search = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.darkGray};
    margin-bottom: 1rem;
  `}
`

export const ListResult = styled.div`
  flex: 3;
`

export const ListSearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    height: 3rem;
    padding: 0.5rem;
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`

export const Input = styled.input`
  height: 3rem;
  border: none;
  padding: 0.5rem;
`

export const OptionItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};

    > input {
      width: 5rem;
    }
  `}
`

export const OptionText = styled.span`
  margin-top: 1rem;
`
export const Button = styled.button``
