import { Container, Section } from './styles'
import { HeaderMenu } from '../../components/HeaderMenu'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { IoIosSearch } from "react-icons/io";
import { useAuth } from '../../hooks/auth' 
import { useNavigate } from 'react-router-dom'



export function Menu() {
  const { signOut } = useAuth();
  
  return (
    <Container>

      <HeaderMenu />


      <Section>
        <Input icon={IoIosSearch} placeholder="Buscar pratos ou ingredientes" title="Buscar pratos ou ingredientes" />
        <Button id="exit" title="Sair" onClick={signOut}/>
      </Section>

      <Footer />
    </Container>
  )
}