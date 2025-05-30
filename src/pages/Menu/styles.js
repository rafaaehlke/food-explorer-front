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

  .search {
  position: relative;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  
  ul {
    position: absolute;
    list-style: none;
    top: 105%;
    left: 0;
    right: 0;
    z-index: 10;
    
    
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  border-radius: .8rem;
  padding: .8rem .8rem; 
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.COLORS.LIGHT_400} ${({ theme }) => theme.COLORS.DARK_1000};
  }

  li {
  border: 1px dashed ${({ theme }) => theme.COLORS.DARK_800};
  padding: 1rem 1rem;
  cursor: pointer;
  
 }
}
 
  
 
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
