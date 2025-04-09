import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  height: 4.8rem;
  padding: .4rem .8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};


  > input {
    position: relative;
    width: 11.7rem;
    height: 3.2rem;
    padding: 1.0rem 1.6rem;

    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    border-radius: .6rem;
    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `8px solid ${theme.COLORS.LIGHT_600}`};
    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  }

  button {
    position: absolute;
    right: 17.0rem;
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
`;