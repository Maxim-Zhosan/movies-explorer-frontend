/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm({ searchMovies }) {
  const [request, setRequest] = useState('');
  const [isShortMovie, setShortMovie] = useState(false);
  const [errorClassName, setErrorClassName] = useState('search__input-error');
  const currentRoute = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    if (request === '') {
      return setErrorClassName('search__input-error search__input-error_active');
    }
    setErrorClassName('search__input-error');
    return searchMovies(request, isShortMovie);
  }

  function handleChangeRequest(e) {
    setRequest(e.target.value);
  }

  useEffect(() => {
    const searchResult = JSON.parse(localStorage.getItem('searchResult'));
    if (searchResult && currentRoute.pathname === '/movies') {
      setRequest(searchResult.request);
    }
  }, []);

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <input type="text" className="search__input" placeholder="Фильм" name="movie" value={request} onChange={handleChangeRequest} required />
        <button type="submit" className="search__search-button" />
        <span className={errorClassName}>Нужно ввести ключевое слово</span>
      </form>
      <FilterCheckbox isShortMovie={isShortMovie} setShortMovie={setShortMovie} />
    </section>
  );
}

export default SearchForm;
