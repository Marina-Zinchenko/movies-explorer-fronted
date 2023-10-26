import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import filmImage from "../../images/film.jpg";

function SavedMovies() {
  return (
    <div className="movie-gallery">
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard
            link={filmImage}
            alt="Карточка"
            title="В погоне за Бенкси"
            duration="0ч 42м"
          />
          <MoviesCard
            link={filmImage}
            alt="Карточка"
            title="В погоне за Бенкси"
            duration="1ч 20м"
          />
          <MoviesCard
            link={filmImage}
            alt="Карточка"
            title="В погоне за Бенкси"
            duration="0ч 42м"
          />
        </MoviesCardList>
      </section>
    </div>
  );
}

export default SavedMovies;
