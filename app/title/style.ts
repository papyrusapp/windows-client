import styled from "styled-components";

export const TitleBar = styled.div`
  height: 30px;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.5);
  display: flex;
  justify-content: space-between;
  position: fixed;
  border-bottom: 1px solid #1c1c1c;
  align-items: center;
  z-index: 1;
`;

export const TitleBarText = styled.h1`
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  margin: 0px;
  padding-left: 10px;
`;

export const TitleButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  &:hover {
    background-color: rgba(58, 58, 58, 0.5);
  }
`;

export const TitleButtonClose = styled(TitleButton)`
  &:hover {
    background-color: rgba(255, 80, 70, 0.5);
  }
`
