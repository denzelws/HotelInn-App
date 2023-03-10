import { useFetchProperties } from '../../hooks/useFetchProperties'
import * as S from './styles'

const Highlight = () => {
  const { data, loading } = useFetchProperties(
    '/api/hotels/countByCity?cities=madrid,berlin,london'
  )

  return (
    <S.Highlight>
      {loading
        ? 'Carregando espere uns minutos...'
        : data && (
            <>
              <S.HighlightItem>
                <img
                  src="https://turismo.eurodicas.com.br/wp-content/uploads/2019/11/dublin.jpg"
                  alt="Foto que ilustra natureza encontrada em Dublin"
                />
                <S.HighlightTitles>
                  <S.Title>Madrid</S.Title>
                  <S.Description>
                    <>{data[0]} propriedade</>
                  </S.Description>
                </S.HighlightTitles>
              </S.HighlightItem>

              <S.HighlightItem>
                <img
                  src="https://www.onde-e-quando.net/site/images/illustration/austin_666.jpg"
                  alt="Foto que ilustra natureza encontrada em Dublin"
                />
                <S.HighlightTitles>
                  <S.Title>Berlin</S.Title>
                  <S.Description>
                    <>{data[1]} propriedade</>
                  </S.Description>
                </S.HighlightTitles>
              </S.HighlightItem>

              <S.HighlightItem>
                <img
                  src="https://asset1.zankyou.com/images/mag-post/563/61dc/685//-/br/wp-content/uploads/2016/02/z-irlanda-inicio1.jpg"
                  alt="Foto que ilustra natureza encontrada em Dublin"
                />
                <S.HighlightTitles>
                  <S.Title>Londres</S.Title>
                  <S.Description>
                    <>{data[1]} propriedade</>
                  </S.Description>
                </S.HighlightTitles>
              </S.HighlightItem>
            </>
          )}
    </S.Highlight>
  )
}

export default Highlight
