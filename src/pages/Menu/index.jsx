import { Container, Section } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { USER_ROLE } from '../../utils/roles';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';


export function Menu() {
  const { user } = useAuth()
  const [search, setSearch] = useState("")
  const [dishes, setDishes] = useState([])
  const [showDishes, setShowDishes] = useState(false)

  const navigate = useNavigate();

  function handleEditPrato() {
    navigate("/editPrato")
  }

  function newPrato() {
    navigate("/newPrato")
  }

  function handleProfile() {
    navigate("/Profile")
  }

  function handleSelect(prato) {
    navigate(`/prato/${prato.id}`);
    setSearch("");
    setShowDishes(false);
  }

  useEffect(() => {
    const fetchDishes = async () => {
      if (search.trim() === "") {
        setDishes([])
        return;
      }

      try {
        const response = await api.get(`/dishes?search=${search}`)
        setDishes(response.data)
        setShowDishes(true)
      } catch (error) {
        console.error("Erro ao buscar um produto.", error)
        alert("Nenhum prato encontrado!")
      }
    };

    const debounce = setTimeout(() => {
      fetchDishes()
    }, 500);

    return () => clearTimeout(debounce)
  }, [search])

  return (
    <Container>

      <Header />


      {
        [USER_ROLE.ADMIN, USER_ROLE.CLIENTE].includes(user.role) &&
        <Section>
            <Input
              icon={IoIosSearch}
              placeholder="Buscar pratos ou ingredientes"
              title="Buscar pratos ou ingredientes"
              onChange={e => setSearch(e.target.value)}
              onFocus={() => setShowDishes(true)}
              onBlur={() => setTimeout(() => setShowDishes(false), 200)}
            />

            {/* DropDown search menu */}
          <div className="search">
            {
              showDishes && dishes.length && (
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
          {user.role === USER_ROLE.ADMIN && <Button id="editarPratos" title="Editar Pratos" onClick={handleEditPrato} />}
          {user.role === USER_ROLE.ADMIN && <Button id="cadastrarPratos" title="Novo Prato" onClick={newPrato} />}
          {(user.role === USER_ROLE.CLIENTE || USER_ROLE.ADMIN) && <Button id="profile" title="Perfil" onClick={handleProfile} />}

        </Section>
      }

      <Footer />
    </Container>
  )
}