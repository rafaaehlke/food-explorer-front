import Logo from "../../assets/logo.svg"
import { Container, Form } from "./styles"
import { Input } from "../../components/Input"

import { Button } from "../../components/Button"


export function SignUp() {
  return (
    <Container>

      <section>
        <img className="Logo" src={Logo} alt="Logo food explorer" title="Logo food explorer" />
        <h1>food explorer</h1>
      </section>

      <Form>
        <div id="titleForm">
          <h1>Crie sua conta</h1>
        </div>
        <span>Seu nome</span>
        <Input placeholder="Exemplo: Rocktseat"></Input>
        <span>Email</span>
        <Input placeholder="Exemplo: rocketseat@email.com"></Input>
        <span>Senha</span>
        <Input placeholder="Mínimo 6 caracteres"></Input>

        <Button id="" title="Criar Conta" />
        <Button id="haveAccount" title="Já tenho uma conta" />

      </Form>

    </Container>
  )
}