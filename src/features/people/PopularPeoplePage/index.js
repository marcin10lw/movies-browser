import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";

import { Loading } from "../../../common/Loading";
import { Main } from "../../../common/Main";
import ErrorPage from "../../../common/ErrorPage";
import PopularPeople from "./PopularPeople";
import Pagination from "../../../common/Pagination";
import NoResultsPage from "../../../common/NoResultsPage";
import searchQueryParamName from "../../../common/searchQueryParamName";
import { getPeople } from "./getPeople";

const PopularPeoplePage = () => {
  const [searchParams] = useSearchParams({ page: 1 });
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;
  const queryClient = new QueryClient();
  const getQueryKey = (page) => ["people", { page, query }];

  useEffect(() => {
    if (currentPage < 500) {
      queryClient.prefetchQuery(getQueryKey(currentPage + 1), getPeople);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const { data, status } = useQuery(getQueryKey(currentPage), getPeople);

  const totalResults = data?.total_results;
  const totalPages = data?.total_pages;
  const sectionTitle = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular People";

  return (
    <>
      {totalResults === 0 && <NoResultsPage />}
      {status === "loading" && <Loading />}
      {status === "success" && (
        <Main>
          <PopularPeople title={sectionTitle} people={data.results} />
          <Pagination location="popularPeople" fetchedPages={totalPages} />
        </Main>
      )}
      {status === "error" && <ErrorPage />}
    </>
  );
};

export default PopularPeoplePage;
