import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";

import { getData } from "common/getData";
import { PersonDetailsApiResponse } from "../types";

type PersonDetailsQueryKey = ["personDetails", { id: string | undefined }];

export const getPersonDetails: QueryFunction<
  PersonDetailsApiResponse,
  PersonDetailsQueryKey
> = async ({ queryKey }) => {
  const { id } = queryKey[1];

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
