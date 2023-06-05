import Rating from "../Rating";
import {
  PosterWrapper,
  StyledBackgroundPoster,
  Info,
  Title,
  BigPoster,
  Gradient,
} from "./styled";

const BackgroundPoster = ({ movieInfo }) => {
  return (
    movieInfo && (
      <>
        {movieInfo.backdrop_path && (
          <StyledBackgroundPoster>
            <Gradient />
            <PosterWrapper>
              <BigPoster
                src={`https://image.tmdb.org/t/p/w1280/${movieInfo.backdrop_path}`}
                alt=""
              />
            </PosterWrapper>
            <Info>
              <Title>{movieInfo.original_title}</Title>
              <Rating
                location="backgroundPoster"
                averageVotes={movieInfo.vote_average.toFixed(1)}
                voteAmount={movieInfo.vote_count}
              />
            </Info>
          </StyledBackgroundPoster>
        )}
      </>
    )
  );
};

export default BackgroundPoster;
