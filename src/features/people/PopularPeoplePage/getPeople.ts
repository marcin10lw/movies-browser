import { QueryFunction } from "@tanstack/react-query";

import { PeopleApiResponse, PeopleQueryKey } from "../types";
import { getData } from "common/getData";

export const getPeople: QueryFunction<
  PeopleApiResponse,
  PeopleQueryKey
> = async ({ queryKey }) => {
  const { page, query } = queryKey[1];

  if (query) {
    const { data: queryPeople } = await getData("search/person", {
      page,
      query,
    });

    return queryPeople;
  }

  const { data: popularPeople } = await getData("person/popular", {
    page,
  });

  return popularPeople;
};
