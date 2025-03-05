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
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
display: grid;
grid-area: Content;
grid-column: 1/2;
grid-row: 3/4;

height: 67.7rem;

.voltar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  width: 21.4rem;
  padding-top: 3.6rem;
  
  background-color: transparent;
  border: none;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins;
  font-size: 2.4rem;
  font-weight: 500;
  text-transform: lowercase;

}

.prato img {
  display: flex;
  width: 264px;
  height: 264px;
  object-fit: contain;
  
  margin: 0 auto;
  padding: 1.6rem 2.4rem;
}

.conteudoPrato {
  display: flex;
  flex-direction: column;
  width: 31.6rem;
  height: 100%;
  gap: 2.4rem;

}

.pratoInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 31.6rem;

.tituloPrato {
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins;
  font-size: 2.7rem;
  font-weight: 500;
  line-height: 140%;
  padding-bottom: 2.4rem;
  }

.infoPrato {
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;
  font-family: Poppins;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
}
}

.marcadores {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.4rem;
  
  width: 31.6rem;
  height: auto;
}

.botoes {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 3.79rem;

  .quantidade {
    height: 3.79rem;
  }

.incluir {
  height: 3.79rem;
  
  font-family: Poppins;
  font-size: .9rem;
  font-weight: 500;
  line-height: 1.6rem;
  text-align: center;
  font-style: normal;

  > svg {
    width: 2.1rem;
    height: 2.1rem;
    }
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 4.7rem;

.voltar {
  font-weight: 700;
  gap: 0;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }
}

.prato {
  display: flex;
  align-items: center;
  margin-top: 4.2rem;
  margin-left: 12.15rem;
  padding-bottom: 15.5rem;
}

.prato img {
  border: 1px solid green;
  width: 390px;
  height: 389px;
  object-fit: contain;
}

.conteudoPrato {
  border: 1px solid red;
  flex-direction: column;
  
  width: 68.7rem;
  height: 30.0rem;

  margin-top: 14.5rem;
  margin-right: 12.1rem;

  .tituloPrato {
    font-size: 4.0rem;
    width: 35.4rem;
    height: 5.6rem;
  }
  
  .infoPrato {
    border: 1px solid rebeccapurple;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;

    width: 687px;
    height: 68px;
  }
}

.marcadores {
  justify-content: flex-start;
  width: auto;
  height: auto;
}

.botoes {
  padding-top: 4.8rem;
  width: 294px;
  height: 48px;
}
}
`

export const FooterWrapper = styled.div`
  grid-area: FooterWrapper;
  grid-column: 1/2;
  grid-row: 4/5;

  width: 100%;
  height: 100%;
`

