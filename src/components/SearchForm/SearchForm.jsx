import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { KEYWORD_REQUIRED, MOVIE_TITLE } from '../../utils/config/config';

function SearchForm({ onSearch, onFilter, isCheckboxActive }) {
  const location = useLocation().pathname;
  const [searchValue, setSearchValue] = useState("");
  const [isError, setIsError] = useState(false);

  // если мы на странице фильмов, получаем из хранилища поисковый запрос
  useEffect(() => {
    if (location === '/movies') {
      setSearchValue(localStorage.getItem('movieSearch'));
    }
    if (location === '/saved-movies') {
      setSearchValue('');
    }
  }, [location]);

  const changeSearch = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim().length === 0) {
      setIsError(true);
    } else {
      setIsError(false);
      onSearch(searchValue);
    }
  }
    return (
      <section className="search">
        <form 
        className="search__form"
        name="search-movie"
        onSubmit={handleSubmit}
        noValidate
        >
          <div className="search__border-input">
            <input 
            className={`search__input ${isError && 'search__input_error'
          }`}
        name='search'
        type="text"
        value={searchValue || ""}
        placeholder={isError ? KEYWORD_REQUIRED : MOVIE_TITLE}
        onChange={changeSearch}
        minLength='1'
        required
        />
          <button className="search__button" type="submit">Поиск</button>   
          </div>          
        </form>
        <>
        <FilterCheckbox
          onFilter={onFilter}
          isActive={isCheckboxActive}/>
        <label className="search__comit">Короткометражки</label>
        </>
          <div className='search__line' />   
      </section>

  )
}
export default SearchForm;