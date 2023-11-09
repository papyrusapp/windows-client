"use client";

import { useState, useCallback } from "react";
import Editor from "./editor/editor";
import Preview from "./preview/preview";
import { Container } from "./styles";
import Title from "./title/title";
import Header from "./header/header";
import { ViewMode } from "./types";

const Home = () => {
  const [doc, setDoc] = useState<string>("# Hello, World!\n");
  const [mode, setMode] = useState<ViewMode>(ViewMode.Middle);

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <>
      <Title />
      <Header />
      <Container>
        <Editor onChange={handleDocChange} initialDoc={doc} mode={mode} />
        <Preview doc={doc} mode={mode} />
      </Container>
    </>
  );
}

export default Home;
