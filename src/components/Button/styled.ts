import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 111px;
  border-radius: 8px
  height: 32px;
  background-color: ${(props) =>
    !props.disabled
      ? props.theme.colors["blue-500"]
      : props.theme.colors["gray-200"]};
  border: ${(props) =>
    !props.disabled
      ? `1px solid ` + props.theme.colors["blue-100"]
      : `1px solid ` + props.theme.colors["gray-200"]};
  border-radius: 10px;
  padding: 0 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) => props.theme.colors["white"]};
  font-family: ${(props) => props.theme.fonts["roboto-400"]};
  outline: none;
  transition: border-color 0.2s;
  :focus {
    border-color: ${(props) =>
      props.disabled ? props.theme.colors["blue-100"] : ""};
  }
  :hover {
    filter ${(props) => (!props.disabled ? "brightness(0.9)" : "")};
  }
  
`;
