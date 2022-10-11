import styled, { css } from 'styled-components'

interface StyledInputProps {
  inputSize?: "large";
}

export const Input = styled.input<StyledInputProps>`

  ${({ inputSize }) => css`
  
    width: 20rem;
    height: 3rem;
    border-radius: 4rem;

    background-color: #ccc;

    ${ inputSize === "large" &&
      css`
        width: 100%;
      `
    }
  
  `}

`