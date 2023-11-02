import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { filterDuration, filterMovies } from "../../utils/hooks/MoviesFilter";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ savedMovies, onDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function onSearchMovies(query) {
    setSearchQuery(query);
  }
  function handleShortMovies() {
    setIsCheckboxActive(!isCheckboxActive);
  }
  useEffect(() => {
    const moviesList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(
      isCheckboxActive ? filterDuration(moviesList) : moviesList
    );
  }, [savedMovies, isCheckboxActive, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <main className="saved-movies">
      <SearchForm onSearch={onSearchMovies} onFilter={handleShortMovies} />
      <MoviesCardList
        savedMovies={savedMovies}
        isNotFound={isNotFound}
        isSavedFilms={true}
        filteredMovies={filteredMovies}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
}

export default SavedMovies;
