import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import { fetchMovieDetails, selectFetchingStatus } from "./movieSlice";
import About from "./About";
import BackgroundPoster from "./BackgroundPoster";
import Cast from "./Cast";
import Crew from "./Crew";
import { Main } from "../../../common/Main";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import searchQueryParamName from "../../../common/searchQueryParamName";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const status = useSelector(selectFetchingStatus);
  const query = searchParams.get(searchQueryParamName);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (query) {
      navigate(`/movies?${searchQueryParamName}=${query}`);
    }
  }, [query, navigate]);

  return {
    loading: <Loading />,
    success: (
      <>
        <BackgroundPoster />
        <Main moviePage>
          <Container>
            <About />
            <Cast />
            <Crew />
          </Container>
        </Main>
      </>
    ),
    error: <ErrorPage />,
  }[status];
};

export default MoviePage;
