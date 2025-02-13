import { Container, Section } from './styles'
import { HeaderMenu } from '../../components/HeaderMenu'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import  Principal from '../../assets/pngegg.png'




export function Home() {
  return (
    <Container>

      <HeaderMenu />


      <Section className="flyer">
        <img src={Principal} alt="" />
        <p>Sabores inigualáveis</p>
        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
      </Section>

      <Section className="meals">
        <p>Refeiçoes</p>
      </Section>
      
      <Section className="mainDishes">
        <p>Pratos Principais</p>
      </Section>
      
      <Section className="mainDishesTwo">
        <p>Pratos Principais</p>
      </Section>

      <Footer />
    </Container>
  )
}