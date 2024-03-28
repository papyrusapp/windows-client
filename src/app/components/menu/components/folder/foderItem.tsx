import { ArrowIcon } from "@/app/styles/icons";
import { FolderBlock, FolderContainer, FolderTitle, FolderList } from "./style";
import { useState } from "react";
import NoteItem from "../note/noteItem";

interface Props {
  directory: Directory;
}

const FolderItem = (props: Props) => {
  const { directory } = props;
  const [isClosed, setIsClosed] = useState(true);

  return (
    <FolderContainer>
      <FolderBlock $isClosed={isClosed} onClick={() => setIsClosed(!isClosed)}>
        <FolderTitle>{directory.title}</FolderTitle>
        <ArrowIcon />
      </FolderBlock>
      {!isClosed && (
        <FolderList>
          {directory.list.map((item) => {
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
        </FolderList>
      )}
    </FolderContainer>
  );
};

export default FolderItem;
