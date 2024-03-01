"use client";

import { useState } from "react";
import { MenuContainer, MenuSection } from "./style";
import NoteItem from "./components/noteItem";

interface Props {
  width: number;
}

const Menu = (props: Props) => {
  const { width } = props;

  const [notes] = useState<Note[]>([
    {
      id: 1,
      name: "School",
      content: "# Hello, world!",
      createdAt: 0,
      updatedAt: 0,
      progress: {
        current: 3,
        maximum: 8,
      },
      tag: [],
    },
    {
      id: 2,
      name: "Works",
      content: "# Hello, mom!",
      createdAt: 0,
      updatedAt: 0,
      progress: {
        current: 2,
        maximum: 3,
      },
      tag: [],
    },
    {
      id: 3,
      name: "Письки попки",
      content: "# чеее!",
      createdAt: 0,
      updatedAt: 0,
      progress: {
        current: 0,
        maximum: 0,
      },
      tag: [],
    },
  ]);

  return (
    <MenuSection $width={width}>
      <MenuContainer>
        {notes.map((note: Note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </MenuContainer>
    </MenuSection>
  );
};

export default Menu;
