import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = `${process.env.REACT_APP_API_KEY}`;

export const getPopularData = async (dataName, currentPage) => {
  const { data } = await axios.get(`${baseUrl}/${dataName}/popular`, {
    params: { api_key: apiKey, page: currentPage },
  });

  return data;
};

export const getDataByQuery = async (dataName, currentPage = 1, query) => {
  if (!query) {
    return;
  }
  const { data } = await axios.get(`${baseUrl}/search/${dataName}`, {
    params: { api_key: apiKey, page: currentPage, query },
  });

  return data;
};

export const getGenres = async () => {
  const { data } = await axios.get(`${baseUrl}/genre/movie/list`, {
    params: { api_key: apiKey },
  });

  return data.genres;
};

export const getPersonData = async (id) => {
  const { data: infoRequest } = await axios.get(`${baseUrl}/person/${id}`, {
    params: { api_key: apiKey },
  });

  const { data: creditsRequest } = await axios.get(
    `${baseUrl}/person/${id}/movie_credits`,
    {
      params: { api_key: apiKey },
    }
  );

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
  const { data: infoRequest } = await axios.get(`${baseUrl}/movie/${id}`, {
    params: { api_key: apiKey },
  });

  const { data: creditsRequest } = await axios.get(
    `${baseUrl}/movie/${id}/credits`,
    {
      params: { api_key: apiKey },
    }
  );

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
