import * as S from './styles'

const MailContact = () => {
  return (
    <S.Mail>
      <S.Title>Economize tempo, economize dinheiro!</S.Title>
      <S.Description>
        Inscreva-se e enviaremos as melhores ofertas para você
      </S.Description>
      <S.InputBox>
        <S.Input placeholder="Seu email:" />
        <S.Button>Inscreva-se</S.Button>
      </S.InputBox>
    </S.Mail>
  )
}

export default MailContact
