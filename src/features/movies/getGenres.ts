import { getData } from "../../common/getData";

export const getGenres = async () => {
  const { data } = await getData(`genre/movie/list`);

  return data.genres;
};
