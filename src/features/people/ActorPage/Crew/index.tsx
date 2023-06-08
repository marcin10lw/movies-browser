import { detailsTilesPerPage } from "../../../../common/detailsTilesPerPage";
import { SectionTitle } from "../../../../common/SectionTitle";
import { GridList } from "../../../../common/GridList";
import MovieTile from "../../../movies/MovieTile";
import { Movie } from "../../../../common/types";
import useDetailsPagination from "../../../../common/useDetailsPagination";
import DetailsPagination from "../../../../common/DetailsPagination";

type CrewProps = {
  actorMoviesCrew: Movie[];
};

const Crew = ({ actorMoviesCrew }: CrewProps) => {
  const { firstIndex, lastIndex, currentPage, setCurrentPage, ref } =
    useDetailsPagination();

  const currentActorMoviesCrew = actorMoviesCrew.slice(firstIndex, lastIndex);

  return (
    actorMoviesCrew && (
      <section ref={ref}>
        <SectionTitle
          as="h2"
          detailsPage
        >{`Movies - crew (${actorMoviesCrew.length})`}</SectionTitle>
        <GridList popularMovies>
          {currentActorMoviesCrew.map((movie) => (
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
        {actorMoviesCrew.length > detailsTilesPerPage && (
          <DetailsPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            tilesAmount={actorMoviesCrew.length}
          />
        )}
      </section>
    )
  );
};

export default Crew;
