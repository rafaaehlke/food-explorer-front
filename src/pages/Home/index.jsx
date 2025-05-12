import { Container, HeaderWrapper, FirstSection, Content, FooterWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'
import Logo from '../../assets/pngegg.png'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getDishes() {
    try {
      const response = await api.get(`/dishes`, { params: { name: "" } });
      setDishes(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getDishes();
  }, []);


  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

        <FirstSection>
          <div className="Logo">
            <img src={Logo} alt="Frutas Logo Marca" />
          </div>

          <div className="textosBanner">
            <p>Sabores Inigualáveis</p>
            <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>

          </div>
        </FirstSection>

        <Content>


          {!loading && (
            <div className="hamburguer">
              <p className="tituloPrincipal"> Hambúrguer </p>
              <Carousel dishes={dishes.filter(dish => dish.category === "hamburguer")} />
            </div>
          )}


          {!loading && (
            <div className="porcoes">
              <p className='tituloPrincipal'>Porções</p>
              <Carousel dishes={dishes.filter(dish => dish.category === "porcoes")} />
            </div>
          )}


          {(
            <div className="drinks">
              <p className='tituloPrincipal'>Bebidas</p>
              <Carousel dishes={dishes.filter(dish => dish.category === "drinks")} />
            </div>
          )}
        </Content>
     
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}