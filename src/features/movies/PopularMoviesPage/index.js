import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectFetchingStatus,
  selectMoviesTotalPage,
} from "../moviesSlice";
import { Loading } from "../../../common/Loading";
import { Main } from "../../../common/Main";
import ErrorPage from "../../../common/ErrorPage";
import PopularMovies from "./PopularMovies";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Pagination from "../../../common/Pagination";
import NoResultsPage from "../../../common/NoResultsPage";
import searchQueryParamName from "../../../common/searchQueryParamName";

const PopularMoviesPage = () => {
  const fetchingStatus = useSelector(selectFetchingStatus);
  const fetchedPages = useSelector(selectMoviesTotalPage);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams({ page: 1 });
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;

  useEffect(() => {
    dispatch(fetchMovies({ currentPage, query }));
  }, [currentPage, query, dispatch]);

  return {
    noResults: <NoResultsPage />,
    loading: <Loading />,
    success: (
      <Main>
        <PopularMovies />
        <Pagination location="popularMovies" fetchedPages={fetchedPages} />
      </Main>
    ),
    error: <ErrorPage />,
  }[fetchingStatus];
};

export default PopularMoviesPage;
