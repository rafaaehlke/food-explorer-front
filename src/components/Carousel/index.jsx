import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import { Container } from './styles';

import Prato from '../../assets/prato.png';
import { ButtonAdd } from '../ButtonAdd';
import { Button } from '../Button';

export function Carousel() {
  return (
    <Container>
      <Swiper
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        navigation
      >
        <SwiperSlide className="Refeiçoes">
          <img className="image" src={Prato} alt="Prato Comida" />

          <p className="title">Torradas de Parma</p>
          <span className="description">
            Presunto de parma e rúcula em um pão com fermentação natural.
          </span>
          <span className="price">R$ 25,97</span>

          <div className="botoes">
            <ButtonAdd className="quantidade" />
            <Button className="incluir" title="incluir" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="Drinks">
          <img className="image" src={Prato} alt="Prato Comida" />

          <p className="title">Torradas de Parma</p>
          <span className="description">
            Presunto de parma e rúcula em um pão com fermentação natural.
          </span>
          <span className="price">R$ 25,97</span>

          <div className="botoes">
            <ButtonAdd className="quantidade" />
            <Button className="incluir" title="incluir" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="Drinks">
          <img className="image" src={Prato} alt="Prato Comida" />

          <p className="title">Torradas de Parma</p>
          <span className="description">
            Presunto de parma e rúcula em um pão com fermentação natural.
          </span>
          <span className="price">R$ 25,97</span>

          <div className="botoes">
            <ButtonAdd className="quantidade" />
            <Button className="incluir" title="incluir" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="Drinks">
          <img className="image" src={Prato} alt="Prato Comida" />

          <p className="title">Torradas de Parma</p>
          <span className="description">
            Presunto de parma e rúcula em um pão com fermentação natural.
          </span>
          <span className="price">R$ 25,97</span>

          <div className="botoes">
            <ButtonAdd className="quantidade" />
            <Button className="incluir" title="incluir" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="Drinks">
          <img className="image" src={Prato} alt="Prato Comida" />

          <p className="title">Torradas de Parma</p>
          <span className="description">
            Presunto de parma e rúcula em um pão com fermentação natural.
          </span>
          <span className="price">R$ 25,97</span>

          <div className="botoes">
            <ButtonAdd className="quantidade" />
            <Button className="incluir" title="incluir" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
