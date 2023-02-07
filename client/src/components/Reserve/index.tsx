import { Dispatch, SetStateAction } from 'react'
import * as S from './styles'

type ReserveProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  hotelId: string
}

const Reserve = ({ setOpen, hotelId }: ReserveProps) => {
  return <div>Reserve</div>
}

export default Reserve
