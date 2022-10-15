import styled from 'styled-components'

export const HeaderaTip = styled.nav`

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .1);
  position: fixed;
  background: lightgray;
  z-index: 9999;

  img {
    height: 40%;
  }

  div {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: #545961;
  }

  a:hover {
    color: #5a19b4;
  }

  .active {
    color: #5a19b4;
  }

  
`
