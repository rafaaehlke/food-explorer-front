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
    gap: 1.2rem;
    padding-top: 9.8rem;
  }
  
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
  }

  #titleForm {
    display: none;
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
        grid-area: title;
        padding-top: 0
      }
     
    }
  
  `

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.6rem;
  margin-left: 4rem;
  margin-right: 2.8rem; 


  
  #createAccount {
   border: transparent;
   background-color: transparent;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
     
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1rem;
    
    margin-top: 8.8rem;
    margin-right: 6.8rem;
    
    padding-left: 4rem;
    padding-right:4rem;
    padding-bottom: 4rem;

     #titleForm {
      display: block;
      width: 348px;
      margin: 4rem 4rem 2rem 4rem;
      text-align: center;
    }

    #signIn {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
      border-radius: 5px;
    }
    
    h1 {
      font-family: Poppins;
      font-size: 32px;
      font-weight: 500;
     }
  }

  // Ipad screen
  @media screen and (min-width: 820px) and (max-width: 820px)  {
    display: flex;
    min-width: 100%;

    #titleForm {
    display: flex;
    }
  }

 
`