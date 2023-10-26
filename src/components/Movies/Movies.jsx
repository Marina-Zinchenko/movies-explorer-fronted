import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import film from "../../images/film.jpg";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies() {
  return (
    <main className="content">
      <section className="movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard
            link={film}
            alt="Карточка"
            title="В погоне за Бенкси"
            duration="1ч 17м"
          />
        </MoviesCardList>
        <div className="movies__button-container">
          <button className="movies__load-button" type="button">
            Ещё
          </button>
        </div>
      </section>
    </main>
  );
}
export default Movies;
