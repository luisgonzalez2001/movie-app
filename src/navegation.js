window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false);

searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=';
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

popularBtn.addEventListener('click', () => {
    location.hash = '#popular';
});

upcomingBtn.addEventListener('click', () => {
    location.hash = '#upcoming';
});

arrowBtn.addEventListener('click', () => {
    location.hash = '#home';
});

movieDetailBtnInfo.addEventListener('click', () => {
    location.hash = '#movie=';
});

function navigator() {
    if(location.hash.startsWith('#trends')) {
        trendsPage();
    } else if(location.hash.startsWith('#search=')) {
        searchPage();
    } else if(location.hash.startsWith('#upcoming')) {
        upcomingPage();
    } else if(location.hash.startsWith('#popular')) {
        popularPage();
    } else if(location.hash.startsWith('#movie=')) {
        movieDetailPage();
    } else if(location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
}

function trendsPage() {
    console.log('Trends');

    searchForm.classList.add('inactive');
    headerTitle.classList.remove('inactive');

    categoriesPreviewSection.classList.add('inactive');
    categoriesHeader.classList.add('inactive');
    pageHeaderSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularPreviewSection.classList.add('inactive');
    upcomingPreviewSection.classList.add('inactive');
    relatedMoviesSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    genericListTitle.textContent = 'Trending Movies';
}

function upcomingPage() {
    console.log('Upcoming');

    searchForm.classList.add('inactive');
    headerTitle.classList.remove('inactive');

    categoriesPreviewSection.classList.add('inactive');
    categoriesHeader.classList.add('inactive');
    pageHeaderSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularPreviewSection.classList.add('inactive');
    upcomingPreviewSection.classList.add('inactive');
    relatedMoviesSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    genericListTitle.textContent = 'Upcoming Movies';
}

function popularPage() {
    console.log('Popular');

    searchForm.classList.add('inactive');
    headerTitle.classList.remove('inactive');

    categoriesPreviewSection.classList.add('inactive');
    categoriesHeader.classList.add('inactive');
    pageHeaderSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularPreviewSection.classList.add('inactive');
    upcomingPreviewSection.classList.add('inactive');
    relatedMoviesSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    genericListTitle.textContent = 'Popular Movies';
}

function searchPage() {
    console.log('Search');

    searchForm.classList.add('inactive');
    headerTitle.classList.remove('inactive');

    categoriesPreviewSection.classList.add('inactive');
    categoriesHeader.classList.add('inactive');
    pageHeaderSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularPreviewSection.classList.add('inactive');
    upcomingPreviewSection.classList.add('inactive');
    relatedMoviesSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    genericListTitle.textContent = 'Search';
}

function movieDetailPage() {
    console.log('Movie');

    searchForm.classList.add('inactive');
    headerTitle.classList.remove('inactive');

    movieDetailSection.classList.remove('inactive');
    movieDetailDescription.classList.remove('inactive');
    movieDetailBtnInfo.classList.add('inactive');

    pageHeaderSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularPreviewSection.classList.add('inactive');
    upcomingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    categoriesHeader.classList.remove('inactive');
    relatedMoviesSection.classList.remove('inactive');
    genericListSection.classList.add('inactive');
}

function categoriesPage() {
    console.log('Categories');

    searchForm.classList.add('inactive');
    headerTitle.classList.remove('inactive');

    categoriesPreviewSection.classList.remove('inactive');
    categoriesHeader.classList.add('inactive');
    pageHeaderSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularPreviewSection.classList.add('inactive');
    upcomingPreviewSection.classList.add('inactive');
    relatedMoviesSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
}

function homePage() {
    console.log('Home');

    searchForm.classList.add('inactive');
    headerTitle.classList.remove('inactive');

    movieDetailSection.classList.remove('inactive');
    movieDetailDescription.classList.add('inactive');
    movieDetailBtnInfo.classList.remove('inactive');

    pageHeaderSection.classList.add('inactive');
    trendingPreviewSection.classList.remove('inactive');
    popularPreviewSection.classList.remove('inactive');
    upcomingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    categoriesHeader.classList.remove('inactive');
    relatedMoviesSection.classList.add('inactive');
    genericListSection.classList.add('inactive');

    getTrendingMovies();
    getCategoriesPreview();
    getUpcomingMovies();
    getPopularMovies();
}