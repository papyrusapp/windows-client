import styled from "styled-components";
import Link from "next/link";

export const TitleBar = styled.header`
  height: 30px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.black80};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.black100};
  align-items: center;
  z-index: 1;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TitleBarText = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 13px;
  font-weight: 400;
  margin: 0px;
  padding-left: 10px;

  user-select: none;
`;

export const TitleButton = styled.button<{ $active?: boolean }>`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 13px;
  font-weight: 400;
  padding: 3px 6px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.black100 : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.black100};
  }
`;

export const TitleDropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px -6px;
  position: absolute;
  background-color: ${(props) => props.theme.colors.black80};
  border: 1px solid ${(props) => props.theme.colors.gray100};
  border-radius: 6px;
  padding: 8px 12px;
`;

export const TitleDropDownItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin: 0px;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.black100};
    border-radius: 4px;
  }
`;

export const EventButtons = styled.div`
  display: flex;
`;

export const TitleEventButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  path {
    fill: ${(props) => props.theme.colors.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.black100};
  }
`;

export const TitleEventButtonClose = styled(TitleEventButton)`
  &:hover {
    background-color: ${(props) => props.theme.colors.red};
  }
`;
