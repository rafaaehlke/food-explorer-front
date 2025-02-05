import { Container } from "./styles"
import { Button } from "../../components/Button"
import { Logo } from "../../components/Logo"


export function SignUp() {
  return (
    <Container>

      <Logo />
      <h1>food explorer</h1>
      <Button title="Criar Conta" />
    </Container>
  )
}
