import { Container } from "./styles";
import Pao from '../../assets/paozinho.png'
import { ButtonAdd } from '../ButtonAdd'
import { Button } from '../Button'

export function Cards( {...props }) {
  return (
    <Container {...props}>
      <img src={Pao} alt="Foto prato com torradas e pessego" />
      <p>Torradas de Parma</p>
      <span className="description">Presunto de parma e rúcula em um pão com fermentação natural.</span>
      <span className="price">R$ 25,97</span>
      
      <div className="botoes">  
        <ButtonAdd className="quantidade" />
        <Button className="incluir" title="incluir" />
      </div>
    </Container>
  )
}