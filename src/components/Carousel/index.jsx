import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css';

// Import required modules
import { Pagination } from 'swiper/modules';
import { Container } from './styles';

import { ButtonAdd } from '../ButtonAdd';
import { Button } from '../Button';

import { useState, useEffect } from 'react';
import { api } from "../../services/api";

export function Carousel() {

  const [dishes, setDishes] = useState([]);
  const imageUrl = `${api.defaults.baseURL}/files/`


  useEffect(() => {
    api.get('/dishes', {
      params: { name: '' },
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDY2Njc2NjEsImV4cCI6MTc0Njg0MDQ2MSwic3ViIjoiMSJ9.N6AUTFIluSiTX5ETnqa8DOsg7L1kQHZ-hNIWF3t2MgI'
      }
    })
      .then(response => setDishes(response.data)
      )
      .catch(error => console.error("erro ao buscar o prato", error))
  }, []);

  return (
    <Container>
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        navigation
      >
        {dishes.map(dishe => (
          <SwiperSlide className="Refeiçoes" key={dishe.id}>
            <img className="image" src={`${imageUrl}${dishe.image}`} alt={dishe.name} />

            <p className="title">{dishe.name}</p>
            <span className="description">
              {dishe.description}
            </span>
            <span className="price">{dishe.price}</span>

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
