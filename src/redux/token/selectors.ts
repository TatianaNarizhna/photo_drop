import { RootState } from "../store";

export const getJwt = (state: RootState): string => state.jwt.jwtValue;
