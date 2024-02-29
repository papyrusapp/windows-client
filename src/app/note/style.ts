import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const NoteResizer = styled.div`
  width: 6px;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: col-resize;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.white};
`;
