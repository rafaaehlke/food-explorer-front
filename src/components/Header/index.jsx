import { Container } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../Button'
import { PiReceiptLight, PiList  } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { RxExit } from "react-icons/rx"
import Logo from '../../assets/logo.svg'


export function Header() {
  return (
    <Container>
      <aside>
        <button type='button' id='list'>
          <PiList  size={32} />
        </button>

        <div className="nameRestaurant">

          <img src={Logo} alt="Logo Food Explorer" title='Logo Food Explorer' />
          <p>Food Explorer</p>
        </div>


        <div className="search">
          <Input icon={FaSearch} placeholder="Busque por pratos ou ingredientes"/>
        </div>

{/* Button versao mobile */}
        <button className='requestsButton'>
        <PiReceiptLight size={32}/>
        </button>

{/* Versao desktop */}
        <Button icon={PiReceiptLight} className="requests" title="Pedidos"/>

{/* Versao desktop */}
        <Button icon={RxExit} className="exit" />
      </aside>

    </Container>
  )
}