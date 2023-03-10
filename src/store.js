import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import peopleReducer from "./features/people/peopleSlice";
import moviesReducer from "./features/movies/moviesSlice";
import actorReducer from "./features/people/ActorPage/actorSlice";
import movieReducer from "./features/movies/MoviePage/movieSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    people: peopleReducer,
    movies: moviesReducer,
    actor: actorReducer,
    movie: movieReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
