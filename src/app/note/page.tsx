"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import Editor from "./components/editor/editor";
import Preview from "./components/preview/preview";
import { ViewMode } from "./types";
import { Container, NoteResizer, ResizerColumn } from "./style";
import Header from "./components/header/header";
import { useSearchParams } from "next/navigation";
import useNoteState from "@/hooks/useNoteState";

const NoteContent = () => {
  const searchParams = useSearchParams();
  const [id, setId] = useState(searchParams.get("id")!);
  const [doc, setDoc] = useNoteState("read_note", "write_note", id);
  const [mode, setMode] = useState<ViewMode>(ViewMode.Preview);
  const [width, setWidth] = useState(50);
  const [mouseDown, setMouseDown] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("auto");
  const menuSize = {
    min: 20,
    max: 80,
  };

  useEffect(() => {
    setMode(ViewMode.Preview);
    setId(searchParams.get("id")!);
  }, [searchParams]);

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setMouseDown(true);
    setCursorStyle("col-resize");
    event.preventDefault();
  };

  const handleMouseUp = () => {
    setMouseDown(false);
    setCursorStyle("auto");
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (mouseDown) {
      const container = event.currentTarget.getBoundingClientRect();
      const newWidth = Math.min(
        ((event.pageX - container.left - 3.5) / container.width) * 100,
        menuSize.max,
      );
      if (newWidth > menuSize.min) {
        setWidth(newWidth);
      }
    }
  };

  return (
    <>
      <Header setMode={setMode} mode={mode} setWidth={setWidth} />
      <Container
        onDoubleClick={() => mode == ViewMode.Preview && setMode(ViewMode.Edit)}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        $cursorStyle={cursorStyle}
      >
        <Editor
          onChange={handleDocChange}
          initialDoc={doc}
          mode={mode}
          width={width}
        />
        {mode == ViewMode.Middle && (
          <NoteResizer onMouseDown={handleMouseDown}>
            <ResizerColumn />
          </NoteResizer>
        )}
        <Preview doc={doc} mode={mode} />
      </Container>
    </>
  );
};

const Note = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NoteContent />
    </Suspense>
  );
};

export default Note;
