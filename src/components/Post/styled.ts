import styled from "styled-components";

type ContainerProps = {
  isEdited: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 752px;
  height: 100%;
  max-height: 334px;
  box-sizing: border-box;
  border: ${props => props.isEdited ? "none" : `1px solid #999999`};
  border-radius: 16px;

  h4 {
    font: ${(props) => props.theme.fonts["roboto-400"]};
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${(props) => props.theme.colors["black-900"]};
  }

  input {
    margin-bottom: 1.5rem;
  }

  textarea {
    width: 100%;
    height: 100%;
    max-height: 74px;
    outline: none;
    resize: none;
    font: ${(props) => props.theme.fonts["roboto-400"]};
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${(props) => props.theme.colors["black-900"]};
    padding: 24px;
    box-sizing: border-box;
    border-radius: 16px;
    border: 1px solid ${(props) => props.theme.colors["gray-100"]};

  }
`;
export const Header = styled.header`
  font: ${(props) => props.theme.fonts["roboto-700"]};
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors["black-900"]};
  margin-bottom: 1rem;
  padding: 24px 24px 0;
  display: flex;
  justify-content: space-between;
`;
export const Content = styled.div`
  padding: 0 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px 0;
`;
