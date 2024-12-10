const $ = (id) => document.querySelector(id);

//Sections
const headerSection = $('#header');
const pageHeaderSection = $('#headerPage');
const trendingPreviewSection = $('#trendingPreview');
const popularPreviewSection = $('#popularPreview');
const upcomingPreviewSection = $('#upcomingPreview');
const categoriesPreviewSection = $('#categoriesPreview');
const relatedMoviesSection = $('#relatedMovies');
const genericListSection = $('#genericList');
const movieDetailSection = $('#movieDetail');

//Lists & container
const searchForm = $('#searchForm');
const trendingMoviesPreviewList = $('.trendingPreview-movieList');
const popularMoviesPreviewList = $('.popularPreview-movieList');
const upcomingMoviesPreviewList = $('.upcomingPreview-movieList');
const categoriesMoviesPreviewList = $('.categoriesPreview-list');
const relatedMoviesList = $('relatedMovies-list');

//Elements
const headerTitle = $('.header-title');

const searchFormInput = $('#searchForm input');
const searchFormBtn = $('#searchForm button');

const trendingBtn = $('.trendingPreview-btn');
const popularBtn = $('.popularPreview-btn');
const upcomingBtn = $('.upcomingPreview-btn');

const movieDetailTitle = $('.movieDetail-title');
const movieDetailDescription = $('.movieDetail-description');
const movieDetailScore = $('.movieDetail-score__text');
const movieDetailTime = $('.movieDetail-time');
const movieDetailCategory = $('.movieDetail-category');

const movieDetailBtn = $('.movieDetail-btn');
const movieDetailBtnInfo = $('.movieDetail-btn-info');

const categoriesHeader = $('.categoriesPreview-header');

const genericListTitle = $('.genericList-title');
const arrowBtn = $('.genericList-btn');