import Header from '../Header'
import NavBar from '../NavBar'
import * as S from './styles'

import { useContext, useState } from 'react'

import { LocationDot as LocationIcon } from '@styled-icons/fa-solid/LocationDot'

import { CheckButton } from '../SearchList/styles'
import MailContact from '../MailContact'
import Footer from '../Footer'
import useFetch, { IProps, ItemProps } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'

const Hotel = ({ item }: IProps) => {
  const location = useLocation().pathname
  const id = location.split('/')[2]
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const { data, loading, error } = useFetch(`/api/hotels/find/${id}`)

  const { dates, options } = useContext(SearchContext)

  const milisecondsPerDay = 1000 * 60 * 60 * 24
  const dayDifference = (date1: Date, date2: Date) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / milisecondsPerDay)
    return diffDays
  }

  const daysBooked = dayDifference(dates[0].endDate, dates[0].startDate)

  const handleOpen = (index: number) => {
    setSlideNumber(index)
    setOpen(true)
  }

  const handleMove = (direction: string) => {
    let newSlideNumber

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <S.Wrapper>
      <NavBar />
      <Header type="list" list />
      {loading ? (
        'Carregando...'
      ) : (
        <>
          {open && (
            <S.Slider key={item._id}>
              <S.CircleFill onClick={() => setOpen(false)} />
              <S.LeftArrow onClick={() => handleMove('l')} />
              <S.SliderWrapper>
                <img src={item.photos[slideNumber]} alt="" />
              </S.SliderWrapper>
              <S.RightArrow onClick={() => handleMove('r')} />
            </S.Slider>
          )}

          <S.Container>
            <S.HotelWrapper>
              <S.Title>{data.name}</S.Title>
              <S.Address>
                <LocationIcon />
                <S.Distance>{data.address}</S.Distance>
              </S.Address>

              <S.HotelDistance>
                Excelente localização - {data.distance} de distância
              </S.HotelDistance>

              <S.HotelPrice>
                Reserve uma estadia de valor superior a R${data.cheapestPrice} e
                receba um táxi gratuito do aeroporto
              </S.HotelPrice>
              <S.HotelImages>
                {data.photos?.map((photo, index) => (
                  <S.ImgWrapper key={index}>
                    <img onClick={() => handleOpen(index)} src={photo} alt="" />
                  </S.ImgWrapper>
                ))}
              </S.HotelImages>
              <S.HotelDetails>
                <S.HotelDetailsTexts>
                  <S.HotelTitle>
                    Experimente a melhor acomodação do bairro
                  </S.HotelTitle>
                  <S.HotelDesc>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet nobis animi dolorem, sint dicta impedit est
                    consequatur asperiores soluta quam repellendus. Earum,
                    voluptas sint! Voluptatem nostrum corrupti minus sed error
                    harum nisi corporis, perspiciatis praesentium. Voluptas,
                    atque magni sapiente suscipit est illum necessitatibus quas
                    neque distinctio repudiandae deleniti in eligendi incidunt
                    accusamus ducimus doloribus, facere rem molestias labore
                    accusantium soluta et ratione a. Ea vero, natus tenetur
                    atque accusamus repudiandae officiis voluptates laudantium
                    quis deleniti. Atque explicabo dolor soluta voluptatum
                    tempore ipsa natus pariatur distinctio veritatis provident
                    voluptates, accusamus deleniti vel culpa tempora, quos
                    maxime quas accusantium optio? Error aut corrupti id
                    necessitatibus, facere distinctio alias? Dolorem, nemo
                    numquam. Labore veniam molestias quis adipisci totam vero,
                    modi facere. Eius magni harum sit ipsam, officia totam at
                    debitis aut excepturi quo accusantium odit porro. Obcaecati
                    consequatur culpa ipsa magnam recusandae mollitia illum
                    saepe amet!
                  </S.HotelDesc>
                </S.HotelDetailsTexts>

                <S.HotelDetailsPrice>
                  <S.PriceTitle>
                    Perfeito para semanas consecutivas de estadia
                  </S.PriceTitle>
                  <S.PriceDescription>
                    Localizado no coração da cidade, próximo a lugares
                    expecepcionais esta propriedade tem a avaliação de 9.8{' '}
                  </S.PriceDescription>

                  <S.Price>
                    R${daysBooked * options.room! * data.cheapestPrice}(
                    {daysBooked} noites)
                  </S.Price>

                  <CheckButton>Reserve agora</CheckButton>
                </S.HotelDetailsPrice>
              </S.HotelDetails>

              <MailContact />
              <Footer />
            </S.HotelWrapper>
          </S.Container>
        </>
      )}
    </S.Wrapper>
  )
}

export default Hotel
