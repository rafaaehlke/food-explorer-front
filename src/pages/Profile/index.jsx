import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";


export function Profile() {
  const { user, updateProfile } = useAuth();
  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();


  async function handleUpdate() {
    event.preventDefault();
    const user = {
      name,
      email,
      password: password,
      newPassword: newPassword,
    };
    await updateProfile({ user });
  }

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
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}