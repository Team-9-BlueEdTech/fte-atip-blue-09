import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  border: 0px;
}

body {
  font: 400 1rem Source Sans Pro, sans-serif;
}

input {
  width: 100%;
  min-height: 3rem;
  padding: 0 1.5rem;

  background-color: #ccc;
  border-radius: 2rem;
  outline: none;

  font: 400 1rem Source Sans Pro, sans-serif;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 30px #ccc inset;
  -webkit-box-shadow: 0 0 0 30px #ccc inset;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
`