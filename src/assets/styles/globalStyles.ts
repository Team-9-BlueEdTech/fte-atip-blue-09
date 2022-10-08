import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}

body {
  font: 400 1rem Source Sans Pro, sans-serif;
}

input {
  width: 100%;
  height: 3rem;
  border-radius: 4rem;
  padding: 0px 15px;
  font-size: 1.3rem;
  font: 400 1rem Source Sans Pro, sans-serif;

  background-color: #ccc;
}
`
