import { Dispatch, SetStateAction } from 'react'

import { XCircle as XIcon } from '@styled-icons/heroicons-solid/XCircle'

import * as S from './styles'

type ReserveProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  hotelId: string
}

const Reserve = ({ setOpen, hotelId }: ReserveProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <XIcon onClick={() => setOpen(false)} />
        <S.Caption>Escolha seus quartos:</S.Caption>
      </S.Container>
    </S.Wrapper>
  )
}

export default Reserve
