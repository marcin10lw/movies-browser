import { call, put, delay, takeLatest } from "redux-saga/effects";
import { getPopularData } from "../getData";
import {
  setFetchingToSucces,
  setFetchingToFail,
  fetchPeople,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload }) {
  try {
    const currentPage = payload.currentPage;
    const data = yield call(getPopularData, "person", currentPage);
    yield delay(500);
    yield put(setFetchingToSucces(data));
  } catch (error) {
    yield delay(500);
    yield put(setFetchingToFail());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
