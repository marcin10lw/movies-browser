import { all } from "redux-saga/effects";
import { peopleSaga } from "./features/people/peopleSaga";
import { genresSaga } from "./features/movies/genresSaga";
import { actorSaga } from "./features/people/ActorPage/actorSaga";
import { movieSaga } from "./features/movies/MoviePage/movieSaga";

export default function* rootSaga() {
  yield all([peopleSaga(), genresSaga(), actorSaga(), movieSaga()]);
}
