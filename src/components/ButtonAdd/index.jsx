import { Container } from "./style"
import { FiMinus, FiPlus } from "react-icons/fi";


export function ButtonAdd() {
  return (
    <Container>
      
        <FiMinus />
        <span>01</span>
        <FiPlus />
    </Container>
  )
}