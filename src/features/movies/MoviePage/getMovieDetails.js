import axios from "axios";
import { getData } from "../../../common/getData";
import { exampleResponseDelay } from "../../../common/exampleResponseDelay";

export const getMovieDetails = async ({ queryKey }) => {
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
