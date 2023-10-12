import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchGenres } from "./features/movies/genresSlice";
import Header from "./common/Header";
import PopularMoviesPage from "./features/movies/PopularMoviesPage";
import PopularPeoplePage from "./features/people/PopularPeoplePage";
import ActorPage from "./features/people/ActorPage";
import MoviePage from "./features/movies/MoviePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/movies" element={<PopularMoviesPage />} />
        <Route path="/people" element={<PopularPeoplePage />} />
        <Route path="/people/:id" element={<ActorPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="*" element={<Navigate to="/movies" />} />
      </Routes>
    </>
  );
}
export default App;
