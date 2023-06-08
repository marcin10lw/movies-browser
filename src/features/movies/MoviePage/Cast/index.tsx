import { SectionTitle } from "../../../../common/SectionTitle";
import { GridList } from "../../../../common/GridList";
import ActorTile from "../../../people/ActorTile";
import { MovieCast } from "../../types";
import DetailsPagination from "../../../../common/DetailsPagination";

type CastProps = {
  movieCast: MovieCast;
};

const Cast = ({ movieCast }: CastProps) => {
  return (
    movieCast && (
      <section>
        <SectionTitle as="h2" detailsPage>
          Cast
        </SectionTitle>
        <GridList popularPeople>
          {movieCast.map((movie) => (
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
        <DetailsPagination />
      </section>
    )
  );
};

export default Cast;
