import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | ReactNode;
  variant?: "add" | "disabled" | "cancel" | "small" | "login-size";
}

const Button = ({ text, variant, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} variant={variant}>
      {text}
    </StyledButton>
  );
};

export default Button;
