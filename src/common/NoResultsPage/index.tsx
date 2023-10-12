import { useSearchParams } from "react-router-dom";

import searchQueryParamName from "../searchQueryParamName";
import { Main } from "../Main";
import { Container } from "../Container";
import { SectionTitle } from "../SectionTitle";
import { StyledNoResultsImage } from "./styled";

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
