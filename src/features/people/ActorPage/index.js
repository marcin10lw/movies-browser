import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container } from "../../../common/Container";
import ErrorPage from "../../../common/ErrorPage";
import { Loading } from "../../../common/Loading";
import About from "./About";
import { fetchActorDetails, selectActorPageStatus } from "./actorSlice";
import Cast from "./Cast";
import Crew from "./Crew";

const ActorPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pageStatus = useSelector(selectActorPageStatus);

  useEffect(() => {
    dispatch(fetchActorDetails(id));
  }, [id]);

  return {
    loading: <Loading />,
    success: (
      <>
        <Container actorPage>
          <About />
          <Cast />
          <Crew />
        </Container>
      </>
    ),
    fail: <ErrorPage />,
  }[pageStatus];
};

export default ActorPage;
