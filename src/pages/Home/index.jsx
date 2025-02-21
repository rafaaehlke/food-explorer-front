import { Container, HeaderWrapper, FooterWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import Principal from '../../assets/pngegg.png'
import Salada from '../../assets/salada.png'
import Pao from '../../assets/paozinho.png'
import Suco from '../../assets/sucocanela.png'


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



      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}