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

  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    invoke<Item[]>("get_list")
      .then((result) => setList(result))
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
          {list.map((item) => {
            if ("Note" in item) {
              const noteItem = item as { Note: Note };
              return <NoteItem key={noteItem.Note.id} note={noteItem.Note} />;
            } else if ("Folder" in item) {
              const folderItem = item as { Folder: Folder };
              return (
                <FolderItem
                  key={folderItem.Folder.id}
                  folder={folderItem.Folder}
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
