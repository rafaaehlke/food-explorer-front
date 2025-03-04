import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreackPoints';

export const Container = styled.div`
  margin: 0 auto;

.swiper {
  width: 30.0rem;
  height: 29.2rem;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  min-width: 21.0rem; 
  height: 29.2rem;
  padding: 2.4rem 2.4rem;

  border-radius: .8rem;
  border: 1px solid var(--Dark-Dark-300, #000204);
  background: var(--Dark-Dark-200, #00070A);
}

.swiper-slide img {
  display: block;
  width: 8.8rem;
  height: 8.8rem;
  object-fit: contain;
}

.title {
    width: 100%;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-family: Poppins;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    text-align: center;
}

.description {
  display: none;
}

.price {
    color:  ${({ theme }) => theme.COLORS.CAKE_200};
  }

 .botoes {
  width: 16.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.quantidade {
  font-family: Poppins;
  font-size: 1.4rem;
}

.incluir {
  width: 100%;
  height: 3.2rem;
  padding: 1.2rem 2.4rem;

  }
  


@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  margin: 0 auto;
  width: 100%;
  height: 46.2rem;

  .swiper {
    display: flex;
    width: 140.2rem; //esta do tamanho do container, mas nao responsivo
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .swiper-slide {
    width: 30.0rem;
    height: 100%;
  }

  .swiper-slide img {
    width: 176px;
    height: 176px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 140%
  }

  .description {
  display: flex;
  text-align: center;
  font-size: 1.4rem;
  color: ${({theme}) => theme.COLORS.LIGHT_400};
  font-weight: 400;
  line-height: 160%;
}

.price {
  font-size: 3.2rem;
}

.botoes {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.quantidade {
  font-size: 2.0rem;
  width: 9.2rem;
  height: 4.8rem;
}

.incluir {
  height: 4.8rem;
  padding: 1.2rem 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px
}
}
` 