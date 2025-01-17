const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

function postMovies(movies, container) {
    container.innerHTML = "";

    movies.forEach(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        movieContainer.addEventListener('click',() => {
            location.hash = '#movie=' + movie.id;
        })

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

        const movieTitle = document.createElement('p');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;

        movieContainer.appendChild(movieImg);
        movieContainer.appendChild(movieTitle);
        container.appendChild(movieContainer);
    });
}

function postCategories(categories, container) {
    container.innerHTML = "";

    categories.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.classList.add('category-btn');
        categoryBtn.textContent = category.name;
        categoryBtn.setAttribute('id', category.id);
        categoryBtn.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
        });

        container.appendChild(categoryBtn);
    });
}

async function getTrendingMovies(list = false) {
    const {data} = await api('trending/movie/day');
    const movies = data.results;

    if (list) {
        postMovies(movies, genericListSection);
        return;
    }

    const firstMovie = movies.shift();
    const { data: movie } = await api('movie/' + firstMovie.id);

    movieContainer.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${firstMovie.poster_path}')`;
    movieDetailScore.textContent = firstMovie.vote_average;
    movieDetailTitle.textContent = firstMovie.title;
    movieDetailTime.textContent = convertTime(movie.runtime)
    movieDetailCategory.textContent = movie.genres[0].name;

    movieDetailBtnInfo.onclick = ('click', () => {
        location.hash = '#movie=' + firstMovie.id;
    });
    movieDetailBtnInfo.addEventListener('click', () => {
        location.hash = '#movie=' + firstMovie.id;
    });

    postMovies(movies, trendingreviewList);
}

async function getUpcomingMovies(list = false) {
    const {data} = await api('movie/upcoming');
    const movies = data.results;

    list ? postMovies(movies, genericListSection) : postMovies(movies, upcomingPreviewList);
}

async function getPopularMovies(list = false) {
    const {data} = await api('movie/popular');
    const movies = data.results;

    list ? postMovies(movies, genericListSection) : postMovies(movies, popularPreviewList);
}

async function getCategoriesPreview() {
    const {data} = await api('genre/movie/list');
    const categories = data.genres;

    postCategories(categories, categoriesPreviewList);
}

async function getMoviesByCategory(id) {
    const {data} = await api('discover/movie', {
        params: {
            with_genres: id,
        },
    });
    const movies = data.results;

    postMovies(movies, genericListSection);
}

async function getMoviesBySearch(query) {
    const {data} = await api('search/movie', {
        params: {
            query,
        },
    });
    const movies = data.results;

    postMovies(movies, genericListSection);
}

async function getMovieById(id) {
    const { data: movie } = await api('movie/' + id);

    movieContainer.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`;
    movieDetailScore.textContent = movie.vote_average;
    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailTime.textContent = convertTime(movie.runtime)
    movieDetailCategory.textContent = movie.genres[0].name;

    postCategories(movie.genres, categoriesPreviewList);
    getRelatedMovies(id);
}

async function getRelatedMovies(id) {
    const { data } = await api(`movie/${id}/recommendations`);
    const movies = data.results;

    postMovies(movies, relatedList);
}

function convertTime(minutes) {
    const h = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${h}h ${minutes}m`;
}