import { Main } from "@/app/styles/globalStyles";
import styled from "styled-components";

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FolderBlock = styled.button<{ $isClosed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.black90};
  }

  & > svg {
    transform: ${(props) => props.$isClosed && "rotate(180deg)"};
  }
`;

export const FolderTitle = styled(Main)`
  font-size: 16px;
  margin: 0px;
`;

export const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > a,
  & > div {
    margin: 0px 10px;
  }
`;
