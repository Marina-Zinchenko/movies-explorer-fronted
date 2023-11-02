import "./MoviesCard.css";
import { useState, useEffect } from "react";

function MoviesCard({
  movie,
  onSaveMovie,
  isSavedFilms,
  onDeleteMovie,
  savedMovies,
}) {
  const isLiked = savedMovies.some(
    (saveMovie) => saveMovie.movieId === movie.id
  );
  const [isSaved, setIsSaved] = useState(isLiked);

  useEffect(() => {
    setIsSaved(isLiked);
  }, [isLiked]);

  const handleSaveMovie = () => {
    if (isSaved) {
      onDeleteMovie(movie);
    } else {
      onSaveMovie(movie);
    }
    setIsSaved(!isSaved);
  };

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  function convertDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours > 0) {
      return `${hours}ч ${minutes}м`;
    } else {
      return `${minutes}м`;
    }
  }

  return (
    <li className="card" id={movie.id}>
      <div className="card__data-container">
        <h2 className="card__title">{movie.nameRU}</h2>
        <div className="card__duration-container">
          <p className="card__duration-value">
            {convertDuration(movie.duration)}
          </p>
        </div>
      </div>
      <div className="card__container">
        <a
          className="card__link"
          href={movie.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card__image"
            src={
              isSavedFilms
                ? movie.image
                : `https://api.nomoreparties.co/${movie.image.url}`
            }
            alt={movie.nameRU}
          />
        </a>
        {!isSavedFilms ? (
          <>
            <button
              className={`card__button-save ${
                !isSaved && `card__button-save_active`
              }`}
              onClick={handleSaveMovie}
            >
              Сохранить
            </button>
            <div
              role="button"
              onClick={handleSaveMovie}
              className={`card__label-tip ${
                isSaved && `card__label-tip_active`
              }`}
            />
          </>
        ) : (
          <button onClick={handleDeleteMovie} className="card__button-remove" />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
