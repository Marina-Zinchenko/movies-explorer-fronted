import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import * as moviesApi from "../../utils/Api/MoviesApi";
import { useEffect, useState } from "react";
import { filterDuration, filterMovies } from "../../utils/hooks/MoviesFilter";

function Movies({ savedMovies, onSaveMovie, onDeleteMovie }) {
  const [isLoading, setIsLoading] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoadingMoviesSearching, setIsLoadingMoviesSearching] =
    useState(false);

  const getFilterMovies = (movies, searchQuery, isCheckbox) => {
    const moviesList = filterMovies(movies, searchQuery, isCheckbox);

    setInitialMovies(moviesList);
    setFilteredMovies(isCheckbox ? filterDuration(moviesList) : moviesList);

    localStorage.setItem("movies", JSON.stringify(moviesList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  };
  const handleFilterCheckbox = () => {
    setIsCheckboxActive(!isCheckboxActive);
    if (!isCheckboxActive) {
      if (filterDuration(initialMovies).length === 0) {
        setFilteredMovies(filterDuration(initialMovies));
      } else {
        setFilteredMovies(filterDuration(initialMovies));
      }
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem("shortMovies", !isCheckboxActive);
  };

  const handleSearchMovies = (searchQuery) => {
    setIsLoadingMoviesSearching(searchQuery);
    localStorage.setItem("movieSearch", searchQuery);
    localStorage.setItem("shortMovies", isCheckboxActive);
    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      getFilterMovies(movies, searchQuery, isCheckboxActive);
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((cardsData) => {
          getFilterMovies(cardsData, searchQuery, isCheckboxActive);
          setIsRequestError(false);
        })
        .catch((err) => {
          setIsRequestError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  
  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setIsCheckboxActive(true);
    } else {
      setIsCheckboxActive(false);
    }
  }, []);


  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);
  return (
    <main className="content">
      <section className="movies">
        <SearchForm
          onSearch={handleSearchMovies}
          onFilter={handleFilterCheckbox}
          isCheckboxActive={isCheckboxActive}
        />
        <MoviesCardList
          savedMovies={savedMovies}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          filteredMovies={filteredMovies}
          isSavedFilms={false}
          isRequestError={isRequestError}
          isNotFound={isNotFound}
          isLoading={isLoading}
          isLoadingMoviesSearching={isLoadingMoviesSearching}
        />
      </section>
    </main>
  );
}
export default Movies;
