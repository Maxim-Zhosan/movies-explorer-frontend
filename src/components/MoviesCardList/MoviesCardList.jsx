/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
// import savedMovies from '../../constants/savedMovies';

function MoviesCardList({ movies, noFoundMessageName }) {
  const currentRoute = useLocation();
  const limitFormula = window.innerWidth < 474 ? 5 : window.innerWidth < 1024 ? 8 : 16;
  const cardType = currentRoute.pathname === '/movies' ? 'MovieCard' : 'SavedMovieCard';
  const [limit, setLimit] = useState(limitFormula);
  const [addButtonClassName, setbuttonClassName] = useState(`movies-card-list__add-button ${limit >= movies.length && 'movies-card-list__add-button_non-active'}`);

  useEffect(() => {
    const handleResize = (event) => {
      setTimeout(() => setLimit(window.innerWidth < 474 ? 5 : window.innerWidth < 1024 ? 8 : 16), 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    setbuttonClassName(`movies-card-list__add-button ${limit >= movies.length && 'movies-card-list__add-button_non-active'}`);
  }, [movies, limit]);

  function showMoreDocuments() {
    setLimit(limit + limitFormula);
  }

  return (
    <main className="movies-card-list">
      <div className="movies-card-list__list">
        {movies.slice(0, limit).map((movie) => (
          <MoviesCard
            key={movie.id}
            name={movie.nameRU}
            link={movie.trailerLink}
            image={movie.image.url}
            // likes={movie.likes}
            duration={movie.duration}
            // cardOwner={movie.cardOwner}
            type={cardType}
          />
        ))}
      </div>
      <p className={noFoundMessageName}>Фильмы по данному запросу отсутствуют</p>
      <button className={addButtonClassName} type="button" aria-label="Меню" onClick={showMoreDocuments}>Ещё</button>
    </main>
  );
  //   }
  //   const cardType = 'SavedMovieCard';
  //   return (
  //     <main className="movies-card-list">
  //       <div className="movies-card-list__list">
  //         {savedMovies.slice(0, limit).map((movie) => (
  //           <MoviesCard
  //             key={movie.id}
  //             name={movie.nameRU}
  //             link={movie.trailerLink}
  //             image={movie.image.url}
  //             // likes={movie.likes}
  //             duration={movie.duration}
  //             // cardOwner={movie.cardOwner}
  //             type={cardType}
  //           />
  //         ))}
  //       </div>
  //       <p className={noFoundMessageName}>Фильмы по данному запросу отсутствуют</p>
  //       <button className={addButtonSMClassName} type="button" aria-label="Меню" onClick={showMoreDocuments}>Ещё</button>
  //     </main>
  //   );
}

export default MoviesCardList;
