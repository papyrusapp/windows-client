"use client";

import { useState } from "react";
import { MenuContainer, MenuSection } from "./style";

interface Props {
  width: number;
}

interface Note {
  id: number;
  name: string;
  description: string;
}

const Menu = (props: Props) => {
  const { width } = props;

  const [notes] = useState<Note[]>([
    // {
    //   id: 1,
    //   name: "School",
    //   description: "sdf",
    // },
    // {
    //   id: 2,
    //   name: "Work",
    //   description: "sdf",
    // },
    // {
    //   id: 3,
    //   name: "Mom",
    //   description: "sdf",
    // },
  ]);

  return (
    <MenuSection $width={width}>
      <MenuContainer>
        {notes.map((note: Note) => (
          <div>
            <h1>{note.name}</h1>
          </div>
        ))}
      </MenuContainer>
    </MenuSection>
  );
};

export default Menu;
