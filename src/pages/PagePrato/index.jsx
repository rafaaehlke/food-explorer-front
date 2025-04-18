import { Container, HeaderWrapper, Content, FooterWrapper } from './styles'
import { PiCaretLeft, PiReceiptLight } from "react-icons/pi";
import { ButtonAdd } from '../../components/ButtonAdd'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { useAuth } from "../../hooks/auth";
import Prato from '../../assets/prato.png';
import { Tag } from '../../components/Tag';


export function PagePrato() {
  const { user } = useAuth();

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
            <img src={Prato} alt="Imagem do prato selecionado" />
          </div>

          <div className="conteudoPrato">

            <div className="pratoInfo">
              
              <p className='tituloPrato'>Torradas Parma</p>
              <span className='description'>Presunto de parma e rúcula em um pão com fermentação natural.</span>
            
            </div>

            <section className="marcadores">
              <Tag title="alface" />
              <Tag title="queijo" />
              <Tag title="margarina" />
            </section>

            <div className="botoes">
              <ButtonAdd className="quantidade" />
              <Button
                icon={PiReceiptLight}
                className="incluir"
                title="incluir ∙ R$ 25,00"
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