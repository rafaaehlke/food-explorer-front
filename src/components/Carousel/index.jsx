import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css';

// Import required modules
import { Pagination } from 'swiper/modules';
import { Container } from './styles';

import { ButtonAdd } from '../ButtonAdd';
import { Button } from '../Button';

import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';


export function Carousel({ dishes = [] }) {
  const imageUrl = `${api.defaults.baseURL}/files/`;
  const navigate = useNavigate();


  return (
    <Container>
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={16}
        pagination={{ clickable: true }}
        navigation
      >
        {dishes.map(dishe => (
          <SwiperSlide className="Carousel" key={dishe.id} >
            <img className="image"
              src={`${imageUrl}${dishe.image}`}
              alt={dishe.name}
              onClick={() => navigate(`/prato/${dishe.id}`)}
            />

            <p className="title">{dishe.name}</p>

            <span className="description"
              onClick={() => navigate(`/prato/${dishe.id}`)}
            >
              {dishe.description}
            </span>
            
            <span className="price">R$ {dishe.price}</span>

            <div className="botoes">
              <ButtonAdd className="quantidade" />
              <Button className="incluir" title="incluir" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}