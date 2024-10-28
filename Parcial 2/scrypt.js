const apiKey = '3fd2be6f0c70a2a598f084ddfb75487c';
const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayMovies(data.results.slice(0, 4));
    } catch (error) {
        console.error('Error al obtener las películas:', error);
    }
}

function displayMovies(movies) {
    const movieGrid = document.getElementById('movie-grid');
    movieGrid.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const imageUrl = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
        
        card.innerHTML = `
            <img src="${imageUrl}" alt="${movie.title}">
            <div class="card-content">
                <h2 class="card-title">${movie.title}</h2>
                <p class="card-rating">Calificación: ${movie.vote_average}</p>
            </div>
        `;
        
        movieGrid.appendChild(card);
    });
}

fetchMovies();

