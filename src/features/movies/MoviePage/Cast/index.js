import { useSelector } from "react-redux";
import { selectMovieCast } from "../movieSlice";
import { GridList } from "../../../../common/GridList";
import ActorTile from "../../../people/ActorTile";
import { SectionTitle } from "../../../../common/SectionTitle";

const Cast = () => {
  const movieCast = useSelector(selectMovieCast);

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
      </section>
    )
  );
};

export default Cast;
