import { Container } from "../../../../common/Container";
import ActorTile from "../../ActorTile/index";
import { GridList } from "../../../../common/GridList";
import { SectionTitle } from "../../../../common/SectionTitle";
import { Person } from "../../types";

type PopularPeopleProps = {
  title: string;
  people: Person[];
};

const PopularPeople = ({ title, people }: PopularPeopleProps) => {
  return (
    <Container>
      <section>
        <SectionTitle>{title}</SectionTitle>
        <GridList popularPeople>
          {people &&
            people.map((person) => (
              <li key={person.id}>
                <ActorTile
                  poster={person.profile_path}
                  name={person.name}
                  id={person.id}
                />
              </li>
            ))}
        </GridList>
      </section>
    </Container>
  );
};

export default PopularPeople;
