import {
  StyledRating,
  StyledStarIcon,
  Votes,
  Wrapper,
  VoteAmount,
  MaxVote,
} from "./styled";

type RatingProps = {
  location?: "backgroundPoster";
  averageVotes: string;
  voteAmount: number;
};

const Rating = ({ location, averageVotes, voteAmount }: RatingProps) => (
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
