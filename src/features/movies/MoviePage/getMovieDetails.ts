import axios from "axios";
import { getData } from "../../../common/getData";
import { exampleResponseDelay } from "../../../common/exampleResponseDelay";
import { QueryFunction } from "@tanstack/react-query";
import { MovieDetails } from "../types";

type MovieDetailsKey = ["movieDetails", { id: string | undefined }];

export const getMovieDetails: QueryFunction<
  MovieDetails,
  MovieDetailsKey
> = async ({ queryKey }) => {
  const { id } = queryKey[1];

  await exampleResponseDelay(350);

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
