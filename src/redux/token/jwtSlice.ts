import { store } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLogInRequest,
  fetchLoginSuccess,
  fetchLoginError,
} from "./actions";

const initialState = {
  jwtValue: "",
  loading: false,
  error: null,
};

export const jwtSlice = createSlice({
  name: "jwt",
  initialState,
  reducers: {
    [fetchLogInRequest.toString()]: (store) => {
      store.loading = true;
    },
    [fetchLoginSuccess.toString()]: (store, { payload }) => {
      store.loading = false;
      store.jwtValue = payload;
    },
    [fetchLoginError.toString()]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const jwtActions = {
  fetchLogInRequest,
  fetchLoginSuccess,
  fetchLoginError,
};
