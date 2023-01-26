import * as S from './styles'

import { DataProps } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'

const SearchList = ({ item }: DataProps) => {
  return (
    <S.SearchList>
      <img src={item.photos[0]} alt="" />
      <S.DescriptionBox>
        <S.Name>{item.name}</S.Name>
        <S.Distance>{item.distance} da praia</S.Distance>
        <S.TaxiOption>Táxi Grátis</S.TaxiOption>
        <S.Subtitle>Studio Apartment com ar condicionado</S.Subtitle>
        <S.Features>{item.desc}</S.Features>
        <S.CancelOption>Cancelamento grátis</S.CancelOption>
      </S.DescriptionBox>

      <S.DetailsBox>
        {!!item.rating && (
          <S.RatingBox>
            <S.Rating>Excelente</S.Rating>
            <S.RatingNumber>{item.rating}</S.RatingNumber>
          </S.RatingBox>
        )}

        <S.DetailsText>
          <S.Price>{item.cheapestPrice}</S.Price>
          <S.TaxOp>Inclui impostos e taxas</S.TaxOp>
          <Link to={`/hotels/${item._id}`}>
            <S.CheckButton>Ver disponibilidade</S.CheckButton>
          </Link>
        </S.DetailsText>
      </S.DetailsBox>
    </S.SearchList>
  )
}

export default SearchList
