import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 11.4rem 1fr 1fr;

  grid-template-areas: 
  "HeaderWrapper HeaderWrapper"
  "FirstSection FirstSection"
  "Content Content"
  "FooterWrapper FooterWrapper";
`

export const HeaderWrapper = styled.div`
  grid-area: HeaderWrapper;
  grid-column: 1/2;
  grid-row: 1/1;
`

export const FirstSection = styled.div`
  grid-area: FirstSection;
  grid-column: 1/2;
  grid-row: 2/3;

  background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
  border-radius: 2.917px;
  width: 30.0rem;
  height: 12.0rem;
  margin-top: 4.4rem;
  margin-left: 1.1rem;

  display: grid;
  grid-template-columns: repeat(2, 100px); /* Duas colunas: a primeira para Logo e a segunda para teste */
  column-gap: 1rem; /* Espaçamento entre as colunas, ajuste conforme necessário */

  position: relative;
  z-index: 1;
 
 .Logo {
  position: relative;
  z-index: 2;
  top: -14%;
  left: -17%;

  img {
    /* width: 19.1rem;
    height: 14.9rem; */
    // tamanho reajustado para telas minimas 320px
    width: 16.1rem;
    height: 13.9rem;
    opacity: 0.8;
  }

 }

 .textosBanner {
  display: flex;
  flex-direction: column;
  
  width: 20.0rem;
  
  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 30px;

  p {
    font-family: Poppins;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  span {
    font-family: Poppins;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
 }

// Desktop
 @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  width: 112.0rem;
  height: 26.0rem;

  margin: 16.4rem auto 6.2rem;

  .Logo {
    top: -36%;
    left: -50%;
    
    img {
      width: 632px;
      height: 406px;
    }
  }

  .textosBanner {
    width: 42.2rem;
    margin-right: 10.0rem;
    padding-bottom: 8.2rem;
    
    p { 
      font-size: 4.0rem;
      font-weight: 500;
    }

    span {
      font-family: Roboto;
      font-size: 1.6rem;
      line-height: 100%
    }
  }
 }
`;

export const Content = styled.div`
display: grid;
grid-area: Content;
grid-column: 1/2;
grid-row: 3/4;
row-gap: 2.4rem;

padding-top: 6.2rem;
padding-left: 2.4rem;
padding-bottom: 2.4rem;

.tituloPrincipal {
  font-size: 1.8rem;
  padding-bottom: 2.4rem;
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
 margin: 0 auto;
 width: 136.8rem;
 height: 240.0rem;


.tituloPrincipal {
  font-family: Poppins;
  font-size: 3.2rem;
  line-height: 140%;
}


  
 }
`
export const FooterWrapper = styled.div`
  grid-area: FooterWrapper;
  grid-column: 1/2;
  grid-row: 4/5;

`

