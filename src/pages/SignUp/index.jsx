import Logo from "../../assets/logo.svg"
import { Container, Form } from "./styles"
import { Input } from "../../components/Input"

import { Button } from "../../components/Button"


export function SignUp() {
  return (
    <Container>

      <img className="Logo" src={Logo} alt="Logo food explorer" title="Logo food explorer" />
      <h1>food explorer</h1>

      <Form action="">

        {/* input travando a aplicaçao */}
        <Input placeholder="TESTE"></Input>
        <Button title="Criar Conta" />
      </Form>

    </Container>
  )
}