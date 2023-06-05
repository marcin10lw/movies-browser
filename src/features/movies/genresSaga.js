import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "./getGenres";
import { setGenres, fetchGenres } from "./genresSlice";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(setGenres(genres));
  } catch (error) {}
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
