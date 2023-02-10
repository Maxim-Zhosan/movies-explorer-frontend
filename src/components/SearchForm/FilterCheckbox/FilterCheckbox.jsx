import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="switch">
      <label className="switch__label" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" className="switch__input" />
        <span className="switch__slider" />
      </label>
      <span className="switch__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
