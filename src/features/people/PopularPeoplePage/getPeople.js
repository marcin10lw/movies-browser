import { exampleResponseDelay } from "../../../common/exampleResponseDelay";
import { getData } from "../../../common/getData";

export const getPeople = async ({ queryKey }) => {
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
