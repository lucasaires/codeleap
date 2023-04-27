import { ButtonHTMLAttributes } from "react";
import { Button as ButtonBase } from "./styled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, disabled, ...rest }: ButtonProps) {
  return (
    <ButtonBase disabled={disabled} {...rest}>
      {children}
    </ButtonBase>
  );
}
