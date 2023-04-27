import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid ${(props) => props.theme.colors["gray-100"]};
  border-radius: 10px;
  padding: 0 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors["black-500"]};
  font-family: ${(props) => props.theme.fonts["roboto-400"]};
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${(props) => props.theme.colors["blue-500"]};
  }
`;
