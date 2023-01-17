import Header from '../../components/Header'
import Highlight from '../../components/Highlight'
import NavBar from '../../components/NavBar'

import { Container, PropertyTitle } from '../../components/Highlight/styles'
import PropertyList from '../../components/PropertyList'
import PropertyPlace from '../../components/PropertyPlace'
import MailContact from '../../components/MailContact'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Container>
        <Highlight />
        <PropertyTitle>Pesquisar por tipo de alojamento</PropertyTitle>
        <PropertyList />
        <PropertyTitle>
          Casas e apartamentos que os hóspedes adoram
        </PropertyTitle>
        <PropertyPlace />
        <MailContact />
        <Footer />
      </Container>
    </div>
  )
}

export default Home
