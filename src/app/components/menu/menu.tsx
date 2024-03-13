"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { MenuContainer, MenuSection } from "./style";
import NoteItem from "./components/note/noteItem";

interface Props {
  width: number;
}

const Menu = (props: Props) => {
  const { width } = props;

  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    invoke<Item[]>("get_list")
      .then((result) => {
        console.log(result);
        // setList(result);
      })
      .catch(console.error);
  }, []);

  return (
    <MenuSection $width={width}>
      <MenuContainer>
        {
          // list.map((item: Item) =>
          //     item.kind ? <h1>Note {item.kind}</h1> : <h1>Folder {item.kind}</h1>,
          //     )
        }
      </MenuContainer>
    </MenuSection>
  );
};

export default Menu;
