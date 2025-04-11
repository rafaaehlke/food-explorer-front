import { Container } from './styles'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export function HeaderMenu() {
  const navigate = useNavigate();

  function handleCloseMenu() {
    navigate("/")
  }

  return (
    <Container>
      <aside>
        <button type='button' onClick={handleCloseMenu}>
          <IoMdClose size={22} />
        </button>

        <h1>Menu</h1>

        <span>food explorer</span>
      </aside>
    </Container>
  )
}