import * as S from './styles'

type SearchListProps = {
  img: string
  title: string
  distance: string
  taxiOp?: string
  subtitle: string
  features: string
  cancelOption: string
  cancelSubtitle: string
}

const SearchList = () => {
  return (
    <S.SearchList>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/296619276.webp?k=641ba87d71f5f52c113ad8491dee61b2af4821428f4de8db7c721054318c36d4&o=&s=1"
        alt=""
      />
      <S.DescriptionBox>
        <S.Title>Orlanova Hotel</S.Title>
        <S.Distance>400 m da praia</S.Distance>
        <S.TaxiOption>Taxi grátis</S.TaxiOption>
        <S.Subtitle>Studio Apartment com ar condicionado</S.Subtitle>
        <S.Features>
          Quarto Standard • 1 banheiro • 21m² 2 camas solteiro
        </S.Features>
        <S.CancelOption>Cancelamento grátis</S.CancelOption>
      </S.DescriptionBox>

      <S.DetailsBox>
        <S.RatingBox>
          <S.Rating>Excelente</S.Rating>
          <S.RatingNumber>8.9</S.RatingNumber>
        </S.RatingBox>

        <S.DetailsText>
          <S.Price>$123</S.Price>
          <S.TaxOp>Inclui impostos e taxas</S.TaxOp>
          <S.CheckButton>Ver disponibilidade</S.CheckButton>
        </S.DetailsText>
      </S.DetailsBox>
    </S.SearchList>
  )
}

export default SearchList
