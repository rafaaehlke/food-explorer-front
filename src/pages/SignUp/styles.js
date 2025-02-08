import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints";


export const Container = styled.div`
  
  div {
    flex: 1;
    max-width: 100%;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    padding-top: 9.8rem;
  }
  
  section > h1 {
    font-size: 2.4rem;
    font-weight: bold;
  }
  
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding-bottom: .6rem;
  }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
     
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 
      "title form"
      "title form";
      
      section {
        padding: 0;
      }

      section > h1 {
        font-size: 3rem;
        font-weight: bold;
      }
    }
  
  `

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.6rem;
  margin-left: 4rem;
  margin-right: 2.8rem; 

  #titleForm {
    display: none;
  }

  #haveAccount {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS_LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: .8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
     background-color: ${({ theme }) => theme.COLORS.DARK_700};
     padding: 4rem;
     margin: 5.6rem 6.8rem 7rem auto;
     border-radius: 1rem;

     #titleForm {
      display: block;
      width: 348px;
      margin: 0rem 4rem;
      padding-bottom: 2rem;
      text-align: center;
    }
    
    h1 {
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 500;
     }
  }

    // Ipad screen
  @media screen and (min-width: 820px) and (max-width: 820px)  {
    display: flex;
    min-width: 100%;

    #titleForm > h1 {
    display: flex;
    }
  }

`