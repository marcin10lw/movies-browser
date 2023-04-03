import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import ErrorPage from "../../../common/ErrorPage";
import { Loading } from "../../../common/Loading";
import { Main } from "../../../common/Main";
import searchQueryParamName from "../../../common/searchQueryParamName";
import About from "./About";
import { fetchActorDetails, selectActorPageStatus } from "./actorSlice";
import Cast from "./Cast";
import Crew from "./Crew";

const ActorPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const pageStatus = useSelector(selectActorPageStatus);
  const query = searchParams.get(searchQueryParamName);

  useEffect(() => {
    dispatch(fetchActorDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (query) {
      navigate(`/people?${searchQueryParamName}=${query}`);
    }
  }, [query, navigate]);

  return {
    loading: <Loading />,
    success: (
      <Main>
        <Container actorPage>
          <About />
          <Cast />
          <Crew />
        </Container>
      </Main>
    ),
    error: <ErrorPage />,
  }[pageStatus];
};

export default ActorPage;
