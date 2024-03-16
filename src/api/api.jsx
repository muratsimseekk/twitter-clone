import axios from "axios";

export const createAxiosInstance = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return token
    ? axios.create({
        baseURL: "https://localhost:3000/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    : axios.create({
        baseURL: "https://localhost:3000/",
        headers: {},
      });
};

export let AxiosInstance;

export const newAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};
