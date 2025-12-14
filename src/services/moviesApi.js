import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const API_KEY = '992758a4802a699e8df27d4d6efc34fb';

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '992758a4802a699e8df27d4d6efc34fb',
  },
});

export const getTrending = async () => {
  const { data } = await apiClient.get('trending/movie/day');

  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await apiClient.get(`movie/${id}`);

  return data;
};

export const getMovieCredits = async id => {
  const { data } = await apiClient.get(`movie/${id}/credits`);

  return data.cast;
};

export const getReviews = async id => {
  const { data } = await apiClient.get(`movie/${id}/reviews`);

  return data.results;
};

export const getMovieBySearch = async query => {
  const { data } = await apiClient.get('search/movie', { params: { query } });

  return data.results;
};
