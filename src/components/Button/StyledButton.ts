import styled, { css } from "styled-components";

interface StyledButtonProps {
    variant?: "disabled" | "cancel";
  }

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => css`
    width: 11.5rem;
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

    ${variant === "disabled" &&
    css`
      background-color: #f1f1f1;
      color: #a7a7a7;
      cursor: default;

      :hover {
        background-color: #f1f1f1;
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
  `}
`;