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


export function Carousel({ dishes = [] }) {
  const imageUrl = `${api.defaults.baseURL}/files/`;

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
          <SwiperSlide className="Carousel" key={dishe.id}>
            <img className="image" src={`${imageUrl}${dishe.image}`} alt={dishe.name} />

            <p className="title">{dishe.name}</p>
            <span className="description">{dishe.description}</span>
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