import { Container } from "../../../../common/Container";
import { GridList } from "../../../../common/GridList";
import { SectionTitle } from "../../../../common/SectionTitle";
import MovieTile from "../../MovieTile";
import { Movie } from "../../types";

type PopularMoviesProps = {
  title: string;
  movies: Movie[];
};

const PopularMovies = ({ title, movies }: PopularMoviesProps) => {
  return (
    <Container>
      <section>
        <SectionTitle>{title}</SectionTitle>
        <GridList popularMovies>
          {movies &&
            movies.map((movie) => (
              <li key={movie.id}>
                <MovieTile
                  title={movie.title}
                  subtitle={
                    movie.release_date ? movie.release_date.slice(0, 4) : null
                  }
                  poster={movie.poster_path}
                  score={movie.vote_average}
                  votes={movie.vote_count}
                  genreIds={movie.genre_ids}
                  id={movie.id}
                />
              </li>
            ))}
        </GridList>
      </section>
    </Container>
  );
};

export default PopularMovies;
