import { Container, HeaderWrapper, Form, FooterWrapper } from "./styles";
import { NewIngredient } from "../../components/NewIngredient";
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { PiCaretLeft } from "react-icons/pi";
import { LuUpload } from "react-icons/lu";
import { api } from "../../services/api";
import { useState } from "react";


export function NewPrato() {

  const [imageName, setImageName] = useState("Selecione uma imagem");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredientes, setIngredientes] = useState([]);
  const [novoIngrediente, setNovoIngrediente] = useState("");

  const navigate = useNavigate();

  function voltarMenu() {
    navigate("/");
  };

  //OK
  function handleAddImage() {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
      setImageName(file.name);
    }
  };

  //OK
  function handleAddIngrediente() {
    if (!novoIngrediente.trim()) {
      alert("Favor digitar um ingrediente válido!");
      return;
    }

    setIngredientes(prevState => [...prevState, novoIngrediente]);
    setNovoIngrediente("")
  };

  //OK
  function handleRemoveIngrediente(deleted) {
    setIngredientes(prevState => prevState.filter(ingredientes => ingredientes !== deleted));
  };

  // OK
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async function handleSubmit() {

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);

    ingredientes
    .filter(ingrediente => ingrediente.trim() !== "")
    .forEach(ingrediente => {
      formData.append("ingredients", ingrediente);
    })

    try {
      const response = await api.post("/dishes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      alert(response.data.message);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }

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
                required
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
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          {/* Categoria */}
          <div className="category-wrapper">
            <span id="category">Categoria</span>
            <div className="input-wrapper">
              <select id="selectCategory" onChange={e => setCategory(e.target.value)}>
                <option value="hamburguer">Hambúrguer</option>
                <option value="porcoes">Porções</option>
                <option value="drinks">Bebidas</option>
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
                    value={capitalizeFirstLetter(ingrediente)}
                    onClick={() => handleRemoveIngrediente(ingrediente)} />
                ))
              }
              <NewIngredient
                isNew
                placeholder="Adicionar"
                value={novoIngrediente ?? ""}
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
              onChange={e => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Descriçao */}
        <span id="description">Descrição</span>
        <textarea
          className="description"
          placeholder="Digite a descrição do seu produto!"
          onChange={e => setDescription(e.target.value)}
          required
        />

        <div className="buttons">
          <Button className="save" title="Salvar Alterações" onClick={handleSubmit} />
        </div>
      </Form>


      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )

}