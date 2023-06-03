import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = `${process.env.REACT_APP_API_KEY}`;

export const getData = async (path, params) => {
  const url = `${baseUrl}/${path}`;
  const response = await axios.get(url, {
    params: { api_key: apiKey, ...params },
  });

  return response;
};

export const getPopularData = async (dataName, currentPage) => {
  const { data } = await getData(`${dataName}/popular`, {
    page: currentPage,
  });

  return data;
};

export const getDataByQuery = async (dataName, currentPage = 1, query) => {
  if (!query) return;

  const { data } = await getData(`search/${dataName}`, {
    page: currentPage,
    query,
  });

  return data;
};

export const getGenres = async () => {
  const { data } = await getData(`genre/movie/list`);

  return data.genres;
};

export const getPersonData = async (id) => {
  const { data: infoRequest } = await getData(`person/${id}`);

  const { data: creditsRequest } = await getData(`person/${id}/movie_credits`);

  const [personInfo, personCredits] = await axios.all([
    infoRequest,
    creditsRequest,
  ]);

  return {
    actorInfo: personInfo,
    moviesCast: personCredits.cast,
    moviesCrew: personCredits.crew,
  };
};

export const getMovieData = async (id) => {
  const { data: infoRequest } = await getData(`movie/${id}`);

  const { data: creditsRequest } = await getData(`movie/${id}/credits`);

  const [movieInfo, movieCredits] = await axios.all([
    infoRequest,
    creditsRequest,
  ]);

  return {
    movieInfo: movieInfo,
    movieCast: movieCredits.cast,
    movieCrew: movieCredits.crew,
  };
};
