import { detailsTilesPerPage } from "../detailsTilesPerPage";
import {
  Button,
  ButtonsWrapper,
  Info,
  LeftArrow,
  Number,
  RightArrow,
  StyledDetailsPagination,
  Text,
} from "./styled";

type DetailsPaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  tilesAmount: number;
};

const DetailsPagination = ({
  currentPage,
  setCurrentPage,
  tilesAmount,
}: DetailsPaginationProps) => {
  const totalPages = Math.ceil(tilesAmount / detailsTilesPerPage);

  const onGoToFirstClick = () => {
    if (currentPage === 1) return;

    setCurrentPage(1);
  };

  const onGoToPreviousClick = () => {
    if (currentPage === 1) return;

    setCurrentPage((currentPage) => currentPage - 1);
  };

  const onGoToNextClick = () => {
    if (currentPage === totalPages) return;

    setCurrentPage((currentPage) => currentPage + 1);
  };

  const onGoToLastClick = () => {
    if (currentPage === totalPages) return;

    setCurrentPage(totalPages);
  };

  return (
    <StyledDetailsPagination>
      <ButtonsWrapper>
        <Button disabled={currentPage === 1} onClick={onGoToFirstClick}>
          <LeftArrow />
          <LeftArrow />
        </Button>
        <Button disabled={currentPage === 1} onClick={onGoToPreviousClick}>
          <LeftArrow />
        </Button>
      </ButtonsWrapper>
      <Info>
        <Number>{currentPage}</Number>
        <Text>of</Text>
        <Number>{totalPages}</Number>
      </Info>
      <ButtonsWrapper>
        <Button disabled={currentPage === totalPages} onClick={onGoToNextClick}>
          <RightArrow />
        </Button>
        <Button disabled={currentPage === totalPages} onClick={onGoToLastClick}>
          <RightArrow />
          <RightArrow />
        </Button>
      </ButtonsWrapper>
    </StyledDetailsPagination>
  );
};

export default DetailsPagination;
