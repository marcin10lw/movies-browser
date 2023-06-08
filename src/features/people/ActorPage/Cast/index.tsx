import { detailsTilesPerPage } from "../../../../common/detailsTilesPerPage";
import { SectionTitle } from "../../../../common/SectionTitle";
import { GridList } from "../../../../common/GridList";
import MovieTile from "../../../movies/MovieTile";
import { Movie } from "../../../../common/types";
import useDetailsPagination from "../../../../common/useDetailsPagination";
import DetailsPagination from "../../../../common/DetailsPagination";

type CastProps = {
  actorMoviesCast: Movie[];
};

const Cast = ({ actorMoviesCast }: CastProps) => {
  const { firstIndex, lastIndex, currentPage, setCurrentPage, ref } =
    useDetailsPagination();

  const currentActorMoviesCast = actorMoviesCast.slice(firstIndex, lastIndex);

  return (
    actorMoviesCast && (
      <section ref={ref}>
        <SectionTitle
          as="h2"
          detailsPage
        >{`Movies - cast (${actorMoviesCast.length})`}</SectionTitle>
        <GridList popularMovies>
          {currentActorMoviesCast.map((movie) => (
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

        {actorMoviesCast.length > detailsTilesPerPage && (
          <DetailsPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            tilesAmount={actorMoviesCast.length}
          />
        )}
      </section>
    )
  );
};

export default Cast;
