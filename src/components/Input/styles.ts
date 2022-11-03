import styled, { css } from 'styled-components'

interface StyledInputProps {
  inputSize?: "large" | "x-large";
}

export const Input = styled.input<StyledInputProps>`

  ${({ inputSize }) => css`
  
    width: 20rem;
    height: 3rem;
    border-radius: 4rem;
    padding: 0px 15px;
    font-size: 1.3rem;
    font: 400 1rem Source Sans Pro, sans-serif;

    background-color: #ccc;

    ${ inputSize === "large" &&
      css`
        width: 100%;
      `
    }

    ${inputSize === "x-large" && css`
      height: 2.5rem;
      border-radius: 8px;
      width: 100%;
    `}
  
  `}

`
