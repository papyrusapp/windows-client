import styled from "styled-components";

export const Container = styled.div<{ $cursorStyle: string }>`
  display: flex;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  cursor: ${(props) => props.$cursorStyle};
`;

export const NoteResizer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0px;
  justify-content: center;
  width: 7px;
  cursor: col-resize;
  flex-shrink: 0;
`;

export const ResizerColumn = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;
