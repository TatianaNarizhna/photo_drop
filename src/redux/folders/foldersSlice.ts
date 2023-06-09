import { createSlice } from "@reduxjs/toolkit";
import { createDraft } from "immer";
import {
  fetchAllFolders,
  fetchAddFolder,
  folderDelete,
} from "./foldersOperations";
import { Albums, Album, AddAlbum } from "../../types/album";

const initialState: Albums = {
  albums: [],
  loading: false,
  error: undefined,
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFolders.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchAllFolders.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.albums = payload.data;
      })
      .addCase(fetchAllFolders.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload as string;
      })
      .addCase(fetchAddFolder.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchAddFolder.fulfilled, (store, { payload }) => {
        store.loading = false;
        const album: Album = createDraft({
          name: payload.data.name,
          location: payload.data.location,
          date: payload.data.date,
          id: payload.data.id,
          photographerId: payload.data.photographerId,
        });
        store.albums?.push(album);
      })
      .addCase(fetchAddFolder.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload as string;
      })
      .addCase(folderDelete.pending, (store) => {
        store.loading = true;
      })
      .addCase(folderDelete.fulfilled, (store, { payload }) => {
        store.loading = false;
        console.log(payload);
        store.albums = store.albums.filter(
          (album: Album) => album.id !== payload
        );
      })
      .addCase(folderDelete.rejected, (store, { payload }) => {
        store.loading = false;
      });
  },
});
