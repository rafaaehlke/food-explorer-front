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


      <section className="flyer">
        <img src={Principal} alt="Logo flyer" />
        <div className="wrapper-flyer">
          <p>Sabores inigualáveis</p>
          <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
        </div>
      </section>

      <section className="meals">
        <p>Refeições</p>

          {/* Refeicoes 1 */}
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <img src={Salada} alt="" />
            <p>Salada Ravanello</p>
            <span>R$ 49,97</span>
            <Button title="incluir"></Button>
          </div>

          {/* Refeicoes 1 */}
          <div className="keen-slider__slide">
            <img src={Salada} alt="" />
            <p>Salada</p>
            <span>R$ 49,97</span>
            <Button title="incluir"></Button>
          </div>
        </div>
      </section>

      <section className="mainDishes">
        <p>Pratos Principais</p>

        <div ref={sliderRef} className="keen-slider">
         
         {/* Prato 1 */}
          <div className="keen-slider__slide">
            <img src={Pao} alt="" />
            <p>Misto Quente</p>
            <span>R$ 49,97</span>
            <Button title="incluir"></Button>
          </div>

        {/* Prato 2 */}
          <div className="keen-slider__slide">
            <img src={Principal} alt="" />
            <p>Salada</p>
            <span>R$ 49,97</span>
            <Button title="incluir"></Button>
          </div>
        </div>
      </section>

      <section className="drinks">
        <p>Bebidas</p>
        <div ref={sliderRef} className="keen-slider">
          
          {/* Suco 1 */}
          <div className="keen-slider__slide">
            <img src={Suco} alt="" />
            <p className='drink'>Suco Maracuja</p>
            <span>R$ 49,97</span>
            <Button title="incluir"></Button>
          </div>

          {/* Suco 2 */}
          <div className="keen-slider__slide">
            <img src={Principal} alt="" />
            <p>Salada</p>
            <span>R$ 49,97</span>
            <Button title="incluir"></Button>
          </div>
        </div>
      </section>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}