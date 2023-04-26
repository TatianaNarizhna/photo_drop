import axios from "axios";

const logInInstance = axios.create({
  baseURL: "",
});

export const logIn = async () => {
  const { data } = await logInInstance.get("/");
  return data;
};
