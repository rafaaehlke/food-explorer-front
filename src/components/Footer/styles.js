import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"

export const Container = styled.nav`
  min-height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  flex-direction: row;
  


.Logo {
  width: 2.2rem; 
  height: 1.8rem;
 
}

section {
 
  width: 11.4rem;
  padding-left: 2.77rem;
}

h1 {
  min-width: 11.4rem;
  padding-left: .64rem; 
  padding-right: .8rem;   
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
}

section, aside {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2.4rem auto; 
  font-size: 1.2rem; 
}

aside{
  width: 22.2rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  padding-left: 0.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};  
}


 @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
 
  section {
    display: flex;
    align-items: center;
    width: 68.48rem;
    margin-left: 6.4rem;
    margin-top: 2.4rem;
  }

  .Logo {
    width: 2.88rem;
    height: 2.88rem;
  }

  section > h1 {
    font-size: 2.4rem;
    font-weight: bold;
  }

  aside {
    display: flex;
  }

  aside > span {
    font-size: 1.4rem;
    text-align: center;
    white-space: nowrap;
  }
 } 
`
