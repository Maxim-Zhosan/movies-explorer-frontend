/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate, Route, Routes } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import LoggedInContext from '../../contexts/LoggedInContext';
import ProtectedRoute from '../ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [registerError, setRegisterError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [profileError, setProfileError] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [savedMovies, loadSavedMovies] = useState([]);
  const [apiMovies, loadMovies] = useState([]);
  const history = useNavigate();

  function handleLogin(data) {
    mainApi.authUser(data)
      .then((res) => {
        if (res) {
          setLoginError(false);
          setCurrentUser(res);
          setIsLoggedIn(true);
          history('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
      });
  }

  function handleRegister(data) {
    mainApi.registerNewUser(data)
      .then((res) => {
        if (res) {
          setRegisterError(false);
          handleLogin(data);
        }
      })
      .catch((err) => {
        console.log(err);
        setRegisterError(true);
      });
  }

  function handleChangeProfileInfo(data) {
    setProfileError(false);
    setProfileSuccess(false);
    mainApi.setUserInfo(data)
      .then((res) => {
        if (res) {
          setProfileSuccess(true);
          setCurrentUser(data);
        }
      })
      .catch((err) => {
        console.log(err);
        setProfileError(true);
      });
  }

  function handleLogout() {
    mainApi.logout()
      .then((res) => {
        if (res) {
          setProfileError(false);
          setIsLoggedIn(false);
          localStorage.removeItem('searchResult');
        }
      })
      .catch((err) => {
        console.log(err);
        setProfileError(true);
      });
  }

  function filterMovies(request, movie, isShortMovie) {
    if (isShortMovie) {
      return movie.duration < 40 && (movie.nameRU.toLowerCase().includes(request.toLowerCase()) || movie.nameEN.toLowerCase().includes(request.toLowerCase()));
    }
    return movie.nameRU.toLowerCase().includes(request.toLowerCase()) || movie.nameEN.toLowerCase().includes(request.toLowerCase());
  }

  function getMoviesFromApi(request, isShortMovie, setPreloaderStatus, setNoFoundMessage) {
    loadMovies([]);
    moviesApi.searchMovies()
      .then((res) => {
        if (res.length === 0) {
          setNoFoundMessage(true);
        }
        const filteredMovies = res.filter((movie) => filterMovies(request, movie, isShortMovie));
        loadMovies(filteredMovies);
        localStorage.setItem('searchResult', JSON.stringify({
          request, isShortMovie,
        }));
        setPreloaderStatus(false);
        console.log(filteredMovies);
      })
      .catch((err) => console.log(err));
  }

  function getMoviesFromSaved(request, isShortMovie) {
    const filteredSavedMovies = savedMovies.filter((movie) => filterMovies(request, movie, isShortMovie));
    loadSavedMovies(filteredSavedMovies);
  }

  function loadSavedMoviesList() {
    loadMovies([]);
    mainApi.getSavedMovies()
      .then((res) => {
        if (res) {
          loadSavedMovies(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onMovieLike(movie, isMovieLiked, setIsMovieLiked) {
    const savedMovie = savedMovies.find((obj) => (obj.movieId === movie.id));
    const savedMovieId = (savedMovie) ? savedMovie._id : null;
    mainApi.addSavedMovie(movie, isMovieLiked, savedMovieId)
      .then((newCard) => {
        if (newCard) {
          loadSavedMoviesList();
          loadMovies(apiMovies);
          setIsMovieLiked(!isMovieLiked);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onDeleteMovie(movie) {
    mainApi.deleteSavedMovie(movie._id)
      .then((res) => {
        if (res) {
          loadSavedMoviesList();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.checkToken()
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res);
          loadSavedMoviesList();
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    mainApi.checkToken()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={isLoggedIn}>
        <div className="page">
          <Routes>
            <Route exact path="/movies" element={<ProtectedRoute component={<Movies savedMovies={savedMovies} onMovieLike={onMovieLike} apiMovies={apiMovies} getMoviesFromApi={getMoviesFromApi} />} />} />
            <Route exact path="/saved-movies" element={<ProtectedRoute component={<SavedMovies savedMovies={savedMovies} loadSavedMoviesList={loadSavedMoviesList} onDeleteMovie={onDeleteMovie} getMoviesFromSaved={getMoviesFromSaved} />} />} />
            <Route exact path="/profile" element={<ProtectedRoute component={<Profile handleChangeProfileInfo={handleChangeProfileInfo} handleLogout={handleLogout} profileError={profileError} setProfileError={setProfileError} profileSuccess={profileSuccess} setProfileSuccess={setProfileSuccess} />} />} />
            <Route exact path="/" element={<Main />} />
            <Route exact path="/signin" element={<Login handleLogin={handleLogin} loginError={loginError} />} />
            <Route exact path="/signup" element={<Register handleRegister={handleRegister} registerError={registerError} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
