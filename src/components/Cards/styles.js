import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreackPoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  width: 21.0rem;
  height: 29.2rem;
  padding: 2.4rem 2.4rem;
  border-radius: .8rem;
  border: 1px solid var(--Dark-Dark-300, #000204);
  background: var(--Dark-Dark-200, #00070A);

  > img {
    width: 8.8rem;
    height: 8.8rem;
  } 

  p {
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

  .quantidade {
    font-family: Poppins;
    font-size: 1.4rem;
  }

  .incluir {
    width: 100%;
    height: 3.2rem;
    padding: 1.2rem 2.4rem;

  }
  
  .botoes {
      width: 16.2rem;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 30.4rem;
    height: 46.2rem;
    gap: 1.5rem;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      
      width: 17.6rem;
      height: 17.6rem;
    }

    p {
      font-size: 2.4rem;
    }

    .description {
      display: flex;
      text-align: center;
      
      font-size: 1.4rem;
      font-style: normal;
      
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .price {
      font-size: 3.2rem;
      font-weight: 400;
    }
    
    .incluir {
      width: 9.2rem;
      height: 4.8rem;

      padding: 1.2rem 2.4rem;
    }

    .botoes {
      display: flex;
      flex-direction: row;
      gap: 1.6rem;
      align-items: center;
    }

   }
`