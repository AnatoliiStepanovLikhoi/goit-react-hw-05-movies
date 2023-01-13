import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '19011014b9b53c4fd496d37c25f2b619';

axios.defaults.baseURL = BASE_URL;

export async function getTrendings() {
  try {
    const fetchData = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

    return fetchData.data.results;
  } catch (error) {
    return error;
  }
}

export async function getMovieById(movieId) {
  try {
    const fetchData = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);

    // console.log(fetchData);

    return fetchData.data;
  } catch (error) {
    return error;
  }
}

export async function getMovieCredits(movieId) {
  try {
    const fetchData = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`
    );

    return fetchData.data;
  } catch (error) {
    return error;
  }
}

export async function getMovieReviews(movieId) {
  try {
    const fetchData = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`
    );

    return fetchData.data;
  } catch (error) {
    return error;
  }
}

export async function getMovieByName(searchQuery, searchPage) {
  try {
    const fetchData = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${searchPage}&include_adult=false`
    );

    return fetchData.data.results;
  } catch (error) {
    return error;
  }
}
