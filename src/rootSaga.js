import { all } from "redux-saga/effects";
import { peopleSaga } from "./features/people/peopleSaga";
import { genresSaga } from "./features/movies/genresSaga";
import { actorSaga } from "./features/people/ActorPage/actorSaga";

export default function* rootSaga() {
  yield all([peopleSaga(), genresSaga(), actorSaga()]);
}
