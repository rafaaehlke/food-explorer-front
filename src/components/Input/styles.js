import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  border-radius: 8px;
  
  > input {
    height: 48px;
    width: 100%;
    
    border: 0;
    padding: 12px 14px;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`