import useFetch, { DataProps } from '../../hooks/useFetch'
import * as S from './styles'

const PropertyList = () => {
  const { data, loading, error } = useFetch('/api/hotels/countByType')
  console.log(data)
  const images = [
    'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
    'https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',
    'https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',
    'https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',
    'https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=',
    'https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o='
  ]
  return (
    <S.Property>
      {loading ? (
        'Carregando espere...'
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <S.PropertyItem key={i}>
                <img src={img} />
                <S.PropertyDescription>
                  <S.Title>olá</S.Title>
                </S.PropertyDescription>
              </S.PropertyItem>
            ))}
        </>
      )}
    </S.Property>
  )
}

// {data &&
//   images.map((img, i) => (
//     <S.PropertyItem key={i}>
//       <img src={img} />
//       <S.PropertyDescription>
//         <S.Title>{data[i].type}</S.Title>
//         <S.Description>
//           {data[i].count} {data[i].type}
//         </S.Description>
//       </S.PropertyDescription>
//     </S.PropertyItem>
//   ))}

export default PropertyList
