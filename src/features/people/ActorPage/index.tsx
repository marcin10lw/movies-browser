import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPersonDetails } from "./getPersonDetails";
import searchQueryParamName from "../../../common/searchQueryParamName";

import { Loading } from "../../../common/Loading";
import { Container } from "../../../common/Container";
import { Main } from "../../../common/Main";
import About from "./About";
import Cast from "./Cast";
import Crew from "./Crew";
import ErrorPage from "../../../common/ErrorPage";
import useDebounce from "../../../common/useDebounce";

const ActorPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query = useDebounce(searchParams.get(searchQueryParamName) || "");

  const { data, status } = useQuery(
    ["personDetails", { id }],
    getPersonDetails
  );

  useEffect(() => {
    if (query) {
      navigate(`/people?${searchQueryParamName}=${query}`);
    }
  }, [query, navigate]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "success" && (
        <Main>
          <Container>
            <About actorInfo={data.actorInfo} />
            <Cast actorMoviesCast={data.moviesCast} />
            <Crew actorMoviesCrew={data.moviesCrew} />
          </Container>
        </Main>
      )}
      {status === "error" && <ErrorPage />}
    </>
  );
};

export default ActorPage;
