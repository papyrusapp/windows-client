import { LeftSide, NoteBlock, RightSide } from "./style";

interface Props {
  note: Note;
}

const NoteItem = (props: Props) => {
  const { note } = props;

  return (
    <NoteBlock>
      <LeftSide>
        <p>{note.name}</p>
        <p>{note.updatedAt}</p>
        <p>{note.content}</p>
      </LeftSide>
      <RightSide></RightSide>
    </NoteBlock>
  );
};

export default NoteItem;
