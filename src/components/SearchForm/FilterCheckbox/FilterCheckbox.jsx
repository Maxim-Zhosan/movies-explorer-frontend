/* eslint-disable react/prop-types */
import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isShortMovie, setShortMovie }) {
  return (
    <div className="switch">
      <label className="switch__label" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" className="switch__input" onChange={() => setShortMovie(!isShortMovie)} />
        <span className="switch__slider" />
      </label>
      <span className="switch__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
