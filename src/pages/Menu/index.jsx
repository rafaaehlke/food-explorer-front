import { Container, Section } from './styles'
import { HeaderMenu } from '../../components/HeaderMenu'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { IoIosSearch } from "react-icons/io";





export function Menu() {
  return (
    <Container>

      <HeaderMenu />


      <Section>
        <Input icon={IoIosSearch} placeholder="Buscar pratos ou ingredientes" title="Buscar pratos ou ingredientes" />
        <Button id="exit" title="Sair"/>
      </Section>

      <Footer />
    </Container>
  )
}