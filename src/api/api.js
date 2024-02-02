import axios from 'axios';

const URL_TREND = 'https://api.themoviedb.org/3/trending/movie/day';
const URL_DETAILS = 'https://api.themoviedb.org/3/movie/';
const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

const API_KEY = '9347350ba2bb7631373e3da2add3bd27';

export const fetchTrends = () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: '1',
    include_adult: false,
    per_page: '20',
  });

  return axios.get(`${URL_TREND}?${params}`);
};

export const fetchDetails = id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${URL_DETAILS}/${id}?${params}`);
};

export const fetchSearchFilms = query => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
    query: query,
    page: '1',
  });

  return axios.get(`${URL_SEARCH}?${params}`);
};

export const fetchCast = id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${URL_DETAILS}/${id}/credits?${params}`);
};

export const fetchReview = id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${URL_DETAILS}/${id}/reviews?${params}`);
};
