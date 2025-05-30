import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreackPoints'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  
// main
aside {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 5.44rem;
    margin-right: 2.78rem;
    margin-left: 2.78rem;
    margin-bottom: 2.4rem;
    //margin: 3.4rem 1.74rem 1.5rem 1.74rem;
  }

// Logo central
.nameRestaurant {
  display: flex;
  align-items: center;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  p {
    font-size: 2.1rem;
    line-height:.8rem;
    font-weight: bold;
    text-transform: lowercase;
    
    margin-left: .8rem;
    margin-right: 1.6rem;
  }
}

// Button esquerda
#list {
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
}

// Input
.search {
  display: none;
  position: relative;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
}

ul {
  position: absolute;
  list-style: none;
  top: 105%;
  left: 0;
  right: 0;
  z-index: 10;

  background-color: #192227;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  border-radius: .8rem;
  padding: .8rem .8rem; 

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.COLORS.LIGHT_400} ${({ theme }) => theme.COLORS.DARK_1000};

}

li {
  padding-bottom: 10px;
  cursor: pointer;
}

  
.requestsButton{
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
}

.requests {
  display: none;
}


.exit {
  display: none;
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  display: flex;
  align-items: center;
  justify-content: space-between;

// main
aside {
  width: 136.8rem;
  height: 4.8rem;
  margin: 2.4rem 12.2rem;
}

//Logo
.nameRestaurant {
  img {
    width: 3.0rem;
    height: 3.0rem;
    margin-left: 1rem;
  }

  p {
    width: 14.6rem;
  }
}

// Input
.search {
  display: block;
  width: 100%;
  margin-right: 3.2rem;
} 

.requestsButton {
  display: none;
}

//Button
.requests {
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  width: 21.6rem;
  margin-right: 3.2rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
}

// Button
.exit {
  display: flex;
  width: 3.2rem;
  padding: 0;
  margin: 0 auto;
  background-color: transparent;
 }
}
`