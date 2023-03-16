import {
  StyledRating,
  StyledStarIcon,
  Votes,
  Wrapper,
  VoteAmount,
  MaxVote,
} from "./styled";

const Rating = ({ location, averageVotes, voteAmount }) => (
  <StyledRating location={location}>
    <Wrapper>
      <StyledStarIcon location={location} />
      <div>
        <Votes location={location}>{averageVotes}</Votes>
      </div>
      <MaxVote>/ 10</MaxVote>
    </Wrapper>
    <VoteAmount location={location}>{voteAmount} votes</VoteAmount>
  </StyledRating>
);
export default Rating;
