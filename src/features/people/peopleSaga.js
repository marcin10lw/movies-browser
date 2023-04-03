import { call, put, delay, debounce } from "redux-saga/effects";
import { getDataByQuery, getPopularData } from "../getData";
import {
  fetchPeopleSuccess,
  fetchPeopleError,
  fetchPeople,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload }) {
  try {
    const currentPage = payload.currentPage;
    const query = payload.query;
    const data = yield query
      ? call(getDataByQuery, "person", currentPage, query)
      : call(getPopularData, "person", currentPage);
    yield delay(500);
    yield put(fetchPeopleSuccess(data));
  } catch (error) {
    yield delay(500);
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield debounce(500, fetchPeople.type, fetchPeopleHandler);
}
