import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="page-not-found__wrapper">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__subtitle">Страница не найдена</p>
        <Link to={-1} className="page-not-found__back-link">Назад</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
