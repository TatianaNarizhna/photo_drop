import { RootState } from "../store";

export const getJwt = (state: RootState): string | null => state.jwt.jwtValue;
