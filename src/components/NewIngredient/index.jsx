
import { Container } from "./styles";
import { IoIosClose , IoMdAdd } from "react-icons/io";


export function NewIngredient({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={isNew}>
        <input type="text"  value={value}  readOnly={!isNew}  {...rest} />

        <button type="button" onClick={onClick} className={isNew ? 'button-add' : 'button-delete'} >
          {isNew ? <IoMdAdd /> : <IoIosClose  />}
        </button>
    </Container>
  )
}