import { useSelector } from "react-redux";
import { GridList } from "../../../../common/GridList";
import TilesSection from "../../../../common/TilesSection";
import MovieTile from "../../../movies/MovieTile";
import { selectMoviesCrew } from "../actorSlice";

const Crew = () => {
  const moviesCrew = useSelector(selectMoviesCrew);

  return (
    moviesCrew.length > 0 && (
      <TilesSection
        location="actorPage"
        title={`Movies - crew (${moviesCrew.length})`}
      >
        <GridList popularMovies>
          {moviesCrew.map((movie) => (
            <li key={movie.credit_id}>
              <MovieTile
                title={movie.title}
                genreIds={movie.genre_ids}
                poster={movie.poster_path}
                subtitle={`${movie.job} ${movie.release_date.slice(0, 4)}`}
              />
            </li>
          ))}
        </GridList>
      </TilesSection>
    )
  );
};

export default Crew;
