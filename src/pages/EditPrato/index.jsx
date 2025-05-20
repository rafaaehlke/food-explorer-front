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

  //renderiza todos os dados do prato
  const [prato, setPrato] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    ingredients: []
  });
  const [novoIngrediente, setNovoIngrediente] = useState();
  const [category, setCategory] = useState(["hamburguer", "porcoes", "drinks"]);


  const navigate = useNavigate();

  function voltarMenu() {
    navigate("/");
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("Alterando:", name, "->", value);
    setPrato(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleAddIngrediente() {

    if (!novoIngrediente.trim()) {
      alert("Favor digitar um ingrediente válido!")
      return
    };

    setPrato(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: novoIngrediente.trim() }]
    }));
    setNovoIngrediente("")
  };

  function removeIngrediente(deleted) {
    setPrato(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter(ingrediente => ingrediente !== deleted)
    }));
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Retorna os dados do prato.
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
              name="name"
              placeholder={prato.name}
              value={prato.name || ""}
              onChange={handleInputChange}
            />
          </div>

          {/* Categoria */}
          <div className="category-wrapper">
            <span id="category">Categoria</span>
            <div className="input-wrapper">

              <select
                id="selectCategory"
                name="category"
                value={prato.category}
                onChange={handleInputChange}
              >
                {category.map((categorias, index) => (
                  <option key={index} value={categorias}>{categorias}</option>
                ))
                }
              </select>
            </div>
          </div>
        </section>

        {/* Ingredientes */}
        <div className="ingredientesPrice-wrapper">
          <div className="ingredients-wrapper">
            <span id="ingredientes">Ingredientes</span>
            <section className="ingredientes">

              {prato.ingredients?.map((ingrediente, index) => (
                <NewIngredient
                  key={index}
                  value={capitalizeFirstLetter(ingrediente.name)}
                  title={ingrediente.name}
                  onClick={() => removeIngrediente(ingrediente)}
                />
              ))}
              <NewIngredient
                isNew
                placeholder="Adicionar"
                value={novoIngrediente ?? ""}
                onChange={e => setNovoIngrediente(e.target.value)}
                onClick={handleAddIngrediente}
              />
            </section>
          </div>

          {/* Preço */}
          <div className="price-wrapper">
            <span className="price">Preço</span>
            <Input
              id="price"
              placeholder={prato.price}
              value={prato.price}
              onChange={handleInputChange}

            />
          </div>
        </div>

        {/* Descriçao */}
        <span id="description">Descrição</span>
        <textarea
          className="description"
          name="description"
          placeholder={prato.description}
          value={prato.description}
          onChange={handleInputChange}
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