import axios from "axios";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  fetchLogInRequest,
  fetchLoginSuccess,
  fetchLoginError,
} from "./actions";

import { ILogin } from "../../types/loginTypes";

const logInInstance = axios.create({
  baseURL: "https://north-wind.pp.ua:5533/api/v1",
});

export const logInOperation = (
  data: ILogin
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
  const dataLogin = { login: data.login, password: data.password };
  const func = async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ) => {
    try {
      dispatch(fetchLogInRequest());
      const { data } = await logInInstance.post("/login", dataLogin);
      dispatch(fetchLoginSuccess(data));
      localStorage.setItem("token", data.accessToken);
    } catch (error: any) {
      dispatch(fetchLoginError(error.response.data.message));
    }
  };
  return func;
};
