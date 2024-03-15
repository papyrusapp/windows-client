import styled from "styled-components";

export const Main = styled.main<{ $cursorStyle: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: ${(props) => props.$cursorStyle};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  overflow: hiden;
`;
