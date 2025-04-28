import { Container, Section } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { IoIosSearch } from "react-icons/io";
import { useAuth } from '../../hooks/auth' 
import { useNavigate } from 'react-router-dom'


export function Menu() {

  const navigate = useNavigate();

  function handleEditPrato(){
    navigate("/editPrato")
  }

  function newPrato(){
    navigate("/newPrato")
  }

  function handleProfile(){
    navigate("/Profile")
  }

  return (
    <Container>

      <Header />


      <Section>
        <Input icon={IoIosSearch} placeholder="Buscar pratos ou ingredientes" title="Buscar pratos ou ingredientes" />
        
        <Button id="editarPratos" title="Editar Pratos" onClick={handleEditPrato}/>
        <Button id="cadastrarPratos" title="Novo Prato" onClick={newPrato}/>
        <Button id="profile" title="Perfil" onClick={handleProfile}/>
      </Section>

      <Footer />
    </Container>
  )
}