import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};


  height: 3rem;
  border: none;
  padding: 0.75rem 2rem;
  margin-top: 2rem;
  border-radius: 0.3125rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  
  &:disabled {
    opacity: 0.5;
  }

`
