import Pagination from "./common/Pagination";
import Section from "./common/Section";
import MovieList from "./features/MovieList";
import ActorTile from "./features/actors/ActorTile";
import Header from "./common/Header";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/movies">
          <Section
            title="Popular movies"
            body={
              <MovieList />
            }
          />
        </Route>
        <Route path="/people">
          <Section
            title="Popular people"
            body={
              <ActorTile />
            }
          />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
      <Pagination />
    </HashRouter>
  );
}

export default App;
