import { Main, Tag } from "@/app/styles/globalStyles";
import {
  NoteBlock,
  NoteDescription,
  NoteTime,
  NoteTitle,
  ProgressBlock,
  ProgressLine,
  Row,
  TimeBlock,
} from "./style";
import { useEffect, useState } from "react";
import { ClockIcon } from "@/app/styles/icons";
import TagItem from "./components/tag";

interface Props {
  note: Note;
}

const NoteItem = (props: Props) => {
  const { note } = props;
  const [time, setTime] = useState("undefind");

  useEffect(() => {
    const elapsed = Math.round(Date.now() / 1000) - note.updated_at;

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = week * 4;
    const year = month * 12;

    if (Math.round(elapsed / year) > 0) {
      setTime(`${Math.round(elapsed / year)} years ago`);
    } else if (Math.round(elapsed / month) > 0) {
      setTime(`${Math.round(elapsed / month)} months ago`);
    } else if (Math.round(elapsed / week) > 0) {
      setTime(`${Math.round(elapsed / week)} weeks ago`);
    } else if (Math.round(elapsed / day) > 0) {
      setTime(`${Math.round(elapsed / day)} days ago`);
    } else if (Math.round(elapsed / hour) > 0) {
      setTime(`${Math.round(elapsed / hour)} hours ago`);
    } else if (Math.round(elapsed / minute) > 0) {
      setTime(`${Math.round(elapsed / minute)} minutes ago`);
    } else {
      setTime("just now");
    }
  }, []);

  return (
    <NoteBlock href="#">
      <Row>
        <NoteTitle>{note.title}</NoteTitle>
        {note.progress.maximum > 0 && (
          <ProgressBlock>
            <ProgressLine
              $width={(100 / note.progress.maximum) * note.progress.current}
            />
          </ProgressBlock>
        )}
      </Row>
      <Row>
        <TimeBlock>
          <ClockIcon />
          <NoteTime>{time}</NoteTime>
        </TimeBlock>
        <div>
          {note.tags.map((tag) => (
            <TagItem tag={tag} />
          ))}
        </div>
      </Row>
      <Row>
        <NoteDescription>{note.content}</NoteDescription>
      </Row>
    </NoteBlock>
  );
};

export default NoteItem;
