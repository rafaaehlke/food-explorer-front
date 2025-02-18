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
    gap: 2.2rem;
    padding-top: 15.7rem;
  }
  
  section > h1 {
    font-size: 3.7rem;
    font-weight: bold;
  }
  
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding-bottom: .8rem;
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
        font-size: 4.2rem;
        font-weight: bold;
      }
    }
  
  `

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14.2rem;
  margin-left: 6.4rem;
  margin-right: 4.4rem; 

  #titleForm {
    display: none;
  }

  #haveAccount {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
   
    margin-top: 3.2rem;
   
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS_LIGHT_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
     background-color: ${({ theme }) => theme.COLORS.DARK_700};
     padding: 6.4rem;
     margin: 9.0rem 10.8rem 11.2rem auto;
     border-radius: 1.6rem;

     #titleForm {
      display: block;
      width: 34.8rem;
      margin: 0 6.4rem;
      padding-bottom: 3.2rem;
      text-align: center;
    }
    
    h1 {
      font-family: Poppins;
      font-size: 3.2rem;
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