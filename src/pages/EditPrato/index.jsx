import { Container, HeaderWrapper, Form, FooterWrapper } from "./styles";
import { NewIngredient } from "../../components/NewIngredient";
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { PiCaretLeft } from "react-icons/pi";
import { LuUpload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


export function EditPrato() {

  const { user } = useAuth;
  console.log("usuario:", user)
  const navigate = useNavigate();

  function voltarMenu() {
    navigate("/");
  };

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>


      <Form>
        <Button
          className='voltar'
          title="Voltar"
          icon={PiCaretLeft}
          onClick={voltarMenu}>
        </Button>

        <h1>Editar Prato</h1>

        <section className="section-wrapper">
          {/* upload image */}
          <div className="upload-wrapper">
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
          </div>

          {/* Nome prato */}
          <div className="name-wrapper">
            <span id="name">Nome</span>
            <input type="text" placeholder="Ex: Salada Crispy" id="dishName" />
          </div>

          {/* Categoria */}
          <div className="category-wrapper">
            <span id="category">Categoria</span>
            <div className="input-wrapper">
              <select id="selectCategory">
                <option value="dish">Refeição</option>
              </select>
            </div>
          </div>
        </section>

        {/* Ingredientes */}
        <div className="ingredientesPrice-wrapper">
          <div className="ingredients-wrapper">
            <span id="ingredientes">Ingredientes</span>
            <section className="ingredientes">

              <NewIngredient value="Salada" />
              <NewIngredient isNew placeholder="Adicionar" />
            </section>
          </div>

          {/* Preço */}
          <div className="price-wrapper">
            <span className="price">Preço</span>
            <Input id="price" placeholder="R$ 40,00" />
          </div>
        </div>

        {/* Descriçao */}
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