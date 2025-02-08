import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"

export const Container = styled.nav`
   height: 7.125rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

section {
  display: flex;
  flex-direction: row;
}

.Logo {
  width: 1.375rem; 
  height: 1.125rem; 
}

h1 {
  padding-left: 0.625rem; 
  padding-right: 0.5rem;   color: ${({ theme }) => theme.COLORS.LIGHT_700};
}

section, aside {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.5rem auto; 
  font-size: 0.75rem; 
  text-align: right;
}


  /* @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

  } */
`
