import React, { Dispatch, SetStateAction, useContext, useState } from 'react'

import { XCircle as XIcon } from '@styled-icons/heroicons-solid/XCircle'

import * as S from './styles'
import useFetch, { ItemProps, RoomNumber } from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'
import axios from 'axios'

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
      const dateAsNumber = date.getTime()
      const dateAsString = new Date(dateAsNumber).toString()
      dates.push(new Date(dateAsString))
      date.setDate(date.getDate() + 1)
    }

    return dates
  }

  const allDates = getDatesRange(
    dates[0].startDate.toString(),
    dates[0].endDate.toString()
  )

  const isAvailable = (roomNumber: RoomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date: Date) => {
      const dateAsDate = new Date(date)
      return allDates.some(
        (allDate: Date) => allDate.getTime() === dateAsDate.getTime()
      )
    })

    return !isFound
  }

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    const value = e.target.value
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    )
  }

  const handleClick = async () => {
    await Promise.all(selectedRooms)
    const res = await axios.put(`/api/room/availability/${selectedRooms}`, {
      dates: allDates
    })
    return res.data
  }

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
            </S.ItemInfo>
            <S.SelectedRooms>
              {item.roomNumbers.map((roomNumber: RoomNumber) => (
                <S.Room key={roomNumber._id}>
                  <S.Label>{roomNumber.number}</S.Label>
                  <S.Input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </S.Room>
              ))}
            </S.SelectedRooms>
          </S.ReserveItem>
        ))}
        <S.RButton onClick={handleClick}>Reserve agora!</S.RButton>
      </S.Container>
    </S.Wrapper>
  )
}

export default Reserve
