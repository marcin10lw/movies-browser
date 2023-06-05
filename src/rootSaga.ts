import { all } from "redux-saga/effects";
import { genresSaga } from "./features/movies/genresSaga";

export default function* rootSaga() {
  yield all([genresSaga()]);
}
