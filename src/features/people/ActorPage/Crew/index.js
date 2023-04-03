import { useSelector } from "react-redux";
import { GridList } from "../../../../common/GridList";
import { SectionTitle } from "../../../../common/SectionTitle";
import MovieTile from "../../../movies/MovieTile";
import { selectActorMoviesCrew } from "../actorSlice";

const Crew = () => {
  const actorMoviesCrew = useSelector(selectActorMoviesCrew);

  return (
    actorMoviesCrew && (
      <section>
        <SectionTitle
          as="h2"
          detailsPage
        >{`Movies - crew (${actorMoviesCrew.length})`}</SectionTitle>
        <GridList popularMovies>
          {actorMoviesCrew.map((movie) => (
            <li key={movie.credit_id}>
              <MovieTile
                title={movie.title}
                genreIds={movie.genre_ids}
                poster={movie.poster_path}
                subtitle={`${movie.job} ${movie.release_date.slice(0, 4)}`}
                id={movie.id}
                score={movie.vote_average}
                votes={movie.vote_count}
              />
            </li>
          ))}
        </GridList>
      </section>
    )
  );
};

export default Crew;
