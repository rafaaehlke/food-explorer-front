import { Container, HeaderWrapper, Form, FooterWrapper } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { PiCaretLeft } from "react-icons/pi"
import { LuUpload } from "react-icons/lu";
import { Tag } from "../../components/Tag"
import { Input } from "../../components/Input"
import { NewIngredient } from "../../components/NewIngredient"



export function EditPrato() {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>


      <Form>
        <Button
          className='voltar'
          title="Voltar"
          icon={PiCaretLeft}>
        </Button>

        <h1>Novo Prato</h1>

        <span>Imagem do prato</span>
        <label htmlFor="pictureDish">
          <LuUpload />
          selecione uma imagem
          <input
            type="file"
            id="pictureDish"
            title="Selecione uma imagem"
          />
        </label>

        <span id="name">Nome</span>
        <input  type="text" placeholder="Ex: Salada Crispy" id="dishName" />

        <span id="category">Categoria</span>
        <div className="input-wrapper">
          <select id="selectCategory">
            <option value="dish">Refeição</option>
          </select>
        </div>

        <span id="ingredientes">Ingredientes</span>
        <section className="ingredientes">

          <NewIngredient value="Salada" />
          <NewIngredient value="Ovo" />
          <NewIngredient value="Batata" />

          <NewIngredient isNew placeholder="Adicionar" />
        </section>

        <span id="price">Preço</span>
        <Input id="price" placeholder="R$ 40,00" />

        <span id="description">Descrição</span>
        <textarea className="description" placeholder="A Salada César é uma opção refrescante para o verão." />

        <div className="buttons">
          <Button className="delete" title="Excluir Prato" />
          <Button className="save" title="Salvar Alterações" />
        </div>
      </Form>


      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )

}