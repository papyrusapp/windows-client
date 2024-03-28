"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {
  ListContainer,
  MenuContainer,
  MenuSection,
  SearchBox,
  SearchInput,
} from "./style";
import NoteItem from "./components/note/noteItem";
import { SearchIcon } from "@/app/styles/icons";
import FolderItem from "./components/folder/foderItem";

interface Props {
  width: number;
}

const Menu = (props: Props) => {
  const { width } = props;

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    invoke<Item[]>("get_items")
      .then((result) => setItems(result))
      .catch(console.error);
  }, []);

  return (
    <MenuSection $width={width}>
      <MenuContainer>
        <SearchBox>
          <SearchIcon />
          <SearchInput placeholder="Search..." />
        </SearchBox>
        <ListContainer>
          {items.map((item) => {
            if ("Note" in item) {
              const noteItem = item as { Note: Note };
              return <NoteItem key={noteItem.Note.id} note={noteItem.Note} />;
            } else if ("Directory" in item) {
              const directoryItem = item as { Directory: Directory };
              return (
                <FolderItem
                  key={directoryItem.Directory.id}
                  directory={directoryItem.Directory}
                />
              );
            }
          })}
        </ListContainer>
      </MenuContainer>
    </MenuSection>
  );
};

export default Menu;
