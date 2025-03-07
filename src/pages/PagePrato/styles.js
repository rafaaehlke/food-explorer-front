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
  height: auto;
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

.description {
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

@media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
  display: grid;
  grid-row: 2 / 4;
  margin: 1.6rem 5.6rem;
  justify-content: space-around;
  
  .conteudoPrato {
    width: 36.0rem;
    height: auto;
    gap: 4.2rem;
    align-items: center;
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  display: flex;
  flex-direction: column;
  padding-top: 2.4rem;
  padding-right: 12.2rem;
  padding-left: 12.2rem;
  justify-content: unset;
  .voltar {
  font-weight: 700;
  
  margin-left: 12.2rem;
  
  padding-top: 2.4rem;
  padding-bottom: 4.2rem;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  }

  .main {
  display: flex;
  align-items: center;
  margin-left: 12.2rem;

  gap: 4.7rem;


  .prato {
    display: flex;
    align-items: center;
  }

  .prato img {
    width: 390px;
    height: 389px;
    object-fit: contain;
  }

  .pratoInfo {
    width: 100%;
    display: flex;
    align-items: flex-start;

  .tituloPrato {
    font-family: Poppins;
    font-size: 4.0rem;
    font-weight: 500;
  }

  .description {
    font-family: Poppins;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 140%;    
  }
  } 

  .conteudoPrato {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   
    width: 68.7rem;
    height: auto;
    gap: 2.4rem;

    .tituloPrato {
      font-size: 4.0rem;
    }
  
    .description {
      text-align: start;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 400;
    }
  
    .marcadores {
      justify-content: flex-start;
      width: auto;
      height: auto;
    }

    .botoes {
      width: 29.4rem; 
      height: 100%;

      .incluir {
        font-family: Poppins;
        font-size: 1.4rem;
        font-style: normal;
        padding: 1.2rem 2.2rem;

        > svg {
          display: none;
        }

        &:hover  {
          box-shadow: 2px 7px 17px 0px rgba(0,0,0,0.75);
      }
      }
    }
  } 

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

