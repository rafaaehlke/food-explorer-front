import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"


export const Container = styled.div`
margin: 0 auto;
min-height: 100vh;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-areas: 
"header" "header"
"flyer" "flyer"
"meals" "meals"
"mainDishes" "mainDishes"
"footer" "footer"
; 

.flyer {
grid-area: flyer;
width: 376px;
background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};

}

.meals {
  grid-area: meals;
}

.mainDishes {
  grid-area: mainDishes;
}

.mainDishesTwo {
  grid-area: mainDishes;
}

`


export const Section = styled.section`

`