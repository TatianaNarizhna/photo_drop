import { RootState } from "../store";

export const getAllAlbums = (state: RootState) => state.albums.albums;
