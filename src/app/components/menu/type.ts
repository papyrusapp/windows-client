interface Color {
  red: number;
  green: number;
  blue: number;
}

interface Tag {
  id: string;
  title: string;
  color: Color;
}

interface Progress {
  current: number;
  maximum: number;
}

interface Note {
  id: string;
  title: string;
  short_description: string;
  created_at: number;
  updated_at: number;
  progress: Progress;
  tags: Tag[];
}

interface Directory {
  id: string;
  title: string;
  list: Item[];
}

type Item = Directory | Note;
