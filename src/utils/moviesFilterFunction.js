import { SHORT_MOVIES_DURATION } from "./config/config";

//фильтрация фильмов по параметрам запроса
export function filterMovies(movies, query) {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
  });
  return moviesByQuery;
}

//включения чекбокса для фильтрации фильмов
export function filterDuration(movies) {
  return movies.filter((movie) => movie.duration < SHORT_MOVIES_DURATION);
}