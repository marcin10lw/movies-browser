import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectFetchingStatus,
  updateMoviesCurrentPage,
} from "../moviesSlice";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import PopularMovies from "./PopularMovies";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const PopularMoviesPage = () => {
  const fetchingStatus = useSelector(selectFetchingStatus);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams({ page: 1 });
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    dispatch(updateMoviesCurrentPage(currentPage));
    dispatch(fetchMovies({ currentPage }));
  }, [currentPage, dispatch]);

  return {
    loading: <Loading />,
    success: <PopularMovies />,
    fail: <ErrorPage />,
  }[fetchingStatus];
};

export default PopularMoviesPage;
