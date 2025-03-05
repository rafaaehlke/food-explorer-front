import styled from 'styled-components';

export const Container = styled.span`
  font-size: 1.4rem;
  font-family: Poppins;
  padding: .4rem .8rem;
  border-radius: .5rem;
  margin-right: .6rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: var(--Dark-Dark-1000, #192227);

  text-align: center;

  width: auto;
  height: 3.2rem;
`; 