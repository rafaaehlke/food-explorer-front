import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  aside {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    margin: 5.6rem 2.8rem;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 400;
  }

  span {
    display: none;
  }

`
