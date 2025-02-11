import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"


export const Container = styled.div`
margin: 0 auto;
min-height: 100vh;
`


export const Section = styled.section`
  min-height: 42.25rem;

  margin-top: 2.2rem;
  margin-left: 1.75rem;
  margin-right: 1.75rem;
  
 
> Button {
  
  display: flex;
  justify-content: left;
  align-items: center;
  padding: .62rem .62rem;

  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  background-color: transparent;
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  margin-bottom: 2.8rem;
}

`
