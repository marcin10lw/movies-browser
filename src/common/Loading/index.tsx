import { useSearchParams } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

import { Main } from "../Main";
import { Container } from "../Container";
import { SectionTitle } from "../SectionTitle";
import { StyledLoading, StyledSpinner } from "./styled";

export const Loading = () => {
  const [searchParams] = useSearchParams({ [searchQueryParamName]: "" });
  const query = searchParams.get(searchQueryParamName);
  const sectionTitle = query ? `Search results for "${query}"` : null;

  return (
    <Main>
      <Container>
        <section>
          <SectionTitle>{sectionTitle}</SectionTitle>
          <StyledLoading>
            <StyledSpinner />
          </StyledLoading>
        </section>
      </Container>
    </Main>
  );
};
