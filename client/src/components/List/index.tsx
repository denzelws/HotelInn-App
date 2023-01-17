import { format } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../Header'

import NavBar from '../NavBar'
import SearchList from '../SearchList'

import * as S from './styles'

const List = () => {
  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <NavBar />
      <Header type="list" list />
      <S.Container>
        <S.Wrapper>
          <S.ListSearch>
            <S.Search>Pesquisar</S.Search>
            <S.ListSearchItem>
              <S.Label>Destino/nome</S.Label>
              <S.Input placeholder={destination} />
            </S.ListSearchItem>

            <S.ListSearchItem>
              <S.Label>Check-in - Check-out</S.Label>
              <S.Span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'dd/MM/yyyy'
              )} até ${format(date[0].endDate, 'dd/MM/yyyy')}`}</S.Span>
              {openDate && (
                <DateRange
                  onChange={(item: any) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </S.ListSearchItem>

            <S.ListSearchItem>
              <S.Label>Options</S.Label>
              <S.OptionItem>
                <S.OptionText>
                  Preço mín <small>por noite</small>
                </S.OptionText>
                <input type="text" />
              </S.OptionItem>

              <S.OptionItem>
                <S.OptionText>
                  Preço máx <small>por noite</small>
                </S.OptionText>
                <input type="text" />
              </S.OptionItem>

              <S.OptionItem>
                <S.OptionText>Adulto</S.OptionText>
                <input type="number" min={1} placeholder={options.adult} />
              </S.OptionItem>

              <S.OptionItem>
                <S.OptionText>Criança</S.OptionText>
                <input type="number" min={0} placeholder={options.children} />
              </S.OptionItem>

              <S.OptionItem>
                <S.OptionText>Quarto</S.OptionText>
                <input type="number" min={1} placeholder={options.room} />
              </S.OptionItem>
            </S.ListSearchItem>
            <button>Pesquisar</button>
          </S.ListSearch>
          <S.ListResult>
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
          </S.ListResult>
        </S.Wrapper>
      </S.Container>
    </div>
  )
}

export default List
