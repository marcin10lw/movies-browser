import { useEffect } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import searchQueryParamName from "../../../common/searchQueryParamName";
import { getMovies } from "./getMovies";

import NoResultsPage from "../../../common/NoResultsPage";
import { Loading } from "../../../common/Loading";
import { Main } from "../../../common/Main";
import PopularMovies from "./PopularMovies";
import Pagination from "../../../common/Pagination";
import ErrorPage from "../../../common/ErrorPage";
import { MoviesQueryKey } from "../types";

const PopularMoviesPage = () => {
  const [searchParams] = useSearchParams({ page: "1" });
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;
  const queryClient = new QueryClient();

  const getQueryKey = (page: number) =>
    ["movies", { page, query }] as MoviesQueryKey;

  useEffect(() => {
    if (currentPage < 500) {
      queryClient.prefetchQuery(getQueryKey(currentPage + 1), getMovies);
    }
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
