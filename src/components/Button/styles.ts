import styled, { css } from "styled-components";

interface StyledButtonProps {
  variant?: "add" | "disabled" | "cancel" | "small";
}

export const StyledButton = styled.button<StyledButtonProps>`

  ${({ variant }) => css`
  
    width: 11.5rem;
    min-width: 11.5rem;
    height: 3rem;
    border-radius: 4rem;

    background-color: #aa6cff;
    color: white;
    font-size: 1.2em;
    cursor: pointer;

    font: 600 1.2rem Source Sans Pro, sans-serif;

    :hover {
      background-color: #5a19b4;
    }

    ${variant === "add" &&
    css`
      background-color: #66c88f;
      color: white;

      :hover {
        background-color: #2faf65;
      }
    `}

    ${variant === "cancel" &&
    css`
      background-color: #f94f38;
      color: white;

      :hover {
        background-color: #B21A06;
      }
    `}

    ${variant === "disabled" &&
    css`
      background-color: #f1f1f1;
      color: #a7a7a7;
      cursor: default;

      :hover {
        background-color: #f1f1f1;
      }
    `}

    ${variant === "small" &&
    css`
      width: 3rem;
      min-width: 3rem;
    `}
  `}
`;