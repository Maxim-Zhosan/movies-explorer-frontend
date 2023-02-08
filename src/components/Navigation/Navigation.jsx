/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({ isOpen, onClose }) {
  const path = window.location.pathname;
  return (
    <div className={`navigation ${isOpen === true && 'navigation_opened'}`}>
      <nav className="navigation__block">
        <button className="navigation__close-icon" type="button" aria-label="Закрыть" onClick={onClose} />
        <ul className="navigation__links">
          <Link to="/" className="navigation__link"><span className="navigation__link-text" onClick={onClose}>Главная</span></Link>
          <Link to="/movies" className="navigation__link"><span className={`navigation__link-text ${path === '/movies' && 'navigation__link-text_type_active'}`} onClick={onClose}>Фильмы</span></Link>
          <Link to="/saved-movies" className="navigation__link"><span className={`navigation__link-text ${path === '/saved-movies' && 'navigation__link-text_type_active'}`} onClick={onClose}>Сохранённые фильмы</span></Link>
        </ul>
        <div className="navigation__account">
          <Link to="/profile" className="navigation__account-link" onClick={onClose}><span className={`navigation__link-text ${path === '/profile' && 'navigation__link-text_type_active'}`} onClick={onClose}>Аккаунт</span></Link>
          <div className="navigation__account-background">
            <svg className="navigation__account-icon" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 4C8.5 5.38071 7.38071 6.5 6 6.5C4.61929 6.5 3.5 5.38071 3.5 4C3.5 2.61929 4.61929 1.5 6 1.5C7.38071 1.5 8.5 2.61929 8.5 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM4 9.25C1.92893 9.25 0.25 10.9289 0.25 13V14H1.75V13C1.75 11.7574 2.75736 10.75 4 10.75H8C9.24264 10.75 10.25 11.7574 10.25 13V14H11.75V13C11.75 10.9289 10.0711 9.25 8 9.25H4Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
