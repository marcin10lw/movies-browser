import { exampleResponseDelay } from "../../../common/exampleResponseDelay";
import { getData } from "../../../common/getData";

export const getMovies = async ({ queryKey }) => {
  const { page, query } = queryKey[1];

  await exampleResponseDelay(350);

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
