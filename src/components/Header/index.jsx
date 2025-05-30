import { PiReceiptLight, PiList } from "react-icons/pi";
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { FaSearch } from "react-icons/fa";
import { api } from "../../services/api";
import Logo from '../../assets/logo.svg';
import { RxExit } from "react-icons/rx";
import { Container } from './styles';
import { Button } from '../Button';


export function Header() {
  const { signOut } = useAuth();
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);
  const [showDishes, setShowDishes] = useState(false);


  const navigate = useNavigate();

  function handleOpenMenu() {
    navigate("/menu")
  }

  function handleSelect(prato) {
    navigate(`/prato/${prato.id}`);
    setSearch("");
    setShowDishes(false);
  }

  function backHome() {
    navigate("/")
  }

  // search input
  useEffect(() => {
    const fetchDishes = async () => {
      if (search.trim() === "") {
        setDishes([]);
        return;
      }

      try {
        const response = await api.get(`/dishes?search=${search}`)
        setDishes(response.data)
        setShowDishes(true)
      } catch (error) {
        console.error("Erro ao buscar produtos.", error)
      }
    };

    // executa fetchDishes apos um atraso de 500ms, retornando apenas a ultima chamada executada
    const debounce = setTimeout(() => {
      fetchDishes()
    }, 500);

    // antes de definir um setTimeout novo, o anterior é cancelado
    return () => clearTimeout(debounce)
  }, [search])

  return (
    <Container>
      <aside>
        <button type='button' id='list' onClick={handleOpenMenu}>
          <PiList size={32} />
        </button>

        <div className="nameRestaurant">

          <img src={Logo} alt="Logo Food Explorer" title='Logo Food Explorer' onClick={backHome} />
          <p>Food Explorer</p>
        </div>


        <div className="search">
          <Input
            icon={FaSearch}
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setShowDishes(true)}
            onBlur={() => setTimeout(() => setShowDishes(false), 200)}
          />

          {/* dropDown input */}
          {showDishes &&  dishes.length > 0 && (
            <ul>

              {
                dishes.map((pratos) =>
                  <li
                    key={pratos.id}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSelect(pratos)}
                  >
                    {pratos.name}
                  </li>
                )}
            </ul>
          )}


        </div>

        {/* Button versao mobile */}
        <button className='requestsButton'>
          <PiReceiptLight size={32} />
        </button>

        {/* Versao desktop */}
        <Button icon={PiReceiptLight} className="requests" title="Pedidos" />

        {/* Versao desktop */}
        <Button icon={RxExit} className="exit" onClick={signOut} />
      </aside>

    </Container>
  )
}