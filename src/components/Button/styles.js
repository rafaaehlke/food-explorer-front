import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: .5rem;
  width: 100%;
  height: 3rem;
  
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.3125rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &:disabled {
    opacity: 0.5;
  }

`
