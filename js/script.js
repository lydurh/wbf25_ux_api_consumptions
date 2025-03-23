import { fetchMovies } from './info.js';


const loadMovies = async (category) => {
  const movieContainer = document.querySelector('main'); 

  const data = await fetchMovies(category);
  const movieList = document.createDocumentFragment();

  data.results.forEach(movie => {
    const card = document.querySelector('#movie-card').content.cloneNode(true);
    movieContainer.innerHTML = '';


    card.querySelector('h2').innerText = movie.title;

    card.querySelector('#description').innerText = movie.overview;

    const poster = card.querySelector('img');
    const imagePath = movie.poster_path || movie.backdrop_path;
    const imageUrl = imagePath ? `https://image.tmdb.org/t/p/w500${imagePath}` : 'assets/img/default-image.png';


    poster.setAttribute('src', imageUrl);
    poster.setAttribute('alt', movie.original_title);

    card.querySelector('#small-title').innerText = movie.original_title;

    card.querySelector('#release_date').innerText = movie.release_date;

  movieList.append(card);
  });
  movieContainer.appendChild(movieList);
};



document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', (event) => {
    const category = event.target.dataset.category;
    loadMovies(category);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  loadMovies('top_rated'); 
});

