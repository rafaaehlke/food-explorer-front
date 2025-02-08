import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"

export const Container = styled.nav`
  height: 114px;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;


section {
  display: flex;
  flex-direction: row;
  }

.Logo {
  width: 22px;
  height: 18px;
}

h1 {
  padding-left: 10px;
  padding-right: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
}
section, aside {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 24px auto;

    font-size: 12px;
    text-align: right;
  }

  /* @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

  } */
`
