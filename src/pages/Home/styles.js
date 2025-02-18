import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"


export const HeaderWrapper = styled.div`
grid-area: header;
grid-row: 1/2;
width: 100vw;
`


export const Container = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(6, 1fr);
height: 100vh;
grid-template-areas: 
"header" "header"
"flyer" "flyer"
"meals" "meals"
"mainDishes" "mainDishes"
"footer" "footer"
; 



.flyer {
  border: 1px dashed green;
  
  grid-area: flyer;
  grid-row: 2/3;
  
  width: 37.6rem;
  height: 12.0rem;
  margin: 4.4rem 1.6rem auto 3.6rem;
  
  background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
  
  position: absolut;
  z-index: 1;
  img {
    width: 19.1rem;
    height: 14.9rem;

    position: relative;
    z-index: 1;
    right: 8%;
    bottom: 26%;
  }
  
  > p, span {
    position: relative;
    display: flex;
    justify-content: space-evenly;
  }

  p {
    width: 21.5rem;
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
  span {
    width: 20.2rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
}

.meals {
  border: 1px dashed red;
  
  grid-area: meals;
  grid-row: 3/4;
}

.mainDishes {
  border: 1px dashed blue;

  grid-area: mainDishes;
  grid-row: 4/5;

  width: 376px;
  height: 7.5rem;
}

.mainDishesTwo {
  grid-area: mainDishes;
  grid-row: 5/5;
  
}

`

export const FooterWrapper = styled.div`
grid-area: footer;
grid-row: 9/10;
width: 100vw;


`