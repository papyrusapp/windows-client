"use client";

import { useState, useCallback } from "react";
import Editor from "./components/editor/editor";
import Preview from "./components/preview/preview";
import { ViewMode } from "./types";
import { Container, NoteResizer } from "./style";
import Header from "./components/header/header";

const Note = () => {
  const [doc, setDoc] = useState<string>("# Hello, World!\n");
  const [mode, setMode] = useState<ViewMode>(ViewMode.Middle);

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <>
      <Header setMode={setMode} mode={mode} />
      <Container>
        <Editor onChange={handleDocChange} initialDoc={doc} mode={mode} />
        <NoteResizer />
        <Preview doc={doc} mode={mode} />
      </Container>
    </>
  );
};

export default Note;
