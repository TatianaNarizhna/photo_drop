import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddAlbum } from "./../../types/album";

axios.defaults.baseURL = "https://north-wind.pp.ua:5533/api/v1";

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
    const token = window.localStorage.getItem("token");

    if (token === null) {
      return thunkAPI.rejectWithValue("");
    }
    tokenHeader.set(token);
    try {
      const response = await axios.get("/folders");
      const data = response.data;
      const headers = {
        "content-length": response.headers["content-length"],
        "content-type": response.headers["content-type"],
      };
      return { data, headers };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchAddFolder = createAsyncThunk(
  "folders/add",
  async (cred: AddAlbum, thunkAPI) => {
    const folderCred = {
      name: cred.name,
      location: cred.location,
      date: cred.date,
    };

    const token = window.localStorage.getItem("token");

    if (token === null) {
      return thunkAPI.rejectWithValue("");
    }
    tokenHeader.set(token);
    try {
      const data = await axios.post("/folders", folderCred);
      const headers = {
        "content-length": data.headers["content-length"],
        "content-type": data.headers["content-type"],
      };

      return { data: data.data, headers };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const folderDelete = createAsyncThunk(
  "folder/delete",
  async (id: string, thunkAPI) => {
    const token = window.localStorage.getItem("token");
    console.log(id);
    if (token === null) {
      return thunkAPI.rejectWithValue("");
    }
    tokenHeader.set(token);

    try {
      const { data } = await axios.delete(`/folders/${id}`);

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// export const folderDelete = async (id: string) => {
//   const { data } = await axios.delete(`/folders/${id}`);
//   // console.log(data);
//   return data;
// };
