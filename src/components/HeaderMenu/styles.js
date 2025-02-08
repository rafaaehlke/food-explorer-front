import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  height: 7.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  aside {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 3.5rem 1.75rem;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  span {
    display: none;
  }

`
