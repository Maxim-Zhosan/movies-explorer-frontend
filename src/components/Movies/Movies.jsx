/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  const [isPreloaderActive, setPreloaderStatus] = useState(false);
  const [movies, loadMovies] = useState([]);
  const [noFoundMessageName, setNoFoundMessageName] = React.useState('movies-card-list__no-found');

  function filterMovies(request, movie, isShortMovie) {
    if (isShortMovie) {
      return movie.duration < 40 && (movie.nameRU.toLowerCase().includes(request.toLowerCase()) || movie.nameEN.toLowerCase().includes(request.toLowerCase()));
    }
    return movie.nameRU.toLowerCase().includes(request.toLowerCase()) || movie.nameEN.toLowerCase().includes(request.toLowerCase());
  }

  function searchMovies(request, isShortMovie) {
    setPreloaderStatus(true);
    loadMovies([]);
    setNoFoundMessageName('movies-card-list__no-found');
    moviesApi.searchMovies(movies)
      .then((res) => {
        const filteredMovies = res.filter((movie) => filterMovies(request, movie, isShortMovie));
        loadMovies(filteredMovies);
        setPreloaderStatus(false);
        setNoFoundMessageName(`movies-card-list__no-found ${filteredMovies.length === 0 && 'movies-card-list__no-found_active'}`);
        console.log(filteredMovies);
      })
      .catch((err) => console.log(err));
  }

  return (
    <main className="movies">
      <Header />
      <SearchForm searchMovies={searchMovies} />
      <Preloader isActive={isPreloaderActive} />
      <MoviesCardList movies={movies} noFoundMessageName={noFoundMessageName} />
      <Footer />
    </main>
  );
}

export default Movies;
