import { ArrowIcon } from "@/app/styles/icons";
import { FolderBlock, FolderContainer, FolderTitle, FolderList } from "./style";
import { useState } from "react";
import NoteItem from "../note/noteItem";

interface Props {
  folder: Folder;
}

const FolderItem = (props: Props) => {
  const { folder } = props;
  const [isClosed, setIsClosed] = useState(true);

  return (
    <FolderContainer>
      <FolderBlock $isClosed={isClosed} onClick={() => setIsClosed(!isClosed)}>
        <FolderTitle>{folder.title}</FolderTitle>
        <ArrowIcon />
      </FolderBlock>
      {!isClosed && (
        <FolderList>
          {folder.list.map((item) => {
            if ("Note" in item) {
              const noteItem = item as { Note: Note };
              return <NoteItem note={noteItem.Note} />;
            } else if ("Folder" in item) {
              const folderItem = item as { Folder: Folder };
              return <FolderItem folder={folderItem.Folder} />;
            }
          })}
        </FolderList>
      )}
    </FolderContainer>
  );
};

export default FolderItem;
