export type Album = {
  id: string;
  photographerId: string;
  name: string;
  location: string;
  date: string;
};

export type Albums = {
  albums: Album[];
  loading: boolean;
  error: unknown;
};

export type AddAlbum = {
  name: string;
  location: string;
  date: string;
};
