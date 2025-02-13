import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreackPoints'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  height: 7.13rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  
  // main
  aside {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 23.25rem;
    margin-top: 3.4rem;
    margin-right: 1.74rem;
    margin-left: 1.74rem;
    margin-bottom: 1.5rem;
    //margin: 3.4rem 1.74rem 1.5rem 1.74rem;
  }

  // Logo central
.nameRestaurant {
  display: flex;
  align-items: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  p {
    font-size: 1.37rem;
    line-height: 1.56rem;
    font-weight: bold;
    text-transform: lowercase;
    
    margin-left: .5rem;
    margin-right: 1rem;
  }
}

  // Button esquerda
  #list {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  // Button Direita
  #received {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  // Input
  .search {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    aside {
      width: 85.5rem;
      height: 3rem;
      margin: 1.5rem 7.68rem;
    }

    .nameRestaurant {
      img {
        width: 1.87rem;
        height: 1.87rem;
        margin-left: .62rem;
      }

      p {
        width: 9.12rem;
      }
    }

    .search {
      display: block;
      width: 100%;
      margin-right: 2rem;
    } 

     .received {
     display: flex;
     align-items: center;
     flex-direction: row;
     }

     #requests {
     width: 13.5rem;
     font-family: 'Poppins', sans-serif;
     font-size: .87rem;
     font-weight: 400;
     }
  }
`
