import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  background: ${(props) => props.theme.colors["white"]};
  max-width: 752px;
  width: 100%;
  margin: 0 auto;

  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  div {
    margin-bottom: 1.5rem;
  }
`;
export const Header = styled.header`
  max-width: 752px;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors["blue-500"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  h1 {
    font: ${(props) => props.theme.fonts["roboto-700"]};
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors["white"]};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  *{
    :first-child{
        margin-right: 1rem;
    }

  }

  button {
    background: ${(props) => props.theme.colors["blue-500"]};
    color: ${(props) => props.theme.colors["white"]};
    border: 0;
    padding: 0 1rem;
    height: 2rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    transition: filter 0.2s;
    cursor: pointer;
    :hover {
      filter: brightness(0.9);
    }
    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
