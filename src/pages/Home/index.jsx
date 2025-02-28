import { Container, HeaderWrapper, FirstSection, Content, FooterWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Cards } from '../../components/Cards'
import Logo from '../../assets/pngegg.png'


import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';


export function Home() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged: () => {
      console.log('Slide alterado');
    },
  })

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
        <p> Refeiçoes</p>
        <Cards className="teste"/>

        <p>Pratos Principais</p>
        <Cards/>

        <p>Sucos</p>
        <Cards />
      </Content>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}