import styled from "styled-components";
import { ViewMode } from "../types";

export const EditorWindow = styled.div<{ $mode: ViewMode; }>`
  height: 100%;
  width: ${props => props.$mode == ViewMode.Edit ? "100%" : "50%"};

  .cm-editor {
    outline: none;

    .cm-gutters {
      background-color: transparent;
      border-right: 1px solid #424242;
    }

    .cm-activeLineGutter {
      background-color: #6699ff0b;
    }
  }
`;
