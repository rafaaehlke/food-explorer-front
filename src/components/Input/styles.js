import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem; 
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  border-radius: 0.8rem; 
  
  
  > input {
    height: 4.8rem;
    width: 100%;
    
    border: 0;
    padding: 1.2rem 1.4rem; 
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
      text-align: start;
    }
    
  }

  > svg {
   width: 2.4rem;
   height: 2.4rem;
   margin-left: 10rem;
   margin-right: 1.4rem;
  }
`;