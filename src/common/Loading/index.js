import { StyledLoading, StyledSpinner } from "./styled";
import TilesSection from "../TilesSection";
import { Main } from "../Main";
import { useSearchParams } from "react-router-dom";
import { Container } from "../Container";
import searchQueryParamName from "../searchQueryParamName"

export const Loading = () => {
  const [searchParams] = useSearchParams({ [searchQueryParamName]: "" });
  const query = searchParams.get(searchQueryParamName);
  const sectionTitle = query ? `Search results for "${query}"` : null;

  return (
    <Main>
      <Container>
        <TilesSection title={sectionTitle}>
          <StyledLoading>
            <StyledSpinner />
          </StyledLoading>
        </TilesSection>
      </Container>
    </Main>
  );
};
