import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./StyledButton";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | ReactNode;
  variant?: "add" | "disabled" | "cancel";
}

const Button = ({ text, variant, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} variant={variant}>
      {text}
    </StyledButton>
  );
};

export default Button;
