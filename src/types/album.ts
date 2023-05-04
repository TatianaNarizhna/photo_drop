export type Album = {
  name: string;
  location: number;
  date: string;
};

export type Albums = {
  albums: Album[];
  loading: boolean;
  error: unknown;
};
