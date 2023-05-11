import axios from "axios";

axios.defaults.baseURL = "https://north-wind.pp.ua:5533/api/v1";

const tokenHeader = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const uploadPhoto = async (id: string, files: FileList) => {
  const token = window.localStorage.getItem("token");
  if (token !== null) {
    tokenHeader.set(token);
  }
  try {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }

    const { data } = await axios.post(`folders/photos/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const uploadPhoto = async (id: string) => {
//   try {
//     const { data } = await ptotoInstance.post(`folders/photos/${id}`);
//     // console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
