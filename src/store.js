import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import peopleReducer from "./features/people/peopleSlice";
import genresReducer from "./features/movies/genresSlice";
import actorReducer from "./features/people/ActorPage/actorSlice";
import movieReducer from "./features/movies/MoviePage/movieSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    people: peopleReducer,
    genres: genresReducer,
    actor: actorReducer,
    movie: movieReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
