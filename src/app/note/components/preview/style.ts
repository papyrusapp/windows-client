import styled from "styled-components";
import { ViewMode } from "../../types";

export const PreviewWindow = styled.div<{ $mode: ViewMode }>`
  width: ${(props) => (props.$mode == ViewMode.Preview ? "100%" : "50%")};
  color: ${(props) => props.theme.colors.white};
  padding: 12px;
  background-color: transparent;

  :first-child {
    margin-top: 0px;
  }

  h1,
  h2 {
    border-color: ${(props) => props.theme.colors.white};
  }

  pre {
    background-color: ${(props) => props.theme.colors.black70};
  }
`;
