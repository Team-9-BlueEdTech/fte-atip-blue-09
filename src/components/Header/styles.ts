import styled from 'styled-components'

export const Header = styled.nav`

  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  gap: 3rem;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .1);
  position: fixed;
  z-index: 9999;

  img {
    height: 100%;
  }

  div {
    width: 100%;
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
`
