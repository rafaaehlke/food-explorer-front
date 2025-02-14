import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"


export const Container = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(4, 1fr);
height: 100vh;
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
  
  width: 376px;
  height: 7.5rem;
  
  background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  
  border: 1px dashed green;
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

export const HeaderWrapper = styled.div`
border: 1px solid orange;

grid-area: header;
grid-row: 1/2;

`

export const FooterWrapper = styled.div`
grid-area: footer;
grid-row: 9/10;

`