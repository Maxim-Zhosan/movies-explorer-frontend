/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies({
  currentUser, savedMovies, onDeleteMovie, getMoviesFromSaved, loadSavedMoviesList,
}) {
  const [isPreloaderActive, setPreloaderStatus] = useState(false);
  const [noFoundMessage, setNoFoundMessage] = useState(false);
  const cardType = 'SavedMovieCard';

  function searchMovies(request, isShortMovie) {
    setPreloaderStatus(true);
    getMoviesFromSaved(request, isShortMovie);
    setPreloaderStatus(false);
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setNoFoundMessage(true);
    }
  }, [savedMovies]);

  useEffect(() => {
    loadSavedMoviesList();
  }, []);

  return (
    <main className="saved-movies">
      <Header />
      <SearchForm searchMovies={searchMovies} />
      <Preloader isActive={isPreloaderActive} />
      <MoviesCardList currentUser={currentUser} movies={savedMovies} savedMovies={savedMovies} cardType={cardType} onDeleteMovie={onDeleteMovie} noFoundMessage={noFoundMessage} />
      <Footer />
    </main>
  );
}

export default SavedMovies;
