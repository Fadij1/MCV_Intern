// const API_KEY = 'de8c5d5611e6b45ce1575635285b17bf';
// const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// fetch(API_URL)
//   .then(response => response.json())
//   .then(data => {
//     const movies = data.results;
//     const container = document.getElementById('movie-container');

//     movies.forEach(movie => {
//       const col = document.createElement('div');
//       col.className = 'col-md-4 mb-4';

//       col.innerHTML = `
//         <div class="card h-100 shadow">
//           <img src="${IMAGE_BASE_URL + movie.poster_path}" class="card-img-top" alt="${movie.title}">
//           <div class="card-body">
//             <h5 class="card-title">${movie.title}</h5>
//             <p class="card-text">${movie.overview || 'No description available.'}</p>
//             <p class="card-text">Rating: ${movie.vote_average} / 10</p>
//           </div>
//         </div>
//       `;

//       container.appendChild(col);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching movies:', error);
//   });


// /*
const API_KEY = 'de8c5d5611e6b45ce1575635285b17bf';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MOVIES_TO_SHOW = 7;

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const container = document.getElementById('movie-container');

    const count = Math.min(MOVIES_TO_SHOW, movies.length);

    for (let i = 0; i < count; i++) {
      const movie = movies[i];
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      col.innerHTML = `
        <div class="card h-100 shadow">
          <img src="${IMAGE_BASE_URL + movie.poster_path}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.overview || 'No description available.'}</p>
            <p class="card-text">Release Date: ${movie.release_date || 'N/A'}</p>
            <p class="card-text">Popularity: ${movie.popularity.toFixed(2)}</p>
            <p class="card-text">Vote Count: ${movie.vote_count}</p>
            <p class="card-text">Rating: ${movie.vote_average} / 10</p>
          </div>
        </div>
      `;

      container.appendChild(col);
    }
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });
 
// */