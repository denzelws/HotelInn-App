import * as S from './styles'

const Highlight = () => {
  return (
    <S.Highlight>
      <S.HighlightItem>
        <img
          src="https://turismo.eurodicas.com.br/wp-content/uploads/2019/11/dublin.jpg"
          alt="Foto que ilustra natureza encontrada em Dublin"
        />
        <S.HighlightTitles>
          <S.Title>Dublin</S.Title>
          <S.Description>Vistas deslumbrantes</S.Description>
        </S.HighlightTitles>
      </S.HighlightItem>

      <S.HighlightItem>
        <img
          src="https://www.onde-e-quando.net/site/images/illustration/austin_666.jpg"
          alt="Foto que ilustra natureza encontrada em Dublin"
        />
        <S.HighlightTitles>
          <S.Title>Austin</S.Title>
          <S.Description>Vistas deslumbrantes</S.Description>
        </S.HighlightTitles>
      </S.HighlightItem>

      <S.HighlightItem>
        <img
          src="https://asset1.zankyou.com/images/mag-post/563/61dc/685//-/br/wp-content/uploads/2016/02/z-irlanda-inicio1.jpg"
          alt="Foto que ilustra natureza encontrada em Dublin"
        />
        <S.HighlightTitles>
          <S.Title>Irlanda</S.Title>
          <S.Description>Vistas deslumbrantes</S.Description>
        </S.HighlightTitles>
      </S.HighlightItem>
    </S.Highlight>
  )
}

export default Highlight
