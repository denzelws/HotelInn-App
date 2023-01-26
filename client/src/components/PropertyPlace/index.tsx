import * as S from './styles'

import useFetch from '../../hooks/useFetch'

const PropertyPlace = () => {
  const { data, loading, error } = useFetch('/api/hotels?featured=true&limit=4')

  return (
    <S.PropertyPlace>
      {loading ? (
        'Carregando espere...'
      ) : (
        <>
          {!!data &&
            data.map((item) => (
              <S.PropertyPlaceItem key={item._id}>
                <img src={item.photos[0]} alt="" />
                <S.Title>{item.name}</S.Title>
                <S.City>{item.city}</S.City>
                <S.PriceDescription>
                  A partir de ${item.cheapestPrice}
                </S.PriceDescription>
                {item.rating && (
                  <S.PriceBox>
                    <S.Rating>{item.rating}</S.Rating>
                    <S.RatingLevel>Excelent</S.RatingLevel>
                  </S.PriceBox>
                )}
              </S.PropertyPlaceItem>
            ))}
        </>
      )}
    </S.PropertyPlace>
  )
}

export default PropertyPlace
