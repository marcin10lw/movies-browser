import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";

import { MoviesQueryKey } from "../types";
import { getMovies } from "./getMovies";
import PopularMovies from "./PopularMovies";
import searchQueryParamName from "common/searchQueryParamName";
import NoResultsPage from "common/NoResultsPage";
import { Loading } from "common/Loading";
import { Main } from "common/Main";
import Pagination from "common/Pagination";
import ErrorPage from "common/ErrorPage";
import useDebounce from "common/useDebounce";

const PopularMoviesPage = () => {
  const [searchParams] = useSearchParams({ page: "1" });
  const currentPage = Number(searchParams.get("page")) || 1;
  const query =
    useDebounce(searchParams.get(searchQueryParamName) || "", 450) || null;
  const queryClient = new QueryClient();

  const getQueryKey = (page: number) =>
    ["movies", { page, query }] as MoviesQueryKey;

  useEffect(() => {
    if (currentPage < 500) {
      queryClient.prefetchQuery(getQueryKey(currentPage + 1), getMovies);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const { data, status } = useQuery(getQueryKey(currentPage), getMovies);

  const totalResults = data?.total_results;
  const sectionTitle = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular Movies";

  return (
    <>
      {totalResults === 0 && <NoResultsPage />}
      {status === "loading" && <Loading />}
      {status === "success" && data && (
        <Main>
          <PopularMovies title={sectionTitle} movies={data.results} />
          <Pagination
            location="popularMovies"
            fetchedPages={data.total_pages}
          />
        </Main>
      )}
      {status === "error" && <ErrorPage />}
    </>
  );
};

export default PopularMoviesPage;
