/* eslint-disable no-else-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  currentUser, movies, savedMovies, cardType, onMovieLike, onDeleteMovie, noFoundMessage,
}) {
  const noFoundMessageName = `movies-card-list__no-found ${noFoundMessage && 'movies-card-list__no-found_active'}`;
  const limitFormula = window.innerWidth < 474 ? 5 : window.innerWidth < 1024 ? 8 : 16;
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
    setbuttonClassName(`movies-card-list__add-button ${cardType === 'MovieCard' ? limit >= movies.length && 'movies-card-list__add-button_non-active' : limit >= movies.filter((movie) => movie.owner === currentUser._id).length && 'movies-card-list__add-button_non-active'}`);
  }, [movies, limit]);

  function showMoreDocuments() {
    setLimit(limit + limitFormula);
  }

  if (cardType === 'MovieCard') {
    return (
      <main className="movies-card-list">
        <div className="movies-card-list__list">
          {movies.slice(0, limit).map((movie) => (
            <MoviesCard
              id={movie.id}
              name={movie.nameRU}
              link={movie.trailerLink}
              image={movie.image.url}
              duration={movie.duration}
              movie={movie}
              cardType={cardType}
              onMovieLike={onMovieLike}
              onDeleteMovie={onDeleteMovie}
              isLiked={(savedMovies.find((obj) => obj.movieId === movie.id && obj.owner === currentUser._id)) ? true : false}
            />
          ))}
        </div>
        <p className={noFoundMessageName}>Фильмы по данному запросу отсутствуют</p>
        <button className={addButtonClassName} type="button" aria-label="Меню" onClick={showMoreDocuments}>Ещё</button>
      </main>
    );
  } else {
    return (
      <main className="movies-card-list">
        <div className="movies-card-list__list">
          {movies.filter((movie) => movie.owner === currentUser._id).slice(0, limit).map((movie) => (
            <MoviesCard
              id={movie.movieId}
              name={movie.nameRU}
              link={movie.trailerLink}
              image={movie.image}
              duration={movie.duration}
              movie={movie}
              cardType={cardType}
              onMovieLike={onMovieLike}
              onDeleteMovie={onDeleteMovie}
            />
          ))}
        </div>
        <p className={noFoundMessageName}>Фильмы по данному запросу отсутствуют</p>
        <button className={addButtonClassName} type="button" aria-label="Меню" onClick={showMoreDocuments}>Ещё</button>
      </main>
    );
  }
}

export default MoviesCardList;
