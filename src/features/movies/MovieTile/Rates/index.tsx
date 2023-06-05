import { StyledRates, Votes, StyledStar, Score } from "./styled";

type RatesProps = {
  score: number;
  votes: number;
};

const Rates = ({ score = 0, votes }: RatesProps) => (
  <StyledRates>
    <StyledStar />
    <Score>{score.toFixed(1)}</Score>
    <Votes>
      {votes === 0 ? (
        "No votes yet"
      ) : (
        <>
          {votes} vote{votes === 1 ? "" : "s"}
        </>
      )}
    </Votes>
  </StyledRates>
);

export default Rates;
