import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreackPoints"


export const HeaderWrapper = styled.div`
 width: 100%;
`
export const Container = styled.div`

.buttons {
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
  
  > .save, .delete {
    font-size: 1.4rem;
    padding: 1.2rem 2.4rem;
    
  }

  .save {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    width: 17.2rem;
  }

  .delete {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    width: 16.0rem;
  }
}
`

export const Form = styled.form`
  border: 1px solid red;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 1.0rem 3.2rem 5.4rem 3.2rem;

  .voltar {
    width: 21.6rem;
    display: flex;
    justify-content: flex-start;
    
    text-transform: lowercase;
    font-family: Poppins;
    font-size: 1.7rem;
    
    background-color: transparent;
    padding-left: 0;
  }  
  
  h1 {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 3.2rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    gap: 0;
  }

> label {  
  display: flex;
  gap: .8rem;
  padding: 1.2rem 3.2rem;
  
  border-radius: .8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  font-family: Poppins;
  font-size: 1.4rem;
  line-height: 2.4rem;
  

  >svg {
    height: 24px;
  }
}

#pictureDish {
  display: none;

}

#dishName {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  padding: 1.2rem 1.4rem;
  
  border: none;
  border-radius: .8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  color: ${({ theme }) => theme.COLORS.LIGHT_500};
}

.input-wrapper select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center right 16px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 0.5rem;
  border: none;
  width: 100%;
  height: 4.8rem;
  gap: 1.4rem;

  padding: 1.6rem 1.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.4rem;
}

.description{
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;

  height: 17.2rem;
  padding: 1.4rem;
  
  
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border: none;
  border-radius: .8rem;
}

.ingredientes {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  padding: .4rem .8rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: .8rem;
}

// Desktop
@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  border: 1px dashed;
  

 }
`


export const FooterWrapper = styled.div`
  /* grid-area: FooterWrapper;
  grid-column: 1/2;
  grid-row: 4/5;
  
  width: 100%;
  height: 100%; */
`
