import { Container, HeaderWrapper, FirstSection, Content, FooterWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'
import Logo from '../../assets/pngegg.png'

export function Home() {

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

        <div className="refeicoes">
          <p className='tituloPrincipal'> Refeiçoes</p>
          <Carousel/>

        </div>

        <div className="principais">
          <p className='tituloPrincipal'>Pratos Principais</p>
          <Carousel/>
        </div>

        <div className="drinks">
          <p className='tituloPrincipal'> Sucos</p>
          <Carousel/>
        </div>
      </Content>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}