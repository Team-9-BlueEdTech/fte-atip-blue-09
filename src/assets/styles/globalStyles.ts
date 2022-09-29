import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap');
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}

body {
  font: 500 1rem Source Sans Pro,sans-serif;
}
`
