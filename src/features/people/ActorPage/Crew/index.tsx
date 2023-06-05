import { SectionTitle } from "../../../../common/SectionTitle";
import { GridList } from "../../../../common/GridList";
import MovieTile from "../../../movies/MovieTile";
import { Movie } from "../../../../common/types";

type CrewProps = {
  actorMoviesCrew: Movie[];
};

const Crew = ({ actorMoviesCrew }: CrewProps) => {
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
