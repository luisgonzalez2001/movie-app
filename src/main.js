const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

async function getTrendingMovies() {
    const {data} = await api('trending/movie/day');
    const movies = data.results;

    movies.forEach((movie, i) => {
        if(i === 0) {
            const movieContainer = document.querySelector('.movieDetail__background');
            movieContainer.style.backgroundImage = `url('https://image.tmdb.org/t/p/w300${movie.poster_path}')`;

            const movieScore = document.querySelector('.movieDetail-score__text');
            movieScore.textContent = movie.vote_average;

            const movieTitle = document.querySelector('.movieDetail-title');
            movieTitle.textContent = movie.title;

        } else {
            const sectionContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
    
            const movieContainer = document.createElement('div');
            movieContainer.classList.add('movie-container');
    
            const movieImg = document.createElement('img');
            movieImg.classList.add('movie-img');
            movieImg.setAttribute('alt', movie.title);
            movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);
    
            const movieTitle = document.createElement('p');
            movieTitle.classList.add('movie-title');
            movieTitle.textContent = movie.title;
    
            movieContainer.appendChild(movieImg);
            movieContainer.appendChild(movieTitle);
            sectionContainer.appendChild(movieContainer);
        }
    });
}

async function getUpcomingMovies() {
    const {data} = await api('movie/upcoming');
    const movies = data.results;

    movies.forEach((movie, i) => {
        const sectionContainer = document.querySelector('#upcomingPreview .upcomingPreview-movieList')

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

        const movieTitle = document.createElement('p');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;

        movieContainer.appendChild(movieImg);
        movieContainer.appendChild(movieTitle);
        sectionContainer.appendChild(movieContainer);
    });
}

async function getPopularMovies() {
    const {data} = await api('movie/popular');
    const movies = data.results;

    movies.forEach((movie, i) => {
        const sectionContainer = document.querySelector('#popularPreview .popularPreview-movieList')

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

        const movieTitle = document.createElement('p');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;

        movieContainer.appendChild(movieImg);
        movieContainer.appendChild(movieTitle);
        sectionContainer.appendChild(movieContainer);
    });
}

async function getCategoriesPreview() {
    const {data} = await api('genre/movie/list');
    const categories = data.genres;

    categories.forEach(category => {
        const sectionContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')
    
        const categoryBtn = document.createElement('button');
        categoryBtn.classList.add('category-btn');
        categoryBtn.textContent = category.name;
        categoryBtn.setAttribute('id', category.id);

        sectionContainer.appendChild(categoryBtn);
    });
}