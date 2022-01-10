'use strict';

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (genre !== null && genre !== '' && !isNaN(numberOfFilms)) {
            personalMovieDB.genres[i - 1] = genre;
        } else {
            i--;
        }
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const nameLastFilm = prompt('Один из последних просмотреных фильмов?', ''),
              filmScore = prompt('Насколько оцените его?', '');
        if (nameLastFilm !== null && nameLastFilm !== '' && nameLastFilm.length < 50 && 
                filmScore !== null && filmScore.length  !== '') {
            console.log('done');
            personalMovieDB.movies[nameLastFilm] = filmScore;
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonalLevel () {
    if (numberOfFilms < 10) {
        alert("<10");
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        alert("10-30");
    } else if (numberOfFilms > 30) {
        alert(">30");
    } else {
        alert("error");
    }
} 


let numberOfFilms;
start();

const personalMovieDB ={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

rememberMyFilms();
detectPersonalLevel();

writeYourGenres();
showMyDB(personalMovieDB.privat);