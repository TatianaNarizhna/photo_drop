export type Album = {
  name: string;
  id: number;
  date: string;
  img: string;
};

export type Albums = {
  albums: Album[];
  loading: boolean;
  error: unknown;
};
