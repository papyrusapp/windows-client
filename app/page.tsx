"use client";

import { useState, useCallback } from "react";
import Editor from "./editor/editor";
import Preview from "./preview/preview";
import { Container } from "./styles";
import Title from "./title/title";

const Home = () => {
  const [doc, setDoc] = useState<string>("# Hello, World!\n");

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <>
      <Title />
      <Container>
        <Editor onChange={handleDocChange} initialDoc={doc} />
        <Preview doc={doc} />
      </Container>
    </>
  );
}

export default Home;
