/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import './MoviesCardList.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import movies from '../../constants/movies';
import savedMovies from '../../constants/savedMovies';

function MoviesCardList() {
  const currentRoute = useLocation();
  const limitFormula = window.innerWidth < 474 ? 5 : window.innerWidth < 1024 ? 8 : 16;
  const [limit, setLimit] = React.useState(limitFormula);
  const [addButtonClassName, setbuttonClassName] = React.useState(`movies-card-list__add-button ${limit >= movies.length && 'movies-card-list__add-button_non-active'}`);
  const [addButtonSMClassName, setbuttonSMClassName] = React.useState(`movies-card-list__add-button ${limit >= savedMovies.length && 'movies-card-list__add-button_non-active'}`);

  React.useEffect(() => {
    const handleResize = (event) => {
      setLimit(window.innerWidth < 474 ? 5 : window.innerWidth < 1024 ? 8 : 16);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  React.useEffect(() => {
    setbuttonClassName(`movies-card-list__add-button ${limit >= movies.length && 'movies-card-list__add-button_non-active'}`);
    setbuttonSMClassName(`movies-card-list__add-button ${limit >= savedMovies.length && 'movies-card-list__add-button_non-active'}`);
  }, [limit]);

  function showMoreDocuments() {
    setLimit(limit + limitFormula);
  }

  if (currentRoute.pathname === '/movies') {
    const cardType = 'MovieCard';
    return (
      <main className="movies-card-list">
        <div className="movies-card-list__list">
          {movies.slice(0, limit).map((movie) => (
            <MoviesCard
              name={movie.name}
              link={movie.link}
              likes={movie.likes}
              duration={movie.duration}
              cardOwner={movie.cardOwner}
              type={cardType}
            />
          ))}
        </div>
        <button className={addButtonClassName} type="button" aria-label="Меню" onClick={showMoreDocuments}>Ещё</button>
      </main>
    );
  }
  const cardType = 'SavedMovieCard';
  return (
    <main className="movies-card-list">
      <div className="movies-card-list__list">
        {savedMovies.slice(0, limit).map((movie) => (
          <MoviesCard
            name={movie.name}
            link={movie.link}
            likes={movie.likes}
            duration={movie.duration}
            cardOwner={movie.cardOwner}
            type={cardType}
          />
        ))}
      </div>
      <button className={addButtonSMClassName} type="button" aria-label="Меню" onClick={showMoreDocuments}>Ещё</button>
    </main>
  );
}

export default MoviesCardList;
