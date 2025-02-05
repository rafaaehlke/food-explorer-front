import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};


  height: 48px;
  border: none;
  padding: 12px 32px;
  margin-top: 32px;
  border-radius: 5px;
  font-weight: 500; 
  font-family: 'Popins', sans-serif;
  
  &:disabled {
    opacity: 0.5;
  }

`
