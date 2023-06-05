import { SectionTitle } from "../../../../common/SectionTitle";
import { GridList } from "../../../../common/GridList";
import MovieTile from "../../../movies/MovieTile";
import { Movie } from "../../../../common/types";

type CastProps = {
  actorMoviesCast: Movie[];
};

const Cast = ({ actorMoviesCast }: CastProps) => {
  return (
    actorMoviesCast && (
      <section>
        <SectionTitle
          as="h2"
          detailsPage
        >{`Movies - cast (${actorMoviesCast.length})`}</SectionTitle>
        <GridList popularMovies>
          {actorMoviesCast.map((movie) => (
            <li key={movie.credit_id}>
              <MovieTile
                title={movie.title}
                genreIds={movie.genre_ids}
                poster={movie.poster_path}
                subtitle={`${movie.character} ${
                  movie.release_date
                    ? `(${movie.release_date.slice(0, 4)})`
                    : ""
                }`}
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

export default Cast;
