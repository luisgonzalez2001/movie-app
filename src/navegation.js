window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false);

function navigator() {
    if(location.hash.startsWith('#trends')) {
        trendsPage();
    } else if(location.hash.startsWith('#search=')) {
        searchPage();
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
}

function searchPage() {
    console.log('Search');
}

function movieDetailPage() {
    console.log('Movie');
}

function categoriesPage() {
    console.log('Categories');
}

function homePage() {
    console.log('Home');
    getTrendingMovies();
    getCategoriesPreview();
    getUpcomingMovies();
    getPopularMovies();
}