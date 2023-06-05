import axios from "axios";
import { QueryFunction } from "@tanstack/react-query";
import { getData } from "../../../common/getData";
import { exampleResponseDelay } from "../../../common/exampleResponseDelay";
import { PersonDetailsApiResponse } from "../types";

type PersonDetailsQueryKey = ["personDetails", { id: string | undefined }];

export const getPersonDetails: QueryFunction<
  PersonDetailsApiResponse,
  PersonDetailsQueryKey
> = async ({ queryKey }) => {
  const { id } = queryKey[1];

  await exampleResponseDelay(350);

  const { data: infoRequest } = await getData(`person/${id}`);

  const { data: creditsRequest } = await getData(`person/${id}/movie_credits`);

  const [personInfo, personCredits] = await axios.all([
    infoRequest,
    creditsRequest,
  ]);

  return {
    actorInfo: personInfo,
    moviesCast: personCredits.cast,
    moviesCrew: personCredits.crew,
  };
};
