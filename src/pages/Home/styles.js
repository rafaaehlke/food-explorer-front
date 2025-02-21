import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"


export const HeaderWrapper = styled.div`
grid-area: header;
grid-row: 1/2;
width: 100vw;
`


export const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(6, 1fr);
row-gap: 2.4rem;


grid-template-areas: 
"header header"
"flyer flyer"
"meals meals"
"mainDishes mainDishes"
"footer footer"
; 

height: 100vh;

`

export const FooterWrapper = styled.div`
grid-area: footer;
grid-row: 9/10;
width: 100vw;


`