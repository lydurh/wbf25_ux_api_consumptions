import { apiKey } from './config.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

const baseUrl = 'https://api.themoviedb.org/3';

export const fetchMovies = async (category) => {
  try {
    const response = await fetch(`${baseUrl}/${category}?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  } catch {
    return { results: [] };
  }
};




export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';


export function fetchNowPlaying() {
  return fetch(NOW_PLAYING_URL, options)
    .then(res => res.json());
}

export function fetchPopular() {
  return fetch(POPULAR_URL, options)
    .then(res => res.json());
}

export function fetchTopRated() {
  return fetch(TOP_RATED_URL, options)
    .then(res => res.json());
}

export function fetchUpcoming() {
  return fetch(UPCOMING_URL, options)
    .then(res => res.json());
}


