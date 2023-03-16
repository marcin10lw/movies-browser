import { useSearchParams } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

import {
  StyledPagination,
  ButtonsWrapper,
  Button,
  InfoNumber,
  InfoText,
  PageInfo,
  LeftArrow,
  RightArrow,
  ButtonText,
} from "./styled";

const Pagination = ({ location, fetchedPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName);
  const totalPages = fetchedPages > 500 ? 500 : fetchedPages;

  const onGoToFirst = () => {
    if (currentPage !== 1) {
      query
        ? setSearchParams({ [searchQueryParamName]: query, page: 1 })
        : setSearchParams({ page: 1 });
    }
  };

  const onGoToPrevious = () => {
    if (currentPage !== 1) {
      const previousPage = currentPage - 1;

      query
        ? setSearchParams({ [searchQueryParamName]: query, page: previousPage })
        : setSearchParams({ page: previousPage });
    }
  };

  const onGoToNext = () => {
    if (currentPage !== totalPages) {
      const nextPage = currentPage + 1;

      query
        ? setSearchParams({ [searchQueryParamName]: query, page: nextPage })
        : setSearchParams({ page: nextPage });
    }
  };

  const onGoToLast = () => {
    if (currentPage !== totalPages) {
      query
        ? setSearchParams({ [searchQueryParamName]: query, page: totalPages })
        : setSearchParams({ page: totalPages });
    }
  };

  return (
    <StyledPagination location={location}>
      <ButtonsWrapper>
        <Button disabled={currentPage <= 1} onClick={onGoToFirst}>
          <LeftArrow mobile="true" />
          <LeftArrow />
          <ButtonText>First</ButtonText>
        </Button>
        <Button disabled={currentPage <= 1} onClick={onGoToPrevious}>
          <LeftArrow />
          <ButtonText>Previous</ButtonText>
        </Button>
      </ButtonsWrapper>
      <PageInfo>
        <InfoText>Page</InfoText>
        <InfoNumber>{currentPage}</InfoNumber>
        <InfoText>of</InfoText>
        <InfoNumber>{totalPages}</InfoNumber>
      </PageInfo>
      <ButtonsWrapper>
        <Button disabled={currentPage >= totalPages} onClick={onGoToNext}>
          <ButtonText>Next</ButtonText>
          <RightArrow />
        </Button>
        <Button disabled={currentPage >= totalPages} onClick={onGoToLast}>
          <ButtonText>Last</ButtonText>
          <RightArrow />
          <RightArrow mobile="true" />
        </Button>
      </ButtonsWrapper>
    </StyledPagination>
  );
};

export default Pagination;
