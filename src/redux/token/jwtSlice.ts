import { store } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLogInRequest,
  fetchLoginSuccess,
  fetchLoginError,
} from "./actions";

const initialJwt = localStorage.getItem("token");

type Token = string | null;

type Tokens = {
  jwtValue: Token | null;
  isLoggedIn: boolean;
};

const initialState: Tokens = {
  jwtValue: initialJwt || null,
  isLoggedIn: false,
};

export const jwtSlice = createSlice({
  name: "jwt",
  initialState,
  reducers: {
    [fetchLogInRequest.toString()]: (store) => {
      store.isLoggedIn = true;
    },
    [fetchLoginSuccess.toString()]: (store, { payload }) => {
      store.jwtValue = payload;
    },
    [fetchLoginError.toString()]: (store, { payload }) => {
      store.isLoggedIn = false;
      // store.error = payload;
    },
  },
});

export const jwtActions = {
  fetchLogInRequest,
  fetchLoginSuccess,
  fetchLoginError,
};
