"use strict"

const numberOfFilms = +prompt('Скільки фільмів ви уже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один із останніх переглянутих фільмів?', ''),
      b = prompt('Оцініть його', ''),
      c = prompt('Один із останніх переглянутих фільмів?', ''),
      d = prompt('Оцініть його', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);