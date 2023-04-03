import { useSelector } from "react-redux";
import { selectMovieCrew } from "../movieSlice";
import { GridList } from "../../../../common/GridList";
import ActorTile from "../../../people/ActorTile";
import { SectionTitle } from "../../../../common/SectionTitle";

const Crew = () => {
  const movieCrew = useSelector(selectMovieCrew);

  return (
    movieCrew && (
      <section>
        <SectionTitle as="h2" detailsPage>
          Crew
        </SectionTitle>
        <GridList popularPeople>
          {movieCrew.map((movie) => (
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
      </section>
    )
  );
};

export default Crew;
