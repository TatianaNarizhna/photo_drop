import axios from "axios";

const logInInstance = axios.create({
  baseURL: "https://north-wind.pp.ua:5533/api/v1",
});

export const folderDelete = async (id: string) => {
  const { data } = await logInInstance.post(`/folders/${id}`);
  // console.log(data);
  return data;
};
