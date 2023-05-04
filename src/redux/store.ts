import { configureStore } from "@reduxjs/toolkit";
import { jwtSlice } from "./token/jwtSlice";
import { albumsSlice } from "./folders/foldersSlice";

export const store = configureStore({
  reducer: {
    jwt: jwtSlice.reducer,
    albums: albumsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
