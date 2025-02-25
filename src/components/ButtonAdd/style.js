import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from '../../styles/deviceBreackPoints'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3.2rem;

  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  
  span {
    font-family: Roboto;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    span {
      font-size: 2.0rem;
      font-weight: bold;
      line-height: 3.2rem;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
  }
`

export const Remove = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`

export const Add = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
 
    svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    transform: scale(1.2);
    transition: all 0.5s;
  }
`

 