import { call, put, delay, takeLatest, select } from "redux-saga/effects";
import { getPopularData, getGenres, getDataByQuery } from "../getData";
import {
  setGenres,
  setFetchingToSucces,
  setFetchingToFail,
  fetchMovies,
  fetchGenres,
  selectQuery,
  isQuery,
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

    const query = yield select(selectQuery);
    const currentPage = payload.currentPage;
    const data = yield !query
      ? call(getPopularData, "movie", currentPage)
      : call(getDataByQuery, "movie", query);
    yield delay(500);
    yield put(setFetchingToSucces(data));
  } catch (error) {
    yield delay(500);
    yield put(setFetchingToFail());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
  yield takeLatest([fetchMovies.type, isQuery.type], fetchMoviesHandler);
}
