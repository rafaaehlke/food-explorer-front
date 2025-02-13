import { Container } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../Button'
import { PiListFill, PiReceiptLight } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import Logo from '../../assets/logo.svg'


export function Header() {
  return (
    <Container>
      <aside>
        <button type='button' id='list'>
          <PiListFill size={22} />
        </button>

        <div className="nameRestaurant">

          <img src={Logo} alt="Logo Food Explorer" title='Logo Food Explorer' />
          <p>Food Explorer</p>
        </div>

{/* Icone dentro do input, mas nao aparece */}
        <div className="search">
          <Input icon={FaSearch} placeholder="Busque por pratos ou ingredientes"/>
        </div>

{/*  deixei o icone fora para testes */}
        <button type='button' id='received'>
          <PiReceiptLight size={32} />
        </button>

        <Button id="requests" title="Pedidos" />
       
      </aside>
    </Container>
  )
}