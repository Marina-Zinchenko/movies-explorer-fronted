import "./MoviesCard.css";

function MoviesCard({
  movie,
  onSaveMovie,
  isSavedFilms,
  onDeleteMovie,
  savedMovies,
}) {
  const isCardLike = savedMovies.some((saveMovie) => saveMovie.movieId === movie.id);
  const handleSaveMovie = () => {
    if (isCardLike) {
      onDeleteMovie(movie);
    } else {
      onSaveMovie(movie);
    }
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
          <button
            className={isCardLike ? "card__button-save card__button-save_active" : "card__button-save"}
            onClick={handleSaveMovie}
          ></button>
        ) : (
          <button onClick={handleDeleteMovie} className="card__button-remove" />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
