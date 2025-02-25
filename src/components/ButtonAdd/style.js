import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3.2rem;

  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  background-color: transparent;

  > svg {
    display: flex;
    justify-content: center;
    align-items: center;
   
    width: 10.0rem;
    height: 3.2rem;
  }

  span {
    font-size: 2.0rem;
    line-height: 3.2rem;
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`