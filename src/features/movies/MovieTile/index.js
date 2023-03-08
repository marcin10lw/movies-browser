import { useState } from "react";
import Rates from "./Rates";
import {
  MovieInfo,
  Poster,
  StyledMovieTile,
  Subtitle,
  Title,
  Dummy,
  MovieStandbyPoster,
  MoviesStandbyWrapper,
} from "./styled";
import Tags from "./Tags";

const MovieTile = ({ poster, title, subtitle, score, votes, genreIds }) => {
  const [posterLoaded, setPosterLoaded] = useState(false);

  return (
    <StyledMovieTile>
      {poster ? (
        <>
          <MoviesStandbyWrapper loaded={posterLoaded}>
            <MovieStandbyPoster />
          </MoviesStandbyWrapper>
          <Poster
            loaded={posterLoaded}
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title}
            onLoad={() => setPosterLoaded(true)}
          />
        </>
      ) : (
        <div>
          <Dummy />
        </div>
      )}

      <MovieInfo>
        <div>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Tags genreIds={genreIds} />
        </div>
        <Rates score={score} votes={votes} />
      </MovieInfo>
    </StyledMovieTile>
  );
};

export default MovieTile;
