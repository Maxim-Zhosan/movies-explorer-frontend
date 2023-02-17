/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({
  onMovieLike, getMoviesFromApi, apiMovies, savedMovies,
}) {
  const [isPreloaderActive, setPreloaderStatus] = useState(false);
  const [noFoundMessage, setNoFoundMessage] = useState(false);
  const cardType = 'MovieCard';

  function searchMovies(request, isShortMovie) {
    setPreloaderStatus(true);
    getMoviesFromApi(request, isShortMovie, setPreloaderStatus, setNoFoundMessage);
  }

  return (
    <main className="movies">
      <Header />
      <SearchForm searchMovies={searchMovies} />
      <Preloader isActive={isPreloaderActive} />
      <MoviesCardList movies={apiMovies} savedMovies={savedMovies} cardType={cardType} onMovieLike={onMovieLike} noFoundMessage={noFoundMessage} />
      <Footer />
    </main>
  );
}

export default Movies;
