
import { fetchNowPlaying } from './info.js';


fetchNowPlaying()
.then (data => {
  const movieList = document.createDocumentFragment();
  data.results.forEach(movie => {
    const card = document.querySelector('#now-playing-card').content.cloneNode(true);

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
  document.querySelector('#upcoming-list').appendChild(movieList);
});



