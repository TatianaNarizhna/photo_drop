import { Dispatch } from "@reduxjs/toolkit";
import { logIn } from "../services/registrationApi";
import {
  fetchLogInRequest,
  fetchLoginSuccess,
  fetchLoginError,
} from "./actions";

export const logInOperation = () => {
  const func = async (dispatch: Dispatch) => {
    try {
      dispatch(fetchLogInRequest());
      const data = await logIn();
      dispatch(fetchLoginSuccess(data));
    } catch (error: any) {
      dispatch(fetchLoginError(error.response.data.message));
    }
  };
  return func;
};
