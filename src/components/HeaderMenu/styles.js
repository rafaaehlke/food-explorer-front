import styled from "styled-components";

export const Container = styled.nav`
  border: 1px dashed blue;
  height: 114px;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  aside {
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
    margin: 56px 28px 24px 28px;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    
  }

  h1 {
    font-size: 21px;
    font-weight: 400;
  }

  span {
    display: none;
  }
`
