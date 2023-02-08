import React, { Dispatch, SetStateAction, useContext, useState } from 'react'

import { XCircle as XIcon } from '@styled-icons/heroicons-solid/XCircle'

import * as S from './styles'
import useFetch, { ItemProps, RoomNumber } from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'

type ReserveProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  hotelId: string
}

const Reserve = ({ setOpen, hotelId }: ReserveProps) => {
  const [selectedRooms, setSelectedRooms] = useState<string[]>([])
  const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`)
  const { dates } = useContext(SearchContext)

  const getDatesRange = (startDate: string, endDate: string): Date[] => {
    const start = new Date(startDate)
    const end = new Date(endDate)

    const date = new Date(start.getTime())

    const dates: Date[] = []

    while (date <= end) {
      dates.push(new Date(date))
      date.setDate(date.getDate() + 1)
    }

    return dates
  }

  console.log(
    getDatesRange(dates[0].startDate.toString(), dates[0].endDate.toString())
  )

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    const value = e.target.value
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    )
  }

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {}

  return (
    <S.Wrapper>
      <S.Container>
        <XIcon onClick={() => setOpen(false)} />
        <S.Caption>Escolha seus quartos:</S.Caption>
        {data.map((item: ItemProps) => (
          <S.ReserveItem key={item._id}>
            <S.ItemInfo>
              <S.Title>{item.title}</S.Title>
              <S.Desc>{item.desc}</S.Desc>
              <S.ReserveMax>Maxímo de pessoas: {item.maxPeople}</S.ReserveMax>
              <S.Price>{item.price}</S.Price>
              {item.roomNumbers.map((roomNumber: RoomNumber) => (
                <S.Room key={roomNumber._id}>
                  <S.Label>{roomNumber.number}</S.Label>
                  <S.Input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                  />
                </S.Room>
              ))}
            </S.ItemInfo>
          </S.ReserveItem>
        ))}
        <S.RButton onClick={handleClick}>Reserve agora!</S.RButton>
      </S.Container>
    </S.Wrapper>
  )
}

export default Reserve
