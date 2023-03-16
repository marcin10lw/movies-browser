import { Container } from "../../../../common/Container";
import ActorTile from "../../ActorTile/index";
import { useSelector } from "react-redux";
import { selectPeople, selectPeopleTotalResults } from "../../peopleSlice";
import { GridList } from "../../../../common/GridList";
import { useSearchParams } from "react-router-dom";
import searchQueryParamName from "../../../../common/searchQueryParamName";
import { SectionTitle } from "../../../../common/SectionTitle";

const PopularPeople = () => {
  const people = useSelector(selectPeople);
  const totalResults = useSelector(selectPeopleTotalResults);
  const [searchParams] = useSearchParams();
  const query = searchParams.get(searchQueryParamName);
  const sectionTitle = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular People";

  return (
    <Container>
      <section>
        <SectionTitle>{sectionTitle}</SectionTitle>
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
