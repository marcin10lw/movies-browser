import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import ErrorPage from "../../../common/ErrorPage";
import { Loading } from "../../../common/Loading";
import { Main } from "../../../common/Main";
import searchQueryParamName from "../../../common/searchQueryParamName";
import About from "./About";
import Cast from "./Cast";
import Crew from "./Crew";
import { useQuery } from "@tanstack/react-query";
import { getPersonDetails } from "./getPersonDetails";

const ActorPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get(searchQueryParamName);

  const { data, status } = useQuery(
    ["personDetails", { id }],
    getPersonDetails
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (query) {
      navigate(`/people?${searchQueryParamName}=${query}`);
    }
  }, [query, navigate]);

  if (status === "loading") return <Loading />;
  if (status === "success")
    return (
      <Main>
        <Container actorPage>
          <About actorInfo={data.actorInfo} />
          <Cast actorMoviesCast={data.moviesCast} />
          <Crew actorMoviesCrew={data.moviesCrew} />
        </Container>
      </Main>
    );
  if (status === "error") return <ErrorPage />;
};

export default ActorPage;
