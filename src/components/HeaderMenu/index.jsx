import { Container } from './styles'
import { IoMdClose } from "react-icons/io";


export function HeaderMenu() {
  return (
    <Container>
      <aside>
        <button type='button'>
          <IoMdClose size={22} />
        </button>

        <h1>Menu</h1>

        <span>food explorer</span>
        
        <button id='card'></button>
      </aside>
    </Container>
  )
}