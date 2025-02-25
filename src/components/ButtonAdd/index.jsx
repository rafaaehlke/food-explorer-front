import { Container, Remove, Add } from "./style"
import { FiMinus, FiPlus } from "react-icons/fi";


export function ButtonAdd({ ...props }) {
  return (
    <Container {...props}>
      <Remove>
        <FiMinus />
      </Remove>

      <span>01</span>
     
      <Add>
        <FiPlus />
      </Add>
    </Container>
  )
}