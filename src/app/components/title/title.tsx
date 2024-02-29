"use client";

import { WebviewWindow } from "@tauri-apps/api/window";
import { useEffect, useRef, useState } from "react";
import {
  EventButtons,
  LeftSide,
  TitleBar,
  TitleBarText,
  TitleEventButton,
  TitleEventButtonClose,
} from "./style";
import { Close, Maximize, Minimize } from "@/app/styles/icons";
import { MenuItemType, navigation } from "./navigation";
import MenuItem from "./components/menuItem";

const Title = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow>();
  const [activeIndex, setActiveIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    (async function () {
      setAppWindow((await import("@tauri-apps/api/window")).appWindow);
    })();
  }, []);

  return (
    <TitleBar data-tauri-drag-region>
      <LeftSide>
        <TitleBarText>Scribble</TitleBarText>
        <div ref={menuRef}>
          {navigation.map((item: MenuItemType, index: number) => (
            <MenuItem
              key={index}
              item={item}
              index={index}
              isActive={index === activeIndex}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              onMenuClick={handleMenuClick}
            />
          ))}
        </div>
      </LeftSide>
      <EventButtons>
        <TitleEventButton onClick={() => appWindow?.minimize()}>
          <Minimize />
        </TitleEventButton>
        <TitleEventButton onClick={() => appWindow?.toggleMaximize()}>
          <Maximize />
        </TitleEventButton>
        <TitleEventButtonClose onClick={() => appWindow?.close()}>
          <Close />
        </TitleEventButtonClose>
      </EventButtons>
    </TitleBar>
  );
};

export default Title;
