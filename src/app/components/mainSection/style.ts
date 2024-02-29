import styled from "styled-components";

export const Main = styled.main<{ $cursorStyle: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: ${(props) => props.$cursorStyle};
`;

export const MainContainer = styled.div`
  flex-grow: 1;
`;
