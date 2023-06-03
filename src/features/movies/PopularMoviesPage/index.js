import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import searchQueryParamName from "../../../common/searchQueryParamName";
import { getMovies } from "./getMovies";
import NoResultsPage from "../../../common/NoResultsPage";
import { Loading } from "../../../common/Loading";
import PopularMovies from "./PopularMovies";
import ErrorPage from "../../../common/ErrorPage";
import { Main } from "../../../common/Main";
import Pagination from "../../../common/Pagination";

const PopularMoviesPage = () => {
  const [searchParams] = useSearchParams({ page: 1 });
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;
  const queryClient = new useQueryClient();

  const getQueryKey = (page) => ["movies", { page, query }];

  useEffect(() => {
    if (currentPage < 500) {
      queryClient.prefetchQuery(getQueryKey(currentPage + 1), getMovies);
    }
  }, [currentPage, queryClient]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const { data, status } = useQuery(getQueryKey(currentPage), getMovies);

  const totalResults = data?.total_results;
  const totalPages = data?.total_pages;
  const sectionTitle = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular Movies";

  if (totalResults === 0) return <NoResultsPage />;

  if (status === "loading") return <Loading />;

  if (status === "success")
    return (
      <Main>
        <PopularMovies title={sectionTitle} movies={data.results} />
        <Pagination location="popularMovies" fetchedPages={totalPages} />
      </Main>
    );
  if (status === "error") return <ErrorPage />;
};

export default PopularMoviesPage;
