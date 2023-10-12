import { useState } from "react";

import Rates from "./Rates";
import Tags from "./Tags";
import { MoviePlaceholder } from "../MoviePlaceholder";
import { GenreIds } from "common/types";
import {
  MovieInfo,
  Poster,
  StyledMovieTile,
  Subtitle,
  Title,
  MovieStandbyPoster,
  MoviesStandbyWrapper,
} from "./styled";

type MovieTileProps = {
  poster: string;
  title: string;
  subtitle: string | null;
  score: number;
  votes: number;
  genreIds: GenreIds;
  id: number;
};

const MovieTile = ({
  poster,
  title,
  subtitle,
  score,
  votes,
  genreIds,
  id,
}: MovieTileProps) => {
  const [posterLoaded, setPosterLoaded] = useState(false);

  return (
    <StyledMovieTile to={`/movies/${id}`}>
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
          <MoviePlaceholder />
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
