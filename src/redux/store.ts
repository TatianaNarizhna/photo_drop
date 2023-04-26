import { configureStore } from "@reduxjs/toolkit";
import { jwtSlice } from "./token/jwtSlice";

export const store = configureStore({
  reducer: {
    jwt: jwtSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
