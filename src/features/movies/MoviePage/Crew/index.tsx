import { detailsTilesPerPage } from "../../../../common/detailsTilesPerPage";
import { SectionTitle } from "../../../../common/SectionTitle";
import { GridList } from "../../../../common/GridList";
import ActorTile from "../../../people/ActorTile";
import { MovieCrew } from "../../types";
import useDetailsPagination from "../../../../common/useDetailsPagination";
import DetailsPagination from "../../../../common/DetailsPagination";

type CrewProps = {
  movieCrew: MovieCrew;
};

const Crew = ({ movieCrew }: CrewProps) => {
  const { firstIndex, lastIndex, currentPage, setCurrentPage, ref } =
    useDetailsPagination();

  const currentMovieCrew = movieCrew.slice(firstIndex, lastIndex);

  return (
    movieCrew && (
      <section ref={ref}>
        <SectionTitle as="h2" detailsPage>
          Crew ({movieCrew.length})
        </SectionTitle>
        <GridList popularPeople>
          {currentMovieCrew.map((movie) => (
            <li key={movie.credit_id}>
              <ActorTile
                poster={movie.profile_path}
                name={movie.name}
                role={movie.job}
                id={movie.id}
              />
            </li>
          ))}
        </GridList>
        {movieCrew.length > detailsTilesPerPage && (
          <DetailsPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            tilesAmount={movieCrew.length}
          />
        )}
      </section>
    )
  );
};

export default Crew;
