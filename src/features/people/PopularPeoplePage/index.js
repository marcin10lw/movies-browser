import { Container } from "../../../common/Container";
import TilesSection from "../../../common/TilesSection";
import ActorTile from "../ActorTile/index";
import { useSelector } from "react-redux";
import { selectPeople } from "../peopleSlice";

const PopularPeoplePage = () => {
  const people = useSelector(selectPeople);
  
  return (
    <Container>
      <TilesSection title="Popular people">
        {people &&
          people.map(person => (
            <li key={person.id}>
              <ActorTile
                poster={person.profile_path}
                name={person.name}
              />
            </li>
          ))}
      </TilesSection>
    </Container>
  );
};

export default PopularPeoplePage;