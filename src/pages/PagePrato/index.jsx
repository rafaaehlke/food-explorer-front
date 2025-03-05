import { Container, HeaderWrapper, Content, FooterWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { ButtonAdd } from '../../components/ButtonAdd'
import { PiCaretLeft, PiReceiptLight } from "react-icons/pi";
import {  Tag } from '../../components/Tag'
 
import Prato from '../../assets/prato.png'

export function PagePrato() {
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

        <div className="prato">
          <img src={Prato} alt="Imagem do prato selecionado" />
        </div>

        <div className="conteudoPrato">
          <div className="pratoInfo">
            <p className='tituloPrato'>Torradas Parma</p>
            <span className='infoPrato'>Presunto de parma e rúcula em um pão com fermentação natural.</span>
          </div>

          <section className="marcadores">
          <Tag title="alface"/>
          <Tag title="queijo"/>
          <Tag title="margarina"/>
          </section>

          <div className="botoes">
            <ButtonAdd className="quantidade" />
            <Button
              icon={PiReceiptLight}
              className="incluir"
              title="pedir ∙ R$ 25,00"
            />
          </div>
        </div>
      </Content>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  )
}