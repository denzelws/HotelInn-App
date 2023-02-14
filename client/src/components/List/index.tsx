import { format } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../Header'

import NavBar from '../NavBar'
import SearchList from '../SearchList'
import useFetch from '../../hooks/useFetch'

import { RangeKeyDict } from 'react-date-range'

import * as S from './styles'

const List = () => {
  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState<string | undefined>(undefined)
  const [max, setMax] = useState<string | undefined>(undefined)

  const { data, loading, error, reFetchData } = useFetch(
    `/api/hotels?city=${destination}&min=${min}&max=${max}`
  )

  const items = Array.isArray(data) ? data : []

  const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMin(e.target.value)
  }

  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(e.target.value)
  }

  const handleChange = (rangesByKey: RangeKeyDict) => {
    const newDates = Object.values(rangesByKey).map((range) => ({
      startDate: range.startDate || new Date(),
      endDate: range.endDate || new Date(),
      key: range.key || 'selection'
    }))
    setDates(newDates)
  }

  const handleClick = () => {
    reFetchData()
  }

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
              <S.Span onClick={() => setOpenDate(!openDate)}>
                {dates &&
                  dates.length > 0 &&
                  `${format(dates[0].startDate, 'dd/MM/yyyy')} até ${format(
                    dates[0].endDate,
                    'dd/MM/yyyy'
                  )}`}
              </S.Span>
              {openDate && (
                <DateRange
                  onChange={handleChange}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </S.ListSearchItem>

            <S.ListSearchItem>
              <S.Label>Options</S.Label>
              <S.OptionItem>
                <S.OptionText>
                  Preço mín <small>por noite</small>
                </S.OptionText>
                <input type="text" onChange={handleChangeMin} />
              </S.OptionItem>

              <S.OptionItem>
                <S.OptionText>
                  Preço máx <small>por noite</small>
                </S.OptionText>
                <input type="text" onChange={handleChangeMax} />
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
            <button onClick={handleClick}>Pesquisar</button>
          </S.ListSearch>
          <S.ListResult>
            {loading ? (
              'Carregando espere...'
            ) : error ? (
              'Erro ao carregar dados'
            ) : (
              <>
                {!!data &&
                  items.map((item) => (
                    <SearchList key={item._id} item={item} />
                  ))}
              </>
            )}
          </S.ListResult>
        </S.Wrapper>
      </S.Container>
    </div>
  )
}

export default List
