import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"

export const Container = styled.nav`
  min-height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  flex-direction: row;
  


.Logo {
  width: 1.37rem; 
  height: 1.12rem;
  padding-left: 0.4rem;
}

section, logo {
  width: 9rem;
}

h1 {
  padding-left: 0.62rem; 
  padding-right: 0.5rem;   color: ${({ theme }) => theme.COLORS.LIGHT_700};
}

section, aside {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.5rem auto; 
  font-size: 0.75rem; 
}

aside{
  width: 13.87rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};  
}


 @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
 
  section {
    display: flex;
    align-items: center;
    width: 42.87rem;
    margin-left: 4rem;
    margin-top: 1.5rem;
  }

  .Logo {
    width: 1.8rem;
    height: 1.8rem;
  }

  section > h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  aside {
    display: flex;
  }

  aside > span {
    font-size: 0.9rem;
    text-align: center;
    white-space: nowrap;
  }
 } 
`
