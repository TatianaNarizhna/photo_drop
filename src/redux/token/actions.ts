import { createAction } from "@reduxjs/toolkit";

export const fetchLogInRequest = createAction("jwtValue/fetch/loading");
export const fetchLoginSuccess = createAction("jwtValue/fetch/success");
export const fetchLoginError = createAction("jwtValue/fetch/error");
