import React, { Dispatch, SetStateAction, useState } from 'react'

import { XCircle as XIcon } from '@styled-icons/heroicons-solid/XCircle'

import * as S from './styles'
import useFetch, { ItemProps, RoomNumber } from '../../hooks/useFetch'

type ReserveProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  hotelId: string
}

export type Room = {
  _id: string
  title: string
  desc: string
  maxPeople: string
  price: number
  roomNumbers: RoomNumber[]
}

const Reserve = ({ setOpen, hotelId }: ReserveProps) => {
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([])
  const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`)

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    const value = e.target.value
    console.log(
      'Before flat',
      data?.map((item: ItemProps) => item.rooms)
    )
    const room = data
      ?.map((item: ItemProps) => item.rooms)
      .flat()
      .find((room: Room) => room && room._id === value)
    console.log(
      'After flat',
      data?.map((item: ItemProps) => item.rooms)
    )
    setSelectedRooms(
      checked
        ? room
          ? [...selectedRooms, room]
          : selectedRooms
        : selectedRooms.filter((room) => room._id !== value)
    )
  }

  console.log(selectedRooms)
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
      </S.Container>
    </S.Wrapper>
  )
}

export default Reserve
