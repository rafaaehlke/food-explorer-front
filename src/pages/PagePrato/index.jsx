import { Container, HeaderWrapper, Content, FooterWrapper } from './styles'
import { PiCaretLeft, PiReceiptLight } from "react-icons/pi";
import { ButtonAdd } from '../../components/ButtonAdd'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';


export function PagePrato() {
  const { id } = useParams(); // retorna prato pelo id
 
  const [prato, setPrato] = useState(null);
  const [category, setCategory] = useState([]);
  
  
  const imageUrl = `${api.defaults.baseURL}/files/`;
  

  // prato
  useEffect(() => {
    api.get(`/dishes/${id}`)
      .then(response => setPrato(response.data))
      .catch(error => console.error("erro ao buscar o prato", error))
  }, [id])

  // ingredientes
  useEffect(() => {
    async function fetchIngredientes() {
      const response = await api.get(`/dishes/${id}`)
      setCategory(response.data.category)
    }
    fetchIngredientes();
  }, [])

  if (!prato) return <p>Carregando prato...</p>;

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Content>

        <Button
          className='voltar'
          title="Voltar"
          icon={PiCaretLeft}>
        </Button>

        <div className="main">
          <div className="prato">
            <img src={`${imageUrl}${prato.image}`} alt={prato.name} />
          </div>

          <div className="conteudoPrato">

            <div className="pratoInfo">

              <p className='tituloPrato'>{prato.name}</p>
              <span className='description'>{prato.description}</span>

            </div>

            <section className="marcadores">
              {
                category && category.map(categoria => (

                  <Tag 
                  key={String(categoria.id)}
                  title={categoria.name} />
                ))
              }
            </section>

            <div className="botoes">
              <ButtonAdd className="quantidade" />
              <Button
                icon={PiReceiptLight}
                className="incluir"
                title={`incluir ∙ ${prato.price}`}
              />
            </div>

          </div>
        </div>

      </Content>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}