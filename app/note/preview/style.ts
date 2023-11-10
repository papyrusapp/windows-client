import styled from "styled-components";
import { ViewMode } from "../types";

export const PreviewWindow = styled.div<{ $mode: ViewMode; }>`
  width: ${props => props.$mode == ViewMode.Preview ? "100%" : "50%"};
  color: white;
  padding: 12px;
  background-color: transparent;

  :first-child {
    margin-top: 0px;
  }

  h1, h2 {
    border-color: white;
  }

  pre {
    background-color: rgba(30, 30, 30, 0.5);
  }
`;
