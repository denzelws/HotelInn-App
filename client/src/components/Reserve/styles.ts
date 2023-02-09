import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.418);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 2rem;
    position: relative;

    > svg {
      width: 2rem;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }
  `}
`

export const Caption = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
  `}
`

export const RButton = styled.button`
  ${({ theme }) => css`
    border: none;
    padding: 1rem 2rem;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-weight: ${theme.font.elevated};
    cursor: pointer;
    border-radius: 0.5rem;
    width: 100%;
    margin-top: 2rem;

    &:hover {
      background-color: ${theme.colors.primary};
      transition: 0.7s;
    }
  `}
`

export const ReserveItem = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 20px;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const SelectedRooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 10px;
  color: gray;
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.higher};
  `}
`

export const Desc = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
  `}
`

export const ReserveMax = styled.div`
  font-size: 1.2rem;
`

export const Price = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.higher};
  `}
`

export const Room = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input``

export const Label = styled.label``
