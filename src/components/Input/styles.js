import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem; 
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  border-radius: 0.5rem; 
  
  
  > input {
    height: 3rem;
    width: 100%;
    
    border: 0;
    padding: 0.75rem 0.875rem; 
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`;