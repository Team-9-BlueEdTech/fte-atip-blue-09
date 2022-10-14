import styled from 'styled-components'

export const NavCloneaTip = styled.nav`

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .1);
  position: fixed;
  background: #fff;
  z-index: 9999;

  img {
    height: 40%;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  li {
    width: 7rem;
    padding: 3px;
    border-radius: 6px;
    transition: all .5s;
    text-align: center;
    font: 500 1rem Source Sans Pro, sans-serif;
    padding: 3px;
    border-radius: 6px;
    transition: all .5s;
    text-align: center;
    color: #1d1d1d;
  }

  li:hover {
    background: #f5f0ff;
  }

  li:first-child {
    width: 4rem;
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

  button a {
    color: white;
  }

  button a:hover {
    color: white;
  }
  
`
