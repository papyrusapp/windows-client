import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const NoteResizer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0px;
  justify-content: center;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ResizerColumn = styled.div`
  width: 2px;
  height: 100%;
  background-color: red;
`;
