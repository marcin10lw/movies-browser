import { SectionTitle } from "../../../../common/SectionTitle";
import { GridList } from "../../../../common/GridList";
import ActorTile from "../../../people/ActorTile";

const Crew = ({ movieCrew }) => {
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
