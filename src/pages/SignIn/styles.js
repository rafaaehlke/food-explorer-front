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
    gap: 2.0rem;
    padding-top: 15.7rem;
  }
  
  h1 {
    font-size: 3.8rem;
    line-height: 4.4rem;
    font-weight: bold;
  }

  #titleForm {
    display: none;
  }
  
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
  }

  .buttons {
    margin-top: 1.4rem;
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
  margin-top: 7.3rem;
  margin-left: 6.5rem;
  margin-right: 4.7rem; 

  #login {
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    display: flex;
    justify-content: center;
  }
  
  #createAccount {
   border: transparent;
   background-color: transparent;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
     
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
    margin-top: 14.2rem;
    margin-right: 10.8rem;
        
    padding-left: 6.4rem;
    padding-right: 6.4rem;
    padding-bottom: 6.4rem;

     #titleForm {
      display: block;
      width: 34.8rem;
      margin: 6.4rem 6.4rem 3.2rem 12.4rem;
      text-align: center;
    }

    span {
    padding-top: 3.2rem;
    }

    #signIn {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
      border-radius: .5rem;
    }
    
    .buttons {
      display: flex;
      margin-top: 3.2rem;
      gap: 10px 10px;
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