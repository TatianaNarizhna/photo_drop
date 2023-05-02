import { Photographer } from "./photographerTypes";

export type LoginSuccess = {
  accessToken: string;
  lolders: [];
  photographer: Photographer[];
};

export interface ILogin {
  login: string;
  password: string;
}

export type LoginError = {};
