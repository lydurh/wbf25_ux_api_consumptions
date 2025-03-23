import { apiKey } from './config.js';

const baseUrl = 'https://api.themoviedb.org/3/movie';

export const fetchMovies = async (category) => {
  try {
    const response = await fetch(`${baseUrl}/${category}?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  } catch {
    return { results: [] };
  }
};