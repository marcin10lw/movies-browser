import { QueryFunction } from "@tanstack/react-query";
import { getData } from "../../../common/getData";
import { MoviesApiResponse, MoviesQueryKey } from "../types";

export const getMovies: QueryFunction<
  MoviesApiResponse,
  MoviesQueryKey
> = async ({ queryKey }) => {
  const { page, query } = queryKey[1];

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
