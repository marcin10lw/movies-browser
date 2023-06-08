import {
  Button,
  Info,
  LeftArrow,
  Number,
  RightArrow,
  StyledDetailsPagination,
  Text,
} from "./styled";

const DetailsPagination = () => {
  return (
    <StyledDetailsPagination>
      <Button>
        <LeftArrow />
      </Button>
      <Info>
        <Number>1</Number>
        <Text>of</Text>
        <Number>2</Number>
      </Info>
      <Button>
        <RightArrow />
      </Button>
    </StyledDetailsPagination>
  );
};

export default DetailsPagination;
