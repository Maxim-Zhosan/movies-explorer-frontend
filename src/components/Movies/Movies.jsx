import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies() {
  const [isPreloaderActive, setPreloaderStatus] = React.useState(false);

  return (
    <main className="movies">
      <Header />
      <SearchForm onLoad={setPreloaderStatus} />
      <Preloader isActive={isPreloaderActive} />
      <MoviesCardList />
      <Footer />
    </main>
  );
}

export default Movies;
