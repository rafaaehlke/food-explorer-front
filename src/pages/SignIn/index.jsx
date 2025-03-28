import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { useAuth } from "../../hooks/auth";
import Logo from "../../assets/logo.svg";
import { useState } from "react";




export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({email, password});
  };
  
  const navigate = useNavigate();

  // const buttonLogin = () => {
  //   navigate('/home');
  // };

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
        <Input id="signIn" type="email" placeholder="Exemplo: rocktseat@email.com" 
        onChange={e => setEmail(e.target.value)}/>
        
        <span>Senha</span>
        <Input id="signIn" type="password" placeholder="Mínimo 6 caracteres" 
        onChange={e => setPassword(e.target.value)}/>

        <Button id="Login" title="Entrar" onClick={handleSignIn} />
        <Button id="createAccount" title="Criar uma conta" onClick={buttonRegister} />

      </Form>

    </Container>
  )
}