import { Main, Tag } from "@/app/styles/globalStyles";
import { NoteBlock, ProgressBlock, ProgressLine, Row } from "./style";

interface Props {
  note: Note;
}

const NoteItem = (props: Props) => {
  const { note } = props;

  return (
    <NoteBlock>
      <Row>
        <Main>{note.title}</Main>
        {note.progress.maximum > 0 && (
          <ProgressBlock>
            <ProgressLine
              $width={(100 / note.progress.maximum) * note.progress.current}
            />
          </ProgressBlock>
        )}
      </Row>
      <Row>
        <Tag>{note.updated_at} days ago</Tag>
      </Row>
      <Row>
        <Tag>{note.content}</Tag>
      </Row>
    </NoteBlock>
  );
};

export default NoteItem;
