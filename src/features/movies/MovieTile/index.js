import Rates from "./Rates";
import {
  MovieInfo,
  Poster,
  StyledMovieTile,
  Subtitle,
  Title,
  Dummy,
} from "./styled";
import Tags from "./Tags";

const MovieTile = ({ poster, title, subtitle, score, votes, genreIds }) => {
  return (
    <>
      <StyledMovieTile>
        {poster ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w342${poster}`}
            alt={title}
          />
        ) : (
          <Dummy />
        )}

        <MovieInfo>
          <div>
            <Title>{title}</Title>
            <Subtitle>{subtitle.slice(0, 4)}</Subtitle>
            <Tags genreIds={genreIds} />
          </div>
          <Rates score={score} votes={votes} />
        </MovieInfo>
      </StyledMovieTile>
    </>
  );
};

export default MovieTile;
