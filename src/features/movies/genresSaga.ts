import { call, put, takeLatest } from "redux-saga/effects";

import { setGenres, fetchGenres } from "./genresSlice";
import { getGenres } from "./getGenres";
import { Genres } from "common/types";

function* fetchGenresHandler() {
  try {
    const genres: Genres = yield call(getGenres);
    yield put(setGenres(genres));
  } catch (error) {}
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
