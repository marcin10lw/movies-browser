import { call, put, delay } from "redux-saga/effects";
import { getPopularData } from "../getPopularData";
import { setPeople, setLoadingToSucces, setLoadingToFail } from "./peopleSlice";

function* fetchPeopleHandler() {
    try {
        const people = yield call(getPopularData, "person");
        yield put(setPeople(people));
        yield delay(1000);
        yield put(setLoadingToSucces());
    } catch (error) {
        yield delay(1000);
        yield put(setLoadingToFail());
    }
};

export function* peopleSaga() {
    yield call(fetchPeopleHandler);
};
