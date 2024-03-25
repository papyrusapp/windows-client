import styled from "styled-components";
import { ViewMode } from "../../types";

export const EditorWindow = styled.div.attrs<{
  $mode: ViewMode;
  $width: number;
}>((props) => ({
  style: {
    width: `${props.$mode == ViewMode.Edit ? "100" : props.$width}%`,
  },
}))`
  height: 100%;

  .cm-editor {
    outline: none;

    .cm-gutters {
      background-color: transparent;
      border-right: 1px solid ${(props) => props.theme.colors.black70};
    }

    .cm-activeLineGutter {
      background-color: ${(props) => props.theme.colors.black70};
    }

    .cm-scroller {
      scrollbar-color: ${(props) => props.theme.colors.black80} transparent;
    }
  }
`;
