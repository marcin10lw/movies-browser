import { QueryFunction } from "@tanstack/react-query";
import { exampleResponseDelay } from "../../../common/exampleResponseDelay";
import { getData } from "../../../common/getData";
import { PeopleApiResponse, PeopleQueryKey } from "../types";

export const getPeople: QueryFunction<
  PeopleApiResponse,
  PeopleQueryKey
> = async ({ queryKey }) => {
  const { page, query } = queryKey[1];

  await exampleResponseDelay(350);

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
