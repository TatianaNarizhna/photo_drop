import { createSlice } from "@reduxjs/toolkit";
import { fetchAllFolders } from "./foldersOperations";
import { Albums } from "../../types/album";

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
      });
  },
});
