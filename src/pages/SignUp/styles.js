import styled from "styled-components";


export const Container = styled.div`
  > section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 158px 47px 0 64px;
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
  `

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 73px;
  margin-left: 64px;
  margin-right: 47px; 

  #haveAccount {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS_LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }
`