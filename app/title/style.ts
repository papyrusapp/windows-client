import styled from "styled-components";

export const TitleBar = styled.div`
  height: 30px;
  background: rgba(30, 30, 30, 0.5);
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #1c1c1c;
`;

export const TitleButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  &:hover {
    background: rgba(58, 58, 58, 0.5);
  }
`;

export const TitleButtonClose = styled(TitleButton)`
  &:hover {
    background: rgba(255, 80, 70, 0.5);
  }
`
