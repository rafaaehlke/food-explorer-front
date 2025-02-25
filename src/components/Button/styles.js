import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: .8rem;
  width: 100%;
  height: 4.8rem;
  
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  
  border: none;
  padding: 1.2rem 3.2rem;
  border-radius: .5rem;
  
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.10s;
  }

`
