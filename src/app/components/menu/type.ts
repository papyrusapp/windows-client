interface Color {
  red: number;
  green: number;
  blue: number;
}

interface Tag {
  id: number;
  title: string;
  color: Color;
}

interface Progress {
  current: number;
  maximum: number;
}

interface Note {
  id: number;
  title: string;
  content: string;
  created_at: number;
  updated_at: number;
  progress: Progress;
  tags: Tag[];
}

interface Folder {
  id: number;
  title: string;
  list: Item[];
}

type Item = Folder | Note;
