import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 660px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px;
  h1 {
    font-size: 1.5rem;
    font: ${(props) => props.theme.fonts["roboto-700"]};
    padding-bottom: 2rem;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;

  * {
    width: 100%;
    max-width: 120px;
    font: ${(props) => props.theme.fonts["roboto-700"]};
    border-radius: 8px;
    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }
    :first-child {
      margin-right: 1rem;
      background-color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors["black-999"]};
      color: ${(props) => props.theme.colors["black-999"]};
    }

    :last-child {
      background-color: ${(props) => props.theme.colors["green-500"]};
      color: ${(props) => props.theme.colors.white};
      border: none;
    }
    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
