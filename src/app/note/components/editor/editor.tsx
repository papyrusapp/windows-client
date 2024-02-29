import { EditorState } from "@codemirror/state";
import { useCallback } from "react";
import useCodeMirror from "./useCodeMirror";
import { EditorWindow } from "./style";
import { ViewMode } from "../../types";

interface Props {
  initialDoc: string;
  mode: ViewMode;
  onChange: (doc: string) => void;
}

const Editor = (props: Props) => {
  const { onChange, initialDoc, mode } = props;

  if (mode !== ViewMode.Preview) {
    const handleChange = useCallback(
      (state: EditorState) => onChange(state.doc.toString()),
      [onChange],
    );
    const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
      initialDoc,
      onChange: handleChange,
    });

    return <EditorWindow $mode={mode} ref={refContainer}></EditorWindow>;
  }
};

export default Editor;
