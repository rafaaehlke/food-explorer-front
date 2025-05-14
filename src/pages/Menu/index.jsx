import { Container, Section } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { IoIosSearch } from "react-icons/io";
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { USER_ROLE } from '../../utils/roles'


export function Menu() {
  const { user } = useAuth()

  const navigate = useNavigate();

  function handleEditPrato() {
    navigate("/editPrato")
  }

  function newPrato() {
    navigate("/newPrato")
  }

  function handleProfile() {
    navigate("/Profile")
  }

  return (
    <Container>

      <Header />


      {
        [USER_ROLE.ADMIN, USER_ROLE.CLIENTE].includes(user.role) &&
        <Section>
          <Input icon={IoIosSearch} placeholder="Buscar pratos ou ingredientes" title="Buscar pratos ou ingredientes" />

          {user.role === USER_ROLE.ADMIN && <Button id="editarPratos" title="Editar Pratos" onClick={handleEditPrato} />}
          {user.role === USER_ROLE.ADMIN && <Button id="cadastrarPratos" title="Novo Prato" onClick={newPrato} />}
          {(user.role === USER_ROLE.CLIENTE || USER_ROLE.ADMIN) && <Button id="profile" title="Perfil" onClick={handleProfile} />}

        </Section>
      }

      <Footer />
    </Container>
  )
}