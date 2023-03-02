import Pagination from "./common/Pagination";
import PopularMoviesPage from "./features/movies/PopularMoviesPage";
import PopularPeoplePage from "./features/people/PopularPeoplePage";
import Header from "./common/Header";
import { Main } from "./common/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import ActorPage from "./features/people/ActorPage";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/movies" element={<PopularMoviesPage />} />
          <Route path="/people" element={<PopularPeoplePage />} />
          <Route path="/people/:id" element={<ActorPage />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </Main>
      <Pagination />
    </>
  );
}
export default App;
