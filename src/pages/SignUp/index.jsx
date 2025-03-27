import Logo from "../../assets/logo.svg";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";

import { api } from "../../services/api"

import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log(name, email, password)
  }

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
        <Input
          placeholder="Exemplo: Rocktseat"
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <span>Email</span>
        <Input
          placeholder="Exemplo: rocketseat@email.com"
          type="email"
        onChange={e => setEmail(e.target.value)}
        />

        <span>Senha</span>
        <Input placeholder="Mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button id="" title="Criar Conta" onClick={handleSignUp}/>
        <Button id="haveAccount" title="Já tenho uma conta" />

      </Form>

    </Container>
  )
}