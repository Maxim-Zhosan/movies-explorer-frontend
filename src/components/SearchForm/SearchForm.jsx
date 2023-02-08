/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
  function handleSubmit() {
    // console.log('111');
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search__form" noValidate>
        <input type="text" className="search__input" placeholder="Фильм" name="movie" />
        <button type="submit" className="search__search-button" />
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
