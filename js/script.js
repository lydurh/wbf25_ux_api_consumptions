import { fetchNowPlaying } from "./info.js";


fetchNowPlaying()
.then (data => {
  const movieList = document.createDocumentFragment();
  data.results.forEach(movie => {
    const card = document.querySelector('#now-playing-card').content.cloneNode(true);

    card.querySelector('h2').innerText = movie.title;

    card.querySelector('#description').innerText = movie.overview;

    const poster = card.querySelector('img');
    poster.setAttribute('src', movie.poster_path);
    poster.setAttribute('alt', movie.original_title);

    card.querySelector('#small-title').innerText = movie.original_title;

    card.querySelector('#release_date').innerText = movie.release_date;

  movieList.append(card);
    
    
  });
  document.querySelector('#upcoming-list').appendChild(movieList);
})



