import { Container, HeaderWrapper, Form, FooterWrapper } from "./styles";
import { NewIngredient } from "../../components/NewIngredient";
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { PiCaretLeft } from "react-icons/pi";
import { useAuth } from '../../hooks/auth';
import { LuUpload } from "react-icons/lu";
import { api } from "../../services/api";
import { useState } from "react";


export function NewPrato() {
  const { user } = useAuth();
  console.log("usuário logado", user)

  const [imageName, setImageName] = useState("Selecione uma imagem");
  const [image, setImage] = useState("");

  const [ingredientes, setIngredientes] = useState([""]);
  const [novoIngrediente, setNovoIngrediente] = useState("");

  const navigate = useNavigate();

  function voltarMenu() {
    navigate("/");
  };

  //OK
  function handleAddImage() {
    const file = event.target.files[0];
    
    if(file){
      setImage(file);
      setImageName(file.name);
    }
  };

  //OK
  function handleAddIngrediente() {
    setIngredientes(estadoAnterior => [...estadoAnterior, novoIngrediente]);
    setNovoIngrediente()
  }

  //OK
  function handleRemoveIngrediente(deleted) {
    setIngredientes(estadoAnterior => estadoAnterior.filter(ingredientes => ingredientes !== deleted));
  }

 

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
          onClick={voltarMenu}
        >
        </Button>

        <h1>Adicionar Prato</h1>

        <section className="section-wrapper">
          {/* upload image */}
          <div className="upload-wrapper">
            <span>Imagem do prato</span>
            <label htmlFor="pictureDish">
              <LuUpload />
               {imageName}
              <input
                type="file"
                id="pictureDish"
                onChange={handleAddImage}
              />
            </label>
          </div>

          {/* Nome prato */}
          <div className="name-wrapper">
            <span id="name">Nome</span>
            <input
              type="text"
              placeholder="Ex: Salada Crispy"
              id="dishName"
            />
          </div>

          {/* Categoria */}
          <div className="category-wrapper">
            <span id="category">Categoria</span>
            <div className="input-wrapper">
              <select id="selectCategory">
                <option value="refeicoes">Refeições</option>
                <option value="sobremesa">Sobremesas</option>
                <option value="janta">Jantas</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
          </div>
        </section>

        {/* Ingredientes */}
        <div className="ingredientesPrice-wrapper">
          <div className="ingredients-wrapper">
            <span id="ingredientes">Ingredientes</span>
            <section className="ingredientes">
              {
                ingredientes.map((ingrediente, index) => (
                  <NewIngredient
                    key={String(index)}
                    value={ingrediente}
                    onClick={() => handleRemoveIngrediente(ingrediente)} />
                ))
              }
              <NewIngredient
                isNew
                placeholder="Adicionar"
                value={novoIngrediente}
                onChange={e => setNovoIngrediente(e.target.value)}
                onClick={handleAddIngrediente} />
            </section>
          </div>

          {/* Preço */}
          <div className="price-wrapper">
            <span className="price">Preço</span>
            <Input
              id="price"
              placeholder="R$ 40,00"
            />
          </div>
        </div>

        {/* Descriçao */}
        <span id="description">Descrição</span>
        <textarea 
        className="description" 
        placeholder="A Salada César é uma opção refrescante para o verão." 
        />

        <div className="buttons">
          <Button className="save" title="Salvar Alterações" />
        </div>
      </Form>


      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )

}