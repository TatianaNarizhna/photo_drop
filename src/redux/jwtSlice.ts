import { createSlice } from "@reduxjs/toolkit";

export const jwtSlice = createSlice({
  name: "jwt",
  initialState: "",
  reducers: {
    createJwt(state, { payload }) {
      return payload;
    },
  },
});

export const { createJwt } = jwtSlice.actions;
