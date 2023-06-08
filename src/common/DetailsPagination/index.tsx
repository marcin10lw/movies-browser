import { detailsTilesPerPage } from "../detailsTilesPerPage";

import {
  Button,
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

  const onGoToPreviousClick = () => {
    if (currentPage === 1) return;

    setCurrentPage((currentPage) => currentPage - 1);
  };

  const onGoToNextClick = () => {
    if (currentPage === totalPages) return;

    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <StyledDetailsPagination>
      <Button disabled={currentPage === 1} onClick={onGoToPreviousClick}>
        <LeftArrow />
      </Button>
      <Info>
        <Number>{currentPage}</Number>
        <Text>of</Text>
        <Number>{totalPages}</Number>
      </Info>
      <Button disabled={currentPage === totalPages} onClick={onGoToNextClick}>
        <RightArrow />
      </Button>
    </StyledDetailsPagination>
  );
};

export default DetailsPagination;
