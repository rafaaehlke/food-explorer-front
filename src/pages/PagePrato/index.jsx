import { Container, HeaderWrapper, Content, FooterWrapper } from './styles'
import { PiCaretLeft, PiReceiptLight } from "react-icons/pi";
import { ButtonAdd } from '../../components/ButtonAdd'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';

export function PagePrato() {
  const { id } = useParams(); // retorna prato pelo id
  const { user } = useAuth();

  const [prato, setPrato] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate()
  const imageUrl = `${api.defaults.baseURL}/files/`;


  function handleEdit(){
    navigate(`/editPrato/${id}`)
  }
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
      setIngredients(response.data.ingredients)
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
          icon={PiCaretLeft}
          onClick={() => navigate(-1)}
        >
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
                ingredients && ingredients.map(ingredientes => (

                  <Tag
                    key={String(ingredientes.id)}
                    title={ingredientes.name} />
                ))
              }
            </section>

            {
              [USER_ROLE.ADMIN, USER_ROLE.CLIENTE].includes(user.role) &&
              <div className="botoes">
                {user.role === USER_ROLE.CLIENTE && <ButtonAdd className="quantidade" />}
                {user.role === USER_ROLE.CLIENTE && <Button icon={PiReceiptLight} className="incluir" title={`incluir ∙ ${prato.price}`} />}
                {user.role === USER_ROLE.ADMIN && <Button className="editPrato" title="Editar Prato" onClick={handleEdit}></Button>}
              </div>
            }

          </div>
        </div>

      </Content>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}