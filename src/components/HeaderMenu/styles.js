import styled from "styled-components";

export const Container = styled.nav`
  border: 1px dashed blue;
  height: 7.125rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  aside {
    border: 0.0625rem solid green;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
    margin: 3.5rem 1.75rem 1.5rem 1.75rem;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  h1 {
    font-size: 1.3125rem;
    font-weight: 400;
  }

  span {
    display: none;
  }

`
