import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "./getMovieDetails";
import searchQueryParamName from "../../../common/searchQueryParamName";

import { Loading } from "../../../common/Loading";
import { Container } from "../../../common/Container";
import { Main } from "../../../common/Main";
import BackgroundPoster from "./BackgroundPoster";
import About from "./About";
import Cast from "./Cast";
import Crew from "./Crew";
import ErrorPage from "../../../common/ErrorPage";

const MoviePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get(searchQueryParamName);
  const { data, status } = useQuery(["movieDetails", { id }], getMovieDetails);

  useEffect(() => {
    if (query) {
      navigate(`/movies?${searchQueryParamName}=${query}`);
    }
  }, [query, navigate]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "success" && (
        <>
          <BackgroundPoster movieInfo={data.movieInfo} />
          <Main moviePage>
            <Container>
              <About movieInfo={data.movieInfo} />
              <Cast movieCast={data.movieCast} />
              <Crew movieCrew={data.movieCrew} />
            </Container>
          </Main>
        </>
      )}
      {status === "error" && <ErrorPage />}
    </>
  );
};

export default MoviePage;
