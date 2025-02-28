import Logo from "../../assets/logo.svg"
import { Container, Form } from "./styles"
import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const navigate = useNavigate();

  const buttonLogin = () => {
    navigate('/home');
  };

  const buttonRegister = () => {
    navigate('/register')
  }

  return (
    <Container>

      <section>
        <img className="Logo" src={Logo} alt="Logo food explorer" title="Logo food explorer" />
        <h1>food explorer</h1>
      </section>

      <Form>
        <div id="titleForm">
          <h1>Faça o Login</h1>
        </div>
        <span>Email</span>
        <Input id="signIn" placeholder="Exemplo: rocktseat@email.com"></Input>
        <span>Senha</span>
        <Input id="signIn" placeholder="Mínimo 6 caracteres"></Input>

        <Button id="Login" title="Entrar" onClick={buttonLogin}/>
        <Button id="createAccount" title="Criar uma conta" onClick={buttonRegister}/>

      </Form>

    </Container>
  )
}