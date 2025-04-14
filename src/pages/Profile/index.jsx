import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock} from "react-icons/fi";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"



export function Profile(){
    return (
      <Container>
        <header>
          <button
            id="voltarProfile"
            type="button"
          >
            <FiArrowLeft />
          </button>
        </header>
  
        <Form>
          <Avatar>
            <img
              src={"https://fastly.picsum.photos/id/1076/200/300.jpg?hmac=v-yXySfuFZmvrYNvyAps4V02kbxa1_XuprgoVVsj4ZQ"}
              alt="Foto do Usuário"
            />
  
            <label htmlFor="avatar">
              <FiCamera />
              <input
                id='avatar'
                type="file"
              />
            </label>
          </Avatar>
  
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
          />
  
          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
          />
  
          <Input
            placeholder="Senha Atual"
            type="password"
            icon={FiLock}
          />
  
          <Input
            placeholder="Nova Senha"
            type="password"
            icon={FiLock}
          />
  
          <Button title="Salvar" />
        </Form>
      </Container>
    )
}