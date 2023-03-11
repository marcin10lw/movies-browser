import { Container } from "../../../../common/Container";
import { GridList } from "../../../../common/GridList";
import TilesSection from "../../../../common/TilesSection";
import MovieTile from "../../MovieTile";
import { useSelector } from "react-redux";
import { selectMovies, selectMoviesTotalResults } from "../../moviesSlice";
import { useSearchParams } from "react-router-dom";

const PopularMovies = () => {
  const movies = useSelector(selectMovies);
  const totalResults = useSelector(selectMoviesTotalResults)
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const sectionTitle = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular Movies";

  return (
    <Container>
      <TilesSection title={sectionTitle}>
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
                  id={movie.id}
                />
              </li>
            ))}
        </GridList>
      </TilesSection>
    </Container>
  );
};

export default PopularMovies;
