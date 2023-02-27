import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import peopleReducer from "./features/people/peopleSlice";
import { peopleSaga } from "./features/people/peopleSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        people: peopleReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(peopleSaga);

export default store;