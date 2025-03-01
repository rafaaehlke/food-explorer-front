import { Container, HeaderWrapper, FirstSection, Content, FooterWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Cards } from '../../components/Cards'
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
          <p> Refeiçoes</p>
          <div className="oi">
          <Cards className="teste" />
          <Cards className="teste" />
          <Cards className="teste" />
          </div>

        </div>

        <div className="principais">
          <p>Pratos Principais</p>
          <Cards />
        </div>

        <div className="drinks">
          <p>Sucos</p>
          <Cards />
        </div>
      </Content>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}