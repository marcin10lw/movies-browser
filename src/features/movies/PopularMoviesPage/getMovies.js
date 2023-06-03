import { getData } from "../../../common/getData";

const EXAMPLE_RESPONSE_DELAY = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

export const getMovies = async ({ queryKey }) => {
  const { page, query } = queryKey[1];

  await EXAMPLE_RESPONSE_DELAY(350);

  if (query) {
    const { data } = await getData("search/movie", {
      page,
      query,
    });

    return data;
  }

  const { data } = await getData("movie/popular", {
    page,
  });

  return data;
};
