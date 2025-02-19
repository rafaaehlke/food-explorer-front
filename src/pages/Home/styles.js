import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"


export const HeaderWrapper = styled.div`
grid-area: header;
grid-row: 1/2;
width: 100vw;
`


export const Container = styled.div`
height: 100vh;
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(6, 1fr);
row-gap: 2.4rem;

grid-template-areas: 
"header" "header"
"flyer" "flyer"
"meals" "meals"
"mainDishes" "mainDishes"
"footer" "footer"
; 



.flyer { 
  grid-area: flyer;
  grid-row: 2/3;
  
  width: 37.6rem;
  height: 12.0rem;
  margin-left: 3.0rem;
  margin-top: 2.4rem;
  margin-right: 1.6rem;
  
  background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
  
 
  img {
    width: 19.1rem;
    height: 14.9rem;

    position: relative;
    z-index: 1;
    right: 8%;
    bottom: 26%;
  }
  
 
}

.wrapper-flyer {
  width: 21.5rem;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  position: relative;
  z-index: 2;
  left: 44%;
  top: -100%;

  p {
    width: 21.5rem;
    height: 2.5rem;
    
    font-family: "Poppins", serif;
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  
  span {
    width: 20.2rem;
    height: 3.4rem;

    font-family: "Poppins", serif;
    font-size: 1.2rem;
    line-height: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
  }
}

// Refeiçoes
.meals {
  grid-area: meals;
  grid-row: 3/4;
  width: 21.0rem;
  height: 29.2rem;
  
  img {
    width: 8.8rem;
    height: 8.8rem;
    margin: 2.4rem 6.1rem;
  }

span {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;

  color: ${({theme}) => theme.COLORS.CAKE_200};
  margin: 2.4rem 6.1rem;
  }

}

.keen-slider {
  margin: 2.4rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border-radius: .8rem;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
}

.mainDishes {
  grid-area: mainDishes;
  grid-row: 4/5;

  width: 21.0rem;
  height: 29.2rem;

  img {
    width: 8.8rem;
    height: 8.8rem;
  
    margin: 2.4rem 6.1rem;
  }
}

.drinks {
  grid-area: mainDishes;
  grid-row: 5/5;
  width: 21.0rem;
  height: 29.2rem;
  
  img {
    width: 8.8rem;
    height: 8.8rem;
  
    margin: 2.4rem 6.1rem;
  }

  .drink {
  text-align: center
  }
}

// Estilização padrão
.meals,
.mainDishes,
.drinks { 
  p {
    font-family: Poppins;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    margin-left: 2.4rem; 
  }
}
`

export const FooterWrapper = styled.div`
grid-area: footer;
grid-row: 9/10;
width: 100vw;


`