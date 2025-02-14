import { Container, HeaderWrapper, FooterWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import Principal from '../../assets/pngegg.png'



export function Home() {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>


      <section className="flyer">
        <img src={Principal} alt="" />
        <p>Sabores inigualáveis</p>
        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
      </section>

      <section className="meals">
        <p>Refeiçoes</p>
      </section>

      <section className="mainDishes">
        <p>Pratos Principais</p>
      </section>

      <section className="mainDishesTwo">
        <p>Pratos Principais</p>
      </section>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}