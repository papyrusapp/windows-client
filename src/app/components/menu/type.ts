interface Tag {
  id: number;
  title: string;
  color: string;
}

interface Progress {
  current: number;
  maximum: number;
}

interface Note {
  id: number;
  kind: boolean;
  title: string;
  content: string;
  created_at: number;
  updated_at: number;
  progress: Progress;
  tag: Tag[];
}

interface Folder {
  id: number;
  kind: boolean;
  title: string;
  list: Item[];
}

interface NoteWrapper {
  item: Note;
}

interface FolderWrapper {
  item: Folder;
}

type Item = FolderWrapper | NoteWrapper;
