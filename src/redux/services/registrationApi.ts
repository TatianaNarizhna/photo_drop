import axios from "axios";

const logInInstance = axios.create({
  baseURL: "https://north-wind.pp.ua:5533/api/v1",
});

export const logIn = async () => {
  const { data } = await logInInstance.post("/login");
  // console.log(data);
  return data;
};
