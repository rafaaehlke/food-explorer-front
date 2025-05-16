import { Container, HeaderWrapper, Form, FooterWrapper } from "./styles";
import { NewIngredient } from "../../components/NewIngredient";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { PiCaretLeft } from "react-icons/pi";
import { useEffect, useState } from "react";
import { LuUpload } from "react-icons/lu";
import { api } from '../../services/api';

export function EditPrato() {

  const { id } = useParams();


  const [prato, setPrato] = useState("")
  console.log("dados", prato)

  const navigate = useNavigate();

  function voltarMenu() {
    navigate("/");
  };

  useEffect(() => {
    api.get(`/dishes/${id}`)
      .then(response => setPrato(response.data))
      .catch(error => console.error("erro ao buscar o prato", error))
  }, [id])

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
            <input
              id="dishName"
              type="text"
              placeholder={prato.name}
              value={prato.name}
            />
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
            <Input
              id="price"
              placeholder={prato.price}
              value={prato.price}
            />
          </div>
        </div>

        {/* Descriçao */}
        <span id="description">Descrição</span>
        <textarea
          className="description"
          placeholder={prato.description}
          value={prato.description}
        />

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