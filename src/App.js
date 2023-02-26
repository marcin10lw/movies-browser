import Pagination from "./common/Pagination";
import Section from "./common/Section";
import MovieList from "./features/MovieList";
import ActorTile from "./features/actors/ActorTile";
import Header from "./common/Header";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/movies" element={
          <Section
            title="Popular movies"
            body={
              <MovieList />
            } />
        } />
        <Route path="/people" element={
          <Section
            title="Popular people"
            body={
              <ActorTile />
            } />
        } />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>
      <Pagination />
    </>
  );
}
export default App;
