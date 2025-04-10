import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"


export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: calc(50% - 1.6rem);
  height: 3.2rem;
  gap: 8px;
  //padding: 1rem 1.6rem;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `8px solid ${theme.COLORS.LIGHT_600}`};
  border-radius: .6rem;


  > input {
    width: 100%;
    background-color: transparent;
    border: none;

    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  }

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > input {
      
      width: 11.8rem;
    }
  }
`;

