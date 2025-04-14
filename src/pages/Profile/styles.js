import styled from "styled-components";

export const Container = styled.div`
 width: 100%;

 #voltarProfile{
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
 }

> header {
  width: 100%;
  height: 14.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  padding: 0 12.4rem;

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  button {
      background: none;
      border: none;
    }
}
`

export const Form = styled.form`
max-width: 34.0rem;

margin: 3.0rem auto 0;

> div {

  margin-top: 2.4rem;
}

> button {
  margin-top: 2.4rem;
}
`
export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    height: 18.6rem;
    width: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }
`