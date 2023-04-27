import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Modal = styled.div`
  font: ${(props) => props.theme.fonts["roboto-400"]};
  background-color: #fff;
  max-width: 500px;
  width: 100%;
  max-height: 205px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  @media (max-width: 639px) {
    max-height: 230px;
  }
`;

export const Title = styled.h1`
  font: ${(props) => props.theme.fonts["roboto-700"]};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors["black-500"]};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors["black-200"]};
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  div {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (max-width: 639px) {
    margin-top: 0.5rem;
  }
  }
`;

