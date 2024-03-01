interface Progress {
  current: number;
  maximum: number;
}

interface Note {
  id: number;
  name: string;
  content: string;
  createdAt: number;
  updatedAt: number;
  progress: Progress;
  tag: string[];
}
