import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors["white"]};
  max-width: 752px;
  width: 100%;
  max-width: 752px;
  max-height: 334px;
  box-sizing: border-box;
  border-radius: 16px;
  overflow: auto;
  border: 1px solid ${(props) => props.theme.colors["gray-100"]};
`;

export const Header = styled.header`
  max-width: 752px;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors["blue-500"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  h1 {
    font: ${(props) => props.theme.fonts["roboto-700"]};
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors["white"]};
  }
  svg {
    color: ${(props) => props.theme.colors["white"]};
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.colors["gray-100"]};
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  > * {
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem 0 1.5rem;
  margin-top: 1.5rem;
  justify-content: space-between;
  color: ${(props) => props.theme.colors["gray-300"]};
  h4 {
    font: ${(props) => props.theme.fonts["roboto-700"]};
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Content = styled.div`
  padding: 0 1.5rem;
`;
