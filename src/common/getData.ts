import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = `${process.env.REACT_APP_API_KEY}`;

export const getData = async (
  path: string,
  params?: { page: number; query?: string | null }
) => {
  const url = `${baseUrl}/${path}`;
  const response = await axios.get(url, {
    params: { api_key: apiKey, ...params },
  });

  return response;
};
