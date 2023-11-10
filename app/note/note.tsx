import { useState, useCallback } from "react";
import Editor from "./editor/editor";
import Preview from "./preview/preview";
import { Container, NoteSection } from "./style";
import Header from "./header/header";
import { ViewMode } from "./types";

const Note = () => {
  const [doc, setDoc] = useState<string>("# Hello, World!\n");
  const [mode, setMode] = useState<ViewMode>(ViewMode.Middle);

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <NoteSection>
      <Header setMode={setMode} mode={mode} />
      <Container>
        <Editor onChange={handleDocChange} initialDoc={doc} mode={mode} />
        <Preview doc={doc} mode={mode} />
      </Container>
    </NoteSection>
  );
}

export default Note;
