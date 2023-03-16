import { Main } from "../Main";
import { Container } from "../Container";
import { StyledNoResultsImage } from "./styled";
import { useSearchParams } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
import { SectionTitle } from "../SectionTitle";

const NoResultsPage = () => {
  const [searchParams] = useSearchParams({ [searchQueryParamName]: "" });
  const query = searchParams.get(searchQueryParamName);

  return (
    <Main>
      <Container>
        <section>
          <SectionTitle>{`Sorry, there are no results for “${query}”`}</SectionTitle>
          <StyledNoResultsImage />
        </section>
      </Container>
    </Main>
  );
};

export default NoResultsPage;
