import styled, { css } from 'styled-components'

import { XCircleFill } from '@styled-icons/bootstrap'
import {
  LeftArrowCircle,
  RightArrowCircle
} from '@styled-icons/boxicons-regular'

export const CircleFill = styled(XCircleFill)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  color: lightgray;
  cursor: pointer;
`

export const LeftArrow = styled(LeftArrowCircle)`
  width: 5rem;
  cursor: pointer;
  margin: 2rem;
  color: lightgray;
`

export const RightArrow = styled(RightArrowCircle)`
  width: 5rem;
  cursor: pointer;
  margin: 2rem;
  color: lightgray;
`

export const Wrapper = styled.div`
  z-index: 1;
`

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 98.7vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.426);
  z-index: 2;
  display: flex;
  align-items: center;
`

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 80%;
    height: 80vh;
  }
`

export const HotelWrapper = styled.div`
  width: 100%;
  max-width: 103rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Address = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    display: flex;
    align-items: center;
    gap: 1rem;

    > svg {
      width: 1.2rem;
    }
  `}
`

export const Distance = styled.span``

export const HotelDistance = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.higher};
  `}
`

export const HotelPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-weight: ${theme.font.higher};
  `}
`

export const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ImgWrapper = styled.div`
  width: 33%;

  > img {
    width: 100%;
    object-fit: cover;
  }
`

export const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const HotelDetailsTexts = styled.div`
  flex: 3;
`

export const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;
`

export const HotelTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const HotelDesc = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-top: 2rem;
  `}
`

export const PriceTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
  `}
`

export const PriceDescription = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const Price = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.elevated};
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const PriceHotelDetails = styled.span``
