import { call, put, delay, takeLatest, debounce } from "redux-saga/effects";
import { getPopularData, getGenres, getDataByQuery } from "../getData";
import {
  setGenres,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMovies,
  fetchGenres,
} from "./moviesSlice";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(setGenres(genres));
  } catch (error) {
    console.error(error);
  }
}

function* fetchMoviesHandler({ payload }) {
  try {
    const currentPage = payload.currentPage;
    const query = payload.query;
    const data = yield query
      ? call(getDataByQuery, "movie", currentPage, query) 
      : call(getPopularData, "movie", currentPage);
    yield put(fetchMoviesSuccess(data));
  } catch (error) {
    yield delay(500);
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
  yield debounce(500, fetchMovies.type, fetchMoviesHandler);
}