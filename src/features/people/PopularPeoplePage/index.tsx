import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";

import { getPeople } from "./getPeople";
import { PeopleQueryKey } from "../types";
import useDebounce from "common/useDebounce";
import searchQueryParamName from "common/searchQueryParamName";
import { Loading } from "common/Loading";
import { Main } from "common/Main";
import ErrorPage from "common/ErrorPage";
import PopularPeople from "./PopularPeople";
import Pagination from "common/Pagination";
import NoResultsPage from "common/NoResultsPage";

const PopularPeoplePage = () => {
  const [searchParams] = useSearchParams({ page: "1" });
  const currentPage = Number(searchParams.get("page")) || 1;
  const query =
    useDebounce(searchParams.get(searchQueryParamName) || "") || null;
  const queryClient = new QueryClient();
  const getQueryKey = (page: number) =>
    ["people", { page, query }] as PeopleQueryKey;

  useEffect(() => {
    if (currentPage < 500) {
      queryClient.prefetchQuery(getQueryKey(currentPage + 1), getPeople);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const { data, status } = useQuery(getQueryKey(currentPage), getPeople);

  const totalResults = data?.total_results;
  const sectionTitle = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular People";

  return (
    <>
      {totalResults === 0 && <NoResultsPage />}
      {status === "loading" && <Loading />}
      {status === "success" && data && (
        <Main>
          <PopularPeople title={sectionTitle} people={data.results} />
          <Pagination
            location="popularPeople"
            fetchedPages={data.total_pages}
          />
        </Main>
      )}
      {status === "error" && <ErrorPage />}
    </>
  );
};

export default PopularPeoplePage;
