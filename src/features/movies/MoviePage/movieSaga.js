import { call, put, delay } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} from "./movieSlice";
import { getMovieData } from "../../../common/getData";

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    const movieData = yield call(getMovieData, movieId);
    yield delay(500);
    yield put(fetchMovieDetailsSuccess(movieData));
  } catch (error) {
    yield delay(500);
    yield put(fetchMovieDetailsError());
  }
}

export function* movieSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
