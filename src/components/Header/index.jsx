import { PiReceiptLight, PiList  } from "react-icons/pi";
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { FaSearch } from "react-icons/fa";
import Logo from '../../assets/logo.svg';
import { RxExit } from "react-icons/rx";
import { Container } from './styles';
import { Button } from '../Button';

export function Header() {
  const { user, signOut } = useAuth();
 
  const navigate = useNavigate();
    
  function handleOpenMenu(){
      navigate("/menu")
    }
  
  return (
    <Container>
      <aside>
        <button type='button' id='list' onClick={handleOpenMenu}>
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
        <Button icon={RxExit} className="exit" onClick={signOut}/>
      </aside>

    </Container>
  )
}