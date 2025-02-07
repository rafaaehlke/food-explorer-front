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
    align-items: flex-start;
    gap: 12px;
    padding-top: 158px;
  }
  
  h1 {
    font-size: 38px;
    font-weight: bold;
  }
  
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding-bottom: 8px;
  }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
     
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 
      "title form"
      "title form";
      
      section {
        border: 1px solid purple;
        text-align: end;
      }

     
    }
  
  `

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 73px;
  margin-left: 64px;
  margin-right: 47px; 

  #createAccount {
    display: none;
  }

  #haveAccount {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS_LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
     
     background-color: ${({ theme }) => theme.COLORS.DARK_700};
     padding: 64px;
     margin: 90px 108px 112px auto;
     border-radius: 16px;

     #createAccount {
      display: block;
      width: 348px;
      margin: 64px;
      text-align: center;
    }
    
    h1 {
      font-family: Poppins;
      font-size: 32px;
      font-weight: 500;
     }
  }
`