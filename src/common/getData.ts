import axios from "axios";
import { URLSearchParams } from "url";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = `${process.env.REACT_APP_API_KEY}`;

export const getData = async (path: string, params?: URLSearchParams) => {
  const url = `${baseUrl}/${path}`;
  const response = await axios.get(url, {
    params: { api_key: apiKey, ...params },
  });

  return response;
};
