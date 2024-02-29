"use client";

import { Resizer } from "@/app/styles/globalStyles";
import { Main, MainContainer } from "./style";
import Menu from "../menu/menu";
import { useState } from "react";

const MainSection = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [width, setWidth] = useState(200);
  const [mouseDown, setMouseDown] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("auto");
  const menuSize = {
    min: 100,
    max: 300,
  };

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
      const newWidth = Math.min(event.pageX, menuSize.max);
      if (newWidth > menuSize.min) {
        setWidth(newWidth);
      }
    }
  };

  return (
    <Main
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      $cursorStyle={cursorStyle}
    >
      <Menu width={width} />
      <Resizer onMouseDown={handleMouseDown} />
      <MainContainer>{children}</MainContainer>
    </Main>
  );
};

export default MainSection;
