const numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели', '');
const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let lastMovie1 = prompt('Один из последних просмотренных фильмов', ''),
 lastMovieRate1 = +prompt('На сколько оцените его', ''),
 lastMovie2 = prompt('Один из последних просмотренных фильмов', ''),
 lastMovieRate2 = +prompt('На сколько оцените его', '');
personalMovieDB.movies[lastMovie1]=lastMovieRate1;
personalMovieDB.movies[lastMovie2]=lastMovieRate2;
console.log(personalMovieDB);