import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";

import { getData } from "common/getData";
import { MovieDetailsApiResponse } from "../types";

type MovieDetailsKey = ["movieDetails", { id: string | undefined }];

export const getMovieDetails: QueryFunction<
  MovieDetailsApiResponse,
  MovieDetailsKey
> = async ({ queryKey }) => {
  const { id } = queryKey[1];

  const { data: infoRequest } = await getData(`movie/${id}`);

  const { data: creditsRequest } = await getData(`movie/${id}/credits`);

  const [movieInfo, movieCredits] = await axios.all([
    infoRequest,
    creditsRequest,
  ]);

  return {
    movieInfo: movieInfo,
    movieCast: movieCredits.cast,
    movieCrew: movieCredits.crew,
  };
};
