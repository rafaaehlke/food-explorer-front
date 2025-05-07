import { Container, Remove, Add } from "./style"
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";


export function ButtonAdd({ ...props }) {
  const [add, setAdd] = useState(1);

  function addOne() {
    setAdd(prev => prev + 1);
  }

  function removeOne() {
    if (add > 1) {
      setAdd(prev => prev - 1);
    }
  }

  return (
    <Container {...props}>
      <Remove onClick={() => removeOne()}>
        <FiMinus />
      </Remove>

      <span>{add}</span>

      <Add onClick={() => addOne()}>
        <FiPlus />
      </Add>
    </Container>
  )
}