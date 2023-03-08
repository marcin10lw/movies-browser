import { Container } from "../../../../common/Container";
import { GridList } from "../../../../common/GridList";
import TilesSection from "../../../../common/TilesSection";
import MovieTile from "../../MovieTile";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, isQuery, selectMovies } from "../../moviesSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PopularMovies = () => {
  const movies = useSelector(selectMovies);
  const searchQueryParamName = "search";
  const [searchParams] = useSearchParams({ [searchQueryParamName]: "" });
  const query = searchParams.get(searchQueryParamName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isQuery(query));
    dispatch(fetchMovies());
  }, [dispatch, query]);

  return (
    <Container>
      <TilesSection title="Popular movies">
        <GridList popularMovies>
          {movies &&
            movies.map((movie) => (
              <li key={movie.id}>
                <MovieTile
                  title={movie.title}
                  subtitle={movie.release_date.slice(0, 4)}
                  poster={movie.poster_path}
                  score={movie.vote_average}
                  votes={movie.vote_count}
                  genreIds={movie.genre_ids}
                />
              </li>
            ))}
        </GridList>
      </TilesSection>
    </Container>
  );
};

export default PopularMovies;
