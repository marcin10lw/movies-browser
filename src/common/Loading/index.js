import { StyledLoading, StyledSpinner } from "./styled";
import { Main } from "../Main";
import { useSearchParams } from "react-router-dom";
import { Container } from "../Container";
import searchQueryParamName from "../searchQueryParamName";
import { SectionTitle } from "../SectionTitle";

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
