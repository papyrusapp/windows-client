import { EditorState } from "@codemirror/state";
import { useCallback } from "react";
import useCodeMirror from "./useCodeMirror";
import { EditorWindow } from "./style";

interface Props {
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor = (props: Props) => {
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange]
  );
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc,
    onChange: handleChange
  });

  return <EditorWindow ref={refContainer}></EditorWindow>
}

export default Editor;
