import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { getJwt } from "./../token/selectors";

axios.defaults.baseURL = "https://north-wind.pp.ua:5533/api/v1";

const token = useSelector(getJwt);

const tokenHeader = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const fetchAllFolders = createAsyncThunk(
  "folders/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.jwt.jwtValue;

    if (token === null) {
      return thunkAPI.rejectWithValue("");
    }
    tokenHeader.set(token);
    try {
      const data = await axios.get("/folders");
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
