import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=0e017d1cf3aa44c76887c24c592892f0";
const apiLanguage = "&language=en-US"

export const getPopularData = async (dataName, currentPage) => {
  const { data } = await axios.get(
    `${baseUrl}/${dataName}/popular?${apiKey}&language=en-US&page=${currentPage}`
  );

  return data.results;
};

export const getDataByQuery = async (dataName, currentPage = 1, query) => {
  if (!query) { return; }
  const { data } = await axios.get(
    `${baseUrl}/search/${dataName}?${apiKey}${apiLanguage}&query=${query}&page=${currentPage}`
  );

  return data;
};

export const getGenres = async () => {
  const { data } = await axios.get(
    `${baseUrl}/genre/movie/list?${apiKey}${apiLanguage}`
  );

  return data.genres;
};

export const getPersonData = async (id) => {
  const { data: infoRequest } = await axios.get(
    `${baseUrl}/person/${id}?${apiKey}`
  );
  const { data: creditsRequest } = await axios.get(
    `${baseUrl}/person/${id}/movie_credits?${apiKey}&language=en-US`
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
