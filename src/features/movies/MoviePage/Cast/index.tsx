import { detailsTilesPerPage } from "../../../../common/detailsTilesPerPage";
import { SectionTitle } from "../../../../common/SectionTitle";
import { GridList } from "../../../../common/GridList";
import ActorTile from "../../../people/ActorTile";
import { MovieCast } from "../../types";
import DetailsPagination from "../../../../common/DetailsPagination";
import useDetailsPagination from "../../../../common/useDetailsPagination";

type CastProps = {
  movieCast: MovieCast;
};

const Cast = ({ movieCast }: CastProps) => {
  const { firstIndex, lastIndex, currentPage, setCurrentPage, ref } =
    useDetailsPagination();

  const currentMovieCast = movieCast.slice(firstIndex, lastIndex);

  return (
    movieCast && (
      <section ref={ref}>
        <SectionTitle as="h2" detailsPage>
          Cast ({movieCast.length})
        </SectionTitle>
        <GridList popularPeople>
          {currentMovieCast.map((movie) => (
            <li key={movie.cast_id}>
              <ActorTile
                poster={movie.profile_path}
                name={movie.name}
                role={movie.character}
                id={movie.id}
              />
            </li>
          ))}
        </GridList>
        {movieCast.length > detailsTilesPerPage && (
          <DetailsPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            tilesAmount={movieCast.length}
          />
        )}
      </section>
    )
  );
};

export default Cast;
